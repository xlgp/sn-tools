export default () => {
    return {
        title: [{
            required: true,
            message: '请输入标题',
            trigger: 'blur'
        }],
        subTitle: [],
        fieldType: [{
            required: true,
            message: '请选择类型',
            trigger: 'change'
        }],
        fieldName: [{
            required: true,
            message: '请输入名称',
            trigger: 'blur'
        }],
        fieldId: [{
            required: true,
            message: '请输入Key',
            trigger: 'blur'
        }, {
            pattern: /^[a-zA-Z0-9_]+$/,
            message: '字段规则为：数字大小写字母或下划线',
            trigger: 'blur'
        }],
        fieldValue: [],
    }
}