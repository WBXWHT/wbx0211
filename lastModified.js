// 获取当前网页的最后修改时间
function displayLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = `网页最后修改时间: ${lastModified}`;
  }
  
  // 调用函数显示网页最后修改时间
  displayLastModified();
  