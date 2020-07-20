module.exports = (on, config) => {
    return Object.assign({}, config, {
        baseUrl: "http://localhost:3000", // 测试域名
        fixturesFolder: 'src/test/e2e/fixtures',
        integrationFolder: 'src/test/e2e/specs', // 测试文件文件夹
        screenshotsFolder: 'src/test/e2e/screenshots', // 屏幕快照
        // videoRecording: true,
        videosFolder: 'src/test/e2e/videos', // 录制后的文件夹
        supportFile: 'src/test/e2e/support/index.js',
        viewportHeight: 768, // 测试浏览器视口高度
        viewportWidth: 1366 // 测试浏览器视口宽度
    })
}
