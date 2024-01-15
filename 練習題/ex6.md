# 說明

## 題目

> 註: 以下所有的使用實作策略，均為使用遠端 api 的 json 格式呼叫。請參考下面的各種 api 使用方式。

1. 使用遠端資料 api，以表格(table)呈現在 js 應用中(利用 Fetch API 或`async-await`語法來實作)

2. 加入一個搜尋框，輸入"姓名"按下按鈕後，可進行篩選呈現(註: 另一種實作是在網頁上用 js 直接過濾)
3. 加入"年紀"選項按鈕群組，有兩個選項(大於 20 歲/小於 20 歲)，點按其中任一個會進行篩選呈現，需與第 2 項的篩選同步更新
4. 加入排序功能，可用年紀或學號，以大到小或小到大排序

---

## 範例資料 API 說明

### 得到所有資料

> 註: 回應的 json 為物件陣列

- https://my-json-server.typicode.com/eyesofkids/json-fake-data/users

### 得到單一筆資料(用 id 在網址上當參數)

- https://my-json-server.typicode.com/eyesofkids/json-fake-data/users/107001

> 註: 回應的 json 為物件

- `id` 為 `107001`: `users/107001`

### 以姓名查詢

> 註: 回應的 json 為物件陣列

- 查詢姓名中有`陳`: `users?name_like=陳`

### 以年齡查詢(大於或小於)

> 註: 回應的 json 為物件陣列

- 大於等於 20 歲: `users?age_gte=20`
- 小於等於 20 歲:`users?age_lte=20`

### 排序

- 以年紀排序，由小至大: `?_sort=age&_order=asc`
- 以年紀排序，由大至小: `?_sort=age&_order=desc`
