// Test Data
datas = [
  {id:1, title:'aaaaaaa'},
  {id:2, title:'bbbbbbb'},
  {id:3, title:'ccccccc'},
  {id:4, title:'ddddddd'},
  {id:5, title:'eeeeeee'},
  {id:6, title:'fffffff'},
  {id:7, title:'ggggggg'},
]

// IDが存在するかチェックする。
const chkExistId = (chkData) => {
  return datas.find((data) => {
    return data.id === chkData.id
  })
}

// IDを生成して返す
const createId = (data) => {
  const lists = datas;
  lists.sort((a, b) => {
    return b.id - a.id
  })
  const id = lists[0].id + 1
  data.id = id;
  return data;
}

module.exports.datas = datas;
module.exports.chkExistId = chkExistId;
module.exports.createId = createId;
