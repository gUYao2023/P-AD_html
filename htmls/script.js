function alertMessage() {
    alert("Please wait for the next update!");
  }
  
// 获取所有标签按钮和内容面板
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

// 为每个标签按钮添加点击事件
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有按钮和面板的激活状态
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // 激活当前按钮和对应的面板
        button.classList.add('active');
        const targetTab = button.getAttribute('data-tab');
        document.getElementById(targetTab).classList.add('active');
    });
});