<style lang="stylus">
@import '../style/global.styl'

.page-index
    height 100%

</style>

<template>
    <div class="page page-index">

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'index',   

    mounted() {
        
    },

    computed: {
        ...mapState({
            topicKey: state => state.topic.key,
            tabName: state => state.tabName
        })
    },

    watch: { 
    },

    methods: {
        ...mapActions({
            setTopic: 'saveTopic',
            setTab: 'saveTab'
        })
    }
};
</script>
