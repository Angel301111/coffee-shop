<template>
  <header class="p-5 text-center bg header-background">
    <h1 class="display-1 fw-bold">Q & A</h1>
  </header>
  <section class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h2 class="mb-3">咖啡豆相關</h2>
        <div class="accordion w-100" id="accordionExample">
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <i class="bi bi-cup-fill me-2"></i>
                我如何選擇最適合我的咖啡豆？
              </button>
            </h3>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  我們建議根據你的口味偏好和烹調方式來選擇。如果你喜歡深焙的咖啡，可以選擇深烘焙的豆子，如果你喜歡更明亮的風味，可以考慮選擇中等或淺烘焙的豆子。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <i class="bi bi-cup-fill me-2"></i>
                你們的咖啡豆是如何烘焙的？
              </button>
            </h3>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  我們的咖啡豆是精心挑選並進行經典的手工烘焙。我們的烘焙師根據每一批豆子的特性和來源地，精心控制烘焙時間和溫度，以確保每一杯咖啡都能展現出最佳的風味。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i class="bi bi-cup-fill me-2"></i>
                如何保證咖啡的新鮮度？
              </button>
            </h3>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  我們採用即訂即烘的模式，確保每一批咖啡都是在收到訂單後現場烘焙。我們還採用高效的物流配送系統，確保咖啡豆在運送過程中保持最佳的新鮮度。
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 class="my-3">付款相關</h2>
        <div class="accordion w-100" id="accordionExample">
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <i class="bi bi-cup-fill me-2"></i>
                你們接受哪些付款方式？
              </button>
            </h3>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  我們接受多種支付方式，包括信用卡、PayPal、Apple Pay和Google
                  Pay等，方便您選擇最合適的付款方式。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <i class="bi bi-cup-fill me-2"></i>
                你們是否支持貨到付款？
              </button>
            </h3>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>目前我們不支持貨到付款，所有訂單均需在結帳時完成支付。</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <i class="bi bi-cup-fill me-2"></i>
                為什麼我的付款失敗？
              </button>
            </h3>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  付款被拒絕可能是由於信用卡資訊輸入錯誤、信用卡餘額不足或銀行風控措施等原因。請檢查您的付款訊息或聯繫銀行解決問題。
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 class="my-3">運送相關</h2>
        <div class="accordion w-100" id="accordionExample">
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingSeven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                <i class="bi bi-cup-fill me-2"></i>
                你們提供哪些運送選項？
              </button>
            </h3>
            <div
              id="collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  我們提供標準運送和快速運送兩種選項。標準運送通常需要3-7個工作日，快速運送需要1-3個工作日。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingEight">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                <i class="bi bi-cup-fill me-2"></i>
                是否能夠運送離島？
              </button>
            </h3>
            <div
              id="collapseEight"
              class="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>有的！所有商品都有提供台灣本島及離島地區的運送。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
