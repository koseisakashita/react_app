const express = require('express');
const router = express.Router();
const datas = require('../public/javascripts/data');

// 全てのデータ
router.get('/', (req, res, next) => {
  console.log('get')
  res.json(data);
});

// データ詳細
router.get('/:id', (req, res, next) => {
  // GETリクエストされたパラメータと合致するデータを抽出する。
  const resData = datas.filter((data) => {
    return req.params.id == data.id
  })
  res.json(resData[0]);
});

// データ作成
router.post('/', (req, res, next) => {
  // postされたデータをマージする。
  const data = Object.assign(
    {id: null, title: null},req.body)

  if(data.id === null){
    // POSTされたデータの中にIDがない場合にデータのIDを準備しておく。
    const idLists = datas;
    idLists.sort((a, b) => {
      return b.id - a.id
    })
    const id = idLists[0].id + 1
    data.id = id;
  }
  // データを作成する。
  datas.push(data)
  console.log(datas)
})

module.exports = router;
