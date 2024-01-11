## 3-1. BMI線上計算應用

BMI = 體重(公斤) / 身高<sup>2</sup>(公尺平方)

註：什麼是 BMI 身體質量指數？
BMI（Body Mass Index）身體質量指數，是體重（公斤）和身高（公尺）平方的比值，用來評估你現在的體重狀況。

例如：一個52公斤的人，身高是155公分，則BMI = 52(公斤) / 1.55的平方 ( 公尺平方，約為2.4025 )= 21.6

根據台灣衛生福利部國民健康署的 BMI 標準，我國成人的 BMI 指數，應介於 18.5~24 之間，才屬於健康體重範圍，低於或超過此範圍則代表過輕或過重。

除了計算 BMI 指數，更建議你透過 BMR 基礎代謝率計算器，計算出你每日應攝取熱量（以大卡計算，Calorie，kcal），搭配 BMI 指數，幫助你達到理想的健康體重。

線上參考範例：

https://depart.femh.org.tw/dietary/3OPD/BMI.htm

提示：

1. 身高的平方公尺要使用(假設身高輸入為公分(cm)，變數名稱為`height`)：`Math.pow(height/100, 2)`

## 3-2. 體脂率: 由BMI推斷體脂率

設計一個進階可以由BMI，加入`年齡`輸入框與選擇`男性`或`女性`，來計算體脂率(BFP)的線上應用程式:

Body fat percentage (BFP) 公式 成年男性(adult males):

> BFP = 1.20 × BMI + 0.23 × Age - 16.2

Body fat percentage (BFP)公式 成年女性(females):

> BFP = 1.20 × BMI + 0.23 × Age - 5.4

參考: [Athletes](https://www.calculator.net/body-fat-calculator.html)