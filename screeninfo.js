// 创建一个包含屏幕信息的 data 对象
const screenData = {
    screenWidth: 0,
    screenHeight: 0,
    colorDepth: 0,
    availWidth: 0,
    availHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    updateScreenInfo: function () {
      this.screenWidth = screen.width;
      this.screenHeight = screen.height;
      this.colorDepth = screen.colorDepth;
      this.availWidth = screen.availWidth;
      this.availHeight = screen.availHeight;
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
    formatScreenInfo: function () {
      return `屏幕实际宽度: ${this.screenWidth}px, 屏幕实际高度: ${this.screenHeight}px, ` +
             `浏览器窗口宽度: ${this.windowWidth}px, 浏览器窗口高度: ${this.windowHeight}px`;
    }
  };
  
  // 每秒更新一次屏幕信息并显示
  function updateScreenInfo() {
    screenData.updateScreenInfo();
    document.getElementById('screen-info').textContent = screenData.formatScreenInfo();
  }
  
  // 初次加载时更新一次屏幕信息
  updateScreenInfo();
  
  // 每秒更新屏幕信息
  setInterval(updateScreenInfo, 1000);
  