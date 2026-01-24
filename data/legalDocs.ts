
export interface LegalDocSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  slug: string;
  title: {
    en: string;
    zh: string;
  };
  effectiveDate: {
    en: string;
    zh: string;
  };
  content: {
    en: LegalDocSection[];
    zh: LegalDocSection[];
  };
}

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: 'privacy',
    title: {
      en: 'Privacy Policy',
      zh: '隐私政策'
    },
    effectiveDate: {
      en: 'Effective date: Jan 15, 2026',
      zh: '版本日期：2026 年 01 月 15 日'
    },
    content: {
      en: [
        {
          heading: "Introduction",
          body: [
            "Tezign (Shanghai) Information Technology Co., Ltd. (hereinafter referred to as \"we\") has always been committed to protecting the privacy of users. In accordance with applicable laws and regulations, we have formulated this \"Tezign Website Privacy Policy\" (\"this Privacy Policy\") to explain how we collect, use, share, transfer, and disclose your information when you use our products and/or services, as well as the ways we provide for you to access, update, delete, and protect this information.",
            "Please note that this Privacy Policy only applies to products and/or services provided by Tezign to you, and does not apply to products and/or services provided by third parties. Services provided by third parties are subject to their own service terms and privacy policies.",
            "We hope you carefully read and confirm that you have fully understood the contents of this Privacy Policy before accessing our services. Using our products and/or services implies that you agree to the contents of this Privacy Policy (including updated versions).",
            "If you have any questions about this Privacy Policy, you can contact us by sending an email to support@tezign.com. If you do not accept the terms of this Privacy Policy, please stop accessing our products and/or services immediately."
          ]
        },
        {
          heading: "I. How We Collect and Use Your Personal Information",
          body: [
            "Personal information refers to various information recorded electronically or in other ways that can identify a specific natural person alone or in combination with other information. Personal sensitive information refers to personal information that, once leaked, illegally provided, or misused, may endanger personal and property safety, and easily lead to damage to personal reputation, physical and mental health, or discriminatory treatment.",
            "The personal information involved in this Privacy Policy includes:",
            "• Basic personal information: Name, phone number, work email, company name, position, location;",
            "• Personal web surfing records: Web browsing records;",
            "We will collect and use your personal information for the following purposes:",
            "1. Email: Used for registration, login, email subscription, and news push.",
            "2. Name, mobile phone number, position, company name, country/region: Used for product/service consultation response and demand docking.",
            "(I) Situations where you must authorize us to collect and use your personal information",
            "Our products and/or services include some core functions. We may collect, store, and use the following information related to you to achieve these functions. If you do not provide relevant information, you will not be able to become our registered user and enjoy our core functions, but it will not affect your use of browsing services as a visitor. These functions include:",
            "1. Register as our user: You need to register and log in on our platform. You can click [Register/Login] in the upper right corner. You can choose email registration or become our user via SSO. (1) If you choose email login/registration, you need to provide at least your own email account. We will verify whether your email is valid by sending an email to the provided account. (2) You should set and properly keep your login password.",
            "2. Consultation response: If you have any questions about our products/services or seek any help or cooperation, our [Tezign Intelligent Assistant] will provide timely assistance. To facilitate contact with you, you need to provide your name, company name, position, and other relevant information according to the form requirements of the [Contact Interface]. The foregoing information is only used to provide you with product/service consultation response and demand docking, and we will not use it for other purposes unrelated to the foregoing.",
            "(II) You are fully aware that according to laws and regulations, we may collect and use personal information without your authorization and consent in the following situations:",
            "1. Related to our fulfillment of obligations stipulated by laws and regulations;",
            "2. Directly related to national security and national defense security;",
            "3. Directly related to public safety, public health, and major public interests;",
            "4. Directly related to criminal investigation, prosecution, trial, and execution of judgments;",
            "5. Difficult to obtain consent from the person concerned for the purpose of safeguarding the life, property, and other major legitimate rights and interests of the personal information subject or other individuals;",
            "6. Personal information disclosed to the public by the personal information subject;",
            "7. Necessary for signing and performing contracts according to your requirements;",
            "8. Collecting personal information from legally publicly disclosed information, such as legal news reports, government information disclosure, etc.;",
            "9. Necessary for maintaining the safe and stable operation of the provided products and/or services, such as discovering and disposing of product and/or service failures;",
            "10. Necessary for legal news reporting;",
            "11. Necessary for academic research institutions to carry out statistical or academic research based on public interests, and when providing academic research or description results externally, de-identifying the personal information contained in the results;",
            "12. Other circumstances stipulated by laws and regulations.",
            "(III) Rules for the use of your personal information",
            "1. We will use the collected personal information in accordance with the agreement of this Privacy Policy and to realize our product and/or service functions.",
            "2. After collecting your personal information, we will import your information into our backend database through technical means. We have the right to analyze the user database and make non-commercial use of it.",
            "3. Please note that all personal information you provide when using our products and/or services will continue to be authorized for our use during your use of our products and/or services unless you delete it or refuse our collection through system settings. When you cancel your account, we will stop using and delete or anonymize your personal information.",
            "4. When we want to use your personal information for other purposes not specified in this policy, or use information collected for a specific purpose for other purposes, we will inform you in advance and seek your consent."
          ]
        },
        {
          heading: "II. How We Use Cookies",
          body: [
            "To ensure the normal operation of the website, for you to have a easier access experience, and to recommend content that you may be interested in, we will store local storage (collectively referred to as 'Cookies') containing identifiers, site names, and some numbers and characters on your computer or mobile device.",
            "With the help of Cookies, the website can store your preferences or data. We will not use Cookies for any purpose other than those stated in this Privacy Policy. You can manage or delete Cookies according to your preferences. You can clear all Cookies saved on your computer. Most web browsers will automatically accept Cookies, but you can usually modify your browser settings to reject Cookies according to your needs; in addition, you can also clear all saved Cookies, but if you do so, you may need to change user settings every time you visit the Tezign website, and the corresponding information you recorded previously will also be deleted."
          ]
        },
        {
          heading: "III. How We Share, Transfer, and Publicly Disclose Your Personal Information",
          body: [
            "(I) Sharing",
            "We will not share your personal information with companies, organizations, and individuals other than Tezign and Tezign affiliates, except in the following cases:",
            "1. Sharing with explicit consent or authorization: obtaining your explicit consent or authorization, including consent or authorization made by you based on this Privacy Policy and other agreements or rules on the Tezign platform.",
            "2. Sharing under statutory circumstances: provision as required by applicable laws and regulations, legal procedures, mandatory administrative or judicial requirements.",
            "3. Handling disputes or controversies between you and others upon your request.",
            "4. We may share your personal information with our affiliates. However, we will only share necessary personal information and are bound by the purposes stated in this Privacy Policy. If our affiliates want to change the purpose of processing personal information, they will seek your authorization and consent again.",
            "5. Sharing with counterparties to achieve transaction purposes: We will share your information according to the agreement signed between you and the counterparty to achieve transaction purposes. We will only share your information for legitimate, proper, necessary, specific, and clear purposes, and the counterparty can only access the information involved in the transaction agreement between you and the counterparty.",
            "6. Sharing with partners such as suppliers and service providers: We will entrust partners to provide certain services or perform functions on our behalf. Services provided by our partners include but are not limited to: (a) Email registration verification; (b) Data statistical analysis; (c) Technical support. Prior to this, we will agree on the rights and obligations of both parties with them by means not limited to signing agreements. We will only process your information for legitimate, proper, necessary, specific, and clear purposes. Partners can only access information required to perform their duties and cannot use this information for any other purpose.",
            "7. When accepting due diligence according to our reasonable capital market activities (including but not limited to investment and financing, etc.), we will control the disclosure of your information within the minimum necessary scope.",
            "(II) Transfer",
            "We will not transfer your personal information to any company, organization, or individual, except in the following cases:",
            "1. Transfer with explicit consent: After obtaining your explicit consent, we will transfer your personal information to other parties.",
            "2. In cases involving merger, acquisition, asset transfer, or similar transactions, if personal information transfer is involved, we will require the new company or organization holding your personal information to continue to be bound by this Privacy Policy, otherwise, we will require the company or organization to re-seek authorization and consent from you.",
            "3. Provision as required by applicable laws and regulations, legal procedures, mandatory administrative or judicial requirements.",
            "(III) Public Disclosure",
            "We will only publicly disclose your personal information under the following circumstances and on the premise of taking safety protection measures complying with industry standards:",
            "1. Disclose your designated personal information under the disclosure method explicitly agreed by you according to your needs.",
            "2. In cases where it is necessary to provide your personal information according to the requirements of laws, regulations, mandatory administrative law enforcement, or judicial requirements, we may publicly disclose your personal information based on the required personal information type and disclosure method. Under the premise of complying with laws and regulations, when we receive the above request for information disclosure, we will require the issuance of corresponding legal documents, such as subpoenas or investigation letters. We will carefully review all requests to ensure that they have a legal basis and are limited to data that law enforcement agencies have legitimate rights to obtain for specific investigation purposes."
          ]
        },
        {
          heading: "IV. How We Protect and Store Your Personal Information",
          body: [
            "(I) Technologies and Measures We Protect Your Personal Information",
            "1. We have obtained the Level 3 Certification of Network Security Level Protection, ISO/IEC 27001 Information Security Management System, and ISO/IEC 27017 Cloud Service Security Management System. ISO/IEC 27001 and ISO/IEC 27017 are widely adopted global security standards. This certification fully proves that the security management of this service product complies with internationally recognized standards and can provide you with a systematic and continuous method to manage information security to ensure the privacy, integrity, and availability of your own and your data information.",
            "2. We will strive to adopt security protection measures complying with industry standards, including establishing reasonable institutional norms, security technologies, and regularly conducting security vulnerability scans to prevent your personal information from unauthorized access, use, modification, and avoid data damage or loss.",
            "3. Tezign's network services adopt encryption technologies such as transport layer security protocols and provide browsing services through https to ensure the security of user data during transmission.",
            "4. We will only retain your personal information for the period necessary to achieve the purposes stated in this Privacy Policy. After the retention period expires, if you have not authorized otherwise or if there are no related disputes, we will delete your personal information or anonymize it.",
            "5. We only allow employees of Tezign and Tezign affiliates who need to know this information to access personal information, and have set up strict access control and monitoring mechanisms for this purpose. We also require all personnel who may contact your personal information to fulfill corresponding confidentiality obligations. Failure to fulfill these obligations may result in legal liability.",
            "6. The Internet is not an absolutely secure environment, and communication methods with other users such as email, instant messaging, and social software cannot be determined to be completely encrypted. We recommend that you use complex passwords when using such tools and pay attention to protecting your personal information security.",
            "7. When conducting transactions of products and/or services with third parties through the Tezign website, you will inevitably disclose your personal information, such as contact information or email address, to the counterparty or potential counterparty. Please properly protect your personal information and only provide it to others when necessary.",
            "8. After the unfortunate occurrence of a personal information security incident, we will promptly inform you in accordance with the requirements of laws and regulations: the basic situation and possible impact of the security incident, the disposal measures we have taken or will take, suggestions for you to prevent and reduce risks independently, remedial measures for you, etc. We will also promptly inform you of the relevant situation of the incident by email, letter, telephone, SMS notification, etc. When it is difficult to inform the personal information subject one by one, we will take a reasonable and effective way to issue an announcement. At the same time, we will also proactively report the disposal of personal information security incidents according to the requirements of regulatory authorities.",
            "9. If you have any questions about our personal information protection, you can contact us through the contact information agreed at the bottom of this Privacy Policy. If you find that your personal information has been leaked, especially if your account has been leaked, please contact us immediately through the contact information agreed in [How to Contact Us] at the bottom of this Privacy Policy so that we can take corresponding measures.",
            "(II) Storage of Your Personal Information",
            "1. Personal information collected and generated during our operations in the People's Republic of China is stored in China.",
            "2. If we terminate our service or operation, we will notify you at least thirty days in advance and delete or anonymize your personal information after terminating the service or operation, except in the following cases: (1) Complying with the requirements of laws and regulations regarding information retention (for example: The \"Cybersecurity Law\" stipulates: adopt technical measures to monitor and record network operation status and network security incidents, and retain relevant network logs for no less than six months as required); (2) Reasonable extension needed for financial, audit, dispute resolution, and other purposes."
          ]
        },
        {
          heading: "V. How You Manage Your Personal Information",
          body: [
            "Tezign attaches great importance to your concern for personal information and does its best to protect your rights to access, correct, delete, and withdraw consent for your personal information, so that you have full ability to safeguard your privacy and security. Your rights include:",
            "1. Access and correct your personal information",
            "Except as provided by laws and regulations, you have the right to access and correct your personal information at any time [Upper right corner personal avatar Account Settings], specifically including: (1) Your personal information: avatar, name, position, company, location; (2) Choose topics you are interested in and customize your experience based on your interests; (3) If you need to access or correct other personal information generated during your use of our products and/or services, please feel free to contact us. We will respond to your request in the manner and within the time limit set out in this Privacy Policy.",
            "2. Delete your personal information",
            "In the following situations, you can make a request to us to delete personal information: (1) If our handling of personal information violates laws and regulations; (2) If we collect and use your personal information without your consent; (3) If our handling of personal information violates our agreement with you; (4) If we terminate services and operations.",
            "3. Cancellation",
            "You can send us an application to cancel your account by emailing support@tezign.com or contacting us through online customer service. After you successfully apply to cancel your Tezign account, we will complete the review of your account cancellation within 48 hours of your application. For details on how to cancel and the conditions you should meet, please refer to the \"Tezign Account Cancellation Instructions\". After you cancel your account, we will stop providing you with products and/or services, and according to your request, unless otherwise provided by laws and regulations, we will delete or anonymize your personal information.",
            "4. Responding to your request",
            "If you cannot access, correct, or delete your personal information through the above methods, or if you need to access, correct, or delete other personal information generated during your use of our products and/or services, or if you believe that Tezign has violated any laws and regulations or agreements with you regarding the collection or use of personal information, you can send an email to [support@tezign.com] or contact us through online customer service. We will respond within 48 hours after receiving your feedback and handle your request within 15 days.",
            "In the following situations, according to legal and regulatory requirements, we will not be able to respond to your request: (1) Related to national security and national defense security; (2) Related to public safety, public health, and major public interests; (3) Related to criminal investigation, prosecution, and trial; (4) There is sufficient evidence to show that you have subjective malice or abuse of rights; (5) Responding to your request will cause serious damage to the legitimate rights and interests of you or other individuals or organizations; (6) Involving trade secrets."
          ]
        },
        {
          heading: "VI. Protection of Minors' Personal Information",
          body: [
            "1. Tezign attaches great importance to the protection of minors' personal information. When using our products and/or services, we presume that you have the corresponding capacity for civil conduct. If you are a minor under the age of 18, you should obtain written consent from your parent or legal guardian before using our products and/or services. Tezign protects minors' personal information in accordance with relevant national laws and regulations.",
            "2. For the collection of minors' personal information with the consent of parents or legal guardians, we will only use, share, transfer, or disclose this information when permitted by law, explicitly consented to by parents or guardians, or necessary to protect minors.",
            "3. If we find that a minor has registered and used our products and/or services without obtaining the consent of their parents or legal guardians, we will temporarily freeze the account, and the products and/or services will not be available at that time. At the same time, we will try to contact the guardian and try to delete the minor's personal information as soon as possible."
          ]
        },
        {
          heading: "VII. How This Policy is Updated",
          body: [
            "To provide you with better services and with the development of Tezign's business, this Privacy Policy will be updated accordingly. However, without your explicit consent, we will not reduce the rights you should enjoy under this Privacy Policy. We will issue updated versions on the Tezign website and remind you of the update of relevant content through website announcements or other appropriate means before they take effect. Please also visit Tezign to keep abreast of the latest Privacy Policy. If you click or check to agree to accept the updated privacy policy, or continue to use our products and/or services, it means that you agree to accept the content of the revised Privacy Policy."
          ]
        },
        {
          heading: "VIII. How to Contact Us",
          body: [
            "1. If you have any questions, comments, or suggestions about this Privacy Policy or your personal information, please feel free to contact us. Contact email: support@tezign.com",
            "2. After receiving your feedback, we will handle it within a reasonable time limit in accordance with laws and regulations and this Privacy Policy."
          ]
        },
        {
          heading: "Appendix: \"Tezign Account Cancellation Instructions\"",
          body: [
            "When you apply for the cancellation process, you should carefully read the \"Tezign Account Cancellation Instructions\" (hereinafter referred to as \"Cancellation Instructions\").",
            "【Special Reminder】When you fill in the information according to the prompts on the cancellation page, read and agree to these \"Cancellation Instructions\" and relevant terms and conditions, and complete the entire cancellation procedure, it means that you have fully read, understood, and accepted all the contents of these \"Cancellation Instructions\". During the process of reading these \"Cancellation Instructions\", if you do not agree to any relevant terms and conditions, please stop the account cancellation procedure immediately.",
            "We kindly remind you that your act of canceling the account will bring many inconveniences to your after-sales service, and after cancellation, we will remove your personal information in our background system or anonymize it. You know and understand that according to relevant laws and regulations, relevant transaction records must be kept in the Tezign background for 3 years or even longer.",
            "1. If you still insist on canceling your account, your account must meet the following conditions at the same time: (1) There are no unfinished service consultations in the account; (2) The account has no disputes, including complaints or being complained about; (3) The account has released authorization login or binding relationships with other websites and other APPs; (4) The account does not have any illegal or breaching behaviors.",
            "2. Once a Tezign account is canceled, it cannot be recovered. Please back up all information and data related to the Tezign account by yourself before operation. Please keep the transaction record data of the service.",
            "3. Canceling the Tezign account, you will no longer be able to use this Tezign account, nor will you be able to retrieve any content or information in and related to the account, including: (1) You will not be able to log in and use this Tezign account; (2) Personal data and historical information of this Tezign account (including nickname, avatar, project consultation records, etc.) cannot be retrieved; (3) You understand and agree that Tezign cannot assist you in restoring the aforementioned services. Before submitting the cancellation application, please be sure to understand other relevant account information you need to unbind.",
            "4. Canceling this Tezign account does not mean that the behaviors and related responsibilities before the cancellation of this Tezign account are exempted or mitigated."
          ]
        }
      ],
      zh: [
        {
          heading: "引言",
          body: [
            "特赞（上海）信息科技有限公司（以下简称“我们”）一直致力于保护用户的隐私信息。根据《中华人民共和国民法典》、《中华人民共和国个人信息保护法》、《中华人民共和国网络安全法》、《中华人民共和国数据安全法》、GB/T35273《个人信息安全规范》以及其他相关的法律法规及行业标准和规范，我们制定了《特赞官网隐私政策》（“本隐私政策”）向您说明我们在您使用我们的产品和/或服务时我们将如何收集、使用、共享、转让、披露这些信息，以及我们为您提供的访问、更新、删除和保护这些信息的方式。",
            "需要特别说明的是，本隐私政策仅适用于特赞为您提供的产品和/或服务，不适用于其他第三方向您提供的产品和/或服务，第三方向您提供的服务适用其向您另行说明的服务条款及隐私政策（而非本隐私政策）。请您妥善保护自己的个人信息，仅在必要的情况下向第三方提供。",
            "本隐私政策与您所使用的特赞的产品和/或服务以及该服务所包括的各种业务功能息息相关，希望您在访问前仔细阅读并确认您已经充分理解本隐私政策所写明的内容，并让您可以按照本隐私政策的指引做出您认为适当的选择。您使用或在我们更新本隐私政策后（我们会及时提示您更新的情况）继续使用我们的产品和/或服务，即意味着您同意本隐私政策(含更新版本)内容，并且同意我们按照本隐私政策收集、使用、保存和共享您的相关信息。",
            "如对本隐私政策或相关事宜有任何问题，您可通过发送电子邮件至我们的邮箱 support@tezign.com 或直接与我们的在线客服取得联系。如果您不接受本隐私政策条款的内容，请立即停止访问我们的产品和/或服务。"
          ]
        },
        {
          heading: "一、我们如何收集和使用您的个人信息",
          body: [
            "个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。个人敏感信息是指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息。",
            "本隐私政策中涉及的个人信息包括：",
            "• 个人基本资料：个人姓名、电话号码、工作邮箱、公司名称、职位、所在地；",
            "• 个人上网记录：网页浏览记录；",
            "我们会出于以下目的，收集和使用您的个人信息：",
            "1. 邮箱：用于注册、登录、邮件订阅、资讯推送。",
            "2. 姓名、手机号、职位、公司名称、国家/地区：用于产品/服务咨询响应、需求对接。",
            "（一）您须授权我们收集和使用您个人信息的情形",
            "我们的产品和/或服务包括一些核心功能，这些功能包含了实现成为我们用户所必须的功能。我们可能会收集、保存和使用下列与您有关的信息才能实现下述这些功能。如果您不提供相关信息，您将无法成为我们的注册用户，享受我们的核心功能，但不影响您以游客身份使用浏览服务。这些功能包括：",
            "1．注册成为我们的用户：首先您需要在我们的平台上进行注册登录。您可以在平台右上角点击【注册/登录】。您可以选择邮箱注册或者是通过 SSO 单点登陆的方式成为我们的用户。（1）您选择邮箱登录/注册，需要至少向我们提供您准备注册使用的您本人的邮箱账号，我们将通过向您提供的邮箱账号发送邮件的方式来验证您的电子邮箱是否有效。（2）您应当设置并妥善保管您的登陆密码。",
            "2. 咨询响应：如您针对我们的产品/服务有任何疑问或要寻求任何帮助或有任何合作意向的，我们的【特赞智能助手】会及时为您提供帮助。为便于与您联系，您需要按照【联系界面】的表单要求提供您的姓名、公司名称、职位等相关信息，前述信息仅用于向您提供产品/服务咨询响应、需求对接、我们不会用于与前述目的无关的其他用途。",
            "（二）您充分知晓，根据法律法规、国家标准规定，以下情形中，我们可能会依法收集、使用个人信息而无需征得您的授权同意：",
            "1. 与我们履行法律法规规定的义务相关的；",
            "2. 与国家安全、国防安全直接相关的；",
            "3. 与公共安全、公共卫生、重大公共利益直接相关的；",
            "4. 与刑事侦查、起诉、审判和判决执行等直接相关的；",
            "5. 出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；",
            "6. 所收集的个人信息是个人信息主体自行向社会公众公开的；",
            "7. 根据您的要求签订和履行合同所必需的；",
            "8. 从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；",
            "9. 维护所提供的产品与/或服务的安全稳定运行所必需的，例如发现、处置产品和/或服务的故障；",
            "10. 为开展合法的新闻报道所必需的；",
            "11. 学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；",
            "12. 法律法规规定的其他情形。",
            "（三）您个人信息使用的规则",
            "1. 我们会根据本隐私政策的约定并为实现我们的产品和/或服务功能对所收集的个人信息进行使用。",
            "2. 在收集您的个人信息后，我们将通过技术手段将您的信息导入我们的后台数据库。我们有权对用户数据库进行分析并予以非商业化的利用。",
            "3. 请您注意，您在使用我们的产品和/或服务时所提供的所有个人信息，除非您删除或通过系统设置拒绝我们收集，否则将在您使用我们的产品和/或服务期间持续授权我们使用。在您注销账号时，我们将停止使用并删除或匿名化您的个人信息。",
            "4. 当我们要将您的个人信息用于本政策未载明的其它用途时，或基于特定目的收集而来的信息用于其他目的时，会提前向您告知并事先征求您的同意。"
          ]
        },
        {
          heading: "二、我们如何使用 Cookie",
          body: [
            "为确保网站正常运转、为你获得更轻松的访问体验、向你推荐你可能感兴趣的内容，我们会在你的计算机或移动设备上存储名 Cookie、Flash Cookie 或浏览器或关联应用程序提供的其他通常包含标识符、站点名称以及一些号码和字符的本地存储（统称“Cookie”）。",
            "借助于 Cookie，网站能够存储你的偏好或数据。我们不会将 Cookies 用于本隐私政策所述目的之外的任何用途。您可根据自己的偏好管理或删除 Cookies 。您可以清除计算机上保存的所有 Cookies，大部分网络浏览器会自动接受 Cookies，但您通常可根据自己的需要来修改浏览器的设置以拒绝 Cookies；另外，您也可以清除已保存的所有 Cookies，但如果您这么做，您可能需要在每一次访问特赞网站时亲自更改用户设置，而且您之前所记录的相应信息也均会被删除。"
          ]
        },
        {
          heading: "三、我们如何共享、转让、公开披露您的个人信息",
          body: [
            "（一）共享",
            "我们不会与特赞以及特赞关联方以外的公司、组织和个人共享您的个人信息，但以下情况除外：",
            "1. 获得您明确同意或授权的共享，包括您基于本隐私政策作出的同意或授权以及您于特赞平台其他协议或规则中做出的同意或授权。",
            "2. 法定情形下的共享：根据适用的法律法规、法律程序的要求、强制性的行政或司法要求所必须的情况下进行提供。",
            "3. 应您需求为您处理您与他人的纠纷或争议。",
            "4. 我们可能会将您的个人信息与我们的关联方共享。（关联方是一方控制共同控制另一方或对另一方施加重大影响,以及两方或两方以上同受一控制、共同控制或重大影响的,构成关联方）但我们只会共享必要的个人信息，且受本隐私政策中所声明目的的约束。我们的关联方如要改变个人信息的处理目的，将再次征求您的授权同意。",
            "5. 与达成交易目的的相对方共享：我们会根据您和达成交易目的的相对方签订的协议共享您的信息，我们仅会出于合法、正当、必要、特定、明确的目的共享你的信息，相对方只能接触到您与相对方之间的交易协议所涉及的信息。",
            "6. 与供应商、服务提供商等合作伙伴共享：我们会委托合作伙伴为你提供某些服务或代表我们履行职能。我们合作伙伴提供的服务包括但不限于：(a)邮箱注册验证；（b）数据统计分析；（c）技术支持。在此之前，我们会和他们通过不限于签订协议的方式约定双方的权利和义务。我们仅会出于合法、正当、必要、特定、明确的目的处理你的信息，合作伙伴只能接触到为其履行职责所需信息，且不能将此信息用于任何其他目的。",
            "7. 根据我们合理的资本市场活动（包括但不限于投融资等）接受尽职调查时，我们会控制在最小必要范围内披露您的信息。",
            "（二）转让",
            "我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：",
            "1. 在获取明确同意的情况下转让，获得您明确同意后，我们会向其他方转让您的个人信息。",
            "2. 在涉及我们发生合并、收购、资产转让或类似的交易时，如涉及到个人信息转让，我们会要求新的持有您个人信息的公司、组织继续受本隐私政策的约束，否则,我们将要求该公司、组织重新向您征求授权同意。",
            "3. 根据适用的法律法规、法律程序的要求，强制性的行政或司法要求所必须的情况进行提供。",
            "（三）公开披露",
            "我们仅会在以下情况下，且采取符合行业标准的安全防护措施的前提下，才会公开披露您的个人信息：",
            "1. 根据您的需求，在您明确同意的披露方式下披露您所指定的个人信息。",
            "2. 根据法律、法规的要求、强制性的行政执法或司法要求所必须提供您个人信息的情况下，我们可能会依据所要求的个人信息类型和披露方式公开披露您的个人信息。在符合法律法规的前提下，当我们收到上述披露信息的请求时，我们会要求必须出具与之相应的法律文件，如传票或调查函。我们对所有的请求都将进行慎重的审查，以确保其具备合法依据，且仅限于执法部门因特定调查目的且有合法权利获取的数据。"
          ]
        },
        {
          heading: "四、我们如何保护和保存您的个人信息",
          body: [
            "（一） 我们保护您个人信息的技术与措施",
            "1. 我们已经取得了网络安全等级保护三级认证、ISO/IEC 27001 信息安全管理体系、ISO/IEC 27017 云服务安全管理体系, ISO/IEC 27001 与 ISO/IEC 27017 是被广泛采用的全球安全标准，该认证充分证明本服务产品安全管理符合国际公认的标准，可以为您提供一个系统的、持续的方法来管理信息安全，以保障自身及您数据信息的私密性、完整性和可用性。",
            "2. 我们会努力采用符合业界标准的安全防护措施，包括建立合理的制度规范、安全技术、定期进行安全漏洞扫描来防止您的个人信息遭到未经授权的访问、使用、修改，避免数据的损坏或丢失。",
            "3. 特赞的网络服务采取了传输层安全协议等加密技术，通过 https 等方式提供浏览服务，确保用户数据在传输过程中的安全。",
            "4. 我们只会在达成本隐私政策所述目的所需的期限内保留您的个人信息，保存期限届满后如您未另行授权或您无相关争议及纠纷，我们将删除您的个人信息或将其进行匿名化处理。",
            "5. 我们仅允许有必要知晓这些信息的特赞及特赞关联方的员工访问个人信息，并为此设置了严格的访问权限控制和监控机制。我们同时要求可能接触到您个人信息的所有人员履行相应的保密义务。如果未能履行这些义务，可能会被追究法律责任。",
            "6. 互联网并非绝对安全的环境，而且电子邮件、即时通讯、社交软件等与其他用户的交流方式无法确定是否完全加密，我们建议您使用此类工具时请使用复杂密码，并注意保护您的个人信息安全。",
            "7. 在通过特赞网站与第三方进行产品和/或服务的交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者电子邮件地址等。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。",
            "8. 在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们同时将及时将事件相关情况以邮件、信函、电话、短信通知的方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。",
            "9. 如果您对我们的个人信息保护有任何疑问，可通过本隐私政策最下方约定的联系方式联系我们。如您发现自己的个人信息泄密，尤其是您的账号发生泄露，请您立即通过本隐私政策最下方【如何联系我们】约定的联系方式联络我们，以便我们采取相应措施。",
            "（二） 您个人信息的保存",
            "1. 我们在中华人民共和国境内运营中收集和产生的个人信息，存储在中国境内。",
            "2. 如果我们终止服务或运营，我们会至少提前三十日向您通知，并在终止服务或运营后对您的个人信息进行删除或匿名化处理，但以下情况除外：（1）遵从法律法规有关信息留存的要求（例如：《网络安全法》规定：采取监测、记录网络运行状态、网络安全事件的技术措施，并按照规定留存相关的网络日志不少于六个月）；（2）出于财务、审计、争议解决等目的需要合理延长"
          ]
        },
        {
          heading: "五、您如何管理您的个人信息",
          body: [
            "特赞非常重视您对个人信息的关注，并尽全力保护您对于您个人信息访问、更正、删除以及撤回同意的权利，以使您拥有充分的能力保障您的隐私和安全。您的权利包括：",
            "1. 访问和更正您的个人信息",
            "除法律法规规定外，您有权随时访问和更正您的个人信息【右上角个人头像 账户设置】，具体包括：（1）您的个人信息：头像、姓名、职位、公司、所在地；（2）选择您感兴趣的话题，根据您的兴趣定制体验；（3）对于您在使用我们的产品和/或服务过程中产生的其他个人信息需要访问或更正，请随时联系我们。我们会根据本隐私政策所列明的方式和期限响应您的请求。",
            "2. 删除您的个人信息",
            "在以下情形中，您可以向我们提出删除个人信息的请求：（1）如果我们处理个人信息的行为违反法律法规；（2）如果我们收集、使用您的个人信息，却未征得您的同意；（3）如果我们处理个人信息的行为违反了与您的约定；（4）如果我们终止服务及运营。",
            "3. 注销",
            "您可以向我们发送注销账户的申请，发送邮件至 support@tezign.com 或通过在线客服与我们联系。当您成功申请注销特赞账户后，我们将在您提出申请的 48 小时内完成对您的账户注销审核。关于您注销的方式以及您应满足的条件，请详见《特赞账户注销须知》。您注销账户后，我们将停止为您提供产品和/或服务，并依据您的要求，除法律法规另有规定外，我们将删除或匿名化您的个人信息。",
            "4. 响应您的请求",
            "如果您无法通过上述方式访问、更正或删除您的个人信息，或您需要访问、更正或删除您在使用我们产品和/或服务时所产生的其他个人信息，或您认为特赞存在任何违反法律法规或与您关于个人信息的收集或使用的约定，您均可以发送电子邮件至【support@tezign.com】或通过在线客服与我们联系。我们将在收到您反馈后的 48 小时内答复，并在 15 天内对您的请求进行处理。",
            "在以下情形中，按照法律法规要求，我们将无法响应您的请求：（1）与国家安全、国防安全有关的；（2）与公共安全、公共卫生、重大公共利益有关的；（3）与犯罪侦查、起诉和审判等有关的；（4）有充分证据表明您存在主观恶意或滥用权利的；（5）响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；（6）涉及商业秘密的。"
          ]
        },
        {
          heading: "六、未成年人的个人信息保护",
          body: [
            "1. 特赞非常重视对未成年人个人信息的保护，在使用我们的产品和/或服务时，我们推定您具有相应的民事行为能力。若您是 18 周岁以下的未成年人，在使用我们的产品和/或服务前，应事先取得您家长或法定监护人的书面同意。特赞根据国家相关法律法规的规定保护未成年人的个人信息。",
            "2. 对于经父母或法定监护人同意而收集未成年人个人信息的情况，我们只会在受到法律允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用共享、转让或披露此信息。",
            "3. 如我们发现未成年人并未实际取得父母或法定监护人同意的情况下注册使用了我们的产品和/或服务，我们会暂时冻结该账号，届时将不能使用我们的产品和/或服务，同时我们会尝试与监护人取得联系，并设法尽快删除未成年人的个人信息。"
          ]
        },
        {
          heading: "七、本政策如何更新",
          body: [
            "为给您提供更好的服务以及随着特赞业务的发展，本隐私政策也会随之更新。但未经您明确同意，我们不会削减您依据本隐私政策所应享有的权利。我们会通过在特赞网站发出更新版本并在生效前通过网站公告或以其他适当方式提醒您相关内容的更新，也请您访问特赞以便及时了解最新的隐私政策。如您通过点击或勾选等同意接受更新后的隐私政策，或您继续使用我们的产品和/或服务的，表示同意接受修订后的本隐私政策的内容。"
          ]
        },
        {
          heading: "八、如何联系我们",
          body: [
            "1. 如您对本隐私政策或您个人信息的相关事宜有任何问题、意见或建议，请随时联系我们。联系邮箱：support@tezign.com",
            "2. 收到您的反馈后，我们将根据法律法规和本隐私政策的规定在合理时限内给予处理。"
          ]
        },
        {
          heading: "附件：《特赞账户注销须知》",
          body: [
            "您在申请注销流程，应当认真阅读《特赞账户注销须知》（以下称“《注销须知》”）。",
            "【特别提示】当您按照注销页面提示填写信息、阅读并同意本《注销须知》及相关条款与条件且完成全部注销程序后，即表示您已充分阅读、理解并接受本《注销须知》的全部内容。阅读本《注销须知》的过程中，如果您不同意相关任何条款和条件约定，请您立即停止账户注销程序。",
            "我们在此善意地提醒您，您注销账户的行为会给您的售后带来诸多不便，且注销后，您的个人信息我们会在我们的后台系统中去除或对其进行匿名化处理。您知晓并理解，根据相关法律规定，相关交易记录须在特赞后台保存 3 年甚至更长的时间。",
            "1. 如果您仍执意注销账户，您的账户需同时满足以下条件：（1）账号内无未完成的服务咨询；（2）账号无任何纠纷，包括投诉举报或被投诉举报；（3）账号已经解除与其他网站、其他 APP 的授权登录或绑定关系；（4）账号不存在任何违法违规或违约行为。",
            "2. 特赞账户一旦被注销将不可恢复，请您在操作之前自行备份特赞账户相关的所有信息和数据。请您保存好服务的交易记录资料。",
            "3. 注销特赞账户，您将无法再使用本特赞账号，也将无法找回您特赞账号中及与账号相关的任何内容或信息，包括：（1）您将无法登录、使用本特赞账号；（2）本特赞账号的个人资料和历史信息（包括昵称、头像、项目咨询记录等）都将无法找回；（3）您理解并同意，特赞无法协助您重新恢复前述服务。请您在提交注销申请前，务必先了解您须解绑的其他相关账户信息。",
            "4. 注销本特赞账户并不代表本特赞账户注销前的行为和相关责任得到豁免或减轻。"
          ]
        }
      ]
    }
  },
  {
    slug: 'terms',
    title: {
      en: 'Terms of Service',
      zh: '服务条款'
    },
    effectiveDate: {
      en: 'Effective date: Jan 15, 2026',
      zh: '版本日期：2026 年 01 月 15 日'
    },
    content: {
      en: [
        {
          heading: "1. Acceptance of Terms",
          body: [
            "By accessing or using Tezign's GEA services, you agree to be bound by these Terms of Service.",
            "These terms constitute a binding agreement between you and Tezign."
          ]
        },
        {
          heading: "2. Service Usage",
          body: [
            "You are granted a non-exclusive, non-transferable right to access and use the platform for your internal business purposes.",
            "You agree not to reverse engineer, scrape, or misuse the platform capabilities."
          ]
        },
        {
          heading: "3. Intellectual Property",
          body: [
            "You retain all rights, title, and interest in and to your Input and Output generated by the services.",
            "Tezign retains all rights to the underlying platform, algorithms, and pre-existing intellectual property."
          ]
        },
        {
          heading: "4. Compliance & Responsibility",
          body: [
            "You are responsible for your use of the generated content and ensuring it complies with applicable laws and regulations.",
            "Tezign provides the tools but does not guarantee the legal suitability of AI-generated outputs for your specific context."
          ]
        },
        {
          heading: "5. Confidentiality",
          body: [
            "Both parties agree to protect the confidentiality of proprietary information exchanged during the service term.",
            "Standard confidentiality obligations apply to all enterprise data processing."
          ]
        },
        {
          heading: "6. Termination",
          body: [
            "Either party may terminate the agreement upon material breach or as specified in the Master Service Agreement.",
            "Upon termination, your access to the platform will cease, and data will be handled per the deletion policy."
          ]
        }
      ],
      zh: [
        {
          heading: "引言",
          body: [
            "欢迎访问特赞官网！",
            "本协议是由特赞（上海）信息科技有限公司（以下简称“特赞”或“我们”）与使用特赞服务/产品的用户（包括但不限于自然人、法人、组织等，以下简称“用户”或“您”）签订。本协议条款有助于您了解我们的服务内容及用户的使用权利、义务等，您应当认真阅读并严格遵守本协议的全部内容（尤其是加粗和/或下划线的内容）。本协议适用于您使用的各项服务、产品和网页的任何后续升级/更新的版本。我们有权在法律范围内不定期修订本协议的内容，如果您不同意本协议的内容，您应当停止访问及使用我们的产品，您一旦勾选[同意用户协议]或使用我们的服务/产品，即视为您同意遵守本协议中的全部内容。",
            "若您未满 18 周岁，请在您的法定监护人陪同下阅读本协议，并在征得您法定监护人同意的前提下使用本服务。"
          ]
        },
        {
          heading: "【AI 特别提醒】",
          body: [
            "1.依据《人工智能生成合成内容标识办法》规定，为了确保 AI 内容的来源可追溯，保障 AI 内容的合规性和透明度，您通过运用本服务所生成的各类内容，无论其形式和用途如何，您应当主动声明并使用我们提供的标识功能进行标识。任何组织和个人不得恶意删除、篡改、伪造、隐匿 AI 内容标识。",
            "2.本服务输出的内容仅供参考，您不得将输出的内容作为专业建议，若涉及对您或者相关方可能会产生重大影响的情形（例如与升学、教育、医疗、财务、投资、保险、法律等有关场景或目的），建议您咨询相关专业人士。本服务的输出内容不应成为您进一步作为或不作为的依据。",
            "3.您根据输出的内容所作出的任何判断或者据此作出的后续相关操作行为，所带来的后果和责任均由您自行承担，包括因对输出的内容的真实性、准确性、可靠性、不侵权或满足特定目的的依赖而产生的风险，以及将输出内容用于商业用途而产生的风险。您应科学理性认识和依法使用生成式人工智能技术。"
          ]
        },
        {
          heading: "一、定义",
          body: [
            "特赞产品：由特赞独立研发的科技型产品矩阵，以人工智能技术为核心驱动力，面向多元领域打造的数字化服务平台。产品体系涵盖 AI 内容创作工具、数字资产管理系统等多个模块，具体详见官网产品列表。",
            "账号：用户在特赞官网申请注册、登录并使用的账号。",
            "用户：访问或使用特赞服务/产品的自然人、法人或其他组织等。",
            "知识产权：在世界范围内存在的部分或所有知识产权以及上述权利指涉的客体，包括：（1）专利、著作权、登记或未登记的商标以及其他对保密信息进行保密的权利；（2）就（1）项下内容进行登记申请的权利，不论上述内容是否已发表、已经登记或能够获得登记或者已在任何法律体系下实际存在。",
            "保密信息：具有商业价值、技术价值或其他价值的信息，其公开或泄露可能给信息拥有者带来损害。保密信息包括但不限于商业秘密、商业计划、技术方案、客户名单、销售数据等。"
          ]
        },
        {
          heading: "二、用户管理",
          body: [
            "（一）用户适格",
            "特赞用户必须是具有完全民事行为能力的自然人，或者是具有合法经营资格的实体组织，并就所提供的服务内容和范围具备法律、法规、行业规章规定的相应资质。行为人因不具备行为能力或缺少相应资质给任何第三方造成损失的，特赞不承担责任；行为人给特赞及相关方造成损失的，还应承担赔偿责任。特赞保留拒绝特定个人或实体在特赞产品中注册的权利。",
            "（二）账号注册登录与使用",
            "1. 用户可以通过电子邮箱注册账号或通过 SSO 授权登录。用户获得账号后可自主设置账号密码，该用户账号和密码由用户自行负责保管，用户应当对以其用户账号进行的所有活动和事件负全部法律责任。若为企业用户的，用户账号项下的全部行为视为企业的行为。",
            "2. 用户可以自主查询或更新账号项下的个人信息。用户应当对其提供个人信息的准确性、真实性、合法性负责，若因信息不真实或更新不及时而引发的相关问题，特赞不负任何责任。若特赞发现用户其账号头像等信息存在违法和不良内容的，特赞有权要求用户在指定期限内予以调整，用户拒绝调整的，特赞有权暂停该账号的访问权限。",
            "3. 若用户发现或知道任何破坏或威胁网站安全的行为，应当在第一时间通知我们并尽可能采取一切措施降低上述侵害（包括保存证据和通知有权机关）。",
            "（三）使用规范",
            "用户在使用特赞服务/产品时，承诺不实施以下行为：",
            "1. 违反国家有关法律、法规和行政规章制度，侵害他人合法权益（包括但不限于著作权、专利权、商标权等知识产权与其他权益）；",
            "2. 使用文本、信息、图片、视频、肖像、音乐、网页等内容未获得充分、必要且有效的合法许可及授权。",
            "3. 未经特赞书面允许，将特赞资料以及在平台上所展示的任何信息以复制、修改、翻译等形式制作衍生作品、传播或公开展示；",
            "4. 利用特赞产品或服务进行非法活动；",
            "5. 未经权利人书面许可，对外披露任何保密信息；",
            "6. 对特赞及特赞相关的任何软件实施任何的反向工程（reverse engineer）、反向编译（decompile）或反汇编（disassemble）的行为，以任何形式进行出租、出借、修改、汇编、二次开发等；",
            "7. 危害计算机信息网络安全的行为，包括但不限于，未经允许，进入计算机信息网络或者使用计算机信息网络资源的；未经允许，对计算机信息网络功能进行删除、修改或者增加的；未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的；故意制作、传播计算机病毒、木马等破坏性程序的；其他危害本软件和/或服务、其他主体安全或网络安全的行为；",
            "8. 实施任何行为使得或可能使得（由特赞依据合理的审查认定）特赞设施承受不合理或不合比例的超大负荷；",
            "9. 干扰、破坏、操控、扰乱、修改、损坏任何设备、软件系统或任何连接或使用特赞或用户账号的网络，或帮助他人实施上述行为；",
            "10. 未经网站或其他有权主体的事先书面同意，基于特赞官网上公布的任何内容（除个人信息外）复制、修改或制作演绎作品及其他侵犯有权主体权益的行为；",
            "11. 干扰或企图干扰网络、网络服务或网络工具的正常运作；",
            "12. 其他违反法律法规及行政规章制度的行为。",
            "（四）处置措施",
            "1. 用户同意并接受，若用户违反本用户协议任何一条，特赞有权视情节严重程度作出处置措施（包括但不限于发送书面警告、删除违法内容、断开违法链接、中止或终止用户对本服务的使用等），涉及违法犯罪行为的，特赞有权向国家相关机关或部门报告，并将与用户有关的身份信息、联系方式等必要信息提供给相关部门配合调查。如用户对特赞的前述处置措施有任何异议的，可向特赞进行申诉。如由于用户违反上述任何承诺给特赞或关联方造成损失的，用户应当承担一切法律责任并向特赞或关联方赔偿全部损失，损失包括但不限于因用户的违法/违约行为而产生的诉讼费、向任何第三方的合理赔偿、政府或司法机关的罚款及罚金、律师费、合理的差旅费等。",
            "2. 特赞可能基于以下原因取消、暂停或限制该用户登陆特赞账号：",
            "1) 若特赞认为用户存在违反本用户协议的行为；",
            "2) 若特赞认为用户侵犯或可能侵犯他人的合法权利，包括但不限于侵犯他人的知识产权；",
            "3) 若特赞认为用户曾经实施或正在实施欺诈或非法活动；",
            "4) 对特赞、用户或第三方的潜在损失进行风险管理；",
            "5) 其他类似的原因。",
            "3. 用户完全了解并同意：",
            "1) 若特赞由于用户违反本用户协议而作出任何处置措施的，包括但不限于关闭用户账户等，用户可能还应当就本用户协议项下规定的内容支付相应费用。若违反本用户协议，用户应当在支付对特赞所有欠款的同时赔偿特赞调查违约行为以及追讨上述欠款的所有损失及合理支出（包括律师费）。上述赔偿不影响特赞要求用户承担基于该协议及其他法律规定下的违约责任。",
            "2) 如果用户违反了本用户协议，特赞可能会要求用户承担违约金且／或提请法律途径弥补超过上述违约金数额的损失，特赞有权从用户特定账户中的资金里扣取全部或部分的金额来弥补由此造成的损失；"
          ]
        },
        {
          heading: "三、所有权及知识产权",
          body: [
            "1. 特赞保留官网及官网项下所有产品（包括但不限于商标、logo、产品界面、内容、数据、技术、算法、代码等）的所有权及知识产权（包括但不限于著作权、商标权、专利权及相关邻接权）。未经特赞书面许可，用户不得对特赞官网及产品实施任何的反向工程（reverse engineer）、反向编译（decompile）或反汇编（disassemble）的行为，不得以任何形式对特赞产品进行出租、出借、修改、汇编、二次开发等。",
            "2. 用户应当保证合法合规使用特赞产品。如果第三方对用户使用内容的知识产权归属提出质疑或投诉，用户有责任出具相关知识产权证明材料，并配合特赞相关投诉处理工作，若经证实，用户上传/输入/输出的内容违法或侵犯第三方合法权利的，特赞有权将此内容从服务器内删除，并保留对用户追究法律责任的权利。如有第三方基于侵犯版权、侵犯第三人之权益或违反中国法律法规或其他适用的法律等原因而向特赞提起索赔、诉讼、仲裁的,用户应赔偿特赞因此承担的费用和损失，并尽合理努力让特赞完全免责。"
          ]
        },
        {
          heading: "四、隐私数据保护",
          body: [
            "1. 特赞努力采用符合业界标准的安全防护措施，包括建立合理的制度规范、安全技术、定期进行安全漏洞扫描来防止用户的信息数据遭到未经授权的访问、使用、修改，避免数据的损坏或丢失。特赞十分重视个人信息的安全性及保密性，特赞将运用各种安全技术和程序建立完善的管理制度来保护用户的个人信息。《特赞官网隐私政策》介绍了用户在使用特赞官网产品过程中，特赞将如何收集、使用、共享、转让、披露用户的个人信息。",
            "2. 用户理解并同意，特赞不会主动公开或向第三方提供用户存储在特赞的内容，除非有下列情况：",
            "1) 实现产品功能所必须的；",
            "2) 经用户明确书面同意或事先授权；",
            "3) 在紧急情况下，为维护公共利益目的需要；",
            "4) 为维护特赞产品的合法权益，例如查找、预防、处理欺诈或安全方面的问题；",
            "5) 有关法律、法规规定或经国家机关依法要求公开；",
            "6) 其他依法需要公开、披露的情况。"
          ]
        },
        {
          heading: "五、不可抗力",
          body: [
            "1. 由于不能预见并且发生的后果不能克服、不可避免的不可抗力，致使一方遭受经济损失或致使特赞产品不能履行或不能完全履行时，一方对另一方的损失不承担责任。遇有上述不可抗力事件的一方，应立即将事件情况书面通知对方，并应于 15 日内提出事件详情及协议不能履行或不能完全履行、或需要延期履行的理由和有效证明文件。",
            "2. 按照事件对协议的履行的影响程度，由双方协商决定是否继续履行本协议或终止协议。不可抗力包括但不限于暴雨、洪水、海啸、风暴潮、风暴、台风、飓风、暴风雪、地震、火山喷发、泥石流、火灾、干旱、爆炸、雷电、瘟疫、停电、网络中断、移动网关出错、电信部门技术调整、电信/电力线路故障、受到计算机病或其他恶意程序或黑客的攻击破坏、战争或武装冲突、恐怖袭击、动乱、骚乱、罢工、政府干预或政府管制、法律政策变化等自然灾害、社会异常事件和国家政府行为，以及根据适用法律或商务惯例被认为是不可抗力的其他客观情况。"
          ]
        },
        {
          heading: "六、免责声明",
          body: [
            "1. 用户理解，特赞有权对特赞产品进行定期或不定期的更新升级，或对提供网络服务的平台或相关的设备进行检修、维护或模拟故障演练，如因此类情况而造成服务在合理时间内的中断，特赞无需为此承担任何责任，特赞会尽合理努力事先进行通告并及时恢复服务的运行。",
            "2. 用户理解，特赞产品可能会受到其他第三方的干扰（包括但不限于网络病毒、服务器攻击、黑客等），一旦发生前述事件，特赞将立即组织开发团队紧急维护，尽最大努力在最短时间内恢复服务运行。",
            "3. 用户理解，任何用户自行输入、上传、编辑、处理的内容（包括但不限于图片、视频、字体、音乐、肖像等），特赞无审核的义务，由此导致的任何责任纠纷，由用户自行承担。用户应积极地采取一切可能采取的措施，以保证特赞免受上述索赔、诉讼的影响。同时用户对特赞因此遭受的直接及间接经济损失负有全部的赔偿责任。",
            "4. 在任何情况下，，特赞均不就因特赞产品所发生的任何直接性、间接性（包括但不限于利润、商誉损失）、后果性、惩戒性、偶然性、特殊性的损害，承担任何责任(即使用户已事先被告知该等损害发生的可能性)。"
          ]
        },
        {
          heading: "七、适用法律及争议解决",
          body: [
            "为本协议目的，本协议的制定、有效性、解释、执行、修改、终止及因上述事项引起的争议受中华人民共和国大陆地区法律管辖。如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向【特赞】所在地的人民法院提起诉讼。"
          ]
        },
        {
          heading: "八、联系方式",
          body: [
            "如用户对本协议或服务的相关事宜有任何问题、意见或建议，请联系随时联系我们。",
            "【联系邮箱：support@tezign.com】收到用户反馈后，我们将及时予以回复，并根据法律法规和本协议的规定在合理时限内给予处理。"
          ]
        },
        {
          heading: "九、其他",
          body: [
            "1. 本协议项下特赞产品对于用户所有的通知均可通过网页进行公告、电子邮件、手机短信或常规的信件传送等方式进行；该等通知于发送之日视为已送达用户。用户应当保证提供的联系方式是准确、有效的，并进行实时更新。因用户提供的电子送达地址有误或不明确，或送达地址变更未及时告知、诉讼管辖法院、仲裁机构，或用户及用户指定的签收人拒绝签收等原因，导致特赞、诉讼管辖法院或仲裁机构发出的通知或相关法律文书未能被实际接收或邮件送达的，电子信息一经发送至用户预留电子邮件地址视为已送达，通知或法律文书被退回之日视为送达之日。用户及用户指定的签收人拒绝签收寄送文件，送达人可采取拍照、录像方式记录送达过程，将文件留置，亦视为送达。如因用户提供资料失实、不详尽或资料更新不及时导致的后果及损失，由用户自行承担。",
            "2. 本协议一经公布即生效，特赞有权随时对本协议的内容进行修改。若用户不同意本协议相关条款所做的修改，有权停止使用特赞产品。如果用户继续使用特赞产品的，则视为接受所有本协议相关条款所做的修改。",
            "3. 若本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。"
          ]
        }
      ]
    }
  },
  {
    slug: 'security',
    title: {
      en: 'Security & Compliance',
      zh: '安全合规'
    },
    effectiveDate: {
      en: 'Effective date: Jan 15, 2026',
      zh: '版本日期：2026 年 01 月 15 日'
    },
    content: {
      en: [
        {
          heading: "Introduction",
          body: [
            "To ensure user data and service security, Tezign has established a full-link security system covering SLA availability, data security, compliance certification, and privacy protection:"
          ]
        },
        {
          heading: "I. SLA & Availability Assurance",
          body: [
            "• Service availability commitment reaches 99.9%, providing 7×24 hour response support, and establishing a 'tiered response mechanism' for business-level faults;",
            "• Service stability is guaranteed through technologies such as global CDN acceleration and disaster recovery clusters, supporting concurrent access for 100,000-level users;",
            "• Deploy global monitoring nodes, combined with alarm schemes and performance monitoring systems, to achieve real-time tracking of service status."
          ]
        },
        {
          heading: "II. Data Security Assurance",
          body: [
            "1. Data Encryption: Implement data encryption based on Aliyun KMS capabilities, support multi-tenant data isolation, and ensure transmission security through TLS/SSL protocols;",
            "2. Data Backup: Adopt full + incremental backup mechanisms, multi-copy distributed storage, and off-site disaster recovery to ensure rapid recovery in case of data center abnormalities;",
            "3. Security Penetration: Conduct penetration testing in conjunction with third-party security platforms, establish a secure development lifecycle process, and avoid vulnerability launches;",
            "4. Internal Risk Control: Follow international standards such as ISO27001, achieve separation of development, operation and maintenance, and DBA permissions, ensure full auditability of operations, and meet compliance traceability requirements."
          ]
        },
        {
          heading: "III. Compliance Certification",
          body: [
            "Tezign has passed multiple authoritative security certifications, covering information security, cloud services, quality management, and other fields:",
            "• SOC2 type 1 Independent Security Audit",
            "• ISO27001 Information Security Management Standard",
            "• ISO27017 Cloud Service Information Security Management System",
            "• Information System Security Level Protection (Level 3)",
            "• ISO9001 Quality Management System",
            "• GB/T29490 Intellectual Property Compliance Management System",
            "• Generative AI Service Compliance (Large Model Filing + Algorithm Filing)"
          ]
        },
        {
          heading: "IV. Privacy Protection",
          body: [
            "1. Data Collection: Principle of Minimum Necessity",
            "Only collect the minimum information required for business development, do not collect user behavior trajectories or sensitive personal content (such as ID numbers, bank card numbers, etc.) through Cookies, burying points, etc.; explicitly inform users of the purpose before collection and obtain user express consent.",
            "2. Data Processing: Strict Compliance Control",
            "Strictly respect users' ownership and control over their data, do not use user data for any unauthorized scenarios; users can apply to access, modify, supplement, or delete their own data at any time through official service channels (including platform backend function entrances, customer service hotlines, compliance consultation emails)."
          ]
        }
      ],
      zh: [
        {
          heading: "引言",
          body: [
            "为保障用户数据与服务安全，特赞建立了覆盖 SLA 可用性、数据安全、合规认证、隐私保护的全链路安全体系："
          ]
        },
        {
          heading: "一、SLA 与可用性保障",
          body: [
            "• 服务可用性承诺达 99.9%，提供 7×24 小时响应支持，针对业务级故障建立“分级响应机制”；",
            "• 通过全球 CDN 加速、容灾集群等技术保障服务稳定，支持 10 万级用户并发访问；",
            "• 部署全球监控节点，结合告警方案与性能监控系统，实现服务状态的实时追踪。"
          ]
        },
        {
          heading: "二、数据安全保障",
          body: [
            "1. 数据加密：基于阿里云 KMS 能力实现数据加密，支持多租户数据隔离，同时通过 TLS/SSL 协议保障传输安全；",
            "2. 数据备份：采用全量 + 增量备份机制，多副本分布式存储，异地容灾确保数据中心异常时可快速恢复；",
            "3. 安全渗透：联合第三方安全平台开展渗透测试，建立安全开发生命周期流程，避免漏洞上线；",
            "4. 内部风控：遵循 ISO27001 等国际标准，实现开发、运维、DBA 权限分离，操作全程可审计，满足合规追溯要求。"
          ]
        },
        {
          heading: "三、合规认证",
          body: [
            "特赞已通过多项权威安全认证，覆盖信息安全、云服务、质量管理等多领域：",
            "• SOC2 type 1 独立安全审计",
            "• ISO27001 信息安全管理标准",
            "• ISO27017 云服务信息安全管理体系",
            "• 信息系统安全等级保护（三级）",
            "• ISO9001 质量管理体系",
            "• GB/T29490 知识产权合规管理体系",
            "• 生成式人工智能服务合规（大模型备案+算法备案）"
          ]
        },
        {
          heading: "四、隐私保护",
          body: [
            "1. 数据收集：最小必要原则",
            "仅收集业务开展所需的最少信息，不通过 Cookie、埋点等方式采集用户行为轨迹或个人敏感内容（如身份证号、银行卡号等）；收集前明确告知用户用途，获取用户明示同意。",
            "2. 数据处理：严格合规管控",
            "严格尊重用户对其数据的所有权与控制权，不将用户数据用于任何未经授权的场景；用户可通过官方服务通道（包括平台后台功能入口、客服专线、合规咨询邮箱）随时申请访问、修改、补充、删除自身数据。"
          ]
        }
      ]
    }
  }
];
