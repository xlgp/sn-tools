export default () => {
    return {
        app_auth_code: [{
            required: true,
            trigger: "blur",
        }],
        username: [{
            required: true,
            trigger: "blur",
        },
        ],
        passwordText: [{
            required: true,
            trigger: "blur",
        }],
        nickname: [{
            required: true,
            trigger: "blur",
        }],
        openid: [{
            required: true,
            trigger: "blur",
        }],
        secretKey: [{
            required: true,
            trigger: "blur",
        }],
    }
}