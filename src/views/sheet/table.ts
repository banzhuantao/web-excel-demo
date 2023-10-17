/**
 * @author        : banzhuantao
 * @date          : 2023-10-13 14:44:03
 * @description   : 介绍文件的作用、文件的入参、出参
 */

import { type TableColumnProps } from "ant-design-vue";

export interface SinoTableColumnProps extends TableColumnProps {
  headerSlotKey?: string;
  bodySlotKey?: string;
}

export const tableColumns: SinoTableColumnProps[] = [
  {
    title: "序号",
    dataIndex: "index",
    width: 100,
  },
  {
    title: "机构代码",
    dataIndex: "jgdm",
    width: 240,
    bodySlotKey: "Input",
  },
  {
    title: "家医工号",
    dataIndex: "jygh",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "家医名称",
    dataIndex: "jymc",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "常住人口数",
    dataIndex: "czrks",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "重点人群总数(65岁)",
    dataIndex: "zdrqzs_65",
    width: 180,
    bodySlotKey: "Input",
  },
  {
    title: "重点人群总数(60岁)",
    dataIndex: "zdrqzs_60",
    width: 180,
    bodySlotKey: "Input",
  },
  {
    title: "儿童人数",
    dataIndex: "rtrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "60岁及以上老年人",
    dataIndex: "lnr_60",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "65岁及以上老年人",
    dataIndex: "lnr_65",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "残疾人人数",
    dataIndex: "cjrrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "高血压人数",
    dataIndex: "gxyrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "结核病人数",
    dataIndex: "jhbrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "计划生育人数",
    dataIndex: "jhsyrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "精神障碍人数",
    dataIndex: "jszars",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "糖尿病人数",
    dataIndex: "tnbrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "孕产妇人数",
    dataIndex: "ycfrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "社区排名",
    dataIndex: "sqpm",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "区县排名",
    dataIndex: "qxpm",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "市级排名",
    dataIndex: "sjpm",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "省级排名",
    dataIndex: "s_sjpm",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "全国排名",
    dataIndex: "qgpm",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "全球排名",
    dataIndex: "qqpm",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "中医门诊服务人次",
    dataIndex: "zymzfwrc",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "中医医疗收入",
    dataIndex: "zyylsr",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "康复治疗总收入",
    dataIndex: "kfzlzsr",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "康复治疗总项目数",
    dataIndex: "kfzlzxms",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "康复设备数",
    dataIndex: "kfsbs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "康复设备资产价值",
    dataIndex: "kfsbzcjz",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "电子健康档案建档率",
    dataIndex: "dzjkdajdl",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "医疗服务人数",
    dataIndex: "ylfwrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "门诊总人数",
    dataIndex: "mzzrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "住院总人数",
    dataIndex: "zyzrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "签约人数",
    dataIndex: "qyrs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "社区签约饱和度",
    dataIndex: "sqqybhd",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "签约社区就诊依从性",
    dataIndex: "qysqjzycx",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "门诊复诊率",
    dataIndex: "mzfzl",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "年人均累计次数",
    dataIndex: "nrjljcs",
    width: 160,
    bodySlotKey: "Input",
  },
  {
    title: "互联网医院接诊人次数",
    dataIndex: "hlwyyjzrcs",
    width: 180,
    bodySlotKey: "Input",
  },
];
