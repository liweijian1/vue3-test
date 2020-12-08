import {reactive} from 'vue'

export  let state  = reactive({
    count:0
})

export let mutations = {
    addCount(){
        state.count++
    }
}