class PageBlocker {
    async init() {
        const data = await chrome.storage.local.get(["blockSitesKey"]);
        this.blockList = data.blockSitesKey ? [...data.blockedSitesKey] : [];

        const currentHost = location.hostname;
        const isBlocked = this.blockList.some(site => {
            return currentHost.includes(site) || site.includes(currentHost);
        });

        if(isBlocked) {
            document.documentElement.innerHTML = "";

            // display block message

            const blockDiv = document.createElement(`div`);
            blockDiv.style.cssText = `
            display: flex;
            justify-content: center;
            align-item: center;
            height: 100vh;
            background: black;
            color-align: center;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
            `;

            blockDiv.innerHTML = `
            <div>
                <h1 style="font-size 48px; margin-bottom: 20px;"> Site Blocked</h1>
                <p style="font-size 24px opacity: 0.9; ">This site has been blocked by the productivity extention!</p>
                <p style="font-size: 16px; margin: 30px; opacity: 0.7;">Stay focused on what really matter!</p>
            </div>
            `;

            document.documentElement.appendChild(blockDiv);
        }
    }
}