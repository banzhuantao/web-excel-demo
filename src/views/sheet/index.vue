<!--
 * @author        : banzhuantao
 * @date          : 2023-10-12 15:29:34
 * @description   : 介绍文件的作用、文件的入参、出参
 -->

<template>
  <Modal
    v-model:open="open"
    v-bind="modalOptions"
    @ok="asdjkashdjahsd"
  >
    <Table
      v-element-size="onResize"
      bordered
      :pagination="false"
      v-bind="tableOptions"
      :scroll="{ x: 1300, y: 1000 }"
      :custom-row="
        (record, index, column) => ({
          onMousedown: (event) => handleRowClick(event, record, index),
        })
      "
    >
      <template #bodyCell="{ column, index }">
        <template
          v-if="
            column['bodySlotKey'] === 'Input' &&
            edit.index === index &&
            edit.dataIndex === column.dataIndex
          "
        >
          <Textarea
            v-model:value="edit.value"
            :style="{ padding: 0 }"
            :bordered="false"
            autosize
            @change="handleTextareaChange"
          />
        </template>
      </template>
    </Table>
  </Modal>
</template>

<script lang="ts">
  export default {
    name: "SheetHome",
  };
</script>

<script lang="ts" setup>
  import { Table, Modal, type TableProps, Textarea } from "ant-design-vue";
  import { computed, markRaw, nextTick, PropType, reactive, watch } from "vue";
  import { cloneDeep, isString } from "lodash";
  import { vElementSize } from "@vueuse/components";
  import type { SinoTableColumnProps } from "@/views/sheet/table";
  import type { DefaultRecordType } from "ant-design-vue/es/vc-table/interface";

  const props = defineProps({
    open: { type: Boolean, required: true },
    tableSchema: { type: Object as PropType<TableProps>, required: true },
  });
  const emits = defineEmits(["update:open"]);

  const open = computed({
    get() {
      return props.open;
    },
    set(bool) {
      emits("update:open", bool);
    },
  });

  const modalOptions = reactive({
    // 宽度
    width: "100%",
    // 对话框外层容器的类名
    wrapClassName: "sino-excel-workbook-modal",
    // 取消按钮文字
    cancelText: "取消",
    // 不显示右上角的关闭按钮
    closable: false,
    // 关闭时销毁 Modal 里的子元素
    destroyOnClose: true,
    // 不支持键盘 esc 关闭
    keyboard: false,
    // 不支持点击蒙层关闭
    maskClosable: false,
    // 确认按钮文字
    okText: "确认",
    zIndex: 9999,
  });

  const sliceIndex = 1;
  let tableOptions: TableProps = reactive({});

  watch(
    () => {
      return props.tableSchema;
    },
    (newVal: TableProps) => {
      if (Object.values(newVal).length > 0) {
        tableOptions = cloneDeep(markRaw(newVal));

        if (tableOptions.dataSource?.length > 0) {
          tableOptions.dataSource = generateTableDataSource(
            tableOptions.dataSource?.slice(sliceIndex),
          );
        }
      }
    },
    { immediate: true, deep: true },
  );

  function generateTableDataSource(data) {
    const t = [];
    data.forEach((item: any) => {
      const mappedItem: any = {};

      Object.values(
        tableOptions.columns.map((columnItem: SinoTableColumnProps) => {
          return columnItem.dataIndex;
        }),
      ).forEach((column, index) => {
        mappedItem[column] = item[index];
      });

      t.push(mappedItem);
    });

    return t;
  }

  const scroll = reactive({
    x: 0,
    y: 0,
    scrollToFirstRowOnChange: true,
  });
  function onResize({ width, height }: { width: number; height: number }) {
    nextTick(() => {
      scroll.x = width;
      scroll.y = height;
    });
  }

  function asdjkashdjahsd() {
    console.log(tableOptions.dataSource);
  }

  function handleChangeInput(eve, column, index) {
    console.log({ eve, column, index });
    tableOptions.dataSource[index][column.dataIndex] = eve.target.value;
  }

  interface EditData {
    index: number;
    dataIndex?: string | number;
    value?: string | number;
  }
  // 编辑
  const edit = reactive<EditData>({
    index: null,
    dataIndex: null,
    value: null,
  });

  function handleRowClick(
    event: MouseEvent,
    record: DefaultRecordType, // 替换为实际的行数据类型
    index: number,
  ) {
    console.log({ event, record, index });

    const target = event.target as HTMLElement;
    const columnIndex = target.cellIndex;
    const column = tableOptions.columns[columnIndex];

    // 将索引和数据索引存储到编辑对象(edit)中，以便稍后在模板中使用
    edit.index = index;
    // edit.dataIndex = tableOptions.columns[event.target.cellIndex].dataIndex;

    // 如果数据索引是字符串，将当前行记录的对应值存储到编辑对象(edit)中
    if (column) {
      edit.dataIndex = column.dataIndex;

      if (isString(edit.dataIndex)) {
        edit.value = record[edit.dataIndex];
      }
    }

    console.log({ edit });
  }

  function handleTextareaChange() {
    tableOptions.dataSource[edit.index][edit.dataIndex] = edit.value;
  }
</script>

<style lang="less" scoped>
  :deep(.ant-table) {
    .ant-table-container {
      .ant-table-cell {
        padding: 0;
      }
    }
  }

  textarea {
    border-radius: 0;
    width: 100%;

    &:focus {
      box-shadow: inset 0 0 0 2px #5292f7;
    }
  }
</style>
