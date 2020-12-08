<template>
<div>
      <h1>{{testText}}</h1>
      <h1>{{testName}}</h1>
      <h1>{{objvalue.age}}</h1>
      <Button @click='testConsole'>日志</Button>
      <Button @click='getInfo'>日志2</Button>
      <Button @click='addCount'>新增</Button>
      <h2>{{count}}</h2>
</div> 
</template>

<script>
import {ref,reactive, toRefs} from 'vue'
import {state,mutations} from './../observable/store'
function getobjValue(){
        console.log(123)
    }
export default {
    name:'Test',
    data(){
        return{
            testText:''
        }
    },
    created(){
        this.testText = 'testVUE3.0'
    },
    setup(){
        let testName = ref('lwj')
        testName.value = 'dss'
        let obj = reactive({
            sex:'',
            age:'12'
        })
        let objvalue = toRefs(obj)
        const getobjValue1 = getobjValue()
        const testConsole = ()=>{console.log(789)}
        return {testName,objvalue,getobjValue1,testConsole}
    
    },
    computed:{
        count(){
            let obj = toRefs(state)
            return obj.count.value
        }
    },
    methods:{
        getInfo(){
            console.log(456)
        },
        addCount:mutations.addCount
    }

}
</script>

<style>

</style>