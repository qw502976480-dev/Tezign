
export const AUTH_MODAL_ZH = {
  tabs: { signin: '登录', signup: '注册' },
  signin: {
    title: '欢迎回来', 
    sso: '使用 SSO 登录', 
    divider: '或', 
    email_label: '工作邮箱', 
    email_placeholder: 'name@company.com', 
    password_label: '密码', 
    password_placeholder: '输入您的密码', 
    submit: '登录', 
    forgot: '忘记密码？',
    agree_prefix: '我已阅读并同意',
    terms: '《服务条款》',
    and: '与',
    privacy: '《隐私政策》'
  },
  signup: {
    step0: { 
        title: '连接企业级 AI 的\n前沿创新与实践', 
        description: '注册特赞账号，订阅 GEA 智能体的\n最新研究、行业最佳实践与技术演进动态。', 
        sso: '使用 SSO 注册', 
        email: '使用邮箱注册' 
    },
    step1: { 
        title: '用户信息', 
        description: '请完善信息，以便我们为您提供定制化内容。', 
        fields: { name: '姓名', email: '工作邮箱', phone: '手机号', company: '公司名称', role: '角色', role_placeholder: '选择您的角色' }, 
        roles: { 
            marketing: '市场与品牌', 
            creative: '创意与设计', 
            it: 'IT与数字化转型', 
            product: '产品与创新', 
            operations: '运营与战略', 
            executive: '企业管理者', 
            other: '研究员/其他' 
        }, 
        note: '我们将基于您的角色，为您筛选高价值的行业案例与报告。', 
        next: '下一步' 
    },
    step2: { 
        title: '关注领域', 
        description: '您关注哪些业务命题？', 
        options: { 
            updates: 'GEA 系统演进', 
            research: '行业深度研究与白皮书', 
            methods: '最佳实践与方法论', 
            events: '峰会与闭门研讨', 
            exploring: '通用趋势' 
        }, 
        continue: '继续', 
        skip: '跳过' 
    },
    step3: { 
        title: '保持前瞻', 
        description: '订阅「特赞信号」，定期获取关于\n企业级智能体的深度简报与独家洞察。', 
        checkbox: '是的，订阅特赞通讯。', 
        create: '创建账户' 
    },
    step4: { 
        title: '欢迎！', 
        description: '您的账户已成功创建。', 
        note: '请检查您的邮箱以完成验证，开启探索之旅。', 
        home: '返回首页', 
        browse: '浏览行业洞察' 
    }
  }
};
