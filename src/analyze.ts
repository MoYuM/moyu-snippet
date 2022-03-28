import * as vscode from 'vscode';

const mock1 = `pageNo：当前页
 pageSize：页面大小
total:总数量
rows: 审核记录列表
pId: 申请单id
type,审核方式 6为释放酒店人工审核，7为释放酒店系统审核
isPass：是否审核通过，Y为审核通过，F为审核不通过
checker: 审核人
auditTime: 审核时间
reason： 原因`

const mock2 = `pageNo：当前页

pageSize：页面大小

total:总数量

rows: 审核记录列表

- pId: 申请单id
  
- type,审核方式 6为释放酒店人工审核，7为释放酒店系统审核
  
- isPass：是否审核通过，Y为审核通过，F为审核不通过
  
- checker: 审核人
  
- auditTime: 审核时间
  
- reason： 原因`

const mock3 = `success	boolean	成功还是失败
code	int	返回码
msg	String	错误文案`

const typeMap = {
  'BOOLEAN': 'boolean',
  'INT': 'number',
  'LONG': 'number',
  'SHORT': 'number',
  'BYTE': 'number',
  'FLOAT': 'number',
  'DOUBLE': 'number',
  'STRING': 'string',
  'CHAR': 'string',
  'LIST': 'array',
}

interface Word {
  wordType: 'desc' | 'key' | 'value' | 'type' | 'other',
  value: string,
}

interface Obj {
  key: string,
  value?: string,
  type?: 'boolean' | 'number' | 'string' | 'array',
  desc?: string,
}

/**
 * 分析字符串
 * 
 * 主要目的是提取接口文档中的字段，
 * 为了尽量简单些，做如下规定：
 * 
 * 1. 2个以上连续的英文字母视为一个单词
 * 2. 中文视为此字段的描述
 * 3. 匹配java的类型，作为此字段的类型（如果匹配到了的话）
 */
const analyze = (text: string) => {



  return text;
}


export default analyze;