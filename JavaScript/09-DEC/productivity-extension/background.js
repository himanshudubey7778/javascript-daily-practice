// 1. GLOBAL CONSTANTS 
const localStorageKeys = {
    BLOCKED_SITES: "blockedSites",
    SITE_USAGE: "siteUsage"
};

// 2. STORAGE SERVICE
class storageService {
    static async save(key, value) {
        await chrome.storage.local.set({ [key]: value });
    }

    static async load(key) {
        const data = await chrome.storage.local.get([key]);
        return data[key] ?? {}; // Null check
    }
}

// 3. SITE BLOCKER
class siteBlocker {
    constructor() {
        this.blockList = new Set(); // Unique list
        this.load();
    }

    async load() {
        // Data load karke Set mein convert kiya
        const data = await storageService.load(localStorageKeys.BLOCKED_SITES);
        this.blockList = new Set(Array.isArray(data) ? data : []);
    }

    async addSites(url) {
        if (!this.blockList.has(url)) {
            this.blockList.add(url);
            // Array mein convert karke save kiya
            await storageService.save(localStorageKeys.BLOCKED_SITES, [...this.blockList]);
            await this.applyBlocking(); // Turant block rule update karein
        }
    }

    async removeSite(url) {
        if (this.blockList.has(url)) {
            this.blockList.delete(url);
            await storageService.save(localStorageKeys.BLOCKED_SITES, [...this.blockList]);
            await this.applyBlocking(); // Rule update
        }
    }

    isBlocked(url) {
        for (let subUrl of this.blockList) {
            if (url.toLowerCase().includes(subUrl.toLowerCase())) return true;
        }
        return false;
    }

    async applyBlocking() {
        // 1. Purane Rules nikalo
        const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
        const ruleIDTORemove = existingRules.map(rule => rule.id);

        // 2. Naye Rules banao
        const newRules = [...this.blockList].map((site, index) => {
            return {
                id: index + 1,
                priority: 1,
                action: { type: "block" },
                condition: {
                    // Spelling Errors Fixed Here:
                    urlFilter: `*://*.${site}/*`, // urlFliter -> urlFilter
                    resourceTypes: [             // resourceType -> resourceTypes
                        "main_frame",            // amin_frame -> main_frame
                        "sub_frame",
                        "stylesheet",
                        "script",
                        "image",
                        "font",
                        "object",
                        "xmlhttprequest",
                        "ping",
                        "csp_report",
                        "media",
                        "websocket",             // worksocket -> websocket
                        "webtransport",
                        "other"
                    ]
                }
            };
        });

        // 3. Update Rules (Remove Old + Add New)
        await chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: ruleIDTORemove, // Ye line zaroori thi add karna
            addRules: newRules
        });
    }
}

// 4. USAGE TRACKER
class UsageTracker {
    constructor() {
        this.usage = {};
        this.init(); // 'init()' -> 'this.init()' correction
    }

    async init() {
        this.usage = await storageService.load(localStorageKeys.SITE_USAGE);
        // Bind 'this' to keep context
        chrome.tabs.onActivate.addListener((tabsInfo) => this.track(tabsInfo));
    }

    async track(tabsInfo) {
        chrome.tabs.get(tabsInfo.tabId, async (tab) => {
            if (!tab?.url) return;

            // URL se sirf domain name nikala (e.g., google.com)
            try {
                let hostName = new URL(tab.url).hostname;
                let currentTime = this.usage[hostName] ?? 0;
                this.usage[hostName] = currentTime + 1;

                await storageService.save(localStorageKeys.SITE_USAGE, this.usage);
            } catch (e) {
                // Invalid URL handle karne ke liye
                console.log("Invalid URL ignored");
            }
        });
    }
}

// 5. POMODORO MANAGER
class pomodoroManager {
    constructor() {
        this.timeLeft = 0;
        this.interval = null; 
    }

    start(minutes) {
        this.stop(); // Pehle agar kuch chal raha ho toh roko
        this.timeLeft = minutes * 60;

        chrome.storage.local.set({ promodoroTime: this.timeLeft });

        // 'this.interval' 
        this.interval = setInterval(() => {
            this.timeLeft--;

            chrome.storage.local.set({ promodoroTime: this.timeLeft });

            if (this.timeLeft <= 0) {
                this.stop();

                chrome.notifications.create({ // chrome.notification -> chrome.notifications
                    type: "basic",
                    iconUrl: "images/icon.png", // Icon URL thoda safe kar diya
                    title: "Pomodoro Complete!",
                    message: "Take a break"
                });
            }
        }, 1000);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.timeLeft = 0;
        chrome.storage.local.set({ promodoroTime: 0 });
    }
}