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
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_UInt256;
  const ctc7 = stdlib.T_Struct([['totalStaked', ctc1], ['lastUpdateBlock', ctc1], ['rewardPerTokenStored', ctc6]]);
  const ctc8 = stdlib.T_Struct([['beneficiary', ctc0], ['creationFee', ctc1], ['flatAlgoCreationFee', ctc1], ['stakeToken', ctc2], ['rewardToken', ctc2], ['beginBlock', ctc1], ['endBlock', ctc1], ['totalRewardAmount', ctc1], ['totalAlgoRewardAmount', ctc1], ['lockLengthBlocks', ctc1]]);
  const ctc9 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1], ['lockTimestamp', ctc1], ['rewardPerTokenPaid', ctc6]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Data({
    None: ctc10,
    Some: ctc6
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc11;
  
  const map2_ctc = ctc11;
  
  const map3_ctc = ctc12;
  
  
  const _global = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2391, v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2410, v2441, v2443, v2445] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538] = svs;
      return (await ((async () => {
        
        const v2542 = {
          lastUpdateBlock: v2482,
          rewardPerTokenStored: v2485,
          totalStaked: v2487
          };
        
        return v2542;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _initial = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2391, v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2410, v2441, v2443, v2445] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538] = svs;
      return (await ((async () => {
        
        const v2468 = {
          beginBlock: v2397,
          beneficiary: v2392,
          creationFee: v2393,
          endBlock: v2398,
          flatAlgoCreationFee: v2394,
          lockLengthBlocks: v2401,
          rewardToken: v2396,
          stakeToken: v2395,
          totalAlgoRewardAmount: v2400,
          totalRewardAmount: v2399
          };
        
        return v2468;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _local = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2391, v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2410, v2441, v2443, v2445] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538] = svs;
      return (await ((async (_v2469 ) => {
          const v2469 = stdlib.protect(ctc0, _v2469, null);
        
        const v2470 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2469), null);
        const v2471 = stdlib.fromSome(v2470, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
        const v2472 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2469), null);
        const v2473 = stdlib.fromSome(v2472, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
        const v2474 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v2469), null);
        const v2475 = stdlib.fromSome(v2474, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
        const v2476 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v2469), null);
        const v2477 = stdlib.fromSome(v2476, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2478 = {
          lockTimestamp: v2475,
          reward: v2473,
          rewardPerTokenPaid: v2477,
          staked: v2471
          };
        
        return v2478;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      global: {
        decode: _global,
        dom: [],
        rng: ctc7
        },
      initial: {
        decode: _initial,
        dom: [],
        rng: ctc8
        },
      local: {
        decode: _local,
        dom: [ctc0],
        rng: ctc9
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc6, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc5, ctc1, ctc4, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    beginBlock: ctc1,
    beneficiary: ctc5,
    creationFee: ctc1,
    endBlock: ctc1,
    flatAlgoCreationFee: ctc1,
    lockLengthBlocks: ctc1,
    rewardToken: ctc6,
    stakeToken: ctc6,
    totalAlgoRewardAmount: ctc1,
    totalRewardAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_477: ctc8,
    claimFees0_477: ctc8,
    stake0_477: ctc9,
    unstake0_477: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Struct([['now', ctc1], ['result', ctc11]]);
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc14]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  
  const v2340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2341 = [v2340, v2340];
  const v2347 = stdlib.protect(ctc7, await interact.getParams(), {
    at: './src/contracts/index.rsh:185:50:application',
    fs: ['at ./src/contracts/index.rsh:173:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:173:25:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2348 = v2347.beginBlock;
  const v2349 = v2347.beneficiary;
  const v2350 = v2347.creationFee;
  const v2351 = v2347.endBlock;
  const v2352 = v2347.flatAlgoCreationFee;
  const v2353 = v2347.lockLengthBlocks;
  const v2354 = v2347.rewardToken;
  const v2355 = v2347.stakeToken;
  const v2356 = v2347.totalAlgoRewardAmount;
  const v2357 = v2347.totalRewardAmount;
  const v2369 = stdlib.tokenEq(v2355, v2354);
  const v2370 = v2369 ? false : true;
  stdlib.assert(v2370, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:133:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:187:30:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)', 'at ./src/contracts/index.rsh:173:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:173:25:function exp)'],
    msg: 'Reach requires all tokens to be different. Consider using distribution contract instead.',
    who: 'Creator'
    });
  const v2372 = stdlib.safeMul(v2350, stdlib.checkedBigNumberify('./src/contracts/index.rsh:138:37:decimal', stdlib.UInt_max, '5'));
  const v2373 = stdlib.le(v2372, stdlib.checkedBigNumberify('./src/contracts/index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2373, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:138:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:187:30:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)', 'at ./src/contracts/index.rsh:173:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:173:25:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'Creator'
    });
  const v2375 = stdlib.le(v2352, stdlib.checkedBigNumberify('./src/contracts/index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2375, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:140:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:187:30:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)', 'at ./src/contracts/index.rsh:173:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:173:25:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'Creator'
    });
  const v2377 = stdlib.lt(v2348, v2351);
  stdlib.assert(v2377, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:145:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:187:30:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)', 'at ./src/contracts/index.rsh:173:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:173:25:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2379 = stdlib.safeSub(v2351, v2348);
  const v2380 = stdlib.lt(v2379, stdlib.checkedBigNumberify('./src/contracts/index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2380, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:147:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:187:30:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)', 'at ./src/contracts/index.rsh:173:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:173:25:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2382 = stdlib.lt(v2353, stdlib.checkedBigNumberify('./src/contracts/index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2382, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:148:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:187:30:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)', 'at ./src/contracts/index.rsh:173:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:173:25:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2385 = stdlib.le(v2353, v2379);
  stdlib.assert(v2385, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:150:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:187:30:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)', 'at ./src/contracts/index.rsh:173:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:173:25:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2387 = stdlib.gt(v2357, stdlib.checkedBigNumberify('./src/contracts/index.rsh:155:43:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2387, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:155:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:187:30:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)', 'at ./src/contracts/index.rsh:173:21:application call to [unknown function] (defined at: ./src/contracts/index.rsh:173:25:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2349, v2350, v2352, v2355, v2354, v2348, v2351, v2357, v2356, v2353],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401], secs: v2403, time: v2402, didSend: v213, from: v2391 } = txn1;
      
      const v2404 = v2341[stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0')];
      const v2405 = stdlib.Array_set(v2404, '0', stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0'));
      const v2406 = stdlib.Array_set(v2341, stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0'), v2405);
      const v2408 = v2406[stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '1')];
      const v2409 = stdlib.Array_set(v2408, '0', stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0'));
      const v2410 = stdlib.Array_set(v2406, stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '1'), v2409);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2395
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2396
        });
      ;
      const v2425 = stdlib.safeSub(v2398, v2397);
      const v2437 = stdlib.cast("UInt", "UInt256", v2399, false, true);
      const v2438 = stdlib.safeMul256(v2437, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v2440 = stdlib.cast("UInt", "UInt256", v2425, false, true);
      const v2441 = stdlib.safeDiv256(v2438, v2440);
      const v2442 = stdlib.safeMul(v2399, v2393);
      const v2443 = stdlib.safeDiv(v2442, stdlib.checkedBigNumberify('./src/contracts/index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
      const v2444 = stdlib.safeMul(v2400, v2393);
      const v2445 = stdlib.safeDiv(v2444, stdlib.checkedBigNumberify('./src/contracts/index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401], secs: v2403, time: v2402, didSend: v213, from: v2391 } = txn1;
  const v2404 = v2341[stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0')];
  const v2405 = stdlib.Array_set(v2404, '0', stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0'));
  const v2406 = stdlib.Array_set(v2341, stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0'), v2405);
  const v2408 = v2406[stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '1')];
  const v2409 = stdlib.Array_set(v2408, '0', stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0'));
  const v2410 = stdlib.Array_set(v2406, stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '1'), v2409);
  const v2412 = stdlib.tokenEq(v2396, v2395);
  const v2413 = v2412 ? false : true;
  stdlib.assert(v2413, {
    at: './src/contracts/index.rsh:199:17:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  ;
  ;
  ;
  const v2415 = stdlib.tokenEq(v2395, v2396);
  const v2416 = v2415 ? false : true;
  stdlib.assert(v2416, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:133:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: 'Reach requires all tokens to be different. Consider using distribution contract instead.',
    who: 'Creator'
    });
  const v2418 = stdlib.safeMul(v2393, stdlib.checkedBigNumberify('./src/contracts/index.rsh:138:37:decimal', stdlib.UInt_max, '5'));
  const v2419 = stdlib.le(v2418, stdlib.checkedBigNumberify('./src/contracts/index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2419, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:138:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'Creator'
    });
  const v2421 = stdlib.le(v2394, stdlib.checkedBigNumberify('./src/contracts/index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2421, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:140:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'Creator'
    });
  const v2423 = stdlib.lt(v2397, v2398);
  stdlib.assert(v2423, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:145:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2425 = stdlib.safeSub(v2398, v2397);
  const v2426 = stdlib.lt(v2425, stdlib.checkedBigNumberify('./src/contracts/index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2426, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:147:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2428 = stdlib.lt(v2401, stdlib.checkedBigNumberify('./src/contracts/index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2428, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:148:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2431 = stdlib.le(v2401, v2425);
  stdlib.assert(v2431, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:150:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2433 = stdlib.gt(v2399, stdlib.checkedBigNumberify('./src/contracts/index.rsh:155:43:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2433, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:155:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2437 = stdlib.cast("UInt", "UInt256", v2399, false, true);
  const v2438 = stdlib.safeMul256(v2437, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
  const v2440 = stdlib.cast("UInt", "UInt256", v2425, false, true);
  const v2441 = stdlib.safeDiv256(v2438, v2440);
  const v2442 = stdlib.safeMul(v2399, v2393);
  const v2443 = stdlib.safeDiv(v2442, stdlib.checkedBigNumberify('./src/contracts/index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2444 = stdlib.safeMul(v2400, v2393);
  const v2445 = stdlib.safeDiv(v2444, stdlib.checkedBigNumberify('./src/contracts/index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2446 = stdlib.safeAdd(v2400, v2445);
  const v2447 = stdlib.safeAdd(v2446, v2394);
  const v2448 = stdlib.safeAdd(v2399, v2443);
  
  const txn2 = await (ctc.sendrecv({
    args: [v2391, v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2410, v2441, v2443, v2445],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2402,
    onlyIf: true,
    out_tys: [],
    pay: [v2447, [[v2448, v2396]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v2451, time: v2450, didSend: v387, from: v2449 } = txn2;
      
      const v2452 = stdlib.safeAdd(v2400, v2445);
      const v2453 = stdlib.safeAdd(v2452, v2394);
      const v2454 = stdlib.safeAdd(v2399, v2443);
      sim_r.txns.push({
        amt: v2453,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2457 = v2410[stdlib.checkedBigNumberify('./src/contracts/index.rsh:233:17:dot', stdlib.UInt_max, '1')];
      const v2458 = v2457[stdlib.checkedBigNumberify('./src/contracts/index.rsh:233:17:dot', stdlib.UInt_max, '0')];
      const v2459 = stdlib.add(v2458, v2454);
      const v2461 = stdlib.Array_set(v2457, '0', v2459);
      const v2462 = stdlib.Array_set(v2410, stdlib.checkedBigNumberify('./src/contracts/index.rsh:233:17:dot', stdlib.UInt_max, '1'), v2461);
      sim_r.txns.push({
        amt: v2454,
        kind: 'to',
        tok: v2396
        });
      
      const v2480 = stdlib.safeAdd(v2445, v2394);
      const v2481 = v2480;
      const v2482 = v2397;
      const v2483 = v2397;
      const v2484 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:313:25:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v2485 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:311:25:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v2486 = v2443;
      const v2487 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:309:17:decimal', stdlib.UInt_max, '0');
      const v2488 = v2450;
      const v2494 = v2462;
      const v2495 = v2453;
      
      if (await (async () => {
        
        return true;})()) {
        const v2537 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
        const v2538 = v2537[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2396
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v2395
          })
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
    tys: [ctc5, ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc16, ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2451, time: v2450, didSend: v387, from: v2449 } = txn2;
  const v2452 = stdlib.safeAdd(v2400, v2445);
  const v2453 = stdlib.safeAdd(v2452, v2394);
  const v2454 = stdlib.safeAdd(v2399, v2443);
  ;
  const v2457 = v2410[stdlib.checkedBigNumberify('./src/contracts/index.rsh:233:17:dot', stdlib.UInt_max, '1')];
  const v2458 = v2457[stdlib.checkedBigNumberify('./src/contracts/index.rsh:233:17:dot', stdlib.UInt_max, '0')];
  const v2459 = stdlib.add(v2458, v2454);
  const v2461 = stdlib.Array_set(v2457, '0', v2459);
  const v2462 = stdlib.Array_set(v2410, stdlib.checkedBigNumberify('./src/contracts/index.rsh:233:17:dot', stdlib.UInt_max, '1'), v2461);
  ;
  const v2463 = stdlib.addressEq(v2391, v2449);
  stdlib.assert(v2463, {
    at: './src/contracts/index.rsh:233:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './src/contracts/index.rsh:253:34:application',
    fs: ['at ./src/contracts/index.rsh:252:13:application call to [unknown function] (defined at: ./src/contracts/index.rsh:252:34:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  const v2480 = stdlib.safeAdd(v2445, v2394);
  let v2481 = v2480;
  let v2482 = v2397;
  let v2483 = v2397;
  let v2484 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:313:25:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2485 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:311:25:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2486 = v2443;
  let v2487 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:309:17:decimal', stdlib.UInt_max, '0');
  let v2488 = v2450;
  let v2494 = v2462;
  let v2495 = v2453;
  
  let txn3 = txn2;
  while (await (async () => {
    const v2532 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
    const v2533 = v2532[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
    const v2534 = stdlib.le(v2486, v2533);
    stdlib.assert(v2534, {
      at: './src/contracts/index.rsh:318:32:application',
      fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
      msg: null,
      who: 'Creator'
      });
    const v2536 = stdlib.le(v2481, v2495);
    stdlib.assert(v2536, {
      at: './src/contracts/index.rsh:319:32:application',
      fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
      msg: null,
      who: 'Creator'
      });
    
    return true;})()) {
    const v2537 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
    const v2538 = v2537[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
    const v2539 = stdlib.le(v2486, v2538);
    stdlib.assert(v2539, {
      at: './src/contracts/index.rsh:318:32:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const v2541 = stdlib.le(v2481, v2495);
    stdlib.assert(v2541, {
      at: './src/contracts/index.rsh:319:32:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2716], secs: v2718, time: v2717, didSend: v1687, from: v2715 } = txn4;
    switch (v2716[0]) {
      case 'claim0_477': {
        const v2719 = v2716[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        let v2818;
        const v2819 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
        if (v2819) {
          const v2821 = stdlib.gt(v2717, v2482);
          const v2822 = v2821 ? v2717 : v2482;
          const v2823 = stdlib.lt(v2822, v2398);
          const v2824 = v2823 ? v2822 : v2398;
          const v2825 = stdlib.safeSub(v2824, v2482);
          const v2826 = stdlib.cast("UInt", "UInt256", v2825, false, true);
          const v2827 = stdlib.safeMul256(v2441, v2826);
          const v2828 = stdlib.cast("UInt", "UInt256", v2487, false, true);
          const v2829 = stdlib.safeDiv256(v2827, v2828);
          const v2830 = stdlib.safeAdd256(v2485, v2829);
          v2818 = v2830;
          }
        else {
          v2818 = v2485;
          }
        const v2831 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2715), null);
        const v2832 = stdlib.fromSome(v2831, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
        const v2833 = stdlib.cast("UInt", "UInt256", v2832, false, true);
        const v2834 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2715), null);
        const v2835 = stdlib.fromSome(v2834, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2836 = stdlib.safeSub256(v2818, v2835);
        const v2837 = stdlib.safeMul256(v2833, v2836);
        const v2838 = stdlib.safeDiv256(v2837, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2839 = stdlib.cast("UInt256", "UInt", v2838, false, true);
        const v2840 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2715), null);
        const v2841 = stdlib.fromSome(v2840, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
        const v2842 = stdlib.safeAdd(v2839, v2841);
        await stdlib.mapSet(map1, v2715, v2842);
        await stdlib.mapSet(map3, v2715, v2818);
        const v2844 = stdlib.gt(v2717, v2482);
        const v2845 = v2844 ? v2717 : v2482;
        const v2846 = stdlib.gt(v2845, v2398);
        let v2847;
        if (v2846) {
          v2847 = true;
          }
        else {
          const v2848 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2715), null);
          const v2849 = stdlib.fromSome(v2848, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
          const v2850 = stdlib.safeAdd(v2849, v2401);
          const v2851 = stdlib.le(v2850, v2845);
          v2847 = v2851;
          }
        if (v2847) {
          const v2854 = stdlib.safeMuldiv(v2842, v2400, v2399);
          await stdlib.mapSet(map1, v2715, stdlib.checkedBigNumberify('./src/contracts/index.rsh:289:30:decimal', stdlib.UInt_max, '0'));
          const v2857 = stdlib.le(v2842, v2538);
          const v2859 = stdlib.le(v2854, v2495);
          const v2860 = v2857 ? v2859 : false;
          stdlib.assert(v2860, {
            at: './src/contracts/index.rsh:292:24:application',
            fs: ['at ./src/contracts/index.rsh:487:102:application call to "claimRewards" (defined at: ./src/contracts/index.rsh:285:34:function exp)', 'at ./src/contracts/index.rsh:482:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:482:44:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2864 = stdlib.sub(v2495, v2854);
          ;
          const v2870 = stdlib.sub(v2538, v2842);
          const v2872 = stdlib.Array_set(v2537, '0', v2870);
          const v2873 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:295:77:application', stdlib.UInt_max, '1'), v2872);
          ;
          const v2874 = [v2842, v2854];
          const v2878 = stdlib.lt(v2845, v2398);
          const v2879 = v2878 ? v2845 : v2398;
          await stdlib.mapSet(map2, v2715, v2879);
          const v2885 = {
            now: v2845,
            result: v2874
            };
          await txn4.getOutput('claim', 'v2885', ctc12, v2885);
          const cv2481 = v2481;
          const cv2482 = v2879;
          const cv2483 = v2483;
          const cv2484 = v2484;
          const cv2485 = v2818;
          const cv2486 = v2486;
          const cv2487 = v2487;
          const cv2488 = v2717;
          const cv2494 = v2873;
          const cv2495 = v2864;
          
          v2481 = cv2481;
          v2482 = cv2482;
          v2483 = cv2483;
          v2484 = cv2484;
          v2485 = cv2485;
          v2486 = cv2486;
          v2487 = cv2487;
          v2488 = cv2488;
          v2494 = cv2494;
          v2495 = cv2495;
          
          txn3 = txn4;
          continue;}
        else {
          const v2906 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2907 = {
            now: v2845,
            result: v2906
            };
          await txn4.getOutput('claim', 'v2907', ctc12, v2907);
          const v2922 = stdlib.lt(v2845, v2398);
          const v2923 = v2922 ? v2845 : v2398;
          const cv2481 = v2481;
          const cv2482 = v2923;
          const cv2483 = v2483;
          const cv2484 = v2484;
          const cv2485 = v2818;
          const cv2486 = v2486;
          const cv2487 = v2487;
          const cv2488 = v2717;
          const cv2494 = v2494;
          const cv2495 = v2495;
          
          v2481 = cv2481;
          v2482 = cv2482;
          v2483 = cv2483;
          v2484 = cv2484;
          v2485 = cv2485;
          v2486 = cv2486;
          v2487 = cv2487;
          v2488 = cv2488;
          v2494 = cv2494;
          v2495 = cv2495;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'claimFees0_477': {
        const v3215 = v2716[1];
        undefined /* setApiDetails */;
        const v3230 = stdlib.addressEq(v2715, v2392);
        stdlib.assert(v3230, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/index.rsh:509:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:508:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:508:41:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:508:41:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
          msg: 'only beneficiary can claim creation fees',
          who: 'Creator'
          });
        ;
        ;
        ;
        let v3424;
        const v3426 = stdlib.gt(v2717, v2482);
        const v3427 = v3426 ? v2717 : v2482;
        const v3428 = stdlib.lt(v3427, v2398);
        const v3429 = v3428 ? v3427 : v2398;
        const v3430 = stdlib.eq(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:344:53:decimal', stdlib.UInt_max, '0'));
        const v3431 = stdlib.lt(v2483, v3429);
        const v3432 = v3430 ? v3431 : false;
        if (v3432) {
          const v3433 = stdlib.safeSub(v3429, v2483);
          const v3434 = stdlib.cast("UInt", "UInt256", v3433, false, true);
          const v3435 = stdlib.safeMul256(v2441, v3434);
          v3424 = v3435;
          }
        else {
          v3424 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:348:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v3436 = stdlib.safeAdd256(v2484, v3424);
        const v3437 = stdlib.safeDiv256(v3436, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3438 = stdlib.cast("UInt256", "UInt", v3437, false, true);
        const v3439 = stdlib.safeMuldiv(v3438, v2400, v2399);
        const v3440 = stdlib.safeAdd(v2486, v3438);
        const v3443 = stdlib.lt(v3440, v2538);
        const v3444 = v3443 ? v3440 : v2538;
        const v3445 = stdlib.safeAdd(v3439, v2481);
        const v3447 = stdlib.lt(v3445, v2495);
        const v3448 = v3447 ? v3445 : v2495;
        const v3452 = stdlib.sub(v2495, v3448);
        ;
        const v3458 = stdlib.sub(v2538, v3444);
        const v3460 = stdlib.Array_set(v2537, '0', v3458);
        const v3461 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:525:96:application', stdlib.UInt_max, '1'), v3460);
        ;
        const v3465 = [v3444, v3448];
        const v3466 = {
          now: v3427,
          result: v3465
          };
        await txn4.getOutput('claimFees', 'v3466', ctc12, v3466);
        const v3481 = stdlib.cast("UInt", "UInt256", v3438, false, true);
        const v3482 = stdlib.safeMul256(v3481, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3483 = stdlib.safeSub256(v3436, v3482);
        const cv2481 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:534:49:decimal', stdlib.UInt_max, '0');
        const cv2482 = v2482;
        const cv2483 = v3427;
        const cv2484 = v3483;
        const cv2485 = v2485;
        const cv2486 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:533:49:decimal', stdlib.UInt_max, '0');
        const cv2487 = v2487;
        const cv2488 = v2717;
        const cv2494 = v3461;
        const cv2495 = v3452;
        
        v2481 = cv2481;
        v2482 = cv2482;
        v2483 = cv2483;
        v2484 = cv2484;
        v2485 = cv2485;
        v2486 = cv2486;
        v2487 = cv2487;
        v2488 = cv2488;
        v2494 = cv2494;
        v2495 = cv2495;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'stake0_477': {
        const v3711 = v2716[1];
        undefined /* setApiDetails */;
        const v3738 = v3711[stdlib.checkedBigNumberify('./src/contracts/index.rsh:416:22:spread', stdlib.UInt_max, '0')];
        const v3739 = stdlib.safeAdd(v2487, v3738);
        const v3740 = stdlib.lt(v3739, stdlib.UInt_max);
        stdlib.assert(v3740, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/index.rsh:417:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:416:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:416:44:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:416:44:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
          msg: 'maximum stakes has been reached',
          who: 'Creator'
          });
        ;
        const v3797 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0')];
        const v3798 = v3797[stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0')];
        const v3799 = stdlib.add(v3798, v3738);
        const v3801 = stdlib.Array_set(v3797, '0', v3799);
        const v3802 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0'), v3801);
        ;
        ;
        let v3987;
        const v3988 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
        if (v3988) {
          const v3990 = stdlib.gt(v2717, v2482);
          const v3991 = v3990 ? v2717 : v2482;
          const v3992 = stdlib.lt(v3991, v2398);
          const v3993 = v3992 ? v3991 : v2398;
          const v3994 = stdlib.safeSub(v3993, v2482);
          const v3995 = stdlib.cast("UInt", "UInt256", v3994, false, true);
          const v3996 = stdlib.safeMul256(v2441, v3995);
          const v3997 = stdlib.cast("UInt", "UInt256", v2487, false, true);
          const v3998 = stdlib.safeDiv256(v3996, v3997);
          const v3999 = stdlib.safeAdd256(v2485, v3998);
          v3987 = v3999;
          }
        else {
          v3987 = v2485;
          }
        const v4000 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2715), null);
        const v4001 = stdlib.fromSome(v4000, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
        const v4002 = stdlib.cast("UInt", "UInt256", v4001, false, true);
        const v4003 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2715), null);
        const v4004 = stdlib.fromSome(v4003, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4005 = stdlib.safeSub256(v3987, v4004);
        const v4006 = stdlib.safeMul256(v4002, v4005);
        const v4007 = stdlib.safeDiv256(v4006, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4008 = stdlib.cast("UInt256", "UInt", v4007, false, true);
        const v4009 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2715), null);
        const v4010 = stdlib.fromSome(v4009, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
        const v4011 = stdlib.safeAdd(v4008, v4010);
        await stdlib.mapSet(map1, v2715, v4011);
        await stdlib.mapSet(map3, v2715, v3987);
        const v4014 = stdlib.safeAdd(v4001, v3738);
        await stdlib.mapSet(map0, v2715, v4014);
        const v4016 = stdlib.gt(v2717, v2482);
        const v4017 = v4016 ? v2717 : v2482;
        const v4018 = stdlib.lt(v4017, v2398);
        const v4019 = v4018 ? v4017 : v2398;
        await stdlib.mapSet(map2, v2715, v4019);
        const v4024 = {
          now: v4017,
          result: v3738
          };
        await txn4.getOutput('stake', 'v4024', ctc13, v4024);
        let v4040;
        const v4046 = stdlib.eq(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:344:53:decimal', stdlib.UInt_max, '0'));
        const v4047 = stdlib.lt(v2483, v4019);
        const v4048 = v4046 ? v4047 : false;
        if (v4048) {
          const v4049 = stdlib.safeSub(v4019, v2483);
          const v4050 = stdlib.cast("UInt", "UInt256", v4049, false, true);
          const v4051 = stdlib.safeMul256(v2441, v4050);
          v4040 = v4051;
          }
        else {
          v4040 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:348:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v4052 = stdlib.safeAdd256(v2484, v4040);
        const cv2481 = v2481;
        const cv2482 = v4019;
        const cv2483 = v2483;
        const cv2484 = v4052;
        const cv2485 = v3987;
        const cv2486 = v2486;
        const cv2487 = v3739;
        const cv2488 = v2717;
        const cv2494 = v3802;
        const cv2495 = v2495;
        
        v2481 = cv2481;
        v2482 = cv2482;
        v2483 = cv2483;
        v2484 = cv2484;
        v2485 = cv2485;
        v2486 = cv2486;
        v2487 = cv2487;
        v2488 = cv2488;
        v2494 = cv2494;
        v2495 = cv2495;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'unstake0_477': {
        const v4207 = v2716[1];
        undefined /* setApiDetails */;
        const v4248 = v4207[stdlib.checkedBigNumberify('./src/contracts/index.rsh:440:22:spread', stdlib.UInt_max, '0')];
        const v4249 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2715), null);
        const v4250 = stdlib.fromSome(v4249, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
        const v4251 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:441:54:application', stdlib.UInt_max, '0')];
        const v4252 = v4251[stdlib.checkedBigNumberify('./src/contracts/index.rsh:441:54:application', stdlib.UInt_max, '0')];
        const v4253 = stdlib.le(v4250, v4252);
        stdlib.assert(v4253, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/index.rsh:441:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v4255 = stdlib.lt(v4248, stdlib.UInt_max);
        stdlib.assert(v4255, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/index.rsh:442:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
          msg: 'tried to unstake too much really',
          who: 'Creator'
          });
        const v4259 = stdlib.le(v4248, v4250);
        stdlib.assert(v4259, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/index.rsh:443:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'Creator'
          });
        ;
        ;
        ;
        let v4565;
        const v4566 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
        if (v4566) {
          const v4568 = stdlib.gt(v2717, v2482);
          const v4569 = v4568 ? v2717 : v2482;
          const v4570 = stdlib.lt(v4569, v2398);
          const v4571 = v4570 ? v4569 : v2398;
          const v4572 = stdlib.safeSub(v4571, v2482);
          const v4573 = stdlib.cast("UInt", "UInt256", v4572, false, true);
          const v4574 = stdlib.safeMul256(v2441, v4573);
          const v4575 = stdlib.cast("UInt", "UInt256", v2487, false, true);
          const v4576 = stdlib.safeDiv256(v4574, v4575);
          const v4577 = stdlib.safeAdd256(v2485, v4576);
          v4565 = v4577;
          }
        else {
          v4565 = v2485;
          }
        const v4580 = stdlib.cast("UInt", "UInt256", v4250, false, true);
        const v4581 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2715), null);
        const v4582 = stdlib.fromSome(v4581, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4583 = stdlib.safeSub256(v4565, v4582);
        const v4584 = stdlib.safeMul256(v4580, v4583);
        const v4585 = stdlib.safeDiv256(v4584, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4586 = stdlib.cast("UInt256", "UInt", v4585, false, true);
        const v4587 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2715), null);
        const v4588 = stdlib.fromSome(v4587, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
        const v4589 = stdlib.safeAdd(v4586, v4588);
        await stdlib.mapSet(map1, v2715, v4589);
        await stdlib.mapSet(map3, v2715, v4565);
        const v4591 = stdlib.gt(v2717, v2482);
        const v4592 = v4591 ? v2717 : v2482;
        const v4593 = stdlib.gt(v4592, v2398);
        let v4594;
        if (v4593) {
          v4594 = true;
          }
        else {
          const v4595 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2715), null);
          const v4596 = stdlib.fromSome(v4595, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
          const v4597 = stdlib.safeAdd(v4596, v2401);
          const v4598 = stdlib.le(v4597, v4592);
          v4594 = v4598;
          }
        const v4601 = v4594 ? stdlib.checkedBigNumberify('./src/contracts/index.rsh:452:79:decimal', stdlib.UInt_max, '0') : v4589;
        const v4602 = stdlib.safeMuldiv(v4601, v2400, v2399);
        let v4607;
        if (v4593) {
          v4607 = true;
          }
        else {
          const v4608 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2715), null);
          const v4609 = stdlib.fromSome(v4608, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
          const v4610 = stdlib.safeAdd(v4609, v2401);
          const v4611 = stdlib.le(v4610, v4592);
          v4607 = v4611;
          }
        if (v4607) {
          const v4660 = stdlib.safeSub(v4250, v4248);
          await stdlib.mapSet(map0, v2715, v4660);
          const v4666 = stdlib.sub(v4252, v4248);
          const v4668 = stdlib.Array_set(v4251, '0', v4666);
          const v4669 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:462:79:application', stdlib.UInt_max, '0'), v4668);
          ;
          const v4670 = stdlib.safeSub(v2487, v4248);
          const v4674 = stdlib.lt(v4592, v2398);
          const v4675 = v4674 ? v4592 : v2398;
          await stdlib.mapSet(map2, v2715, v4675);
          const v4680 = {
            now: v4592,
            result: v4248
            };
          await txn4.getOutput('unstake', 'v4680', ctc13, v4680);
          const v4695 = stdlib.gt(v4670, stdlib.checkedBigNumberify('./src/contracts/index.rsh:471:66:decimal', stdlib.UInt_max, '0'));
          const v4699 = v4695 ? v2483 : v4592;
          const v4700 = stdlib.safeAdd(v2486, v4601);
          const v4701 = stdlib.safeAdd(v2481, v4602);
          const cv2481 = v4701;
          const cv2482 = v4675;
          const cv2483 = v4699;
          const cv2484 = v2484;
          const cv2485 = v4565;
          const cv2486 = v4700;
          const cv2487 = v4670;
          const cv2488 = v2717;
          const cv2494 = v4669;
          const cv2495 = v2495;
          
          v2481 = cv2481;
          v2482 = cv2482;
          v2483 = cv2483;
          v2484 = cv2484;
          v2485 = cv2485;
          v2486 = cv2486;
          v2487 = cv2487;
          v2488 = cv2488;
          v2494 = cv2494;
          v2495 = cv2495;
          
          txn3 = txn4;
          continue;}
        else {
          await stdlib.mapSet(map1, v2715, stdlib.checkedBigNumberify('./src/contracts/index.rsh:457:65:decimal', stdlib.UInt_max, '0'));
          const v4615 = stdlib.safeSub(v4250, v4248);
          await stdlib.mapSet(map0, v2715, v4615);
          const v4621 = stdlib.sub(v4252, v4248);
          const v4623 = stdlib.Array_set(v4251, '0', v4621);
          const v4624 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:462:79:application', stdlib.UInt_max, '0'), v4623);
          ;
          const v4625 = stdlib.safeSub(v2487, v4248);
          const v4629 = stdlib.lt(v4592, v2398);
          const v4630 = v4629 ? v4592 : v2398;
          await stdlib.mapSet(map2, v2715, v4630);
          const v4635 = {
            now: v4592,
            result: v4248
            };
          await txn4.getOutput('unstake', 'v4635', ctc13, v4635);
          const v4650 = stdlib.gt(v4625, stdlib.checkedBigNumberify('./src/contracts/index.rsh:471:66:decimal', stdlib.UInt_max, '0'));
          const v4654 = v4650 ? v2483 : v4592;
          const v4655 = stdlib.safeAdd(v2486, v4601);
          const v4656 = stdlib.safeAdd(v2481, v4602);
          const cv2481 = v4656;
          const cv2482 = v4630;
          const cv2483 = v4654;
          const cv2484 = v2484;
          const cv2485 = v4565;
          const cv2486 = v4655;
          const cv2487 = v4625;
          const cv2488 = v2717;
          const cv2494 = v4624;
          const cv2495 = v2495;
          
          v2481 = cv2481;
          v2482 = cv2482;
          v2483 = cv2483;
          v2484 = cv2484;
          v2485 = cv2485;
          v2486 = cv2486;
          v2487 = cv2487;
          v2488 = cv2488;
          v2494 = cv2494;
          v2495 = cv2495;
          
          txn3 = txn4;
          continue;}
        break;
        }
      }
    
    }
  const v4703 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
  const v4704 = v4703[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
  const v4705 = stdlib.le(v2486, v4704);
  stdlib.assert(v4705, {
    at: './src/contracts/index.rsh:318:32:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
  const v4707 = stdlib.le(v2481, v2495);
  stdlib.assert(v4707, {
    at: './src/contracts/index.rsh:319:32:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
  return;
  
  
  
  
  };
export async function User(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    claim0_477: ctc7,
    claimFees0_477: ctc7,
    stake0_477: ctc8,
    unstake0_477: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Struct([['now', ctc1], ['result', ctc10]]);
  const ctc12 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  
  const v2340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2341 = [v2340, v2340];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 10,
    funcNum: 0,
    out_tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401], secs: v2403, time: v2402, didSend: v213, from: v2391 } = txn1;
  const v2404 = v2341[stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0')];
  const v2405 = stdlib.Array_set(v2404, '0', stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0'));
  const v2406 = stdlib.Array_set(v2341, stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0'), v2405);
  const v2408 = v2406[stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '1')];
  const v2409 = stdlib.Array_set(v2408, '0', stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '0'));
  const v2410 = stdlib.Array_set(v2406, stdlib.checkedBigNumberify('./src/contracts/index.rsh:199:17:dot', stdlib.UInt_max, '1'), v2409);
  const v2412 = stdlib.tokenEq(v2396, v2395);
  const v2413 = v2412 ? false : true;
  stdlib.assert(v2413, {
    at: './src/contracts/index.rsh:199:17:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  ;
  ;
  ;
  const v2415 = stdlib.tokenEq(v2395, v2396);
  const v2416 = v2415 ? false : true;
  stdlib.assert(v2416, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:133:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: 'Reach requires all tokens to be different. Consider using distribution contract instead.',
    who: 'User'
    });
  const v2418 = stdlib.safeMul(v2393, stdlib.checkedBigNumberify('./src/contracts/index.rsh:138:37:decimal', stdlib.UInt_max, '5'));
  const v2419 = stdlib.le(v2418, stdlib.checkedBigNumberify('./src/contracts/index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2419, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:138:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'User'
    });
  const v2421 = stdlib.le(v2394, stdlib.checkedBigNumberify('./src/contracts/index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2421, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:140:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'User'
    });
  const v2423 = stdlib.lt(v2397, v2398);
  stdlib.assert(v2423, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:145:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2425 = stdlib.safeSub(v2398, v2397);
  const v2426 = stdlib.lt(v2425, stdlib.checkedBigNumberify('./src/contracts/index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2426, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:147:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2428 = stdlib.lt(v2401, stdlib.checkedBigNumberify('./src/contracts/index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2428, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:148:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2431 = stdlib.le(v2401, v2425);
  stdlib.assert(v2431, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:150:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2433 = stdlib.gt(v2399, stdlib.checkedBigNumberify('./src/contracts/index.rsh:155:43:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2433, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:155:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:212:22:application call to "initialChecks" (defined at: ./src/contracts/index.rsh:132:11:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2437 = stdlib.cast("UInt", "UInt256", v2399, false, true);
  const v2438 = stdlib.safeMul256(v2437, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
  const v2440 = stdlib.cast("UInt", "UInt256", v2425, false, true);
  const v2441 = stdlib.safeDiv256(v2438, v2440);
  const v2442 = stdlib.safeMul(v2399, v2393);
  const v2443 = stdlib.safeDiv(v2442, stdlib.checkedBigNumberify('./src/contracts/index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2444 = stdlib.safeMul(v2400, v2393);
  const v2445 = stdlib.safeDiv(v2444, stdlib.checkedBigNumberify('./src/contracts/index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2451, time: v2450, didSend: v387, from: v2449 } = txn2;
  const v2452 = stdlib.safeAdd(v2400, v2445);
  const v2453 = stdlib.safeAdd(v2452, v2394);
  const v2454 = stdlib.safeAdd(v2399, v2443);
  ;
  const v2457 = v2410[stdlib.checkedBigNumberify('./src/contracts/index.rsh:233:17:dot', stdlib.UInt_max, '1')];
  const v2458 = v2457[stdlib.checkedBigNumberify('./src/contracts/index.rsh:233:17:dot', stdlib.UInt_max, '0')];
  const v2459 = stdlib.add(v2458, v2454);
  const v2461 = stdlib.Array_set(v2457, '0', v2459);
  const v2462 = stdlib.Array_set(v2410, stdlib.checkedBigNumberify('./src/contracts/index.rsh:233:17:dot', stdlib.UInt_max, '1'), v2461);
  ;
  const v2463 = stdlib.addressEq(v2391, v2449);
  stdlib.assert(v2463, {
    at: './src/contracts/index.rsh:233:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './src/contracts/index.rsh:253:34:application',
    fs: ['at ./src/contracts/index.rsh:252:13:application call to [unknown function] (defined at: ./src/contracts/index.rsh:252:34:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  const v2480 = stdlib.safeAdd(v2445, v2394);
  let v2481 = v2480;
  let v2482 = v2397;
  let v2483 = v2397;
  let v2484 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:313:25:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2485 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:311:25:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2486 = v2443;
  let v2487 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:309:17:decimal', stdlib.UInt_max, '0');
  let v2488 = v2450;
  let v2494 = v2462;
  let v2495 = v2453;
  
  let txn3 = txn2;
  while (await (async () => {
    const v2532 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
    const v2533 = v2532[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
    const v2534 = stdlib.le(v2486, v2533);
    stdlib.assert(v2534, {
      at: './src/contracts/index.rsh:318:32:application',
      fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
      msg: null,
      who: 'User'
      });
    const v2536 = stdlib.le(v2481, v2495);
    stdlib.assert(v2536, {
      at: './src/contracts/index.rsh:319:32:application',
      fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
      msg: null,
      who: 'User'
      });
    
    return true;})()) {
    const v2537 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
    const v2538 = v2537[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
    const v2539 = stdlib.le(v2486, v2538);
    stdlib.assert(v2539, {
      at: './src/contracts/index.rsh:318:32:application',
      fs: [],
      msg: null,
      who: 'User'
      });
    const v2541 = stdlib.le(v2481, v2495);
    stdlib.assert(v2541, {
      at: './src/contracts/index.rsh:319:32:application',
      fs: [],
      msg: null,
      who: 'User'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2716], secs: v2718, time: v2717, didSend: v1687, from: v2715 } = txn4;
    switch (v2716[0]) {
      case 'claim0_477': {
        const v2719 = v2716[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        let v2818;
        const v2819 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
        if (v2819) {
          const v2821 = stdlib.gt(v2717, v2482);
          const v2822 = v2821 ? v2717 : v2482;
          const v2823 = stdlib.lt(v2822, v2398);
          const v2824 = v2823 ? v2822 : v2398;
          const v2825 = stdlib.safeSub(v2824, v2482);
          const v2826 = stdlib.cast("UInt", "UInt256", v2825, false, true);
          const v2827 = stdlib.safeMul256(v2441, v2826);
          const v2828 = stdlib.cast("UInt", "UInt256", v2487, false, true);
          const v2829 = stdlib.safeDiv256(v2827, v2828);
          const v2830 = stdlib.safeAdd256(v2485, v2829);
          v2818 = v2830;
          }
        else {
          v2818 = v2485;
          }
        const v2831 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2715), null);
        const v2832 = stdlib.fromSome(v2831, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
        const v2833 = stdlib.cast("UInt", "UInt256", v2832, false, true);
        const v2834 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2715), null);
        const v2835 = stdlib.fromSome(v2834, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2836 = stdlib.safeSub256(v2818, v2835);
        const v2837 = stdlib.safeMul256(v2833, v2836);
        const v2838 = stdlib.safeDiv256(v2837, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2839 = stdlib.cast("UInt256", "UInt", v2838, false, true);
        const v2840 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2715), null);
        const v2841 = stdlib.fromSome(v2840, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
        const v2842 = stdlib.safeAdd(v2839, v2841);
        await stdlib.mapSet(map1, v2715, v2842);
        await stdlib.mapSet(map3, v2715, v2818);
        const v2844 = stdlib.gt(v2717, v2482);
        const v2845 = v2844 ? v2717 : v2482;
        const v2846 = stdlib.gt(v2845, v2398);
        let v2847;
        if (v2846) {
          v2847 = true;
          }
        else {
          const v2848 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2715), null);
          const v2849 = stdlib.fromSome(v2848, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
          const v2850 = stdlib.safeAdd(v2849, v2401);
          const v2851 = stdlib.le(v2850, v2845);
          v2847 = v2851;
          }
        if (v2847) {
          const v2854 = stdlib.safeMuldiv(v2842, v2400, v2399);
          await stdlib.mapSet(map1, v2715, stdlib.checkedBigNumberify('./src/contracts/index.rsh:289:30:decimal', stdlib.UInt_max, '0'));
          const v2857 = stdlib.le(v2842, v2538);
          const v2859 = stdlib.le(v2854, v2495);
          const v2860 = v2857 ? v2859 : false;
          stdlib.assert(v2860, {
            at: './src/contracts/index.rsh:292:24:application',
            fs: ['at ./src/contracts/index.rsh:487:102:application call to "claimRewards" (defined at: ./src/contracts/index.rsh:285:34:function exp)', 'at ./src/contracts/index.rsh:482:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:482:44:function exp)'],
            msg: null,
            who: 'User'
            });
          const v2864 = stdlib.sub(v2495, v2854);
          ;
          const v2870 = stdlib.sub(v2538, v2842);
          const v2872 = stdlib.Array_set(v2537, '0', v2870);
          const v2873 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:295:77:application', stdlib.UInt_max, '1'), v2872);
          ;
          const v2874 = [v2842, v2854];
          const v2878 = stdlib.lt(v2845, v2398);
          const v2879 = v2878 ? v2845 : v2398;
          await stdlib.mapSet(map2, v2715, v2879);
          const v2885 = {
            now: v2845,
            result: v2874
            };
          await txn4.getOutput('claim', 'v2885', ctc11, v2885);
          const cv2481 = v2481;
          const cv2482 = v2879;
          const cv2483 = v2483;
          const cv2484 = v2484;
          const cv2485 = v2818;
          const cv2486 = v2486;
          const cv2487 = v2487;
          const cv2488 = v2717;
          const cv2494 = v2873;
          const cv2495 = v2864;
          
          v2481 = cv2481;
          v2482 = cv2482;
          v2483 = cv2483;
          v2484 = cv2484;
          v2485 = cv2485;
          v2486 = cv2486;
          v2487 = cv2487;
          v2488 = cv2488;
          v2494 = cv2494;
          v2495 = cv2495;
          
          txn3 = txn4;
          continue;}
        else {
          const v2906 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2907 = {
            now: v2845,
            result: v2906
            };
          await txn4.getOutput('claim', 'v2907', ctc11, v2907);
          const v2922 = stdlib.lt(v2845, v2398);
          const v2923 = v2922 ? v2845 : v2398;
          const cv2481 = v2481;
          const cv2482 = v2923;
          const cv2483 = v2483;
          const cv2484 = v2484;
          const cv2485 = v2818;
          const cv2486 = v2486;
          const cv2487 = v2487;
          const cv2488 = v2717;
          const cv2494 = v2494;
          const cv2495 = v2495;
          
          v2481 = cv2481;
          v2482 = cv2482;
          v2483 = cv2483;
          v2484 = cv2484;
          v2485 = cv2485;
          v2486 = cv2486;
          v2487 = cv2487;
          v2488 = cv2488;
          v2494 = cv2494;
          v2495 = cv2495;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'claimFees0_477': {
        const v3215 = v2716[1];
        undefined /* setApiDetails */;
        const v3230 = stdlib.addressEq(v2715, v2392);
        stdlib.assert(v3230, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/index.rsh:509:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:508:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:508:41:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:508:41:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
          msg: 'only beneficiary can claim creation fees',
          who: 'User'
          });
        ;
        ;
        ;
        let v3424;
        const v3426 = stdlib.gt(v2717, v2482);
        const v3427 = v3426 ? v2717 : v2482;
        const v3428 = stdlib.lt(v3427, v2398);
        const v3429 = v3428 ? v3427 : v2398;
        const v3430 = stdlib.eq(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:344:53:decimal', stdlib.UInt_max, '0'));
        const v3431 = stdlib.lt(v2483, v3429);
        const v3432 = v3430 ? v3431 : false;
        if (v3432) {
          const v3433 = stdlib.safeSub(v3429, v2483);
          const v3434 = stdlib.cast("UInt", "UInt256", v3433, false, true);
          const v3435 = stdlib.safeMul256(v2441, v3434);
          v3424 = v3435;
          }
        else {
          v3424 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:348:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v3436 = stdlib.safeAdd256(v2484, v3424);
        const v3437 = stdlib.safeDiv256(v3436, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3438 = stdlib.cast("UInt256", "UInt", v3437, false, true);
        const v3439 = stdlib.safeMuldiv(v3438, v2400, v2399);
        const v3440 = stdlib.safeAdd(v2486, v3438);
        const v3443 = stdlib.lt(v3440, v2538);
        const v3444 = v3443 ? v3440 : v2538;
        const v3445 = stdlib.safeAdd(v3439, v2481);
        const v3447 = stdlib.lt(v3445, v2495);
        const v3448 = v3447 ? v3445 : v2495;
        const v3452 = stdlib.sub(v2495, v3448);
        ;
        const v3458 = stdlib.sub(v2538, v3444);
        const v3460 = stdlib.Array_set(v2537, '0', v3458);
        const v3461 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:525:96:application', stdlib.UInt_max, '1'), v3460);
        ;
        const v3465 = [v3444, v3448];
        const v3466 = {
          now: v3427,
          result: v3465
          };
        await txn4.getOutput('claimFees', 'v3466', ctc11, v3466);
        const v3481 = stdlib.cast("UInt", "UInt256", v3438, false, true);
        const v3482 = stdlib.safeMul256(v3481, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3483 = stdlib.safeSub256(v3436, v3482);
        const cv2481 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:534:49:decimal', stdlib.UInt_max, '0');
        const cv2482 = v2482;
        const cv2483 = v3427;
        const cv2484 = v3483;
        const cv2485 = v2485;
        const cv2486 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:533:49:decimal', stdlib.UInt_max, '0');
        const cv2487 = v2487;
        const cv2488 = v2717;
        const cv2494 = v3461;
        const cv2495 = v3452;
        
        v2481 = cv2481;
        v2482 = cv2482;
        v2483 = cv2483;
        v2484 = cv2484;
        v2485 = cv2485;
        v2486 = cv2486;
        v2487 = cv2487;
        v2488 = cv2488;
        v2494 = cv2494;
        v2495 = cv2495;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'stake0_477': {
        const v3711 = v2716[1];
        undefined /* setApiDetails */;
        const v3738 = v3711[stdlib.checkedBigNumberify('./src/contracts/index.rsh:416:22:spread', stdlib.UInt_max, '0')];
        const v3739 = stdlib.safeAdd(v2487, v3738);
        const v3740 = stdlib.lt(v3739, stdlib.UInt_max);
        stdlib.assert(v3740, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/index.rsh:417:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:416:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:416:44:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:416:44:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
          msg: 'maximum stakes has been reached',
          who: 'User'
          });
        ;
        const v3797 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0')];
        const v3798 = v3797[stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0')];
        const v3799 = stdlib.add(v3798, v3738);
        const v3801 = stdlib.Array_set(v3797, '0', v3799);
        const v3802 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0'), v3801);
        ;
        ;
        let v3987;
        const v3988 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
        if (v3988) {
          const v3990 = stdlib.gt(v2717, v2482);
          const v3991 = v3990 ? v2717 : v2482;
          const v3992 = stdlib.lt(v3991, v2398);
          const v3993 = v3992 ? v3991 : v2398;
          const v3994 = stdlib.safeSub(v3993, v2482);
          const v3995 = stdlib.cast("UInt", "UInt256", v3994, false, true);
          const v3996 = stdlib.safeMul256(v2441, v3995);
          const v3997 = stdlib.cast("UInt", "UInt256", v2487, false, true);
          const v3998 = stdlib.safeDiv256(v3996, v3997);
          const v3999 = stdlib.safeAdd256(v2485, v3998);
          v3987 = v3999;
          }
        else {
          v3987 = v2485;
          }
        const v4000 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2715), null);
        const v4001 = stdlib.fromSome(v4000, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
        const v4002 = stdlib.cast("UInt", "UInt256", v4001, false, true);
        const v4003 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2715), null);
        const v4004 = stdlib.fromSome(v4003, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4005 = stdlib.safeSub256(v3987, v4004);
        const v4006 = stdlib.safeMul256(v4002, v4005);
        const v4007 = stdlib.safeDiv256(v4006, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4008 = stdlib.cast("UInt256", "UInt", v4007, false, true);
        const v4009 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2715), null);
        const v4010 = stdlib.fromSome(v4009, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
        const v4011 = stdlib.safeAdd(v4008, v4010);
        await stdlib.mapSet(map1, v2715, v4011);
        await stdlib.mapSet(map3, v2715, v3987);
        const v4014 = stdlib.safeAdd(v4001, v3738);
        await stdlib.mapSet(map0, v2715, v4014);
        const v4016 = stdlib.gt(v2717, v2482);
        const v4017 = v4016 ? v2717 : v2482;
        const v4018 = stdlib.lt(v4017, v2398);
        const v4019 = v4018 ? v4017 : v2398;
        await stdlib.mapSet(map2, v2715, v4019);
        const v4024 = {
          now: v4017,
          result: v3738
          };
        await txn4.getOutput('stake', 'v4024', ctc12, v4024);
        let v4040;
        const v4046 = stdlib.eq(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:344:53:decimal', stdlib.UInt_max, '0'));
        const v4047 = stdlib.lt(v2483, v4019);
        const v4048 = v4046 ? v4047 : false;
        if (v4048) {
          const v4049 = stdlib.safeSub(v4019, v2483);
          const v4050 = stdlib.cast("UInt", "UInt256", v4049, false, true);
          const v4051 = stdlib.safeMul256(v2441, v4050);
          v4040 = v4051;
          }
        else {
          v4040 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:348:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v4052 = stdlib.safeAdd256(v2484, v4040);
        const cv2481 = v2481;
        const cv2482 = v4019;
        const cv2483 = v2483;
        const cv2484 = v4052;
        const cv2485 = v3987;
        const cv2486 = v2486;
        const cv2487 = v3739;
        const cv2488 = v2717;
        const cv2494 = v3802;
        const cv2495 = v2495;
        
        v2481 = cv2481;
        v2482 = cv2482;
        v2483 = cv2483;
        v2484 = cv2484;
        v2485 = cv2485;
        v2486 = cv2486;
        v2487 = cv2487;
        v2488 = cv2488;
        v2494 = cv2494;
        v2495 = cv2495;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'unstake0_477': {
        const v4207 = v2716[1];
        undefined /* setApiDetails */;
        const v4248 = v4207[stdlib.checkedBigNumberify('./src/contracts/index.rsh:440:22:spread', stdlib.UInt_max, '0')];
        const v4249 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2715), null);
        const v4250 = stdlib.fromSome(v4249, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
        const v4251 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:441:54:application', stdlib.UInt_max, '0')];
        const v4252 = v4251[stdlib.checkedBigNumberify('./src/contracts/index.rsh:441:54:application', stdlib.UInt_max, '0')];
        const v4253 = stdlib.le(v4250, v4252);
        stdlib.assert(v4253, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/index.rsh:441:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
          msg: null,
          who: 'User'
          });
        const v4255 = stdlib.lt(v4248, stdlib.UInt_max);
        stdlib.assert(v4255, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/index.rsh:442:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
          msg: 'tried to unstake too much really',
          who: 'User'
          });
        const v4259 = stdlib.le(v4248, v4250);
        stdlib.assert(v4259, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/index.rsh:443:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'User'
          });
        ;
        ;
        ;
        let v4565;
        const v4566 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
        if (v4566) {
          const v4568 = stdlib.gt(v2717, v2482);
          const v4569 = v4568 ? v2717 : v2482;
          const v4570 = stdlib.lt(v4569, v2398);
          const v4571 = v4570 ? v4569 : v2398;
          const v4572 = stdlib.safeSub(v4571, v2482);
          const v4573 = stdlib.cast("UInt", "UInt256", v4572, false, true);
          const v4574 = stdlib.safeMul256(v2441, v4573);
          const v4575 = stdlib.cast("UInt", "UInt256", v2487, false, true);
          const v4576 = stdlib.safeDiv256(v4574, v4575);
          const v4577 = stdlib.safeAdd256(v2485, v4576);
          v4565 = v4577;
          }
        else {
          v4565 = v2485;
          }
        const v4580 = stdlib.cast("UInt", "UInt256", v4250, false, true);
        const v4581 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2715), null);
        const v4582 = stdlib.fromSome(v4581, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4583 = stdlib.safeSub256(v4565, v4582);
        const v4584 = stdlib.safeMul256(v4580, v4583);
        const v4585 = stdlib.safeDiv256(v4584, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4586 = stdlib.cast("UInt256", "UInt", v4585, false, true);
        const v4587 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2715), null);
        const v4588 = stdlib.fromSome(v4587, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
        const v4589 = stdlib.safeAdd(v4586, v4588);
        await stdlib.mapSet(map1, v2715, v4589);
        await stdlib.mapSet(map3, v2715, v4565);
        const v4591 = stdlib.gt(v2717, v2482);
        const v4592 = v4591 ? v2717 : v2482;
        const v4593 = stdlib.gt(v4592, v2398);
        let v4594;
        if (v4593) {
          v4594 = true;
          }
        else {
          const v4595 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2715), null);
          const v4596 = stdlib.fromSome(v4595, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
          const v4597 = stdlib.safeAdd(v4596, v2401);
          const v4598 = stdlib.le(v4597, v4592);
          v4594 = v4598;
          }
        const v4601 = v4594 ? stdlib.checkedBigNumberify('./src/contracts/index.rsh:452:79:decimal', stdlib.UInt_max, '0') : v4589;
        const v4602 = stdlib.safeMuldiv(v4601, v2400, v2399);
        let v4607;
        if (v4593) {
          v4607 = true;
          }
        else {
          const v4608 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2715), null);
          const v4609 = stdlib.fromSome(v4608, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
          const v4610 = stdlib.safeAdd(v4609, v2401);
          const v4611 = stdlib.le(v4610, v4592);
          v4607 = v4611;
          }
        if (v4607) {
          const v4660 = stdlib.safeSub(v4250, v4248);
          await stdlib.mapSet(map0, v2715, v4660);
          const v4666 = stdlib.sub(v4252, v4248);
          const v4668 = stdlib.Array_set(v4251, '0', v4666);
          const v4669 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:462:79:application', stdlib.UInt_max, '0'), v4668);
          ;
          const v4670 = stdlib.safeSub(v2487, v4248);
          const v4674 = stdlib.lt(v4592, v2398);
          const v4675 = v4674 ? v4592 : v2398;
          await stdlib.mapSet(map2, v2715, v4675);
          const v4680 = {
            now: v4592,
            result: v4248
            };
          await txn4.getOutput('unstake', 'v4680', ctc12, v4680);
          const v4695 = stdlib.gt(v4670, stdlib.checkedBigNumberify('./src/contracts/index.rsh:471:66:decimal', stdlib.UInt_max, '0'));
          const v4699 = v4695 ? v2483 : v4592;
          const v4700 = stdlib.safeAdd(v2486, v4601);
          const v4701 = stdlib.safeAdd(v2481, v4602);
          const cv2481 = v4701;
          const cv2482 = v4675;
          const cv2483 = v4699;
          const cv2484 = v2484;
          const cv2485 = v4565;
          const cv2486 = v4700;
          const cv2487 = v4670;
          const cv2488 = v2717;
          const cv2494 = v4669;
          const cv2495 = v2495;
          
          v2481 = cv2481;
          v2482 = cv2482;
          v2483 = cv2483;
          v2484 = cv2484;
          v2485 = cv2485;
          v2486 = cv2486;
          v2487 = cv2487;
          v2488 = cv2488;
          v2494 = cv2494;
          v2495 = cv2495;
          
          txn3 = txn4;
          continue;}
        else {
          await stdlib.mapSet(map1, v2715, stdlib.checkedBigNumberify('./src/contracts/index.rsh:457:65:decimal', stdlib.UInt_max, '0'));
          const v4615 = stdlib.safeSub(v4250, v4248);
          await stdlib.mapSet(map0, v2715, v4615);
          const v4621 = stdlib.sub(v4252, v4248);
          const v4623 = stdlib.Array_set(v4251, '0', v4621);
          const v4624 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:462:79:application', stdlib.UInt_max, '0'), v4623);
          ;
          const v4625 = stdlib.safeSub(v2487, v4248);
          const v4629 = stdlib.lt(v4592, v2398);
          const v4630 = v4629 ? v4592 : v2398;
          await stdlib.mapSet(map2, v2715, v4630);
          const v4635 = {
            now: v4592,
            result: v4248
            };
          await txn4.getOutput('unstake', 'v4635', ctc12, v4635);
          const v4650 = stdlib.gt(v4625, stdlib.checkedBigNumberify('./src/contracts/index.rsh:471:66:decimal', stdlib.UInt_max, '0'));
          const v4654 = v4650 ? v2483 : v4592;
          const v4655 = stdlib.safeAdd(v2486, v4601);
          const v4656 = stdlib.safeAdd(v2481, v4602);
          const cv2481 = v4656;
          const cv2482 = v4630;
          const cv2483 = v4654;
          const cv2484 = v2484;
          const cv2485 = v4565;
          const cv2486 = v4655;
          const cv2487 = v4625;
          const cv2488 = v2717;
          const cv2494 = v4624;
          const cv2495 = v2495;
          
          v2481 = cv2481;
          v2482 = cv2482;
          v2483 = cv2483;
          v2484 = cv2484;
          v2485 = cv2485;
          v2486 = cv2486;
          v2487 = cv2487;
          v2488 = cv2488;
          v2494 = cv2494;
          v2495 = cv2495;
          
          txn3 = txn4;
          continue;}
        break;
        }
      }
    
    }
  const v4703 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
  const v4704 = v4703[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
  const v4705 = stdlib.le(v2486, v4704);
  stdlib.assert(v4705, {
    at: './src/contracts/index.rsh:318:32:application',
    fs: [],
    msg: null,
    who: 'User'
    });
  const v4707 = stdlib.le(v2481, v2495);
  stdlib.assert(v4707, {
    at: './src/contracts/index.rsh:319:32:application',
    fs: [],
    msg: null,
    who: 'User'
    });
  return;
  
  
  
  
  };
export async function _claim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    claim0_477: ctc10,
    claimFees0_477: ctc10,
    stake0_477: ctc11,
    unstake0_477: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Struct([['now', ctc1], ['result', ctc13]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2584 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:479:37:application call to [unknown function] (defined at: ./src/contracts/index.rsh:479:37:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to "runclaim0_477" (defined at: ./src/contracts/index.rsh:479:22:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v2588 = ['claim0_477', v2584];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538, v2588],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:481:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/index.rsh:481:38:decimal', stdlib.UInt_max, '0'), v2395], [stdlib.checkedBigNumberify('./src/contracts/index.rsh:481:55:decimal', stdlib.UInt_max, '0'), v2396]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2716], secs: v2718, time: v2717, didSend: v1687, from: v2715 } = txn1;
      
      switch (v2716[0]) {
        case 'claim0_477': {
          const v2719 = v2716[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          ;
          ;
          let v2818;
          const v2819 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
          if (v2819) {
            const v2821 = stdlib.gt(v2717, v2482);
            const v2822 = v2821 ? v2717 : v2482;
            const v2823 = stdlib.lt(v2822, v2398);
            const v2824 = v2823 ? v2822 : v2398;
            const v2825 = stdlib.safeSub(v2824, v2482);
            const v2826 = stdlib.cast("UInt", "UInt256", v2825, false, true);
            const v2827 = stdlib.safeMul256(v2441, v2826);
            const v2828 = stdlib.cast("UInt", "UInt256", v2487, false, true);
            const v2829 = stdlib.safeDiv256(v2827, v2828);
            const v2830 = stdlib.safeAdd256(v2485, v2829);
            v2818 = v2830;
            }
          else {
            v2818 = v2485;
            }
          const v2831 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2715), null);
          const v2832 = stdlib.fromSome(v2831, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
          const v2833 = stdlib.cast("UInt", "UInt256", v2832, false, true);
          const v2834 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2715), null);
          const v2835 = stdlib.fromSome(v2834, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2836 = stdlib.safeSub256(v2818, v2835);
          const v2837 = stdlib.safeMul256(v2833, v2836);
          const v2838 = stdlib.safeDiv256(v2837, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v2839 = stdlib.cast("UInt256", "UInt", v2838, false, true);
          const v2840 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2715), null);
          const v2841 = stdlib.fromSome(v2840, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
          const v2842 = stdlib.safeAdd(v2839, v2841);
          await stdlib.simMapSet(sim_r, 1, v2715, v2842);
          await stdlib.simMapSet(sim_r, 3, v2715, v2818);
          const v2844 = stdlib.gt(v2717, v2482);
          const v2845 = v2844 ? v2717 : v2482;
          const v2846 = stdlib.gt(v2845, v2398);
          let v2847;
          if (v2846) {
            v2847 = true;
            }
          else {
            const v2848 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2715), null);
            const v2849 = stdlib.fromSome(v2848, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
            const v2850 = stdlib.safeAdd(v2849, v2401);
            const v2851 = stdlib.le(v2850, v2845);
            v2847 = v2851;
            }
          if (v2847) {
            const v2854 = stdlib.safeMuldiv(v2842, v2400, v2399);
            await stdlib.simMapSet(sim_r, 1, v2715, stdlib.checkedBigNumberify('./src/contracts/index.rsh:289:30:decimal', stdlib.UInt_max, '0'));
            const v2864 = stdlib.sub(v2495, v2854);
            sim_r.txns.push({
              kind: 'from',
              to: v2715,
              tok: undefined /* Nothing */
              });
            const v2870 = stdlib.sub(v2538, v2842);
            const v2872 = stdlib.Array_set(v2537, '0', v2870);
            const v2873 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:295:77:application', stdlib.UInt_max, '1'), v2872);
            sim_r.txns.push({
              kind: 'from',
              to: v2715,
              tok: v2396
              });
            const v2874 = [v2842, v2854];
            const v2878 = stdlib.lt(v2845, v2398);
            const v2879 = v2878 ? v2845 : v2398;
            await stdlib.simMapSet(sim_r, 2, v2715, v2879);
            const v2885 = {
              now: v2845,
              result: v2874
              };
            const v2888 = await txn1.getOutput('claim', 'v2885', ctc14, v2885);
            
            const v8513 = v2481;
            const v8514 = v2879;
            const v8515 = v2483;
            const v8516 = v2484;
            const v8517 = v2818;
            const v8518 = v2486;
            const v8519 = v2487;
            const v8521 = v2873;
            const v8522 = v2864;
            sim_r.isHalt = false;
            }
          else {
            const v2906 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v2907 = {
              now: v2845,
              result: v2906
              };
            const v2910 = await txn1.getOutput('claim', 'v2907', ctc14, v2907);
            
            const v2922 = stdlib.lt(v2845, v2398);
            const v2923 = v2922 ? v2845 : v2398;
            const v8535 = v2481;
            const v8536 = v2923;
            const v8537 = v2483;
            const v8538 = v2484;
            const v8539 = v2818;
            const v8540 = v2486;
            const v8541 = v2487;
            const v8543 = v2494;
            const v8544 = v2495;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'claimFees0_477': {
          const v3215 = v2716[1];
          
          break;
          }
        case 'stake0_477': {
          const v3711 = v2716[1];
          
          break;
          }
        case 'unstake0_477': {
          const v4207 = v2716[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2716], secs: v2718, time: v2717, didSend: v1687, from: v2715 } = txn1;
  switch (v2716[0]) {
    case 'claim0_477': {
      const v2719 = v2716[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      let v2818;
      const v2819 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
      if (v2819) {
        const v2821 = stdlib.gt(v2717, v2482);
        const v2822 = v2821 ? v2717 : v2482;
        const v2823 = stdlib.lt(v2822, v2398);
        const v2824 = v2823 ? v2822 : v2398;
        const v2825 = stdlib.safeSub(v2824, v2482);
        const v2826 = stdlib.cast("UInt", "UInt256", v2825, false, true);
        const v2827 = stdlib.safeMul256(v2441, v2826);
        const v2828 = stdlib.cast("UInt", "UInt256", v2487, false, true);
        const v2829 = stdlib.safeDiv256(v2827, v2828);
        const v2830 = stdlib.safeAdd256(v2485, v2829);
        v2818 = v2830;
        }
      else {
        v2818 = v2485;
        }
      const v2831 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2715), null);
      const v2832 = stdlib.fromSome(v2831, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
      const v2833 = stdlib.cast("UInt", "UInt256", v2832, false, true);
      const v2834 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2715), null);
      const v2835 = stdlib.fromSome(v2834, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2836 = stdlib.safeSub256(v2818, v2835);
      const v2837 = stdlib.safeMul256(v2833, v2836);
      const v2838 = stdlib.safeDiv256(v2837, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v2839 = stdlib.cast("UInt256", "UInt", v2838, false, true);
      const v2840 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2715), null);
      const v2841 = stdlib.fromSome(v2840, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
      const v2842 = stdlib.safeAdd(v2839, v2841);
      await stdlib.mapSet(map1, v2715, v2842);
      await stdlib.mapSet(map3, v2715, v2818);
      const v2844 = stdlib.gt(v2717, v2482);
      const v2845 = v2844 ? v2717 : v2482;
      const v2846 = stdlib.gt(v2845, v2398);
      let v2847;
      if (v2846) {
        v2847 = true;
        }
      else {
        const v2848 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2715), null);
        const v2849 = stdlib.fromSome(v2848, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
        const v2850 = stdlib.safeAdd(v2849, v2401);
        const v2851 = stdlib.le(v2850, v2845);
        v2847 = v2851;
        }
      if (v2847) {
        const v2854 = stdlib.safeMuldiv(v2842, v2400, v2399);
        await stdlib.mapSet(map1, v2715, stdlib.checkedBigNumberify('./src/contracts/index.rsh:289:30:decimal', stdlib.UInt_max, '0'));
        const v2857 = stdlib.le(v2842, v2538);
        const v2859 = stdlib.le(v2854, v2495);
        const v2860 = v2857 ? v2859 : false;
        stdlib.assert(v2860, {
          at: './src/contracts/index.rsh:292:24:application',
          fs: ['at ./src/contracts/index.rsh:487:102:application call to "claimRewards" (defined at: ./src/contracts/index.rsh:285:34:function exp)', 'at ./src/contracts/index.rsh:482:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:482:44:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v2864 = stdlib.sub(v2495, v2854);
        ;
        const v2870 = stdlib.sub(v2538, v2842);
        const v2872 = stdlib.Array_set(v2537, '0', v2870);
        const v2873 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:295:77:application', stdlib.UInt_max, '1'), v2872);
        ;
        const v2874 = [v2842, v2854];
        const v2878 = stdlib.lt(v2845, v2398);
        const v2879 = v2878 ? v2845 : v2398;
        await stdlib.mapSet(map2, v2715, v2879);
        const v2885 = {
          now: v2845,
          result: v2874
          };
        const v2888 = await txn1.getOutput('claim', 'v2885', ctc14, v2885);
        if (v1687) {
          stdlib.protect(ctc0, await interact.out(v2719, v2888), {
            at: './src/contracts/index.rsh:479:23:application',
            fs: ['at ./src/contracts/index.rsh:479:23:application call to [unknown function] (defined at: ./src/contracts/index.rsh:479:23:function exp)', 'at ./src/contracts/index.rsh:489:57:application call to "callback" (defined at: ./src/contracts/index.rsh:482:44:function exp)', 'at ./src/contracts/index.rsh:482:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:482:44:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v8513 = v2481;
        const v8514 = v2879;
        const v8515 = v2483;
        const v8516 = v2484;
        const v8517 = v2818;
        const v8518 = v2486;
        const v8519 = v2487;
        const v8521 = v2873;
        const v8522 = v2864;
        const v8523 = v2873[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
        const v8524 = v8523[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
        const v8525 = stdlib.le(v2486, v8524);
        stdlib.assert(v8525, {
          at: './src/contracts/index.rsh:318:32:application',
          fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v8526 = stdlib.le(v2481, v2864);
        stdlib.assert(v8526, {
          at: './src/contracts/index.rsh:319:32:application',
          fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
          msg: null,
          who: 'claim'
          });
        return;
        }
      else {
        const v2906 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2907 = {
          now: v2845,
          result: v2906
          };
        const v2910 = await txn1.getOutput('claim', 'v2907', ctc14, v2907);
        if (v1687) {
          stdlib.protect(ctc0, await interact.out(v2719, v2910), {
            at: './src/contracts/index.rsh:479:23:application',
            fs: ['at ./src/contracts/index.rsh:479:23:application call to [unknown function] (defined at: ./src/contracts/index.rsh:479:23:function exp)', 'at ./src/contracts/index.rsh:493:57:application call to "callback" (defined at: ./src/contracts/index.rsh:482:44:function exp)', 'at ./src/contracts/index.rsh:482:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:482:44:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v2922 = stdlib.lt(v2845, v2398);
        const v2923 = v2922 ? v2845 : v2398;
        const v8535 = v2481;
        const v8536 = v2923;
        const v8537 = v2483;
        const v8538 = v2484;
        const v8539 = v2818;
        const v8540 = v2486;
        const v8541 = v2487;
        const v8543 = v2494;
        const v8544 = v2495;
        const v8545 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
        const v8546 = v8545[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
        const v8547 = stdlib.le(v2486, v8546);
        stdlib.assert(v8547, {
          at: './src/contracts/index.rsh:318:32:application',
          fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v8548 = stdlib.le(v2481, v2495);
        stdlib.assert(v8548, {
          at: './src/contracts/index.rsh:319:32:application',
          fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
          msg: null,
          who: 'claim'
          });
        return;
        }
      break;
      }
    case 'claimFees0_477': {
      const v3215 = v2716[1];
      return;
      break;
      }
    case 'stake0_477': {
      const v3711 = v2716[1];
      return;
      break;
      }
    case 'unstake0_477': {
      const v4207 = v2716[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimFees4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimFees4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimFees4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    claim0_477: ctc10,
    claimFees0_477: ctc10,
    stake0_477: ctc11,
    unstake0_477: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Struct([['now', ctc1], ['result', ctc13]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2590 = ctc.selfAddress();
  const v2592 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:508:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:508:41:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to "runclaimFees0_477" (defined at: ./src/contracts/index.rsh:508:22:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
    msg: 'in',
    who: 'claimFees'
    });
  const v2593 = stdlib.addressEq(v2590, v2392);
  stdlib.assert(v2593, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:509:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:508:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:508:41:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to "runclaimFees0_477" (defined at: ./src/contracts/index.rsh:508:22:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
    msg: 'only beneficiary can claim creation fees',
    who: 'claimFees'
    });
  const v2598 = ['claimFees0_477', v2592];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538, v2598],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:512:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/index.rsh:512:38:decimal', stdlib.UInt_max, '0'), v2395], [stdlib.checkedBigNumberify('./src/contracts/index.rsh:512:55:decimal', stdlib.UInt_max, '0'), v2396]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2716], secs: v2718, time: v2717, didSend: v1687, from: v2715 } = txn1;
      
      switch (v2716[0]) {
        case 'claim0_477': {
          const v2719 = v2716[1];
          
          break;
          }
        case 'claimFees0_477': {
          const v3215 = v2716[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimFees"
            });
          ;
          ;
          ;
          let v3424;
          const v3426 = stdlib.gt(v2717, v2482);
          const v3427 = v3426 ? v2717 : v2482;
          const v3428 = stdlib.lt(v3427, v2398);
          const v3429 = v3428 ? v3427 : v2398;
          const v3430 = stdlib.eq(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:344:53:decimal', stdlib.UInt_max, '0'));
          const v3431 = stdlib.lt(v2483, v3429);
          const v3432 = v3430 ? v3431 : false;
          if (v3432) {
            const v3433 = stdlib.safeSub(v3429, v2483);
            const v3434 = stdlib.cast("UInt", "UInt256", v3433, false, true);
            const v3435 = stdlib.safeMul256(v2441, v3434);
            v3424 = v3435;
            }
          else {
            v3424 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:348:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          const v3436 = stdlib.safeAdd256(v2484, v3424);
          const v3437 = stdlib.safeDiv256(v3436, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3438 = stdlib.cast("UInt256", "UInt", v3437, false, true);
          const v3439 = stdlib.safeMuldiv(v3438, v2400, v2399);
          const v3440 = stdlib.safeAdd(v2486, v3438);
          const v3443 = stdlib.lt(v3440, v2538);
          const v3444 = v3443 ? v3440 : v2538;
          const v3445 = stdlib.safeAdd(v3439, v2481);
          const v3447 = stdlib.lt(v3445, v2495);
          const v3448 = v3447 ? v3445 : v2495;
          const v3452 = stdlib.sub(v2495, v3448);
          sim_r.txns.push({
            kind: 'from',
            to: v2392,
            tok: undefined /* Nothing */
            });
          const v3458 = stdlib.sub(v2538, v3444);
          const v3460 = stdlib.Array_set(v2537, '0', v3458);
          const v3461 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:525:96:application', stdlib.UInt_max, '1'), v3460);
          sim_r.txns.push({
            kind: 'from',
            to: v2392,
            tok: v2396
            });
          const v3465 = [v3444, v3448];
          const v3466 = {
            now: v3427,
            result: v3465
            };
          const v3469 = await txn1.getOutput('claimFees', 'v3466', ctc14, v3466);
          
          const v3481 = stdlib.cast("UInt", "UInt256", v3438, false, true);
          const v3482 = stdlib.safeMul256(v3481, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3483 = stdlib.safeSub256(v3436, v3482);
          const v8689 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:534:49:decimal', stdlib.UInt_max, '0');
          const v8690 = v2482;
          const v8691 = v3427;
          const v8692 = v3483;
          const v8693 = v2485;
          const v8694 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:533:49:decimal', stdlib.UInt_max, '0');
          const v8695 = v2487;
          const v8697 = v3461;
          const v8698 = v3452;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stake0_477': {
          const v3711 = v2716[1];
          
          break;
          }
        case 'unstake0_477': {
          const v4207 = v2716[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2716], secs: v2718, time: v2717, didSend: v1687, from: v2715 } = txn1;
  switch (v2716[0]) {
    case 'claim0_477': {
      const v2719 = v2716[1];
      return;
      break;
      }
    case 'claimFees0_477': {
      const v3215 = v2716[1];
      undefined /* setApiDetails */;
      const v3230 = stdlib.addressEq(v2715, v2392);
      stdlib.assert(v3230, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/index.rsh:509:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:508:41:application call to [unknown function] (defined at: ./src/contracts/index.rsh:508:41:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:508:41:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
        msg: 'only beneficiary can claim creation fees',
        who: 'claimFees'
        });
      ;
      ;
      ;
      let v3424;
      const v3426 = stdlib.gt(v2717, v2482);
      const v3427 = v3426 ? v2717 : v2482;
      const v3428 = stdlib.lt(v3427, v2398);
      const v3429 = v3428 ? v3427 : v2398;
      const v3430 = stdlib.eq(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:344:53:decimal', stdlib.UInt_max, '0'));
      const v3431 = stdlib.lt(v2483, v3429);
      const v3432 = v3430 ? v3431 : false;
      if (v3432) {
        const v3433 = stdlib.safeSub(v3429, v2483);
        const v3434 = stdlib.cast("UInt", "UInt256", v3433, false, true);
        const v3435 = stdlib.safeMul256(v2441, v3434);
        v3424 = v3435;
        }
      else {
        v3424 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:348:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      const v3436 = stdlib.safeAdd256(v2484, v3424);
      const v3437 = stdlib.safeDiv256(v3436, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3438 = stdlib.cast("UInt256", "UInt", v3437, false, true);
      const v3439 = stdlib.safeMuldiv(v3438, v2400, v2399);
      const v3440 = stdlib.safeAdd(v2486, v3438);
      const v3443 = stdlib.lt(v3440, v2538);
      const v3444 = v3443 ? v3440 : v2538;
      const v3445 = stdlib.safeAdd(v3439, v2481);
      const v3447 = stdlib.lt(v3445, v2495);
      const v3448 = v3447 ? v3445 : v2495;
      const v3452 = stdlib.sub(v2495, v3448);
      ;
      const v3458 = stdlib.sub(v2538, v3444);
      const v3460 = stdlib.Array_set(v2537, '0', v3458);
      const v3461 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:525:96:application', stdlib.UInt_max, '1'), v3460);
      ;
      const v3465 = [v3444, v3448];
      const v3466 = {
        now: v3427,
        result: v3465
        };
      const v3469 = await txn1.getOutput('claimFees', 'v3466', ctc14, v3466);
      if (v1687) {
        stdlib.protect(ctc0, await interact.out(v3215, v3469), {
          at: './src/contracts/index.rsh:508:23:application',
          fs: ['at ./src/contracts/index.rsh:508:23:application call to [unknown function] (defined at: ./src/contracts/index.rsh:508:23:function exp)', 'at ./src/contracts/index.rsh:526:49:application call to "callback" (defined at: ./src/contracts/index.rsh:513:44:function exp)', 'at ./src/contracts/index.rsh:513:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:513:44:function exp)'],
          msg: 'out',
          who: 'claimFees'
          });
        }
      else {
        }
      
      const v3481 = stdlib.cast("UInt", "UInt256", v3438, false, true);
      const v3482 = stdlib.safeMul256(v3481, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3483 = stdlib.safeSub256(v3436, v3482);
      const v8689 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:534:49:decimal', stdlib.UInt_max, '0');
      const v8690 = v2482;
      const v8691 = v3427;
      const v8692 = v3483;
      const v8693 = v2485;
      const v8694 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:533:49:decimal', stdlib.UInt_max, '0');
      const v8695 = v2487;
      const v8697 = v3461;
      const v8698 = v3452;
      const v8699 = v3461[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
      const v8700 = v8699[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
      const v8701 = stdlib.le(stdlib.checkedBigNumberify('./src/contracts/index.rsh:533:49:decimal', stdlib.UInt_max, '0'), v8700);
      stdlib.assert(v8701, {
        at: './src/contracts/index.rsh:318:32:application',
        fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
        msg: null,
        who: 'claimFees'
        });
      const v8702 = stdlib.le(stdlib.checkedBigNumberify('./src/contracts/index.rsh:534:49:decimal', stdlib.UInt_max, '0'), v3452);
      stdlib.assert(v8702, {
        at: './src/contracts/index.rsh:319:32:application',
        fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
        msg: null,
        who: 'claimFees'
        });
      return;
      
      break;
      }
    case 'stake0_477': {
      const v3711 = v2716[1];
      return;
      break;
      }
    case 'unstake0_477': {
      const v4207 = v2716[1];
      return;
      break;
      }
    }
  
  
  };
export async function _stake4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _stake4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _stake4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    claim0_477: ctc11,
    claimFees0_477: ctc11,
    stake0_477: ctc10,
    unstake0_477: ctc10
    });
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2545 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:416:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:416:44:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to "runstake0_477" (defined at: ./src/contracts/index.rsh:416:22:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v2546 = v2545[stdlib.checkedBigNumberify('./src/contracts/index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2548 = stdlib.safeAdd(v2487, v2546);
  const v2549 = stdlib.lt(v2548, stdlib.UInt_max);
  stdlib.assert(v2549, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:417:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:416:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:416:44:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to "runstake0_477" (defined at: ./src/contracts/index.rsh:416:22:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
    msg: 'maximum stakes has been reached',
    who: 'stake'
    });
  const v2556 = ['stake0_477', v2545];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538, v2556],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:420:34:decimal', stdlib.UInt_max, '0'), [[v2546, v2395], [stdlib.checkedBigNumberify('./src/contracts/index.rsh:420:61:decimal', stdlib.UInt_max, '0'), v2396]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2716], secs: v2718, time: v2717, didSend: v1687, from: v2715 } = txn1;
      
      switch (v2716[0]) {
        case 'claim0_477': {
          const v2719 = v2716[1];
          
          break;
          }
        case 'claimFees0_477': {
          const v3215 = v2716[1];
          
          break;
          }
        case 'stake0_477': {
          const v3711 = v2716[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v3738 = v3711[stdlib.checkedBigNumberify('./src/contracts/index.rsh:416:22:spread', stdlib.UInt_max, '0')];
          const v3739 = stdlib.safeAdd(v2487, v3738);
          ;
          const v3797 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0')];
          const v3798 = v3797[stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0')];
          const v3799 = stdlib.add(v3798, v3738);
          const v3801 = stdlib.Array_set(v3797, '0', v3799);
          const v3802 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0'), v3801);
          sim_r.txns.push({
            amt: v3738,
            kind: 'to',
            tok: v2395
            });
          ;
          let v3987;
          const v3988 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
          if (v3988) {
            const v3990 = stdlib.gt(v2717, v2482);
            const v3991 = v3990 ? v2717 : v2482;
            const v3992 = stdlib.lt(v3991, v2398);
            const v3993 = v3992 ? v3991 : v2398;
            const v3994 = stdlib.safeSub(v3993, v2482);
            const v3995 = stdlib.cast("UInt", "UInt256", v3994, false, true);
            const v3996 = stdlib.safeMul256(v2441, v3995);
            const v3997 = stdlib.cast("UInt", "UInt256", v2487, false, true);
            const v3998 = stdlib.safeDiv256(v3996, v3997);
            const v3999 = stdlib.safeAdd256(v2485, v3998);
            v3987 = v3999;
            }
          else {
            v3987 = v2485;
            }
          const v4000 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2715), null);
          const v4001 = stdlib.fromSome(v4000, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
          const v4002 = stdlib.cast("UInt", "UInt256", v4001, false, true);
          const v4003 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2715), null);
          const v4004 = stdlib.fromSome(v4003, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4005 = stdlib.safeSub256(v3987, v4004);
          const v4006 = stdlib.safeMul256(v4002, v4005);
          const v4007 = stdlib.safeDiv256(v4006, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4008 = stdlib.cast("UInt256", "UInt", v4007, false, true);
          const v4009 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2715), null);
          const v4010 = stdlib.fromSome(v4009, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
          const v4011 = stdlib.safeAdd(v4008, v4010);
          await stdlib.simMapSet(sim_r, 1, v2715, v4011);
          await stdlib.simMapSet(sim_r, 3, v2715, v3987);
          const v4014 = stdlib.safeAdd(v4001, v3738);
          await stdlib.simMapSet(sim_r, 0, v2715, v4014);
          const v4016 = stdlib.gt(v2717, v2482);
          const v4017 = v4016 ? v2717 : v2482;
          const v4018 = stdlib.lt(v4017, v2398);
          const v4019 = v4018 ? v4017 : v2398;
          await stdlib.simMapSet(sim_r, 2, v2715, v4019);
          const v4024 = {
            now: v4017,
            result: v3738
            };
          const v4026 = await txn1.getOutput('stake', 'v4024', ctc13, v4024);
          
          let v4040;
          const v4046 = stdlib.eq(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:344:53:decimal', stdlib.UInt_max, '0'));
          const v4047 = stdlib.lt(v2483, v4019);
          const v4048 = v4046 ? v4047 : false;
          if (v4048) {
            const v4049 = stdlib.safeSub(v4019, v2483);
            const v4050 = stdlib.cast("UInt", "UInt256", v4049, false, true);
            const v4051 = stdlib.safeMul256(v2441, v4050);
            v4040 = v4051;
            }
          else {
            v4040 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:348:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          const v4052 = stdlib.safeAdd256(v2484, v4040);
          const v8843 = v2481;
          const v8844 = v4019;
          const v8845 = v2483;
          const v8846 = v4052;
          const v8847 = v3987;
          const v8848 = v2486;
          const v8849 = v3739;
          const v8851 = v3802;
          const v8852 = v2495;
          sim_r.isHalt = false;
          
          break;
          }
        case 'unstake0_477': {
          const v4207 = v2716[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2716], secs: v2718, time: v2717, didSend: v1687, from: v2715 } = txn1;
  switch (v2716[0]) {
    case 'claim0_477': {
      const v2719 = v2716[1];
      return;
      break;
      }
    case 'claimFees0_477': {
      const v3215 = v2716[1];
      return;
      break;
      }
    case 'stake0_477': {
      const v3711 = v2716[1];
      undefined /* setApiDetails */;
      const v3738 = v3711[stdlib.checkedBigNumberify('./src/contracts/index.rsh:416:22:spread', stdlib.UInt_max, '0')];
      const v3739 = stdlib.safeAdd(v2487, v3738);
      const v3740 = stdlib.lt(v3739, stdlib.UInt_max);
      stdlib.assert(v3740, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/index.rsh:417:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:416:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:416:44:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:416:44:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
        msg: 'maximum stakes has been reached',
        who: 'stake'
        });
      ;
      const v3797 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0')];
      const v3798 = v3797[stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0')];
      const v3799 = stdlib.add(v3798, v3738);
      const v3801 = stdlib.Array_set(v3797, '0', v3799);
      const v3802 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:308:27:dot', stdlib.UInt_max, '0'), v3801);
      ;
      ;
      let v3987;
      const v3988 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
      if (v3988) {
        const v3990 = stdlib.gt(v2717, v2482);
        const v3991 = v3990 ? v2717 : v2482;
        const v3992 = stdlib.lt(v3991, v2398);
        const v3993 = v3992 ? v3991 : v2398;
        const v3994 = stdlib.safeSub(v3993, v2482);
        const v3995 = stdlib.cast("UInt", "UInt256", v3994, false, true);
        const v3996 = stdlib.safeMul256(v2441, v3995);
        const v3997 = stdlib.cast("UInt", "UInt256", v2487, false, true);
        const v3998 = stdlib.safeDiv256(v3996, v3997);
        const v3999 = stdlib.safeAdd256(v2485, v3998);
        v3987 = v3999;
        }
      else {
        v3987 = v2485;
        }
      const v4000 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2715), null);
      const v4001 = stdlib.fromSome(v4000, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
      const v4002 = stdlib.cast("UInt", "UInt256", v4001, false, true);
      const v4003 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2715), null);
      const v4004 = stdlib.fromSome(v4003, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4005 = stdlib.safeSub256(v3987, v4004);
      const v4006 = stdlib.safeMul256(v4002, v4005);
      const v4007 = stdlib.safeDiv256(v4006, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v4008 = stdlib.cast("UInt256", "UInt", v4007, false, true);
      const v4009 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2715), null);
      const v4010 = stdlib.fromSome(v4009, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
      const v4011 = stdlib.safeAdd(v4008, v4010);
      await stdlib.mapSet(map1, v2715, v4011);
      await stdlib.mapSet(map3, v2715, v3987);
      const v4014 = stdlib.safeAdd(v4001, v3738);
      await stdlib.mapSet(map0, v2715, v4014);
      const v4016 = stdlib.gt(v2717, v2482);
      const v4017 = v4016 ? v2717 : v2482;
      const v4018 = stdlib.lt(v4017, v2398);
      const v4019 = v4018 ? v4017 : v2398;
      await stdlib.mapSet(map2, v2715, v4019);
      const v4024 = {
        now: v4017,
        result: v3738
        };
      const v4026 = await txn1.getOutput('stake', 'v4024', ctc13, v4024);
      if (v1687) {
        stdlib.protect(ctc0, await interact.out(v3711, v4026), {
          at: './src/contracts/index.rsh:416:23:application',
          fs: ['at ./src/contracts/index.rsh:416:23:application call to [unknown function] (defined at: ./src/contracts/index.rsh:416:23:function exp)', 'at ./src/contracts/index.rsh:427:49:application call to "callback" (defined at: ./src/contracts/index.rsh:421:44:function exp)', 'at ./src/contracts/index.rsh:421:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:421:44:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      let v4040;
      const v4046 = stdlib.eq(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:344:53:decimal', stdlib.UInt_max, '0'));
      const v4047 = stdlib.lt(v2483, v4019);
      const v4048 = v4046 ? v4047 : false;
      if (v4048) {
        const v4049 = stdlib.safeSub(v4019, v2483);
        const v4050 = stdlib.cast("UInt", "UInt256", v4049, false, true);
        const v4051 = stdlib.safeMul256(v2441, v4050);
        v4040 = v4051;
        }
      else {
        v4040 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:348:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      const v4052 = stdlib.safeAdd256(v2484, v4040);
      const v8843 = v2481;
      const v8844 = v4019;
      const v8845 = v2483;
      const v8846 = v4052;
      const v8847 = v3987;
      const v8848 = v2486;
      const v8849 = v3739;
      const v8851 = v3802;
      const v8852 = v2495;
      const v8853 = v3802[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
      const v8854 = v8853[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
      const v8855 = stdlib.le(v2486, v8854);
      stdlib.assert(v8855, {
        at: './src/contracts/index.rsh:318:32:application',
        fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
        msg: null,
        who: 'stake'
        });
      const v8856 = stdlib.le(v2481, v2495);
      stdlib.assert(v8856, {
        at: './src/contracts/index.rsh:319:32:application',
        fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
        msg: null,
        who: 'stake'
        });
      return;
      
      break;
      }
    case 'unstake0_477': {
      const v4207 = v2716[1];
      return;
      break;
      }
    }
  
  
  };
export async function _unstake4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _unstake4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _unstake4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    claim0_477: ctc11,
    claimFees0_477: ctc11,
    stake0_477: ctc10,
    unstake0_477: ctc10
    });
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2558 = ctc.selfAddress();
  const v2560 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to "rununstake0_477" (defined at: ./src/contracts/index.rsh:440:22:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v2561 = v2560[stdlib.checkedBigNumberify('./src/contracts/index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2563 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2558), null);
  const v2564 = stdlib.fromSome(v2563, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
  const v2565 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:441:54:application', stdlib.UInt_max, '0')];
  const v2566 = v2565[stdlib.checkedBigNumberify('./src/contracts/index.rsh:441:54:application', stdlib.UInt_max, '0')];
  const v2567 = stdlib.le(v2564, v2566);
  stdlib.assert(v2567, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:441:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to "rununstake0_477" (defined at: ./src/contracts/index.rsh:440:22:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v2569 = stdlib.lt(v2561, stdlib.UInt_max);
  stdlib.assert(v2569, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:442:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to "rununstake0_477" (defined at: ./src/contracts/index.rsh:440:22:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
    msg: 'tried to unstake too much really',
    who: 'unstake'
    });
  const v2573 = stdlib.le(v2561, v2564);
  stdlib.assert(v2573, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:443:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to "rununstake0_477" (defined at: ./src/contracts/index.rsh:440:22:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
    msg: 'tried to unstake more than staked on record',
    who: 'unstake'
    });
  const v2580 = ['unstake0_477', v2560];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2392, v2393, v2394, v2395, v2396, v2397, v2398, v2399, v2400, v2401, v2441, v2481, v2482, v2483, v2484, v2485, v2486, v2487, v2494, v2495, v2537, v2538, v2580],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:449:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/index.rsh:449:38:decimal', stdlib.UInt_max, '0'), v2395], [stdlib.checkedBigNumberify('./src/contracts/index.rsh:449:55:decimal', stdlib.UInt_max, '0'), v2396]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2716], secs: v2718, time: v2717, didSend: v1687, from: v2715 } = txn1;
      
      switch (v2716[0]) {
        case 'claim0_477': {
          const v2719 = v2716[1];
          
          break;
          }
        case 'claimFees0_477': {
          const v3215 = v2716[1];
          
          break;
          }
        case 'stake0_477': {
          const v3711 = v2716[1];
          
          break;
          }
        case 'unstake0_477': {
          const v4207 = v2716[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          const v4248 = v4207[stdlib.checkedBigNumberify('./src/contracts/index.rsh:440:22:spread', stdlib.UInt_max, '0')];
          const v4249 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2715), null);
          const v4250 = stdlib.fromSome(v4249, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
          const v4251 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:441:54:application', stdlib.UInt_max, '0')];
          const v4252 = v4251[stdlib.checkedBigNumberify('./src/contracts/index.rsh:441:54:application', stdlib.UInt_max, '0')];
          ;
          ;
          ;
          let v4565;
          const v4566 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
          if (v4566) {
            const v4568 = stdlib.gt(v2717, v2482);
            const v4569 = v4568 ? v2717 : v2482;
            const v4570 = stdlib.lt(v4569, v2398);
            const v4571 = v4570 ? v4569 : v2398;
            const v4572 = stdlib.safeSub(v4571, v2482);
            const v4573 = stdlib.cast("UInt", "UInt256", v4572, false, true);
            const v4574 = stdlib.safeMul256(v2441, v4573);
            const v4575 = stdlib.cast("UInt", "UInt256", v2487, false, true);
            const v4576 = stdlib.safeDiv256(v4574, v4575);
            const v4577 = stdlib.safeAdd256(v2485, v4576);
            v4565 = v4577;
            }
          else {
            v4565 = v2485;
            }
          const v4580 = stdlib.cast("UInt", "UInt256", v4250, false, true);
          const v4581 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2715), null);
          const v4582 = stdlib.fromSome(v4581, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4583 = stdlib.safeSub256(v4565, v4582);
          const v4584 = stdlib.safeMul256(v4580, v4583);
          const v4585 = stdlib.safeDiv256(v4584, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4586 = stdlib.cast("UInt256", "UInt", v4585, false, true);
          const v4587 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2715), null);
          const v4588 = stdlib.fromSome(v4587, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
          const v4589 = stdlib.safeAdd(v4586, v4588);
          await stdlib.simMapSet(sim_r, 1, v2715, v4589);
          await stdlib.simMapSet(sim_r, 3, v2715, v4565);
          const v4591 = stdlib.gt(v2717, v2482);
          const v4592 = v4591 ? v2717 : v2482;
          const v4593 = stdlib.gt(v4592, v2398);
          let v4594;
          if (v4593) {
            v4594 = true;
            }
          else {
            const v4595 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2715), null);
            const v4596 = stdlib.fromSome(v4595, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
            const v4597 = stdlib.safeAdd(v4596, v2401);
            const v4598 = stdlib.le(v4597, v4592);
            v4594 = v4598;
            }
          const v4601 = v4594 ? stdlib.checkedBigNumberify('./src/contracts/index.rsh:452:79:decimal', stdlib.UInt_max, '0') : v4589;
          const v4602 = stdlib.safeMuldiv(v4601, v2400, v2399);
          let v4607;
          if (v4593) {
            v4607 = true;
            }
          else {
            const v4608 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2715), null);
            const v4609 = stdlib.fromSome(v4608, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
            const v4610 = stdlib.safeAdd(v4609, v2401);
            const v4611 = stdlib.le(v4610, v4592);
            v4607 = v4611;
            }
          if (v4607) {
            const v4660 = stdlib.safeSub(v4250, v4248);
            await stdlib.simMapSet(sim_r, 0, v2715, v4660);
            const v4666 = stdlib.sub(v4252, v4248);
            const v4668 = stdlib.Array_set(v4251, '0', v4666);
            const v4669 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:462:79:application', stdlib.UInt_max, '0'), v4668);
            sim_r.txns.push({
              kind: 'from',
              to: v2715,
              tok: v2395
              });
            const v4670 = stdlib.safeSub(v2487, v4248);
            const v4674 = stdlib.lt(v4592, v2398);
            const v4675 = v4674 ? v4592 : v2398;
            await stdlib.simMapSet(sim_r, 2, v2715, v4675);
            const v4680 = {
              now: v4592,
              result: v4248
              };
            const v4682 = await txn1.getOutput('unstake', 'v4680', ctc13, v4680);
            
            const v4695 = stdlib.gt(v4670, stdlib.checkedBigNumberify('./src/contracts/index.rsh:471:66:decimal', stdlib.UInt_max, '0'));
            const v4699 = v4695 ? v2483 : v4592;
            const v4700 = stdlib.safeAdd(v2486, v4601);
            const v4701 = stdlib.safeAdd(v2481, v4602);
            const v8997 = v4701;
            const v8998 = v4675;
            const v8999 = v4699;
            const v9000 = v2484;
            const v9001 = v4565;
            const v9002 = v4700;
            const v9003 = v4670;
            const v9005 = v4669;
            const v9006 = v2495;
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 1, v2715, stdlib.checkedBigNumberify('./src/contracts/index.rsh:457:65:decimal', stdlib.UInt_max, '0'));
            const v4615 = stdlib.safeSub(v4250, v4248);
            await stdlib.simMapSet(sim_r, 0, v2715, v4615);
            const v4621 = stdlib.sub(v4252, v4248);
            const v4623 = stdlib.Array_set(v4251, '0', v4621);
            const v4624 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:462:79:application', stdlib.UInt_max, '0'), v4623);
            sim_r.txns.push({
              kind: 'from',
              to: v2715,
              tok: v2395
              });
            const v4625 = stdlib.safeSub(v2487, v4248);
            const v4629 = stdlib.lt(v4592, v2398);
            const v4630 = v4629 ? v4592 : v2398;
            await stdlib.simMapSet(sim_r, 2, v2715, v4630);
            const v4635 = {
              now: v4592,
              result: v4248
              };
            const v4637 = await txn1.getOutput('unstake', 'v4635', ctc13, v4635);
            
            const v4650 = stdlib.gt(v4625, stdlib.checkedBigNumberify('./src/contracts/index.rsh:471:66:decimal', stdlib.UInt_max, '0'));
            const v4654 = v4650 ? v2483 : v4592;
            const v4655 = stdlib.safeAdd(v2486, v4601);
            const v4656 = stdlib.safeAdd(v2481, v4602);
            const v9019 = v4656;
            const v9020 = v4630;
            const v9021 = v4654;
            const v9022 = v2484;
            const v9023 = v4565;
            const v9024 = v4655;
            const v9025 = v4625;
            const v9027 = v4624;
            const v9028 = v2495;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2716], secs: v2718, time: v2717, didSend: v1687, from: v2715 } = txn1;
  switch (v2716[0]) {
    case 'claim0_477': {
      const v2719 = v2716[1];
      return;
      break;
      }
    case 'claimFees0_477': {
      const v3215 = v2716[1];
      return;
      break;
      }
    case 'stake0_477': {
      const v3711 = v2716[1];
      return;
      break;
      }
    case 'unstake0_477': {
      const v4207 = v2716[1];
      undefined /* setApiDetails */;
      const v4248 = v4207[stdlib.checkedBigNumberify('./src/contracts/index.rsh:440:22:spread', stdlib.UInt_max, '0')];
      const v4249 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2715), null);
      const v4250 = stdlib.fromSome(v4249, stdlib.checkedBigNumberify('./src/contracts/index.rsh:240:52:decimal', stdlib.UInt_max, '0'));
      const v4251 = v2494[stdlib.checkedBigNumberify('./src/contracts/index.rsh:441:54:application', stdlib.UInt_max, '0')];
      const v4252 = v4251[stdlib.checkedBigNumberify('./src/contracts/index.rsh:441:54:application', stdlib.UInt_max, '0')];
      const v4253 = stdlib.le(v4250, v4252);
      stdlib.assert(v4253, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/index.rsh:441:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v4255 = stdlib.lt(v4248, stdlib.UInt_max);
      stdlib.assert(v4255, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/index.rsh:442:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
        msg: 'tried to unstake too much really',
        who: 'unstake'
        });
      const v4259 = stdlib.le(v4248, v4250);
      stdlib.assert(v4259, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/index.rsh:443:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:440:48:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:48:function exp)', 'at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)', 'at ./src/contracts/index.rsh:415:26:application call to [unknown function] (defined at: ./src/contracts/index.rsh:415:26:function exp)'],
        msg: 'tried to unstake more than staked on record',
        who: 'unstake'
        });
      ;
      ;
      ;
      let v4565;
      const v4566 = stdlib.gt(v2487, stdlib.checkedBigNumberify('./src/contracts/index.rsh:353:51:decimal', stdlib.UInt_max, '0'));
      if (v4566) {
        const v4568 = stdlib.gt(v2717, v2482);
        const v4569 = v4568 ? v2717 : v2482;
        const v4570 = stdlib.lt(v4569, v2398);
        const v4571 = v4570 ? v4569 : v2398;
        const v4572 = stdlib.safeSub(v4571, v2482);
        const v4573 = stdlib.cast("UInt", "UInt256", v4572, false, true);
        const v4574 = stdlib.safeMul256(v2441, v4573);
        const v4575 = stdlib.cast("UInt", "UInt256", v2487, false, true);
        const v4576 = stdlib.safeDiv256(v4574, v4575);
        const v4577 = stdlib.safeAdd256(v2485, v4576);
        v4565 = v4577;
        }
      else {
        v4565 = v2485;
        }
      const v4580 = stdlib.cast("UInt", "UInt256", v4250, false, true);
      const v4581 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2715), null);
      const v4582 = stdlib.fromSome(v4581, stdlib.checkedBigNumberify('./src/contracts/index.rsh:250:84:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4583 = stdlib.safeSub256(v4565, v4582);
      const v4584 = stdlib.safeMul256(v4580, v4583);
      const v4585 = stdlib.safeDiv256(v4584, stdlib.checkedBigNumberify('./src/contracts/index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v4586 = stdlib.cast("UInt256", "UInt", v4585, false, true);
      const v4587 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2715), null);
      const v4588 = stdlib.fromSome(v4587, stdlib.checkedBigNumberify('./src/contracts/index.rsh:244:52:decimal', stdlib.UInt_max, '0'));
      const v4589 = stdlib.safeAdd(v4586, v4588);
      await stdlib.mapSet(map1, v2715, v4589);
      await stdlib.mapSet(map3, v2715, v4565);
      const v4591 = stdlib.gt(v2717, v2482);
      const v4592 = v4591 ? v2717 : v2482;
      const v4593 = stdlib.gt(v4592, v2398);
      let v4594;
      if (v4593) {
        v4594 = true;
        }
      else {
        const v4595 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2715), null);
        const v4596 = stdlib.fromSome(v4595, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
        const v4597 = stdlib.safeAdd(v4596, v2401);
        const v4598 = stdlib.le(v4597, v4592);
        v4594 = v4598;
        }
      const v4601 = v4594 ? stdlib.checkedBigNumberify('./src/contracts/index.rsh:452:79:decimal', stdlib.UInt_max, '0') : v4589;
      const v4602 = stdlib.safeMuldiv(v4601, v2400, v2399);
      let v4607;
      if (v4593) {
        v4607 = true;
        }
      else {
        const v4608 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2715), null);
        const v4609 = stdlib.fromSome(v4608, stdlib.checkedBigNumberify('./src/contracts/index.rsh:247:66:decimal', stdlib.UInt_max, '0'));
        const v4610 = stdlib.safeAdd(v4609, v2401);
        const v4611 = stdlib.le(v4610, v4592);
        v4607 = v4611;
        }
      if (v4607) {
        const v4660 = stdlib.safeSub(v4250, v4248);
        await stdlib.mapSet(map0, v2715, v4660);
        const v4666 = stdlib.sub(v4252, v4248);
        const v4668 = stdlib.Array_set(v4251, '0', v4666);
        const v4669 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:462:79:application', stdlib.UInt_max, '0'), v4668);
        ;
        const v4670 = stdlib.safeSub(v2487, v4248);
        const v4674 = stdlib.lt(v4592, v2398);
        const v4675 = v4674 ? v4592 : v2398;
        await stdlib.mapSet(map2, v2715, v4675);
        const v4680 = {
          now: v4592,
          result: v4248
          };
        const v4682 = await txn1.getOutput('unstake', 'v4680', ctc13, v4680);
        if (v1687) {
          stdlib.protect(ctc0, await interact.out(v4207, v4682), {
            at: './src/contracts/index.rsh:440:23:application',
            fs: ['at ./src/contracts/index.rsh:440:23:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:23:function exp)', 'at ./src/contracts/index.rsh:466:49:application call to "callback" (defined at: ./src/contracts/index.rsh:450:44:function exp)', 'at ./src/contracts/index.rsh:450:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:450:44:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v4695 = stdlib.gt(v4670, stdlib.checkedBigNumberify('./src/contracts/index.rsh:471:66:decimal', stdlib.UInt_max, '0'));
        const v4699 = v4695 ? v2483 : v4592;
        const v4700 = stdlib.safeAdd(v2486, v4601);
        const v4701 = stdlib.safeAdd(v2481, v4602);
        const v8997 = v4701;
        const v8998 = v4675;
        const v8999 = v4699;
        const v9000 = v2484;
        const v9001 = v4565;
        const v9002 = v4700;
        const v9003 = v4670;
        const v9005 = v4669;
        const v9006 = v2495;
        const v9007 = v4669[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
        const v9008 = v9007[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
        const v9009 = stdlib.le(v4700, v9008);
        stdlib.assert(v9009, {
          at: './src/contracts/index.rsh:318:32:application',
          fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v9010 = stdlib.le(v4701, v2495);
        stdlib.assert(v9010, {
          at: './src/contracts/index.rsh:319:32:application',
          fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
          msg: null,
          who: 'unstake'
          });
        return;
        }
      else {
        await stdlib.mapSet(map1, v2715, stdlib.checkedBigNumberify('./src/contracts/index.rsh:457:65:decimal', stdlib.UInt_max, '0'));
        const v4615 = stdlib.safeSub(v4250, v4248);
        await stdlib.mapSet(map0, v2715, v4615);
        const v4621 = stdlib.sub(v4252, v4248);
        const v4623 = stdlib.Array_set(v4251, '0', v4621);
        const v4624 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./src/contracts/index.rsh:462:79:application', stdlib.UInt_max, '0'), v4623);
        ;
        const v4625 = stdlib.safeSub(v2487, v4248);
        const v4629 = stdlib.lt(v4592, v2398);
        const v4630 = v4629 ? v4592 : v2398;
        await stdlib.mapSet(map2, v2715, v4630);
        const v4635 = {
          now: v4592,
          result: v4248
          };
        const v4637 = await txn1.getOutput('unstake', 'v4635', ctc13, v4635);
        if (v1687) {
          stdlib.protect(ctc0, await interact.out(v4207, v4637), {
            at: './src/contracts/index.rsh:440:23:application',
            fs: ['at ./src/contracts/index.rsh:440:23:application call to [unknown function] (defined at: ./src/contracts/index.rsh:440:23:function exp)', 'at ./src/contracts/index.rsh:466:49:application call to "callback" (defined at: ./src/contracts/index.rsh:450:44:function exp)', 'at ./src/contracts/index.rsh:450:44:application call to [unknown function] (defined at: ./src/contracts/index.rsh:450:44:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v4650 = stdlib.gt(v4625, stdlib.checkedBigNumberify('./src/contracts/index.rsh:471:66:decimal', stdlib.UInt_max, '0'));
        const v4654 = v4650 ? v2483 : v4592;
        const v4655 = stdlib.safeAdd(v2486, v4601);
        const v4656 = stdlib.safeAdd(v2481, v4602);
        const v9019 = v4656;
        const v9020 = v4630;
        const v9021 = v4654;
        const v9022 = v2484;
        const v9023 = v4565;
        const v9024 = v4655;
        const v9025 = v4625;
        const v9027 = v4624;
        const v9028 = v2495;
        const v9029 = v4624[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '1')];
        const v9030 = v9029[stdlib.checkedBigNumberify('./src/contracts/index.rsh:318:59:application', stdlib.UInt_max, '0')];
        const v9031 = stdlib.le(v4655, v9030);
        stdlib.assert(v9031, {
          at: './src/contracts/index.rsh:318:32:application',
          fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v9032 = stdlib.le(v4656, v2495);
        stdlib.assert(v9032, {
          at: './src/contracts/index.rsh:319:32:application',
          fs: ['at ./src/contracts/index.rsh:308:27:application call to [unknown function] (defined at: ./src/contracts/index.rsh:308:27:function exp)'],
          msg: null,
          who: 'unstake'
          });
        return;
        }
      break;
      }
    }
  
  
  };
export async function claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _claim4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function claimFees(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimFees expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimFees expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _claimFees4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _stake4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function unstake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for unstake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for unstake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _unstake4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`claim()(uint64,(uint64,uint64))`, `claimFees()(uint64,(uint64,uint64))`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`],
    pure: [`global()(uint64,uint64,uint256)`, `initial()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`],
    sigs: [`claim()(uint64,(uint64,uint64))`, `claimFees()(uint64,(uint64,uint64))`, `global()(uint64,uint64,uint256)`, `initial()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAeAAEYBEAIBgMQIEhQWGAFkE48vfqL1AStiOWGC/HdkPwModHkuwf6sqy1A9el6uADKDA4Ef///////////wGgjQaAreIEJgYBAAEBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gtrOnZAAAAQIACQEAAAAAAAAAACI1ADEYQQ2vJwRkSSJbNQFJIQVbNQIhCFs1CDEZIxJBAAoxACghEK9mQg10NhoAF0lBAVwiNQQjNQZJIREMQACfSSESDEAAbEkhEwxAAFIhExJENAElEkQoZClkUCtkUEk1A1cAIDQDVyAIUDQDVygIUDQDVzAIUDQDVzgIUDQDV0AIUDQDV0gIUDQDV1AIUDQDV1gIUDQDV2AIUDUHQg0OIRISRCcENf8pNP9QIQWvUEIA+kkhFAxAABMhFBJEJwQ1/yg0/1AhBa9QQgDgIRESRDYaATX/gAEDNP9QQgDOSSEVDEAAlkkhFgxAAGchFhJENAElEkQ2GgE1/yI0/4gM1VcACUk1/iNbNP4iVU0WIjT/iAzBVwkJSTX+I1s0/iJVTRZQIjT/iAysVxIJSTX+I1s0/iJVTRZQMgM0/4gMllcbIUk1/lcBIDT+IlVNUDUHQgxaIRUSRDQBJRJEKGQpZFArZFBJNQNX6Ag0A1eQCFA0A1fAIFA1B0IMMoHNyPoeEkQ2GgE1/ys0/1BCAB42GgIXNQQ2GgM2GgEXSSMMQAk+SSEHDEAIbCEHEkQlNAESRDQESSISTDQCEhFEKGQpZFArZFBJNQNJSkpKSkpKSkpKSlcAIDX/IQlbNf4hF1s1/SEYWzX8IRlbNfshBFs1+iEKWzX5IQtbNfghDFs19yENWzX2V2ggNfWBiAFbNfSBkAFbNfOBmAFbNfJXoCA18VfAIDXwgeABWzXvgegBWzXuV/AiNe2BkgJbNeyBmgIhGlg164GrAls16kk1BTXpgASR8aeaNOlQsDTpIlVJgQIMQAR/SSEHDEACzyEHEkQ06VcBCDXosSKyASEGshA0CLIYszToFzXnIjEAiAtHVwAJSTXlI1s05SJVTTXmNO1XABFJNeUiWzXkNOY05A5ENOchGwxENOc05g5ENO4iDUEANzTzMgYyBjTzDU014jTwNPUkrzT5NOJJNPkMTTTzCRZQo4gLNSSvNO4WUKKICyugiAsnNeNCAAQ08DXjJK805hZQNOMyAzEAiArJVxshSTXhVwEgNOEiVU2hiAr9o4gK+SqiiAr0SZMhBA5EJFsiMQCICqBXCQlJNeEjWzThIlVNCDXiMQAoMQCICogpNOIWUFwJZjEAKDEAiAp4KTTjUFwbZjTzMgYyBjTzDU1JNeE0+Q1JNeBBAAYjNd9CABsiMQCICk9XEglJNd4jWzTeIlVNNPYINOEONd804iI0301JNd409x00+Jc13TTgQQAGIzXcQgAbIjEAiAoYVxIJSTXbI1s02yJVTTT2CDThDjXcNNxBAKsxACgxAIgJ9ik05jTnCRZQXABmsSKyATTnshIlshAxALIUNPyyEbM07jTnCTXbNPk04Uk0+QxNNdoxACgxAIgJvSk02hZQXBJmgAgAAAAAAAASSDThFjTnFlBQsDThFjTnFlA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTdCDTaNOE08jTbIg1NNPE04zTvNN4INNsyBjTtNOU05DTnCRZcAFwANOxCCA8xACgxAIgJSycFXAlmMQAoMQCICT4pNOY05wkWUFwAZrEisgE057ISJbIQMQCyFDT8shGzNO405wk12zT5NOFJNPkMTTXaMQAoMQCICQUpNNoWUFwSZoAIAAAAAAAAEhs04RY05xZQULA04RY05xZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ03Qg02jThNPI02yINTTTxNOM07zTeCDTbMgY07TTlNOQ05wkWXABcADTsQgdXSDTpVwEINeixIrIBIQayEDQIshizNOgXNec07jTnCEk15iEbDEQ07VcAETXlNOc0/IgIjjTuIg1BADc08zIGMgY08w1NNeM08DT1JK80+TTjSTT5DE008wkWUKOICIIkrzTuFlCiiAh4oIgIdDXkQgAENPA15CIxAIgIH1cACUk14iNbNOIiVU014zEAKDEAiAgIKSSvNOMWUDTkMgMxAIgH+FcbIUk14lcBIDTiIlVNoYgILKOICCgqoogII0mTIQQORCRbIjEAiAfPVwkJSTXiI1s04iJVTQgWUFwJZjEAKDEAiAe0KTTkUFwbZjEAKDEAiAelKTTjNOcIFlBcAGY08zIGMgY08w1NNeI0+TTiSTT5DE014TEAKDEAiAd7KTThFlBcEmaACAAAAAAAAA+4NOIWNOcWUFCwNOIWNOcWUDUHNO4iEjTyNOEMEEEAFDT1JK804TTyCRZQo4gHgTXgQgAEMgM14DT/NP40/TT8NPs0+jT5NPg09zT2NPU09DThNPI08TTgoIgHVDTkNO805jIGNO005UkiWzTnCBZcAFwANOxCBa5JIwxAARhIMQA0/xJENPMyBjIGNPMNTTXnNPk050k0+QxNNeY07iISNPI05gwQQQAUNPUkrzTmNPIJFlCjiAb4NehCAAQyAzXoNPE06KCIBudJNeUqoogG30mTIQQORCRbNeQ07zTkCDXjNOo040k06gxNNeI05DT3HTT4lzT0CDXhNOw04Uk07AxNNeCxIrIBNOCyCCOyEDT/sgezsSKyATTishIlshA0/7IUNPuyEbOACAAAAAAAAA2KNOcWNOIWNOAWUFBQsDTnFjTiFjTgFlBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1IjTzNOc05SSvNOQWUCqjiAY7oYgGNzTwIjTuMgY07TTrNOo04gkWXABcETTsNOAJQgSQSLEisgEhBrIQNAiyGLM07iINQQA3NPMyBjIGNPMNTTXnNPA09SSvNPk050k0+QxNNPMJFlCjiAXhJK807hZQoogF16CIBdM16EIABDTwNegkryIxAIgFfFcACUk15iNbNOYiVU0WUDToMgMxAIgFZFcbIUk15lcBIDTmIlVNoYgFmKOIBZQqoogFj0mTIQQORCRbIjEAiAU7VwkJSTXmI1s05iJVTQg15zEAKDEAiAUjKTTnFlBcCWYxACgxAIgFEyk06FBcG2Y08zIGMgY08w1NSTXmNPkNQQAGIzXlQgAbIjEAiATtVxIJSTXkI1s05CJVTTT2CDTmDjXlNOVBAMI05zT3HTT4lzXkMQAoMQCIBMEnBVwJZjTnNOoONOQ07A4QRLEisgE05LIII7IQMQCyB7OxIrIBNOeyEiWyEDEAshQ0+7IRszT5NOZJNPkMTTXjMQAoMQCIBHkpNOMWUFwSZoAIAAAAAAAAC0U05hY05xY05BZQUFCwNOYWNOcWNOQWUFA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTjNPI08TToNO807jIGNO006zTqNOcJFlwAXBE07DTkCUICzYAIAAAAAAAAC1s05hYhCK9QULA05hYhCK9QNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ0+TTmSTT5DE008jTxNOg07zTuMgY07TTsQgJ9IxJEIzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSiEKWzX/IQxbNf4hDVs1/YFwWzX8gXhbNftXiCI1+oHKAVs1+YHSAVs1+IAEmouRdLA0+zT4CDT/CDX3NPw0+Qg19jT3iANqNPpXERE19TT2NP6IA3Q0A1cAIDEAEkQ0A1cgIDQDIQRbNP80AyELWzT+NP00A4FoWzT8NPs0A4GAAVs0A1eqIDT4NP8INP1JMgMyAzT5IjIGNPo09UkiWzT2CBZcAFwRNPdCAbJIgcCaDIgC/bEisgEhBrIQIrIYgAYHMQAyCRKyHoABB7Ifs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpKSkpXACA1/yEJWzX+IRdbNf0hGFs1/CEZWzX7IQRbNfohCls1+SELWzX4IQxbNfchDVs19oAEKjaAwzT/UDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDT4FlA09xZQNPYWULAhGq9JNfVJUEk19ElXABEhBa9cAFwASTXzSVcRESEFr1wAXBE18jT7NPwTRCEciAI1sSKyASKyEiWyEDIKshQ0/LIRsyEciAIdsSKyASKyEiWyEDIKshQ0+7IRszT8NPsTRDT+IQ4LIQ8ORDT9gYCU69wDDkQ0+jT5DEQ0+TT6CUk18SEdDEQ09iEdDEQ09jTxDkQ0+CINRCSvNPgWUCqjiAH6JK808RZQoogB8DXwNPg0/gshDwo17zT3NP4LIQ8KNe4xADT/UDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDT4FlA09xZQNPYWUDTyUDTwUDTvFlA07hZQKEsBVwB/ZylLAVd/W2dIIzUBMgY1AkIA6zX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNew16zT7NP5XEREiWw5ENPY0/w5ENP5XERFJNeoiWzXpNPs06Q5ENOs07BZQNO0WUDTuFlA07xZQNPAWUDTxFlA08hZQNPMWUDT0FlA09VA09hZQNPcWUDT4FlA0+VA0+lA0+xZQNPwWUDT+UDT/FlA06lA06RZQKEsBVwB/ZylLAVd/f2crSwFX/jVnSCU1ATIGNQJCAC0xGSEOEkSxIrIBIQayEDQIshghDrIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcENAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQjMTcSRCI1ASI1AiI1CEL/p0kxGGFAAAVIIRCviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIlJFSEJTAmvTFCJ`,
  appClear: `Bw==`,
  companionInfo: {
    api_claim: 1,
    api_stake: 1,
    api_unstake: 1
    },
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 60,
  stateKeys: 3,
  stateSize: 307,
  unsupported: [],
  version: 11,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/index.rsh:231:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contracts/index.rsh:540:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/index.rsh:308:27:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Creator": Creator,
  "User": User,
  "claim": claim,
  "claimFees": claimFees,
  "stake": stake,
  "unstake": unstake
  };
export const _APIs = {
  claim: claim,
  claimFees: claimFees,
  stake: stake,
  unstake: unstake
  };
