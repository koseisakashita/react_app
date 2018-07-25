const express = require('express');
const router = express.Router();
const test = require('../public/javascripts/data');

// 全てのデータ
router.get('/', (req, res, next) => {
  res.json(data);
});

// データ詳細
router.get('/:id', (req, res, next) => {
  // GETリクエストされたパラメータと合致するデータを抽出する。
  const resData = test.datas.filter((data) => {
    return req.params.id == data.id
  })
  res.json(resData[0]);
});

// データ作成
router.post('/', (req, res, next) => {
  // postされたデータをマージする。
  let data = Object.assign(
    {id: null, title: null},req.body)

  if(data.id === null){
    // POSTされたデータの中にIDがない場合にデータのIDを準備しておく。
    data = test.createId(data);
    test.datas.unshift(data)
  } else {
    const isExist = test.chkExistId(data);
    if(isExist != null){
      res.send('id exist!')
      return
    }
    test.datas.push(data)
  }
  res.json(test.datas)
})

module.exports = router;
