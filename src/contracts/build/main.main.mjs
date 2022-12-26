// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Contract;
  return {
    postBeneficiary: [ctc0],
    postPool: [ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/main.rsh:18:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/main.rsh:18:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v97, time: v96, didSend: v22, from: v95 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v97, time: v96, didSend: v22, from: v95 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v95],
    evt_cnt: 0,
    funcNum: 1,
    lct: v96,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/main.rsh:20:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v100, time: v99, didSend: v27, from: v98 } = txn2;
      
      ;
      null;
      const v102 = stdlib.checkedBigNumberify('./src/contracts/main.rsh:22:38:decimal', stdlib.UInt_max, '0');
      const v103 = v99;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v100, time: v99, didSend: v27, from: v98 } = txn2;
  ;
  const v101 = stdlib.addressEq(v95, v98);
  stdlib.assert(v101, {
    at: './src/contracts/main.rsh:20:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  null;
  let v102 = stdlib.checkedBigNumberify('./src/contracts/main.rsh:22:38:decimal', stdlib.UInt_max, '0');
  let v103 = v99;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v121], secs: v123, time: v122, didSend: v64, from: v120 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v125 = v121[stdlib.checkedBigNumberify('./src/contracts/main.rsh:25:21:spread', stdlib.UInt_max, '0')];
    null;
    await txn4.getOutput('notify', 'v102', ctc2, v102);
    const v132 = stdlib.safeAdd(v102, stdlib.checkedBigNumberify('./src/contracts/main.rsh:28:38:decimal', stdlib.UInt_max, '1'));
    const cv102 = v132;
    const cv103 = v122;
    
    v102 = cv102;
    v103 = cv103;
    
    txn3 = txn4;
    continue;
    
    }
  return;
  
  
  
  
  };
export async function _notify4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _notify4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _notify4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Null;
  
  
  const [v102] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v115 = stdlib.protect(ctc2, await interact.in(), {
    at: './src/contracts/main.rsh:1:23:application',
    fs: ['at ./src/contracts/main.rsh:25:21:application call to [unknown function] (defined at: ./src/contracts/main.rsh:25:21:function exp)', 'at ./src/contracts/main.rsh:25:21:application call to [unknown function] (defined at: ./src/contracts/main.rsh:25:21:function exp)'],
    msg: 'in',
    who: 'notify'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v102, v115],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./src/contracts/main.rsh:25:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v121], secs: v123, time: v122, didSend: v64, from: v120 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "notify"
        });
      ;
      const v125 = v121[stdlib.checkedBigNumberify('./src/contracts/main.rsh:25:21:spread', stdlib.UInt_max, '0')];
      null;
      const v126 = await txn1.getOutput('notify', 'v102', ctc0, v102);
      
      const v132 = stdlib.safeAdd(v102, stdlib.checkedBigNumberify('./src/contracts/main.rsh:28:38:decimal', stdlib.UInt_max, '1'));
      const v190 = v132;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v121], secs: v123, time: v122, didSend: v64, from: v120 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v125 = v121[stdlib.checkedBigNumberify('./src/contracts/main.rsh:25:21:spread', stdlib.UInt_max, '0')];
  null;
  const v126 = await txn1.getOutput('notify', 'v102', ctc0, v102);
  if (v64) {
    stdlib.protect(ctc3, await interact.out(v121, v126), {
      at: './src/contracts/main.rsh:25:22:application',
      fs: ['at ./src/contracts/main.rsh:25:22:application call to [unknown function] (defined at: ./src/contracts/main.rsh:25:22:function exp)', 'at ./src/contracts/main.rsh:27:28:application call to "ret" (defined at: ./src/contracts/main.rsh:25:48:function exp)', 'at ./src/contracts/main.rsh:25:48:application call to [unknown function] (defined at: ./src/contracts/main.rsh:25:48:function exp)'],
      msg: 'out',
      who: 'notify'
      });
    }
  else {
    }
  
  const v132 = stdlib.safeAdd(v102, stdlib.checkedBigNumberify('./src/contracts/main.rsh:28:38:decimal', stdlib.UInt_max, '1'));
  const v190 = v132;
  return;
  
  
  
  };
export async function notify(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for notify expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for notify expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _notify4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`notify(uint64)uint64`],
    pure: [],
    sigs: [`notify(uint64)uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAEAAEDBCYCAQAAIjUAMRhBAWQpZEkiWzUBgQhbNQI2GgAXSUEAFCI1BCM1BoH7pMqOCRJENhoBQgAcNhoCFzUENhoDNhoBF0kjDEAAjkkkDEAAUSQSRCU0ARJENARJIhJMNAISEUQoZEk1Axc1/0k1BTX+gATXkLTdNP5QsIAEU1CLPTT+ULCACAAAAAAAAABmNP8WULA0/xY1BzT/IwgyBkIAaiMSRCM0ARJENARJIhJMNAISEUQoZEk1AzX/gASai5F0sDT/MQASRIAEIra1gTT/ULAiMgZCADNIgaCNBogAsSI0ARJENARJIhJMNAISEUSABF8Nq/qwMQAoSwFXACBnSCM1ATIGNQJCADQ1/0k1/hYoSwFXAAhnSCU1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v197","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v102","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"postBeneficiary","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"postPool","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v199","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T1","name":"v203","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v192","type":"address"}],"name":"notify","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062000c3f90813803601f1980601f83011683019360018060401b039284861084871117620002c45780859260409788528339602094859181010312620002da578451906200004f82620002df565b5181524360035584518581019080821085831117620002c457859187526000918183809352015260049160ff835416620002ad577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a1518015908115620002a0575b501562000289573462000272578551620000d781620002df565b3390526001948582554386558651923382850152818452878401848110878211176200025f57885283519586116200024c57600254908782811c9216801562000241575b838310146200022e5750601f8111620001e2575b508093601f86116001146200017a575050918394918493946200016e575b50501b916000199060031b1c1916176002555b516109439081620002fc8239f35b0151925038806200014d565b600283528183209493928692918316915b88838310620001c75750505010620001ad575b505050811b0160025562000160565b015160001960f88460031b161c191690553880806200019e565b8587015188559096019594850194879350908101906200018b565b60028352818320601f870160051c81019183881062000223575b601f0160051c019087905b828110620002175750506200012f565b84815501879062000207565b9091508190620001fc565b634e487b7160e01b845260229052602483fd5b91607f16916200011b565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000bd565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620002c45760405256fe608060408181526004918236101561001f575b505050361561001d57005b005b600092833560e01c9182631e93b0f1146104df575081633af838e21461046c578163573b85101461018f5781635fb9cf20146100fd5750806383230757146100df5763ab53f2c6146100715780610012565b346100db57816003193601126100db57815461008b610581565b91805193849283526020828185015284518093850152815b8381106100c457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016100a3565b5080fd5b50346100db57816003193601126100db576020906001549051908152f35b9050602036600319011261018b57356001600160a01b0381169081900361018b579161018360209383519061013182610535565b8382528582019380855285519161014783610566565b865161015281610566565b8084525285519161016283610535565b81835287830191875161017481610566565b81815283528352519052610648565b519051908152f35b8280fd5b83836020928360031936011261018b57828483516101ac81610535565b82815201528151906101bd82610566565b8035825260ff815416610455577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596838051338152845188820152a16001918285540361043e5761020b610581565b868180518101031261043a578685519161022483610566565b01516001600160a01b039290838116810361043657825251801590811561042b575b501561041457346103fd573382825116036103e6577f09d947f0b20f07f8914b2c8f74810c7b89bef971f78b69e74086313a7c2f291991879151168551908152a1825161029281610535565b84815243868201528351906102a682610566565b85825251809152818555438355835190868201528581526102c681610535565b8051916001600160401b0383116103d357506102e36002546104fb565b601f811161038c575b508590601f831160011461032b579282939183928794610320575b50501b916000199060031b1c1916176002555b51908152f35b015192508780610307565b60028652868620919083601f198116885b8a88838310610375575050501061035c575b505050811b0160025561031a565b015160001960f88460031b161c1916905585808061034e565b86860151885590960195948501948793500161033c565b60028652868620601f840160051c8101918885106103c9575b601f0160051c019084905b8281106103be5750506102ec565b8781550184906103b0565b90915081906103a5565b634e487b7160e01b865260419052602485fd5b845163100960cb60e01b8152600e81850152602490fd5b845163100960cb60e01b8152600d81850152602490fd5b845163100960cb60e01b8152600c81850152602490fd5b905084541488610246565b8780fd5b8580fd5b835163100960cb60e01b8152600b81840152602490fd5b602490600a84519163100960cb60e01b8352820152fd5b8383806003193601126100db5780519261048584610535565b82845282602085015281519061049a82610535565b358152602036602319011261018b5781516104b481610566565b6024356001600160a01b03811681036104db57918161031a93602097935286820152610648565b8480fd5b8490346100db57816003193601126100db576020906003548152f35b90600182811c9216801561052b575b602083101461051557565b634e487b7160e01b600052602260045260246000fd5b91607f169161050a565b604081019081106001600160401b0382111761055057604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761055057604052565b604051906000600254610593816104fb565b80855260019180831690811561062957506001146105d1575b5050829003601f01601f191682016001600160401b0381118382101761055057604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b838510610615575050505083010138806105ac565b805488860183015293019284908201610600565b919250506020925060ff191682850152151560051b83010138806105ac565b60049060ff82541661091e57604080519033825282519460209586840152858401927fee3bc1f4d4c499b854813d79a19675a1ad29af723ef5be60c1811a34d1413978606060018060a01b0392838751511686820152a160009386855403610907576106b2610581565b95888780518101031261043a57888551976106cc89610566565b015187525180159081156108fb575b50156108e457346108cd577f343c3dc9579ab229faef430812586e4b5793361621843c3e3b80554b4c5883809188915151168451908152a17f4e16ff4f217b17ec8497c2eac548209d5614f9030b5bb14890aed7f5580c31f08685518451908152a185845191015280519061074f82610535565b828252858201938385525193600194858101908181116108ba5781106104db57835243905280519161078083610566565b8383525180925284835543845551908582015284815261079f81610535565b8051936001600160401b0385116108a757506107bc6002546104fb565b601f8111610860575b508491601f85116001146107ff5793945084929190836107f4575b50501b916000199060031b1c191617600255565b0151925038806107e0565b6002815285812093958591601f198316915b88838310610846575050501061082d575b505050811b01600255565b015160001960f88460031b161c19169055388080610822565b858701518855909601959485019487935090810190610811565b60028352858320601f860160051c81019187871061089d575b601f0160051c019084905b8281106108925750506107c5565b848155018490610884565b9091508190610879565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b865260118852602486fd5b835163100960cb60e01b8152601281890152602490fd5b835163100960cb60e01b8152601181890152602490fd5b905060015414386106db565b835163100960cb60e01b8152601081890152602490fd5b60405163100960cb60e01b8152600f81840152602490fdfea164736f6c6343000810000a`,
  BytecodeLen: 3135,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/main.rsh:19:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contracts/main.rsh:30:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/main.rsh:22:36:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "notify": notify
  };
export const _APIs = {
  notify: notify
  };
