const Types = {
  key: 'type',
  defaultName: '出行交通',
  data: [{
    id: 0,
    name: '出行交通',
    asName: '全部方式',
  }, {
    id: 1,
    name: '飞机',
  }, {
    id: 2,
    name: '火车',
  }, {
    id: 3,
    name: '地铁',
  }, {
    id: 4,
    name: '客运',
  }, {
    id: 5,
    name: '公交车',
  }, {
    id: 6,
    name: '出租车',
  }, {
    id: 7,
    name: '轮船',
  }, {
    id: 8,
    name: '其他',
  }],
};
const Sorts = {
  key: 'sortType',
  defaultName: '最新发布',
  data: [{
    id: 0,
    name: '最新发布',
  }, {
    id: 1,
    name: '出行从早到晚',
  }, {
    id: 2,
    name: '出行从晚到早',
  }],
};
const Filter = [Types, Sorts];
const TypesName = Types.data.reduce((prev, cur) => {
  if (!cur.id) cur.name = '全部';
  return [...prev, cur.name];
}, []);
module.exports = {
  Types,
  Filter,
  Sorts,
  TypesName
};