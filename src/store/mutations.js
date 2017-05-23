const TOPIC_KEYS = {
    gongsiyuqing: '581c3bacf11918b4ec7b6d0a',
    yanjiutuandui: '581be5d6f11918493becde4f',
    zigongsi: '581be5a2f11918493becde4e',

    zhongdianmeiti: '581be0ebf11918493becde48',
    jianguanfabu: '581be0c6f11918493becde47',

    ailuming: '58620842f119183c946948b8',
    guoyouzichan: '5861c445f119183c94694850',
    renfuyaojituan: '581be195f11918493becde4d',
    shenglianhe: '5861c446f119183c94694851',
    zhonghangxintuo: '5861c447f119183c94694853',
    gaoke: '5861c449f119183c94694855',
    dangdaikeji: '5861c449f119183c94694856',
    dangdaimingcheng: '58abd7f8f1191889219649b3',
    santesuodao: '58abd7f7f1191889219649b2',

    hangyezixun: '581be110f11918493becde49',

    jingzhenghuatai: '581be14bf11918493becde4b',
    jingzhengguangfa: '581be13af11918493becde4a',
    xingye: '585b80eff119186226314085',
    zheshang: '585b80eff119186226314084',
    zhongyuan: '585b80eef119186226314083',
    huaan: '585b80eef119186226314082',
    guojin: '585b80edf119186226314081',
    changjiang: '585b80edf119186226314080'
};

export default {
    setTopic(state, name) {
        state.topic.name = name;
        state.topic.key = TOPIC_KEYS[name];
    },

    setTabName(state, name) {
        state.tabName = name;
    }
};
