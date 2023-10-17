<script lang="ts">
  import { defineComponent } from "vue";
  import { HotTable, HotColumn } from "@handsontable/vue3";
  import { registerAllModules } from "handsontable/registry";
  import "handsontable/dist/handsontable.full.css";
  // import "handsontable/languages/zh-CN.js";

  import { data } from "../constants";
  import { progressBarRenderer } from "../renderers/progressBar";
  import { starsRenderer } from "../renderers/stars";

  import {
    alignHeaders,
    drawCheckboxInRowHeaders,
    addClassesToRows,
    changeCheckboxCell,
  } from "../hooks-callbacks";

  // register Handsontable's modules
  registerAllModules();

  export default defineComponent({
    name: "DataGrid",
    components: {
      HotTable,
      HotColumn,
    },
    computed: {
      alignHeadersProp() {
        return alignHeaders;
      },

      addClassesToRowsProp() {
        return addClassesToRows;
      },

      drawCheckboxInRowHeadersProp() {
        return drawCheckboxInRowHeaders;
      },

      changeCheckboxCellProp() {
        return changeCheckboxCell;
      },

      dataProp() {
        return data;
      },

      starsRendererProp() {
        return starsRenderer;
      },

      progressBarRendererProp() {
        return progressBarRenderer;
      },
    },
  });
</script>

<template>
  <div id="example">
    <HotTable
      :data="dataProp"
      width="100%"
      height="100%"
      :col-widths="[140, 192, 100, 90, 90, 110, 97, 100, 126]"
      :col-headers="[
        'Company name',
        'Name',
        'Sell date',
        'In stock',
        'Qty',
        'Progress',
        'Rating',
        'Order ID',
        'Country',
      ]"
      :dropdown-menu="true"
      :hidden-columns="{
        indicators: true,
      }"
      :context-menu="true"
      :multi-column-sorting="true"
      :filters="true"
      :row-headers="true"
      :after-get-col-header="alignHeadersProp"
      :before-renderer="addClassesToRowsProp"
      :after-get-row-header="drawCheckboxInRowHeadersProp"
      :after-on-cell-mouse-down="changeCheckboxCellProp"
      :manual-row-move="true"
      license-key="non-commercial-and-evaluation"
    >
      <HotColumn data="companyName" />
      <HotColumn data="name" />
      <HotColumn
        data="sellDate"
        type="date"
        :allow-invalid="false"
      />
      <HotColumn
        data="inStock"
        type="checkbox"
        class-name="htCenter"
      />
      <HotColumn
        data="quantity"
        type="numeric"
      />
      <HotColumn
        data="progress"
        class-name="htMiddle"
        :renderer="progressBarRendererProp"
        type="numeric"
      />
      <HotColumn
        data="rating"
        class-name="star htCenter"
        :renderer="starsRendererProp"
        type="numeric"
      >
      </HotColumn>
      <HotColumn data="orderId" />
      <HotColumn data="country" />
    </HotTable>
  </div>
</template>

<style lang="css">
  /*
  A stylesheet customizing app (custom renderers)
*/

  #example {
    width: 100vw;
    height: 100vh;
  }

  table.htCore tr.odd td {
    background: #fafbff;
  }

  table.htCore tr.selected td {
    background: #edf3fd;
  }

  table.htCore td .progressBar {
    background: #37bc6c;
    height: 10px;
  }

  table.htCore td .star {
    color: #fcb515;
  }

  /*
  A stylesheet customizing Handsontable style
*/

  .handsontable {
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
    font-weight: 400;
  }

  .handsontable .collapsibleIndicator {
    text-align: center;
  }

  td .error {
    background: #ff4c42;
  }
</style>
