const List=[{
    type:'全部',
    num:10,
},{type:'结婚收礼',num:0}]
export default(store=List,action)=>{
    // console.log(action,'action')
    if(action.type=='filter'){
        let newStore=JSON.parse(JSON.stringify(store))
        // console.log(newStore,'new')
        store.filter((item,idx)=>{
            // console.log(item)
            if(item.type.includes(action.val)){
                var arr=[]
                arr.push(item)
                newStore=arr
                console.log(newStore,'arr')

            }
        })
        return newStore
    }
    return store
}