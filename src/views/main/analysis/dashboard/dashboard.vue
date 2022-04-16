<template>
  <div class="dashboard">
    <div class="dashboard-statistical">
      <page-statistical
        v-for="item in amountGoodsList"
        :key="item.title"
        v-bind="item"
      ></page-statistical>
    </div>

    <div class="dashboard-echarts">
      <div class="pie">
        <xl-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </xl-card>
      </div>
      <div class="map">
        <xl-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </xl-card>
      </div>
      <div class="rose">
        <xl-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </xl-card>
      </div>
      <div class="line">
        <xl-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </xl-card>
      </div>
      <div class="bar">
        <xl-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </xl-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDashboardStore } from '@/store'

import XlCard from '@/base-ui/card'
import pageStatistical from '@/components/page-statistical'
import {
  pieEchart,
  roseEchart,
  lineEchart,
  barEchart,
  mapEchart
} from '@/components/page-echarts'
import LineEchart from '@/components/page-echarts/src/line-echart.vue'

const dashboardStore = useDashboardStore()
dashboardStore.getDashboardDataActions()

const amountGoodsList = computed(() => {
  return dashboardStore.amountGoodsList.map((item) => {
    return {
      title: item.title,
      tooltip: item.tips,
      targetId: item.amount,
      targetData: item.number1
    }
  })
})

const categoryGoodsCount = computed(() => {
  return dashboardStore.categoryGoodsCount.map((item) => {
    return { name: item.name, value: item.goodsCount }
  })
})

const categoryGoodsSale = computed(() => {
  const xLabel: string[] = []
  const values: any[] = []
  for (const item of dashboardStore.categoryGoodsSale) {
    xLabel.push(item.name)
    values.push(item.goodsCount)
  }

  return { xLabel, values }
})

const categoryGoodsFavor = computed(() => {
  const xLabel: string[] = []
  const values: any[] = []
  for (const item of dashboardStore.categoryGoodsFavor) {
    xLabel.push(item.name)
    values.push(item.goodsFavor)
  }

  return { xLabel, values }
})

const addressGoodsSale = computed(() => {
  return dashboardStore.addressGoodsSale.map((item) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped lang="less">
@media (max-width: 768px) {
  .dashboard {
    .dashboard-echarts {
      grid-template-areas:
        'pie'
        'map'
        'rose'
        'line'
        'bar';
    }
  }
}

@media (min-width: 768px) {
  .dashboard {
    .dashboard-statistical {
      grid-template-columns: 1fr 1fr;
    }

    .dashboard-echarts {
      grid-template-areas:
        'pie map'
        'rose line'
        'bar bar';
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (min-width: 1200px) {
  .dashboard {
    .dashboard-statistical {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .dashboard-echarts {
      grid-template-areas:
        'pie map map rose'
        'line line bar bar ';
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}

.dashboard {
  .dashboard-statistical {
    display: grid;
    column-gap: 10px;
    row-gap: 20px;
  }
  .dashboard-echarts {
    display: grid;
    column-gap: 10px;
    row-gap: 20px;
    margin-top: 20px;

    .pie {
      grid-area: pie;
    }
    .line {
      grid-area: line;
    }
    .map {
      grid-area: map;
    }
    .bar {
      grid-area: bar;
    }
    .rose {
      grid-area: rose;
    }
  }
}
</style>
