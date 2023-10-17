<!--
 * @author        : banzhuantao
 * @date          : 2023-10-13 14:01:53
 * @description   : 介绍文件的作用、文件的入参、出参
 -->

<template>
  <div>
    <SinoUpload @generate-table="generateTable" />
  </div>

  <SheetHome
    v-model:open="open"
    :table-schema="tableSchema"
  />
</template>

<script lang="ts">
  export default {
    name: "EnterHome",
  };
</script>

<script lang="ts" setup>
  import SheetHome from "@/views/sheet/index.vue";
  import { reactive, ref } from "vue";
  import { tableColumns } from "@/views/sheet/table";
  import SinoUpload from "@/views/sheet/SinoUpload.vue";
  import tableData from "./sheet/data.json";

  const open = ref(false);
  const tableSchema = reactive({
    dataSource: [],
    columns: tableColumns,
  });

  generateTable(tableData);
  function generateTable(data: Array<Array<any>>) {
    if (data.length > 0) {
      tableSchema.dataSource = data;

      open.value = true;
    }
  }
</script>
