const fs = require("fs");
const path = require("path");

interface IArrNode {
  Data_Qly_Rule_Dsc: string;
  Dspl_Seq_No: string;
  File_Ind: string;
  Rule_Hier_Rel_Cd: string;
  Rule_ID: string;
  Rule_Nm: string;
  Sub_ID: string;
  children?: IArrNode[];
}

const arr: IArrNode[] = [
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "2",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "name_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "3",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "tpcd_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "4",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "gnd_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "5",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "exdat_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "6",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "nat_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "7",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "ocp_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "8",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "adr_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "9",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "telctc_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "10",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "crdtno_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "11",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "name_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "12",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "tpcd_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "13",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "gnd_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "14",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "exdat_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "15",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "nat_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "16",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "ocp_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "17",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "adr_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "18",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "telctc_err",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "19",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0001",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "20",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0002",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "21",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0003",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "22",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0004",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "23",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0005",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "24",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0006",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "25",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0007",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "26",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0008",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "27",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0009",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "28",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0010",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "29",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0011",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "30",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0012",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "31",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0013",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "32",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0014",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "33",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0015",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "34",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0016",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "35",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0001",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "36",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0002",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "37",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0003",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "38",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0004",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "39",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0005",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "40",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0006",
  },
  {
    Data_Qly_Rule_Dsc: "证件类型不准",
    Dspl_Seq_No: "41",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "tpcd_err",
    Rule_Nm: "证件类型不准",
    Sub_ID: "tpcd_err_0001",
  },
  {
    Data_Qly_Rule_Dsc: "证件类型不准",
    Dspl_Seq_No: "42",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "tpcd_err",
    Rule_Nm: "证件类型不准",
    Sub_ID: "tpcd_err_0002",
  },
  {
    Data_Qly_Rule_Dsc: "性别不准",
    Dspl_Seq_No: "43",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "gnd_err",
    Rule_Nm: "性别不准",
    Sub_ID: "gnd_err_0001",
  },
  {
    Data_Qly_Rule_Dsc: "性别不准",
    Dspl_Seq_No: "44",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "gnd_err",
    Rule_Nm: "性别不准",
    Sub_ID: "gnd_err_0002",
  },
  {
    Data_Qly_Rule_Dsc: "性别不准",
    Dspl_Seq_No: "45",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "gnd_err",
    Rule_Nm: "性别不准",
    Sub_ID: "gnd_err_0003",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "46",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0001",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "47",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0002",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "48",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0003",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "49",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0004",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "50",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0005",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "51",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0006",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "52",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0007",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准01",
    Dspl_Seq_No: "53",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "3",
    Rule_ID: "nat_err_0007",
    Rule_Nm: "国籍不准01",
    Sub_ID: "nat_err_0007_0001",
  },
  {
    Data_Qly_Rule_Dsc: "四要素相同疑似",
    Dspl_Seq_No: "54",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "sysys",
    Rule_Nm: "四要素相同疑似",
    Sub_ID: "sysys_0001",
  },
];

interface IStandardNode {
  parId: number;
  id: number;
  val: string;
  children?: IStandardNode[];
}

const standardTree: IStandardNode[] = [
  {
    id: 1,
    parId: 0,
    val: "根节点",
  },
  {
    id: 2,
    parId: 1,
    val: "子节点2",
  },
  {
    id: 3,
    parId: 1,
    val: "子节点3",
  },
  {
    id: 4,
    parId: 2,
    val: "2的子节点4",
  },
  {
    id: 4.1,
    parId: 2,
    val: "2的子节点4.1",
  },
  {
    id: 5,
    parId: 3,
    val: "3的子节点5",
  },
];

var arr1 = [
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "2",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "name_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "3",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "tpcd_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "4",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "gnd_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "5",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "exdat_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "6",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "nat_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "7",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "ocp_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "8",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "adr_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不全分析",
    Dspl_Seq_No: "9",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_empty_ana",
    Rule_Nm: "要素不全分析",
    Sub_ID: "telctc_empty",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "10",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "crdtno_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "11",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "name_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "12",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "tpcd_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "13",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "gnd_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "14",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "exdat_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "15",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "nat_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "16",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "ocp_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "17",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "adr_err",
  },
  {
    Data_Qly_Rule_Dsc: "要素不准分析",
    Dspl_Seq_No: "18",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "1",
    Rule_ID: "ele_err_ana",
    Rule_Nm: "要素不准分析",
    Sub_ID: "telctc_err",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "19",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0001",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "20",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0002",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "21",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0003",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "22",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0004",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "23",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0005",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "24",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0006",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "25",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0007",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "26",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0008",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "27",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0009",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "28",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0010",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "29",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0011",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "30",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0012",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "31",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0013",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "32",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0014",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "33",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0015",
  },
  {
    Data_Qly_Rule_Dsc: "证件号码不准",
    Dspl_Seq_No: "34",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "crdtno_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "crdtno_err_0016",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "35",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0001",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "36",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0002",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "37",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0003",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "38",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0004",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "39",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0005",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "40",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_err",
    Rule_Nm: "证件号码不准",
    Sub_ID: "name_err_0006",
  },
  {
    Data_Qly_Rule_Dsc: "姓名不准",
    Dspl_Seq_No: "41",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "tpcd_err",
    Rule_Nm: "姓名不准",
    Sub_ID: "tpcd_err_0001",
  },
  {
    Data_Qly_Rule_Dsc: "证件类型不准",
    Dspl_Seq_No: "42",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "tpcd_err",
    Rule_Nm: "证件类型不准",
    Sub_ID: "tpcd_err_0002",
  },
  {
    Data_Qly_Rule_Dsc: "性别不准",
    Dspl_Seq_No: "43",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "gnd_err",
    Rule_Nm: "性别不准",
    Sub_ID: "gnd_err_0001",
  },
  {
    Data_Qly_Rule_Dsc: "性别不准",
    Dspl_Seq_No: "44",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "gnd_err",
    Rule_Nm: "性别不准",
    Sub_ID: "gnd_err_0002",
  },
  {
    Data_Qly_Rule_Dsc: "性别不准",
    Dspl_Seq_No: "45",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "gnd_err",
    Rule_Nm: "性别不准",
    Sub_ID: "gnd_err_0003",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "46",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0001",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "47",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0002",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "48",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0003",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "49",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0004",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "50",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0005",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "51",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0006",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准",
    Dspl_Seq_No: "52",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "nat_err",
    Rule_Nm: "国籍不准",
    Sub_ID: "nat_err_0007",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准01",
    Dspl_Seq_No: "53",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "3",
    Rule_ID: "nat_err_0007",
    Rule_Nm: "国籍不准01",
    Sub_ID: "nat_err_0007_0001",
  },
  {
    Data_Qly_Rule_Dsc: "国籍不准02",
    Dspl_Seq_No: "54",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "3",
    Rule_ID: "nat_err_0001",
    Rule_Nm: "国籍不准02",
    Sub_ID: "xxx_001",
  },
  {
    Data_Qly_Rule_Dsc: "那你啊啊",
    Dspl_Seq_No: "55",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "2",
    Rule_ID: "name_empty",
    Rule_Nm: "那你啊啊",
    Sub_ID: "name_empty_333",
  },
  {
    Data_Qly_Rule_Dsc: "性别不准1",
    Dspl_Seq_No: "56",
    File_Ind: "0",
    Rule_Hier_Rel_Cd: "3",
    Rule_ID: "xxx_001",
    Rule_Nm: "性别不准1",
    Sub_ID: "xxx_001_000111",
  },
];

function toTree(list: IArrNode[], parentId: string) {
  const len = list.length;
  function loop(parentId) {
    const res = [];
    for (let i = 0; i < len; i++) {
      const item = list[i];
      if (item.Rule_Hier_Rel_Cd === parentId) {
        item.children = loop(item.Dspl_Seq_No);
        res.push(item);
      }
    }
    return res;
  }

  return loop(parentId);
}
function toTree1(data: IArrNode[]) {
  // * 先生成parent建立父子关系
  const obj = {};
  data.forEach((item) => {
    obj[item.Dspl_Seq_No] = item;
  });
  // * obj -> {1001: {id: 1001, parentId: 0, name: 'AA'}, 1002: {...}}
  // console.log(obj, "obj")
  const parentList = [];
  data.forEach((item) => {
    if (obj[item.Rule_Hier_Rel_Cd]) {
      // * 当前项有父节点
      obj[item.Rule_Hier_Rel_Cd].children =
        obj[item.Rule_Hier_Rel_Cd].children || [];
      obj[item.Rule_Hier_Rel_Cd].children.push(item);
    } else {
      // * 当前项没有父节点 -> 顶层
      parentList.push(item);
    }
  });
  return parentList;
}

console.time("toTree");
const treeData = toTree(arr1, "1");
console.timeEnd("toTree");

console.time("toTree1");
const treeData1 = toTree1(arr1);
console.timeEnd("toTree1");

// fs.writeFile(
//   path.resolve(__dirname, "./04.tree.json"),
//   JSON.stringify(treeData),
//   (err) => {
//     console.log(err);
//   }
// );

function toTreeCommon<T>(
  list: Array<T & { children: Array<T> }>,
  parentId: string | number,
  parKey: string,
  key: string
) {
  const len = list.length;
  function loop(parentId) {
    const res = [];
    for (let i = 0; i < len; i++) {
      const item = list[i];
      if (item[parKey] === parentId) {
        item.children = loop(item[key]);
        res.push(item);
      }
    }
    return res;
  }
  return loop(parentId);
}

const standardData = toTreeCommon(standardTree, 0, "parId", "id");

fs.writeFile(
  path.resolve(__dirname, "06.tree.json"),
  JSON.stringify(treeData),
  (err) => {
    console.log(err);
  }
);
fs.writeFile(
  path.resolve(__dirname, "07.tree.json"),
  JSON.stringify(treeData1),
  (err) => {
    console.log(err);
  }
);
