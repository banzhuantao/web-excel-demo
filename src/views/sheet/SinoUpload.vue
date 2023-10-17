<!--
 * @author        : banzhuantao
 * @date          : 2023-10-13 14:55:38
 * @description   : 介绍文件的作用、文件的入参、出参
 -->

<template>
  <Upload
    accept=".xlsx,.xls"
    action=""
    :show-upload-list="false"
    :before-upload="handleBeforeUpload"
    @change="handleFileChange"
  >
    <Button type="primary">上传 Excel 文件</Button>
  </Upload>
</template>

<script lang="ts">
  export default {
    name: "SinoUpload",
  };
</script>

<script lang="ts" setup>
  import {
    Button,
    Upload,
    message,
    type UploadChangeParam,
  } from "ant-design-vue";
  import * as xlsx from "xlsx";

  const emits = defineEmits(["generate-table"]);

  // 处理上传前的逻辑，检查文件类型是否为 Excel 文件
  function handleBeforeUpload(file: File): boolean {
    const isExcel =
      file.type === "application/vnd.ms-excel" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    if (!isExcel) {
      message.error("只能上传 Excel 文件！");
    }
    return isExcel;
  }

  // 处理文件上传后的逻辑
  function handleFileChange(info: UploadChangeParam): void {
    // 获取上传的文件对象
    const file = info.file.originFileObj;

    // 创建一个新的 FileReader 对象
    const reader = new FileReader();

    // 当 FileReader 加载完成时触发的回调函数
    reader.onload = (e) => {
      // 获取读取的数据，这里的结果类型是 ArrayBuffer
      const data = e.target?.result as ArrayBuffer;

      // 使用 xlsx 库的 read 方法读取数据并解析为 Workbook 对象
      const workbook = xlsx.read(data, { type: "buffer" });

      // 从 Workbook 中获取第一个 Sheet 的数据
      const worksheet = workbook.Sheets[
        workbook.SheetNames[0]
      ] as xlsx.WorkSheet;

      // 使用 xlsx 库的 sheet_to_json 方法将 Sheet 数据转换为 JSON 格式
      const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

      // 在这里处理解析得到的 JSON 数据
      console.log(jsonData);

      // 将解析后的数据传递
      emits("generate-table", jsonData);
    };

    // 将文件对象包装为 Blob 对象
    const blob = new Blob([file], { type: file.type });

    // 使用 FileReader 的 readAsArrayBuffer 方法读取 Blob 数据
    reader.readAsArrayBuffer(blob);
  }
</script>
