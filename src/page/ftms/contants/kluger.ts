import { KLUGER, SeriesType } from "./constans";

/**
 * CROWN KLUGER 皇冠陆放 57 皇冠陆放 皇冠陆放
 */
const seriesId = KLUGER;
let KlugerList: SeriesType[] = [
    { dealerId: '1011W', name: '北京奥嘉丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011C', name: '北京华通丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '10117', name: '北京广丰通田汽车贸易有限公司', city: '北京市' },
    { dealerId: '10113', name: '北京方庄丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '10111', name: '北京三元桥丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011U', name: '北京嘉程澎湃丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011P', name: '北京博丰长久丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011N', name: '北京凯百隆丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011M', name: '北京五方桥丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011L', name: '北京中业丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011K', name: '北京苹果园丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011J', name: '北京东仁天宇丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011H', name: '北京花园桥丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011D', name: '北京运通博裕丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '1011B', name: '北京迎宾中升丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '10118', name: '北京北苑丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '10115', name: '北京金冠兴业丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '10114', name: '北京首汽丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '10112', name: '北京一汽服贸丰田汽车销售服务有限公司', city: '北京市' },
    { dealerId: '4182Z', name: '广州从化广保丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '41896', name: '东莞市天下行丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '418A8', name: '佛山市安佳丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '418D2', name: '广州兆方丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: 'APC03', name: '广州华通丰田汽车服务有限公司', city: '广州市' },
    { dealerId: '418D1', name: '广州中升丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '418AB', name: '佛山西樵庆丰丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '418AA', name: '佛山中裕丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '418A3', name: '佛山利衡丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '418A2', name: '佛山中升丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '418A1', name: '佛山市强劲丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '4189S', name: '东莞凤岗美鑫丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '4189P', name: '东莞望牛墩美东丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '4189M', name: '东莞广利丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '4189L', name: '东莞大朗永佳丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '4189K', name: '东莞石排永佳丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '4189A', name: '东莞市安信丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '41899', name: '东莞市东城丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '41898', name: '东莞市百力恒丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '41897', name: '东莞东美丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '41895', name: '东莞大昌行深业丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '41894', name: '东莞龙华丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '41893', name: '东莞市东部丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '41892', name: '东莞市南城丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '41891', name: '东莞市永佳丰田汽车销售服务有限公司', city: '东莞市' },
    { dealerId: '41853', name: '佛山市南海合诚丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '41852', name: '佛山骏安丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '41851', name: '南海桂城丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '41832', name: '佛山市龙江丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '41831', name: '佛山市顺德合诚丰田汽车销售服务有限公司', city: '佛山市' },
    { dealerId: '4182Y', name: '广州鸿粤誉中丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '4182N', name: '广州芳村永佳丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '4182G', name: '广州永佳丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '4182F', name: '广州骏辉丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '4182E', name: '广州广博丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '4182D', name: '广州南菱丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '4182B', name: '广州新钜丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '41827', name: '广州宗远丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '41826', name: '广州庆丰丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '41824', name: '广州迎宾丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '41823', name: '广州骏佳广保丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '41822', name: '广州沙河丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '41821', name: '广州广保丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '4181G', name: '深圳市光明丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '4181F', name: '深圳市兴业丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '4181E', name: '深圳市大兴观澜丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '4181D', name: '深圳市深业隆华丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '4181C', name: '深圳中升迎宾丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '4181B', name: '深圳市宝安大兴丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '4181A', name: '深圳中升丰田汽车服务有限公司', city: '深圳市' },
    { dealerId: '41819', name: '深圳中升民康丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '41818', name: '深圳骏爵丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '41817', name: '深圳市红彤丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '41814', name: '深圳市深业丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '41813', name: '深圳市华日丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '41812', name: '深圳大升丰田汽车销售服务有限公司', city: '深圳市' },
    { dealerId: '41829', name: '广州市顺协丰田汽车销售服务有限公司', city: '广州市' },
    { dealerId: '52116', name: '成都启阳华通丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '52112', name: '成都中达丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '521L1', name: '崇州鑫嘉庆丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '521K1', name: '都江堰东创丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '5211A', name: '成都锦泰麓山丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '52119', name: '成都通蓉源丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '52118', name: '成都温江中达丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '52117', name: '成都中升丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '52115', name: '成都锦泰丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '52114', name: '成都三和丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '52113', name: '四川中升迎宾丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '52111', name: '安利捷（成都）丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '52110', name: '成都伟嘉丰田汽车销售服务有限公司', city: '成都市' },
    { dealerId: '1021P', name: '天津津城丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '1021N', name: '天津滨海丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '1021C', name: '天津庞大丰雅丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '1021B', name: '天津奥德行津盛丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '1021A', name: '天津奥嘉丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '10219', name: '天津柳林金海丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '10218', name: '天津和裕丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '10217', name: '天津浩物丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '10215', name: '天津华苑丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '10214', name: '天津市中乒丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '10212', name: '天津东联丰田汽车销售服务有限公司', city: '天津市' },
    { dealerId: '10211', name: '天津柳林丰田汽车销售服务有限公司', city: '天津市' },
];

export { seriesId, KlugerList };