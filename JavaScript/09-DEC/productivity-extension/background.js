// storageService

class storageService {
  // store
  static async save(key, value) {
    await chrome.storage.local.set({ [key]: value });
  }

  // load

  static async load(key) {
    const data = await chrome.storage.local.get([key]);

    return data[key] ?? {};
  }
}
//features

// siteBlocker


class siteBlocker {
  constructor() {
    this.blockList = new Set();
    this.load();
  }

  async load() {
    this.blockList = new Set(storageService.load("blockedSites"));
  }

  async addSites(url) {
    this.blockList.add(url);
    await storageService.save(blockSitesKey, this.blockList);
  }

  async removeSite(url) {
    if (this.blockList.has(url)) this.blockList.delete(url);

    await storageService.save(blockedSitesKey, this.blockList);
  }

  isBlocked(url) {
    for (let subUrl of this.blockList) {
      if (url.includes(subUrl)) return true;
    }

    return false;
  }
}

// UsageTracker

class UsageTracker {
    constructor() {
        this.usage = {};
        init();
    }

    async init() {
        this.usage = await storageService.load(localStorage.Site_USAGE);
        chrome.tabs.onActivate.addListener(tabsInfo => this.track(tabsInfo)); 
    }

    async track(tabsInfo) {
        chrome.tabs.get(tabsInfo.tabID, async (tab)=>{
            if(!tab?.url)
                return;

            let hostName = new URL(tab.url).hostname;
            let currentTime = this.usage[hostName] ?? 0;
            this.usage[hostName] = currentTime + 1;

            await storageService.save(localStorageKeys.SITE_USAGE, this.usage);
        });
    }
}

//pomodoroManager (timer)

class pomodoroManager {
  constructor() {
    this.timeLeft = 0;
  }

  start(minutes) {
    this.timeLeft = minutes * 60;

    chrome.storage.local.set({ promodoroTime: this.timeLeft });

    setInterval(() => {
      this.timeLeft--;

      chrome.storage.local.set({ promodoroTime: this.timeLeft });

      if (this.timeLeft <= 0) {
        this.stop();

        chrome.notification.create({
          type: "basic",
          iconUrl:
            "https://lh3.googleusercontent.com/gg-dl/ABS2GSmIBnJ40VZFxoJLoOxafmPLF_i6z33XKpTyV371LWDtF0HNxHuHDvzu_UOmS9Cv91_EW8Wy5COayOBmkl07EdLNQ9jX7QbHBlswLspgiv-dxzCP9k33gn9xxdlzKoYADse3Eo4YNIXdiXTyV87qo5ikWwZb-x2PC17m2h8jcZSGajtWmw=s1024-rj",
            title: "Pomodoro Complete!",
            message: "Take a break"
        });
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval=null;
    this.timeLeft=0;
  }
}

// business logic
