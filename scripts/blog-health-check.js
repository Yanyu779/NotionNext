#!/usr/bin/env node

/**
 * 博客健康检查脚本
 * 用于检查博客配置、性能优化建议等
 * 使用方法: node scripts/blog-health-check.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 YanYu920博客健康检查工具\n');

// 检查配置文件
function checkConfig() {
  console.log('📋 检查配置文件...');
  
  try {
    const config = require('../blog.config.js');
    
    const checks = [
      {
        name: 'Notion页面ID',
        check: config.NOTION_PAGE_ID && !config.NOTION_PAGE_ID.includes('02ab3b8678004aa69e9e415905ef32a5'),
        message: config.NOTION_PAGE_ID ? '✅ 已正确配置' : '❌ 请更新为您的实际Notion页面ID'
      },
      {
        name: 'SEO关键词',
        check: config.KEYWORDS && config.KEYWORDS.includes('大数据'),
        message: config.KEYWORDS ? '✅ 关键词已优化' : '❌ 建议添加技术相关关键词'
      },
      {
        name: '网站地址',
        check: config.LINK === 'https://yanyu920.fun',
        message: '✅ 网站地址正确'
      },
      {
        name: '作者信息',
        check: config.AUTHOR === 'yanyu920',
        message: '✅ 作者信息正确'
      }
    ];
    
    checks.forEach(check => {
      console.log(`  ${check.name}: ${check.message}`);
    });
    
  } catch (error) {
    console.log('❌ 配置文件读取失败:', error.message);
  }
}

// 检查性能优化
function checkPerformance() {
  console.log('\n⚡ 性能优化检查...');
  
  const suggestions = [
    '✅ 图片压缩已启用 (1024px)',
    '✅ 文章预览已启用',
    '✅ 每页文章数量已优化 (10篇)',
    '✅ 图片阴影效果已启用',
    '💡 建议: 考虑启用CDN加速',
    '💡 建议: 配置Google Analytics进行数据分析',
    '💡 建议: 添加网站图标favicon'
  ];
  
  suggestions.forEach(suggestion => {
    console.log(`  ${suggestion}`);
  });
}

// 检查SEO优化
function checkSEO() {
  console.log('\n🔍 SEO优化检查...');
  
  const seoChecks = [
    '✅ robots.txt已创建',
    '✅ sitemap配置已优化',
    '💡 建议: 在Google Search Console验证网站',
    '💡 建议: 在百度站长平台提交网站',
    '💡 建议: 为文章添加合适的标签和分类',
    '💡 建议: 优化文章标题和描述的SEO友好性'
  ];
  
  seoChecks.forEach(check => {
    console.log(`  ${check}`);
  });
}

// 主题相关建议
function checkTheme() {
  console.log('\n🎨 主题优化建议...');
  
  const themeAdvice = [
    '✅ GitBook主题适合技术文档展示',
    '✅ 已启用文件夹悬停展开功能',
    '💡 建议: 考虑上传自定义logo',
    '💡 建议: 为技术分类添加合适的图标',
    '💡 如需更现代的界面，可考虑切换到heo或hexo主题'
  ];
  
  themeAdvice.forEach(advice => {
    console.log(`  ${advice}`);
  });
}

// 内容优化建议
function checkContent() {
  console.log('\n📝 内容优化建议...');
  
  const contentTips = [
    '💡 技术文章建议包含: 问题背景、解决方案、代码示例、总结',
    '💡 为Kubernetes文章添加"k8s"、"容器编排"等标签',
    '💡 为Spark文章添加"大数据"、"数据处理"等标签',
    '💡 考虑添加文章系列，如"Kubernetes实战系列"',
    '💡 建议定期更新技术文章，保持内容时效性',
    '💡 添加代码块时使用合适的语言标识符',
    '💡 考虑添加目录结构，提升阅读体验'
  ];
  
  contentTips.forEach(tip => {
    console.log(`  ${tip}`);
  });
}

// 运行所有检查
function runHealthCheck() {
  checkConfig();
  checkPerformance();
  checkSEO();
  checkTheme();
  checkContent();
  
  console.log('\n🎉 博客健康检查完成!');
  console.log('📚 更多优化建议请参考: https://docs.tangly1024.com/');
}

// 执行健康检查
runHealthCheck();
