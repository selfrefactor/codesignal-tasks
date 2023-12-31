function getPriority(x){
  if(x === x.toUpperCase()){
    return x.charCodeAt(0) - 38
  }
  return x.charCodeAt(0) - 96
}

function transform(list){
  return list.split('').map(getPriority)
}

function getUniq(list){
  return Array.from(new Set(list))
}

function findDuplicate(list){
  const clone = getUniq(list)
  return list.find(x => list.indexOf(x) !== clone.indexOf(x) || list.lastIndexOf(x) !== clone.lastIndexOf(x))
}
function findAllDuplicates(list){
  const clone = getUniq(list)
  return clone.filter(x => list.indexOf(x) !== clone.indexOf(x) || list.lastIndexOf(x) !== clone.lastIndexOf(x))
}

let SPLIT_EVERY = 3

function splitEvery(list, splitEvery= SPLIT_EVERY){
  const result = list.reduce((acc, x, i) => {
    if(i && (i+1) % splitEvery === 0){
      return {...acc, final: [[...acc.temp, x], ...acc.final], temp: []}
    }else{
      return {...acc, temp: [...acc.temp, x]}
    }
  },  {final: [], temp: []})
  return result.final.reverse()
}

test('second', () => {
  const input = getSecondInput().trim().split('\n').map(x => x.trim())
  const splitted = splitEvery(input)
  const result = splitted.map((x) => {
    const list = x.map(xx => getUniq(xx.split('')))
    const firstMatch = findAllDuplicates([...list[0], ...list[1]])
    const secondMatch = findAllDuplicates([...list[1], ...list[2]])
    return getPriority(findDuplicate([...firstMatch, ...secondMatch]))
  }).reduce((acc, x) => acc + x, 0)
  console.log(result)
})

test('first', () => {
  const input = getInput().trim().split('\n').map(line => {
    if(line.length % 2 !== 0) throw new Error('odd length')
    const medium = Math.floor(line.length / 2)
    return [transform(line.slice(0, medium)), transform(line.slice(medium))]
  })

  const sum = input.reduce((acc, [left, right]) => {
    const leftUniq = getUniq(left)
    const rightUniq = getUniq(right)
    const duplicated = findDuplicate(leftUniq.concat(rightUniq))
    if(!duplicated) return acc

    return acc + duplicated
  }, 0)
  console.log(sum, `sum`)
})

function getSecondInputx(){
  return `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
  `
}



function getSecondInput(){
  return `
  lvcNpRHDCnTLCJlL
  RFZggsMrjTFGCJmdmd
  srsBZgBqwBqRZbzqtHpzzDNtHDqV
  CCTPpCvlpzzZQQQflrzbQDttTJcgcggJcHtcddtdhT
  nMLBRnGsFFLznRFRLMMNBnNLDRDdhScJccctdSccJJgDDHhH
  GVBGVBsLjsrrvfzpjpfQ
  dzVRSPVVBVDSPzDBQVSQFFlrclMplpMJMtPJlJvHZCMt
  TjmGmbhjTnTmwhmrvvrHcZvCHZMl
  fnLwwqfwfqjghHwGThwfTGGBFVDFFsszSRVzRBsdBDgFsV
  CCWFCcdDWwcWFpSvggnzRRQszngJwT
  mGtqqLrqfmmLNtNrgTjgJzNQlvJTvznJ
  tnhVbhMLLZZrnWHPSHDBWbWBFd
  nQhvgnCQjSSSTTSMCsLDsfPfDlsPJMWLzL
  qrqBFFBbrVRLszLfsqdqPW
  bNFFRbBcFZNrZRRRbprNpFrHSwznTnvSwgHvzCSSSjnCQwgz
  tnnZZVmwmqtvVdZqnddQQHHTHQLsFTnsPrrgrQ
  MzMflMGpzGzPGPgjLgHrGj
  zPfhMJDDMJfzlhcRJvVwcVtwVcmcbqqtbv
  GVzrBVcPVfGrzVVBcQJlGGRCZSSRtSdRnGLJ
  wbjvHWbLvhFppjZdtwZRNddtJwlR
  pvMmbpFFbqqqvWHMFvzrLDMMrMTTrVTPzVzc
  qPmgpmwpwqWWPHdjdTNStzNLMztSWtMNtz
  lVFfJrFJbbcsvcRVRZzQCzQNSZTZ
  DGbvFSDGbDjnqgjwmGdq
  DMnpnpwwnpmRRmcRBDnDwpbRQHssHqhHCHHSsQddHZQQcqqs
  JlZjjlJgNSddfsgQdf
  GvrWvzNjvPVLDpbPZwBP
  drQDzHsHrdZWqDSSPwmmJDDbvbSJ
  hphBhCMFlBtBtGTJMJsscPwTjMJv
  tlBCGFgVFNpGClFFVGGtFBZrdZQznfdQQrRWVRQdRsVf
  NjdCLdjzzlNdjwBBtZqpqPJQbN
  CsDWcHcGHtcBbJPpbP
  mGHSssSgSsHFSgGrSgmlLzCdldllrCVCLdnfnT
  rDLLzRmbcLJRtRSvSBdZtSTp
  MFswshwgsCsjghgFBsGssjlZpfpvdSHfTdCZTSpHtfddTH
  llwlwGjMPMQQnBMswsFgglPVcWcDcbWqLWbbLJVDzrqnVr
  pqmmcSTLfSSSMFlf
  rHWtPWnHtlrlDntzWwtBFdzCFMRCfjRQFfgMRMjC
  PWWHDVZPDDJVlWHncGGbqqTVvVmpGTmm
  wLBtWhGWJBdMmZMs
  jgvNCFvvGppGnmNJ
  DDRQTgcvjTPFqGHhRVhLRSVL
  tPPwLpBpDpgLSPvgQCvsLPjdjNZrJZsdZjsrsnZNjbZc
  lMWzWMBhmMhRGfVRffHmMjJcJjrNNZnjJcWjNqJnZJ
  mFMzhTmBGfHTwgPgtptFpPgP
  qCcqJQHslgtsQsCZmPWNSRNZTPBBCN
  nnLpjjnvwwvDnrGwFvbFjwPgPWRTPrrPShNhmmNSRRPN
  bnwdDLjnzGgvFqdJQcqVfQVqHt
  DfCzDCCTDLDBCsdjzwdrHjbRgjGH
  MSStMScccJtPptJNJZtJJSrFdwPGjFFHHwsggrwdwRdP
  nStlpVlhhNSshZlcNZnMcctpBChWBQLqCWqmqvmBCBmQBqmL
  RfLHNvfLfLZQBtRZsBfffjVqGvqpGSmJpgrJpjGjrp
  FDbPCMzbTTDDPmzrVzqppJBrBj
  DPcWPWDhlbCcWBsQZZfHtdwf
  fbHfPfHHfPZWgZfSGpqNBqdBBjpjdPBJqv
  rnVNCwwrhhDrmmvcmjdDqcmB
  hFRrslFRNhFzVthllRCRCCwnQtSGfQgZZbbSWQLSSTZWbQTt
  nmVqTFCmTVbnvVCnqwFrffjhZLffhNrNJF
  StBHWDgMBpHMBHDzLjffjWwZJNNfNZjL
  wBBcDcgzdVbbQcnQlq
  MfGCtqGDhjDqHhrjGCcJZZBwHRcspZsBsHRc
  PFFpLFSpzVdSTPgnzzdPPZBRcZBwBJRcWJBmJW
  vdTTzVpNVpfCChMGqMvr
  VtZzBzhtlrhznFlBfgrfZgFrPjGRMGjRTmSjRjRTHjfRHmRv
  DQpnsbJCsNNnpNNJsDQdCDcRmHPGTHTHRSmRmHjvjHSpSS
  cQbnQdNLdJJQJJJDJWnFwzgwBthrgZBwBgFLZV
  VhRRgmhpFjFFBDVPGPWQPzvvMMWfjf
  qcnbnCbfLqJrCnrcdbbLrGSlzWsQvsWWzvWGdMWGQl
  bnfbwrcwCrHqnHcZhFBTBVRDFmpBHB
  lrtqltJJJqSTWJqVHRnsRhphdbfbzBdhsRsd
  vSZCgZMMLSNvCQLPLDPNgZgnznzBfsGGnQnQGdnsfhsfzb
  CMFLgmPgFFNMFDDCgLLcrWrjTTjtmSJqlWTTwWSr
  LdjljBdZMFdZFLLLgPvWzQRzCsCmCVssmFSW
  TJttwDhnnTlWsQzSQQDvWm
  HtcnfctJwtwrHhrwhfHhJpjNLMZBMgZLrBlbbLNPNj
  qqhNchPdpqTTNqpDmmvvGzVfzfmvdH
  cwccjsFwFjnwGwQDfVVVVv
  FbWjcRsLLFngBrjpbJqCJZTbJZNClq
  lhznMTSzSnjhQGtVPQBdGB
  msfNDDJLWslJgfNgCrmLdtGQFVvdGQPZVttBFP
  RCrJJJDrJRsfgmbsrNsrlDMTSMHcjqwzScjMqqTjbbSc
  nNgsvNWDRvgnRNVCFddTNZTNZQCTFZ
  lffHJfHSPmSfvLlbLmpZrCTFTtrTQHqtTrCCrq
  cpzblplpbvMzWnsDDB
  CgtvQvJvMtWttvwftCdWvDQrfsFcrqnlcnqZZFRcRqsnhF
  HzLzVBNLjHqnhzFlWFlr
  NmBjLbVVbmbTLpTjBNVLHNdCtTSWQvCgdwSwJtWQwdSD
  lncHcnlccVSLNSQNslncLcrZJCrgPfJZDrggJCCvZPHC
  jRqqRmmqFwRFppfPPppPBfpWBvZf
  wmMqjtTdjFwGGdtNhQbVfhntcNLVbL
  HFBgMjpbpddMpbHdgHLLRNwhwFLDtNSRDLLD
  zsCnfqZflrlnhhrtwNgggNNL
  CGqnQzlqlWWMWgVBGg
  pQnvzjztpzpCmtzzjzpnBHrJNGlqggMMqgqlNWgfNNqNCP
  sVTSwddRRDVShwRwRTWgPNqMGQMGNqMWslsg
  hDSTQhcQcHrtcBmZHv
  QRmQfvQpWpswfZWWvNbhlMglgFbZDldlbL
  rzHqtcnqqVjqjGcHdLdFdCFdCbLDnMCh
  DGcGGSPDpWTsSfpv
  llfMHTmvHlfZlFZRzgQzsFBLtLzFGF
  wrWNJrdJhRmhGmNh
  DWrrJjwPjCdPDwdmwnrTZnZZcqZfnqbvZfHvql
  mPmVJJmNZJmlVBPPrZpWcFWbGWbjgqNbdqjSjg
  nMhzwRhwvhMDMgWHRdGHgccggd
  sMvnhQshMwwvdvMMCwBtlZtplZpTmPBVZVlC
  ltlRzpncRglplzhFwFwzZZMWLWZBqnDVZLDVZQQQ
  SJcdvJscNSsGcSGCSJmsTQDTVZQTLTQQWCTTMQCW
  sPdJmcvsJvGJmdJmfpwftfrlztrRlPfP
  LdPrWcMCWCfPdMJgdFsbRRHsRSHRHHcFpH
  hVVTQmQTnRFLFsmzps
  qthVVwZqlQLQhNttDDDWrffDJJJDrgNP
  BTjTNjtlPrBjjrljbnMFfhVWFFhlMWMfHdll
  mzcgZvDggDDCJCZLvsLJLcmVqWVSVqFLfdHHMWVWWWffnF
  cmmcmzQDZQJmZCnDRgQCTTwjpTtwRjrbNjpPpwrj
  rMbchQphhCSbGnzSbl
  qFtgvTTqFFFFJGzWJG
  NZjGqGBNjNHQrhpPNHQr
  LnLmbtTtTwtLcVfFFLtPrfPrfqqqsqhSvrhrhh
  BzJWzZRZJzJvlZJCZgZZpJHCqQDhNQPDqDDrjNsjPPNrhSCN
  lpJWZzJpgHWdWMgHlJMZzgpJLGVLGGvwVwtmcGbvGMGVvncn
  WdBgdqRgWqHmNNwsGgcQ
  ptPVbPbSbMJrmsVzRzhwmcGQ
  SSbvrJbJtCDZfTqdRfCdBZ
  WDNNWvPpvNJRRbGLsGMnnbmG
  qgFdBwgVdjwdtjjdBgMgGmLQsnZrnZssGswsmLrw
  FqTCTtqjdjVqgCqSMJMTvPThTJMNDh
  brSSSpZjVVWdfVrHPhRBggNNGwHr
  fDlLzFCLMvnMMJLNHNCBQwNhRgwRPP
  MJqMmfzDvFtLDtmsVsZZTsSScWcsbq
  CSZlllhSdnDrrDdJjqjzbSGzGvwbfHMb
  gTNvVNLQtsFpQHqfwfBfVMfHzf
  QgNmWTtmTcmmdmrZRvnlPl
  SmzfvfjvjbjLNJjD
  cFhWMhGHTPhccMQQGBTFGwbVVwdbddJDvVJLvDDHvd
  GFMBGcWTWhcGrhFZTTchQsSfgtmnnRvnmnnRgRCrRS
  ZTQHVZsZSQpQQGBMGqfBRbRB
  CwtLDtNFcPnllwnqvMgbvGVfVfBG
  VClLWWFPPhlhctsTrrSpWpmszjZj
  HChzPltNnnHtnpqSpHpFpSfSvS
  mJmQssZJLdTQLcbjlGLGfSgMbqwwSFSMSFMMqMwS
  JdBLlGTjLjjjjdmmBPnRzCBRNPhPtPWPtr
  FPLHMHqqPMgFLLggsMghTJhwtDSSJDltJvtwdvST
  WQfmjQZsjfZNQCrZCNZQQWQBCSClvdwTSClwSwlTJvtwJdbT
  BpmzrWcpBrfmpsGPGFqPRgzqVPLM
  bHjccpHwGHJTfPlffPwr
  VtChMZVhhStZdfTCfJvcPRCTJn
  sLNLZcdNZZqZqqVqSNWtjQDGHssHGHgQHDBgmsDg
  CdWgCpddwgClFlmmVTBbRtRtbntBVVds
  vcJGhPLPhJvChLhMLfccrvfvsVVbsGBTTBnVbRzBVstsGnbz
  vJJHhjcCLPPjQPHLrSZmpgmqwlWZZgZZQm
  VpTFCFtrjCdJdjHVFnSjszSllDjsDzgvzl
  fhmhZBMtfZfGBNfNcmsbZnzSlRsRggslsbnv
  qPLPhMcLhPfNWPpFrdFdFTtJ
  nlgQJhJFlncMzMWZMFvw
  mDdsDfHjHsjHdjTLfpDsbDcNzzwcRbZNZPMcCPWMRPMc
  sqqdwffHjTmdmpffmLddTTGDnSJtJBShVVhrGVJtShrlBBnJ
  CrcMcMDBCmLlZdSd
  qPjGjnQPqWjgZmTdlFwTmqLJ
  bnPnnzHjbPznzVpdpVDcvprr
  TCScMQcQCrssJPQhQs
  VpfnqqfdVVwpqvqwGbDPPsjgPShDSsJhlnSl
  qffdmGpfwfbfvVqpfwwfbdqRMTSTWNMWTmZLTzTCZTMLWC
  QQPpPbPbDNplSJrCCj
  VdMzffgnRmVdfVWRvlrCTjRlNBvrrlrr
  mGgNdthhGgMWWtsFcHcHwqLqtH
  HrPFVqVppVpDjFDrVbCpDFJSLsmwjhjGLLmthJLJLmZs
  WWgRdMdRMnQnRzWvPSssPWssJmhsshtG
  MnfvMlnQccvfMlcTRMQdRfpHPDDDpPrDTbTBNbHbHDCq
  GWWRsSwLhWsRsSbsPttThZqrNBJJBgPNCJCCqNMNgP
  HpVDTHzfFDpFfzHzFVcrBZCggMJBvNrNgcNNrM
  jlVpVpVVQDHdFVlmmmQTlzpjjGstWLsSbsnnnStWLRhnht
  prLMDDjNCLZbdFLGngdLBv
  VQHmhWSSzhWHmPJRJhSmVHJPFvgTbtnTbBtGqbQnbdqgTFqG
  RzwzzhwhwNCvvfpc
  wQgmZnhmWVtwQmnnnQbQhzwsFcRPrFPvRJhPlPPBBBFvJv
  DdjqMMGLLMMGqTGdMqdMLdBBJsJPJBJJrrBFcqRlPlqr
  DsddsfMsWgfzftZb
  lcqlFSFwBBPlNwPlvSlQfWsVLTQjzjWVfLsWVq
  HMMbMHMtJHgFzzFrVVtfFQ
  RMFpCDDFcCNBcZvP
  gwDrClhppDDPwPhnmPlwDrlDjMFfMTjMTjJmRHHJBJRMJHGj
  LbbZBSvSLVRHffHJHJGZ
  WztdtLsSvNQStbbtzdStthWhnwnPBDclgwwnrwllCC
  MnMMBppMBDWMhpnCDBgCBmRbstvPvvbGltSPVGlVPWVv
  TrrddJHjNcTqrrqdFcqZwSvLSlGGPbtFRbLvFVSRPG
  JTccqTcwNQcTJrZwNJcJqHwJBQDfhCBCpCQpmpDfMRfCfBpn
  njVcjHfGjVjpTCpMWprW
  tsSsQDvSqQshDhtmWpnQnmMmbrpdzM
  FNhsDDLNLnNllBqfRJGBVHBPHRRBZZ
  hFVdlFSFlfZdRhgWgdWnnnfGpMNfnLMQzQQjMD
  RsrJRHsvBcvHBHjDMMpDQDjjzDHj
  BcCmBqvrbbqJgmFZtWdRVSVV
  FzzdDJrJCFSFRqLlwsgspsBCpL
  HQdWhMZMVwqLMllw
  bbQtcvZcmHtNPZcWthWRvrdrRzrSDfRSrzjJjR
  bTFZzHjZNJHzLggsJgbdsWcdcShWCwsSSdvGvv
  VDBmntntfCBGGGGhRc
  fMnnPDfmDlmnMPmtmttnVlHzZzNLbFbLbhzJJjMgJFbb
  GzgJGPRrMSgTgpgH
  hcvWhBdhcfPFvmFQvwfbHMsMMbpDpTDSSHsHpd
  LmcvFFlcWQlFlfPnRZPVCJzJClCz
  DdCHCHrmHRgghTHH
  pFVZFwfssMsgghML
  tSnphvhtctSSQNDqNdmrWGvq
  rqmtRmGmcWrRRQprRRnfbGMMlPGGPblwMbTP
  BHHhVZSvDNdhvBVhshbzfPbTmDfnwPwzPgbl
  ddvBsSSdsLdshLsLpmWqcWrCCrtFpQ
  wZPCwdPCHrnLQCGZDcPRqllzqqBzjlqc
  gMmgnJspsvTmWNVWNpTNWNcDcqVjqDcclhSzllRSDzqR
  JnWsgMnngmttFWWMdrwCZwHfZfdfGdFd
  wwgNgrsWvbfBrqqsWbjDCDDDCDCmFbSmLDLlSC
  QdpdzQTVdzRMTVVzcHTQLnlFmZHPSChCmlDPPHnP
  dRMLVttzzVtTVQVqrrrgBtsvWWwtNw
  vtBvntlqMvfnTfPDPhdRNbhdTFzF
  QLWcmrrcgmCgCcsgcQWlWWrrDjjzzjsdFDdRhPNDhhhzDzPF
  GGWHcCQcCCSlmmBVMGVBfMqwJtqv
  cfqfhDRwhqZgRgRzRvcfhBSrsBnrDBBJWrnrWrSmmr
  VCTVjGCTCjFddQntmrsVsJvrtrrW
  PFQGpFbvPRMNqgRq
  MmDgZZGMjZGfZRFztzCtCjzSrF
  cBNpPJpBdNntcBHBccJlsSVVzzSwlCRrCnzsFw
  PPBJLPPBBLPHBNQgqfMQtmTftGGvhq
  bbZnbnVVgVSnbgZtntZrltsprpMCJvpqdJmsCMMmvvCq
  BjDcjLLDzNjLDcjDzhcDNLLLHdpmpHJsqsMMNfCHfJpspqvp
  dFLTFBcBzjFLgTbQtRgTVTlZ
  nqNnrBRjLnjLZCqGGlqSGWlWDS
  mTJTTcTJJfJfhhhwMbQDPWCQFCRlbDCSDDPl
  dhMcRgJmgRrBrrrNgrLZ
  GvJvJSGZFrGmmbmCrWnhjncLctcWttVqjLBB
  wDlTzwlHTncRTqnRBt
  gspglgzDzdPDfpgfdDzsgMPGvZJBrrbZGJNFmCFvmFvFvM
  RLjMZZzfvNLBdjQfBfQdhRfSTVlcVqGbGcLGlbmqLVccmm
  FggHCwsggrWWtCHJDDHtWrTNNlqSnlTlnGVTmWGcbcbm
  PtpttrwsJssPsdRQvphZNzdMBh
  NqqpZBHqTBpPNpPpGwwMPGTJjjLjQljGmtLfftllbJQfGf
  nHczcrSFnVWSlrltrgJmjLLQ
  SvzcDDVVFzdzhndCFSvnhcDspRDRDMPpMHRNPPZqppwM
  FRSbVCSFFCDMFjRMjSSVFSWggMmWtWngJWttWmmJctnt
  BPwcQQcQqQmWHfgrfwrh
  PPlBQdNQvdLzzvclczdNRSbpLSbRbDjFZFFZVsFs
  wtrrVhBbpcZSSjBfSfmm
  MDWTvTMGMRCDCTQWsvfrRjjFfHlFmjlmLlHl
  gQrTQvQDssdNWGsTstcbptwVPqcbpNqttP
  jtGSwGQczrzjtGzrcsJwMRqMVMwRVMWFvVTWFV
  DhLgnDLndDHmLvWqpTHqHHVNqF
  LhdmPhfgZnZDlPCPmDfljQtGsJtBsWjGJzJSWBjC
  zHDjcjBjTfjjfGpf
  NNFTnNwPNNdqnJdFnqqTgmgftfftrWCZGbmrpWttmW
  FLJqVNVNhnwnTRsRQBlQzShs
  HJGJGJzzHHQHfJHsnNsGMbccMrTgbr
  vddSCCjdmVvDDmvmBVbbBchcrrcscMTTnscn
  VjWdFCVVMWWmjdSVFSVpqwwZttfJJltJZqltppLw
  SnmPBPBnMLnPBsSgSDqRNRRccDfNcNQQRg
  lZVWtWVzCjvZzCCGzDwbwRwtqJwJNTtDfD
  zCzHZFFFfdLnBfFf
  NRBFpNNJgNbWbJLRpRbWNtNpZllCZdjjZfjPVljTVCZQltlV
  sDqHmsHcDrwHhMDlfCQfVBjDPCTd
  MnGGcqwhhsrchcmGpzRJSSGGJWJzbJBR
  LBzjQQzcjWvHWLnVDdnHRffHDCVR
  rmJSrPJJsbNZssGSPrFpddfGwDRRpVjVpCGdCp
  mPsrmsNTrPNLTjQlWQhqLc
  MSDFszbhbRRTRdwhtw
  PWmCZCmZVvGqMcjmJRpdTTtdLpqwdlll
  MWGmmCVHvMSBDSNbbHHS
  mBwSBSfSPHZCLPZSWwfPppTndVpdVncFgcgPpP
  rhQJjzQjrltJzGqCrGJTvgqRpnTgFgcFTVFqFR
  QbhGMJrhzrhQGQCsjwMDNWBDSZBZwSBLmM
  bQfDPgDQbQNGPgflWfvMZcRMMFmcvMfZ
  BLqSssjnzpBwszqwzFCNMvzWvRvzCCZFvc
  BpNpjnNHnSpssqLqrBLLHjdhTPPDgbggllldhTPdrrQh
  CvCMqNWVVqqPvNvvChhhdSnFHwBdWwhfdS
  gqTZGGjlmclrZjlmSndSDwfFhhDBHm
  tRrZpgrcctbbltRpgtqCVJCvPsRvsvPCQPCLPz
  dTjRdWDBRzvjfzTfvTJPtJttsSLqHsSQJw
  hrJNmbnFNZrbhlCsqltqcQcQSQqwPL
  pVNhFgZphZmjzvjGDJWzVJ
  gWzQhCWbQnCCFgCJnFQnWCzwjrHjjHGTwHGrhLwjjjtStL
  splcpqDNDqqcZqRlspwHbjVrjjHTrwSbtVNV
  BpMslDqDmRDRsBRBJPPnbzCfvQgmCWJb
  tRtgRQWCwlTglHZHTglCtTdbbfvhWpbSBbhWzzbfGpfhbb
  cqZVMJmLqmNrsJMDbzGrGSvzGBhvvG
  mmnJPMZcclFRdnQtCQ
  QVQVqfFzVVQQrQwZsCTrBtTrccTtctcJRRjT
  vNNPnvGbBtWBLvBf
  mMHbfDfHdHGmnhDDqZFDzVSQzF
  NNlTNFCRTrfllTZsPWSsFPfzJdVQVpDQVszQVtpbzJMVbJ
  LNHjNHjmLLjNqvGgvVQJQDVLbDVDpdQQzQ
  nqmqGHjwgHvgwGHjGgccNTSWrrlCZrFfPSFFCP
  qWzCQqhPCHjHmqJhqvqmjRgSFMTFggMFTFVRVVTgTm
  SptGsDlnGfnDLgTMTwgRFFFs
  bBcntZdpGZZcctlGtDfnDnBCSWqJvQhqjqzjhJqJQCQWPd
  SjZJrSSDShddqLvPqzzdwq
  nTssfRpQQmQCHlPBBgGmwVGzwm
  TWQsbCRQFHFWQRTpzRHRsRrMtDrjhjbtMbccrttJjJht
  cCChVMwPPMHCPCCPrvJnntdTJSvTtdrSRt
  FGfFDBhGGlfGGfWJWdbSRSnRNbTvdn
  fGpGlDmBhflgfDFmmfFpcVzMzqZZzcCPQVZzqP
  SmgtSjGPjppBjbqqWTCZDQTHHHTg
  VsFfCzLvsMfzNfNRhVMslzlHqrWrQDQcqDqTrLWHcrWJJW
  dsRdsNCvNMVpwPdnnGbbPb    
  `
}

function getInput(){
return `
lvcNpRHDCnTLCJlL
RFZggsMrjTFGCJmdmd
srsBZgBqwBqRZbzqtHpzzDNtHDqV
CCTPpCvlpzzZQQQflrzbQDttTJcgcggJcHtcddtdhT
nMLBRnGsFFLznRFRLMMNBnNLDRDdhScJccctdSccJJgDDHhH
GVBGVBsLjsrrvfzpjpfQ
dzVRSPVVBVDSPzDBQVSQFFlrclMplpMJMtPJlJvHZCMt
TjmGmbhjTnTmwhmrvvrHcZvCHZMl
fnLwwqfwfqjghHwGThwfTGGBFVDFFsszSRVzRBsdBDgFsV
CCWFCcdDWwcWFpSvggnzRRQszngJwT
mGtqqLrqfmmLNtNrgTjgJzNQlvJTvznJ
tnhVbhMLLZZrnWHPSHDBWbWBFd
nQhvgnCQjSSSTTSMCsLDsfPfDlsPJMWLzL
qrqBFFBbrVRLszLfsqdqPW
bNFFRbBcFZNrZRRRbprNpFrHSwznTnvSwgHvzCSSSjnCQwgz
tnnZZVmwmqtvVdZqnddQQHHTHQLsFTnsPrrgrQ
MzMflMGpzGzPGPgjLgHrGj
zPfhMJDDMJfzlhcRJvVwcVtwVcmcbqqtbv
GVzrBVcPVfGrzVVBcQJlGGRCZSSRtSdRnGLJ
wbjvHWbLvhFppjZdtwZRNddtJwlR
pvMmbpFFbqqqvWHMFvzrLDMMrMTTrVTPzVzc
qPmgpmwpwqWWPHdjdTNStzNLMztSWtMNtz
lVFfJrFJbbcsvcRVRZzQCzQNSZTZ
DGbvFSDGbDjnqgjwmGdq
DMnpnpwwnpmRRmcRBDnDwpbRQHssHqhHCHHSsQddHZQQcqqs
JlZjjlJgNSddfsgQdf
GvrWvzNjvPVLDpbPZwBP
drQDzHsHrdZWqDSSPwmmJDDbvbSJ
hphBhCMFlBtBtGTJMJsscPwTjMJv
tlBCGFgVFNpGClFFVGGtFBZrdZQznfdQQrRWVRQdRsVf
NjdCLdjzzlNdjwBBtZqpqPJQbN
CsDWcHcGHtcBbJPpbP
mGHSssSgSsHFSgGrSgmlLzCdldllrCVCLdnfnT
rDLLzRmbcLJRtRSvSBdZtSTp
MFswshwgsCsjghgFBsGssjlZpfpvdSHfTdCZTSpHtfddTH
llwlwGjMPMQQnBMswsFgglPVcWcDcbWqLWbbLJVDzrqnVr
pqmmcSTLfSSSMFlf
rHWtPWnHtlrlDntzWwtBFdzCFMRCfjRQFfgMRMjC
PWWHDVZPDDJVlWHncGGbqqTVvVmpGTmm
wLBtWhGWJBdMmZMs
jgvNCFvvGppGnmNJ
DDRQTgcvjTPFqGHhRVhLRSVL
tPPwLpBpDpgLSPvgQCvsLPjdjNZrJZsdZjsrsnZNjbZc
lMWzWMBhmMhRGfVRffHmMjJcJjrNNZnjJcWjNqJnZJ
mFMzhTmBGfHTwgPgtptFpPgP
qCcqJQHslgtsQsCZmPWNSRNZTPBBCN
nnLpjjnvwwvDnrGwFvbFjwPgPWRTPrrPShNhmmNSRRPN
bnwdDLjnzGgvFqdJQcqVfQVqHt
DfCzDCCTDLDBCsdjzwdrHjbRgjGH
MSStMScccJtPptJNJZtJJSrFdwPGjFFHHwsggrwdwRdP
nStlpVlhhNSshZlcNZnMcctpBChWBQLqCWqmqvmBCBmQBqmL
RfLHNvfLfLZQBtRZsBfffjVqGvqpGSmJpgrJpjGjrp
FDbPCMzbTTDDPmzrVzqppJBrBj
DPcWPWDhlbCcWBsQZZfHtdwf
fbHfPfHHfPZWgZfSGpqNBqdBBjpjdPBJqv
rnVNCwwrhhDrmmvcmjdDqcmB
hFRrslFRNhFzVthllRCRCCwnQtSGfQgZZbbSWQLSSTZWbQTt
nmVqTFCmTVbnvVCnqwFrffjhZLffhNrNJF
StBHWDgMBpHMBHDzLjffjWwZJNNfNZjL
wBBcDcgzdVbbQcnQlq
MfGCtqGDhjDqHhrjGCcJZZBwHRcspZsBsHRc
PFFpLFSpzVdSTPgnzzdPPZBRcZBwBJRcWJBmJW
vdTTzVpNVpfCChMGqMvr
VtZzBzhtlrhznFlBfgrfZgFrPjGRMGjRTmSjRjRTHjfRHmRv
DQpnsbJCsNNnpNNJsDQdCDcRmHPGTHTHRSmRmHjvjHSpSS
cQbnQdNLdJJQJJJDJWnFwzgwBthrgZBwBgFLZV
VhRRgmhpFjFFBDVPGPWQPzvvMMWfjf
qcnbnCbfLqJrCnrcdbbLrGSlzWsQvsWWzvWGdMWGQl
bnfbwrcwCrHqnHcZhFBTBVRDFmpBHB
lrtqltJJJqSTWJqVHRnsRhphdbfbzBdhsRsd
vSZCgZMMLSNvCQLPLDPNgZgnznzBfsGGnQnQGdnsfhsfzb
CMFLgmPgFFNMFDDCgLLcrWrjTTjtmSJqlWTTwWSr
LdjljBdZMFdZFLLLgPvWzQRzCsCmCVssmFSW
TJttwDhnnTlWsQzSQQDvWm
HtcnfctJwtwrHhrwhfHhJpjNLMZBMgZLrBlbbLNPNj
qqhNchPdpqTTNqpDmmvvGzVfzfmvdH
cwccjsFwFjnwGwQDfVVVVv
FbWjcRsLLFngBrjpbJqCJZTbJZNClq
lhznMTSzSnjhQGtVPQBdGB
msfNDDJLWslJgfNgCrmLdtGQFVvdGQPZVttBFP
RCrJJJDrJRsfgmbsrNsrlDMTSMHcjqwzScjMqqTjbbSc
nNgsvNWDRvgnRNVCFddTNZTNZQCTFZ
lffHJfHSPmSfvLlbLmpZrCTFTtrTQHqtTrCCrq
cpzblplpbvMzWnsDDB
CgtvQvJvMtWttvwftCdWvDQrfsFcrqnlcnqZZFRcRqsnhF
HzLzVBNLjHqnhzFlWFlr
NmBjLbVVbmbTLpTjBNVLHNdCtTSWQvCgdwSwJtWQwdSD
lncHcnlccVSLNSQNslncLcrZJCrgPfJZDrggJCCvZPHC
jRqqRmmqFwRFppfPPppPBfpWBvZf
wmMqjtTdjFwGGdtNhQbVfhntcNLVbL
HFBgMjpbpddMpbHdgHLLRNwhwFLDtNSRDLLD
zsCnfqZflrlnhhrtwNgggNNL
CGqnQzlqlWWMWgVBGg
pQnvzjztpzpCmtzzjzpnBHrJNGlqggMMqgqlNWgfNNqNCP
sVTSwddRRDVShwRwRTWgPNqMGQMGNqMWslsg
hDSTQhcQcHrtcBmZHv
QRmQfvQpWpswfZWWvNbhlMglgFbZDldlbL
rzHqtcnqqVjqjGcHdLdFdCFdCbLDnMCh
DGcGGSPDpWTsSfpv
llfMHTmvHlfZlFZRzgQzsFBLtLzFGF
wrWNJrdJhRmhGmNh
DWrrJjwPjCdPDwdmwnrTZnZZcqZfnqbvZfHvql
mPmVJJmNZJmlVBPPrZpWcFWbGWbjgqNbdqjSjg
nMhzwRhwvhMDMgWHRdGHgccggd
sMvnhQshMwwvdvMMCwBtlZtplZpTmPBVZVlC
ltlRzpncRglplzhFwFwzZZMWLWZBqnDVZLDVZQQQ
SJcdvJscNSsGcSGCSJmsTQDTVZQTLTQQWCTTMQCW
sPdJmcvsJvGJmdJmfpwftfrlztrRlPfP
LdPrWcMCWCfPdMJgdFsbRRHsRSHRHHcFpH
hVVTQmQTnRFLFsmzps
qthVVwZqlQLQhNttDDDWrffDJJJDrgNP
BTjTNjtlPrBjjrljbnMFfhVWFFhlMWMfHdll
mzcgZvDggDDCJCZLvsLJLcmVqWVSVqFLfdHHMWVWWWffnF
cmmcmzQDZQJmZCnDRgQCTTwjpTtwRjrbNjpPpwrj
rMbchQphhCSbGnzSbl
qFtgvTTqFFFFJGzWJG
NZjGqGBNjNHQrhpPNHQr
LnLmbtTtTwtLcVfFFLtPrfPrfqqqsqhSvrhrhh
BzJWzZRZJzJvlZJCZgZZpJHCqQDhNQPDqDDrjNsjPPNrhSCN
lpJWZzJpgHWdWMgHlJMZzgpJLGVLGGvwVwtmcGbvGMGVvncn
WdBgdqRgWqHmNNwsGgcQ
ptPVbPbSbMJrmsVzRzhwmcGQ
SSbvrJbJtCDZfTqdRfCdBZ
WDNNWvPpvNJRRbGLsGMnnbmG
qgFdBwgVdjwdtjjdBgMgGmLQsnZrnZssGswsmLrw
FqTCTtqjdjVqgCqSMJMTvPThTJMNDh
brSSSpZjVVWdfVrHPhRBggNNGwHr
fDlLzFCLMvnMMJLNHNCBQwNhRgwRPP
MJqMmfzDvFtLDtmsVsZZTsSScWcsbq
CSZlllhSdnDrrDdJjqjzbSGzGvwbfHMb
gTNvVNLQtsFpQHqfwfBfVMfHzf
QgNmWTtmTcmmdmrZRvnlPl
SmzfvfjvjbjLNJjD
cFhWMhGHTPhccMQQGBTFGwbVVwdbddJDvVJLvDDHvd
GFMBGcWTWhcGrhFZTTchQsSfgtmnnRvnmnnRgRCrRS
ZTQHVZsZSQpQQGBMGqfBRbRB
CwtLDtNFcPnllwnqvMgbvGVfVfBG
VClLWWFPPhlhctsTrrSpWpmszjZj
HChzPltNnnHtnpqSpHpFpSfSvS
mJmQssZJLdTQLcbjlGLGfSgMbqwwSFSMSFMMqMwS
JdBLlGTjLjjjjdmmBPnRzCBRNPhPtPWPtr
FPLHMHqqPMgFLLggsMghTJhwtDSSJDltJvtwdvST
WQfmjQZsjfZNQCrZCNZQQWQBCSClvdwTSClwSwlTJvtwJdbT
BpmzrWcpBrfmpsGPGFqPRgzqVPLM
bHjccpHwGHJTfPlffPwr
VtChMZVhhStZdfTCfJvcPRCTJn
sLNLZcdNZZqZqqVqSNWtjQDGHssHGHgQHDBgmsDg
CdWgCpddwgClFlmmVTBbRtRtbntBVVds
vcJGhPLPhJvChLhMLfccrvfvsVVbsGBTTBnVbRzBVstsGnbz
vJJHhjcCLPPjQPHLrSZmpgmqwlWZZgZZQm
VpTFCFtrjCdJdjHVFnSjszSllDjsDzgvzl
fhmhZBMtfZfGBNfNcmsbZnzSlRsRggslsbnv
qPLPhMcLhPfNWPpFrdFdFTtJ
nlgQJhJFlncMzMWZMFvw
mDdsDfHjHsjHdjTLfpDsbDcNzzwcRbZNZPMcCPWMRPMc
sqqdwffHjTmdmpffmLddTTGDnSJtJBShVVhrGVJtShrlBBnJ
CrcMcMDBCmLlZdSd
qPjGjnQPqWjgZmTdlFwTmqLJ
bnPnnzHjbPznzVpdpVDcvprr
TCScMQcQCrssJPQhQs
VpfnqqfdVVwpqvqwGbDPPsjgPShDSsJhlnSl
qffdmGpfwfbfvVqpfwwfbdqRMTSTWNMWTmZLTzTCZTMLWC
QQPpPbPbDNplSJrCCj
VdMzffgnRmVdfVWRvlrCTjRlNBvrrlrr
mGgNdthhGgMWWtsFcHcHwqLqtH
HrPFVqVppVpDjFDrVbCpDFJSLsmwjhjGLLmthJLJLmZs
WWgRdMdRMnQnRzWvPSssPWssJmhsshtG
MnfvMlnQccvfMlcTRMQdRfpHPDDDpPrDTbTBNbHbHDCq
GWWRsSwLhWsRsSbsPttThZqrNBJJBgPNCJCCqNMNgP
HpVDTHzfFDpFfzHzFVcrBZCggMJBvNrNgcNNrM
jlVpVpVVQDHdFVlmmmQTlzpjjGstWLsSbsnnnStWLRhnht
prLMDDjNCLZbdFLGngdLBv
VQHmhWSSzhWHmPJRJhSmVHJPFvgTbtnTbBtGqbQnbdqgTFqG
RzwzzhwhwNCvvfpc
wQgmZnhmWVtwQmnnnQbQhzwsFcRPrFPvRJhPlPPBBBFvJv
DdjqMMGLLMMGqTGdMqdMLdBBJsJPJBJJrrBFcqRlPlqr
DsddsfMsWgfzftZb
lcqlFSFwBBPlNwPlvSlQfWsVLTQjzjWVfLsWVq
HMMbMHMtJHgFzzFrVVtfFQ
RMFpCDDFcCNBcZvP
gwDrClhppDDPwPhnmPlwDrlDjMFfMTjMTjJmRHHJBJRMJHGj
LbbZBSvSLVRHffHJHJGZ
WztdtLsSvNQStbbtzdStthWhnwnPBDclgwwnrwllCC
MnMMBppMBDWMhpnCDBgCBmRbstvPvvbGltSPVGlVPWVv
TrrddJHjNcTqrrqdFcqZwSvLSlGGPbtFRbLvFVSRPG
JTccqTcwNQcTJrZwNJcJqHwJBQDfhCBCpCQpmpDfMRfCfBpn
njVcjHfGjVjpTCpMWprW
tsSsQDvSqQshDhtmWpnQnmMmbrpdzM
FNhsDDLNLnNllBqfRJGBVHBPHRRBZZ
hFVdlFSFlfZdRhgWgdWnnnfGpMNfnLMQzQQjMD
RsrJRHsvBcvHBHjDMMpDQDjjzDHj
BcCmBqvrbbqJgmFZtWdRVSVV
FzzdDJrJCFSFRqLlwsgspsBCpL
HQdWhMZMVwqLMllw
bbQtcvZcmHtNPZcWthWRvrdrRzrSDfRSrzjJjR
bTFZzHjZNJHzLggsJgbdsWcdcShWCwsSSdvGvv
VDBmntntfCBGGGGhRc
fMnnPDfmDlmnMPmtmttnVlHzZzNLbFbLbhzJJjMgJFbb
GzgJGPRrMSgTgpgH
hcvWhBdhcfPFvmFQvwfbHMsMMbpDpTDSSHsHpd
LmcvFFlcWQlFlfPnRZPVCJzJClCz
DdCHCHrmHRgghTHH
pFVZFwfssMsgghML
tSnphvhtctSSQNDqNdmrWGvq
rqmtRmGmcWrRRQprRRnfbGMMlPGGPblwMbTP
BHHhVZSvDNdhvBVhshbzfPbTmDfnwPwzPgbl
ddvBsSSdsLdshLsLpmWqcWrCCrtFpQ
wZPCwdPCHrnLQCGZDcPRqllzqqBzjlqc
gMmgnJspsvTmWNVWNpTNWNcDcqVjqDcclhSzllRSDzqR
JnWsgMnngmttFWWMdrwCZwHfZfdfGdFd
wwgNgrsWvbfBrqqsWbjDCDDDCDCmFbSmLDLlSC
QdpdzQTVdzRMTVVzcHTQLnlFmZHPSChCmlDPPHnP
dRMLVttzzVtTVQVqrrrgBtsvWWwtNw
vtBvntlqMvfnTfPDPhdRNbhdTFzF
QLWcmrrcgmCgCcsgcQWlWWrrDjjzzjsdFDdRhPNDhhhzDzPF
GGWHcCQcCCSlmmBVMGVBfMqwJtqv
cfqfhDRwhqZgRgRzRvcfhBSrsBnrDBBJWrnrWrSmmr
VCTVjGCTCjFddQntmrsVsJvrtrrW
PFQGpFbvPRMNqgRq
MmDgZZGMjZGfZRFztzCtCjzSrF
cBNpPJpBdNntcBHBccJlsSVVzzSwlCRrCnzsFw
PPBJLPPBBLPHBNQgqfMQtmTftGGvhq
bbZnbnVVgVSnbgZtntZrltsprpMCJvpqdJmsCMMmvvCq
BjDcjLLDzNjLDcjDzhcDNLLLHdpmpHJsqsMMNfCHfJpspqvp
dFLTFBcBzjFLgTbQtRgTVTlZ
nqNnrBRjLnjLZCqGGlqSGWlWDS
mTJTTcTJJfJfhhhwMbQDPWCQFCRlbDCSDDPl
dhMcRgJmgRrBrrrNgrLZ
GvJvJSGZFrGmmbmCrWnhjncLctcWttVqjLBB
wDlTzwlHTncRTqnRBt
gspglgzDzdPDfpgfdDzsgMPGvZJBrrbZGJNFmCFvmFvFvM
RLjMZZzfvNLBdjQfBfQdhRfSTVlcVqGbGcLGlbmqLVccmm
FggHCwsggrWWtCHJDDHtWrTNNlqSnlTlnGVTmWGcbcbm
PtpttrwsJssPsdRQvphZNzdMBh
NqqpZBHqTBpPNpPpGwwMPGTJjjLjQljGmtLfftllbJQfGf
nHczcrSFnVWSlrltrgJmjLLQ
SvzcDDVVFzdzhndCFSvnhcDspRDRDMPpMHRNPPZqppwM
FRSbVCSFFCDMFjRMjSSVFSWggMmWtWngJWttWmmJctnt
BPwcQQcQqQmWHfgrfwrh
PPlBQdNQvdLzzvclczdNRSbpLSbRbDjFZFFZVsFs
wtrrVhBbpcZSSjBfSfmm
MDWTvTMGMRCDCTQWsvfrRjjFfHlFmjlmLlHl
gQrTQvQDssdNWGsTstcbptwVPqcbpNqttP
jtGSwGQczrzjtGzrcsJwMRqMVMwRVMWFvVTWFV
DhLgnDLndDHmLvWqpTHqHHVNqF
LhdmPhfgZnZDlPCPmDfljQtGsJtBsWjGJzJSWBjC
zHDjcjBjTfjjfGpf
NNFTnNwPNNdqnJdFnqqTgmgftfftrWCZGbmrpWttmW
FLJqVNVNhnwnTRsRQBlQzShs
HJGJGJzzHHQHfJHsnNsGMbccMrTgbr
vddSCCjdmVvDDmvmBVbbBchcrrcscMTTnscn
VjWdFCVVMWWmjdSVFSVpqwwZttfJJltJZqltppLw
SnmPBPBnMLnPBsSgSDqRNRRccDfNcNQQRg
lZVWtWVzCjvZzCCGzDwbwRwtqJwJNTtDfD
zCzHZFFFfdLnBfFf
NRBFpNNJgNbWbJLRpRbWNtNpZllCZdjjZfjPVljTVCZQltlV
sDqHmsHcDrwHhMDlfCQfVBjDPCTd
MnGGcqwhhsrchcmGpzRJSSGGJWJzbJBR
LBzjQQzcjWvHWLnVDdnHRffHDCVR
rmJSrPJJsbNZssGSPrFpddfGwDRRpVjVpCGdCp
mPsrmsNTrPNLTjQlWQhqLc
MSDFszbhbRRTRdwhtw
PWmCZCmZVvGqMcjmJRpdTTtdLpqwdlll
MWGmmCVHvMSBDSNbbHHS
mBwSBSfSPHZCLPZSWwfPppTndVpdVncFgcgPpP
rhQJjzQjrltJzGqCrGJTvgqRpnTgFgcFTVFqFR
QbhGMJrhzrhQGQCsjwMDNWBDSZBZwSBLmM
bQfDPgDQbQNGPgflWfvMZcRMMFmcvMfZ
BLqSssjnzpBwszqwzFCNMvzWvRvzCCZFvc
BpNpjnNHnSpssqLqrBLLHjdhTPPDgbggllldhTPdrrQh
CvCMqNWVVqqPvNvvChhhdSnFHwBdWwhfdS
gqTZGGjlmclrZjlmSndSDwfFhhDBHm
tRrZpgrcctbbltRpgtqCVJCvPsRvsvPCQPCLPz
dTjRdWDBRzvjfzTfvTJPtJttsSLqHsSQJw
hrJNmbnFNZrbhlCsqltqcQcQSQqwPL
pVNhFgZphZmjzvjGDJWzVJ
gWzQhCWbQnCCFgCJnFQnWCzwjrHjjHGTwHGrhLwjjjtStL
splcpqDNDqqcZqRlspwHbjVrjjHTrwSbtVNV
BpMslDqDmRDRsBRBJPPnbzCfvQgmCWJb
tRtgRQWCwlTglHZHTglCtTdbbfvhWpbSBbhWzzbfGpfhbb
cqZVMJmLqmNrsJMDbzGrGSvzGBhvvG
mmnJPMZcclFRdnQtCQ
QVQVqfFzVVQQrQwZsCTrBtTrccTtctcJRRjT
vNNPnvGbBtWBLvBf
mMHbfDfHdHGmnhDDqZFDzVSQzF
NNlTNFCRTrfllTZsPWSsFPfzJdVQVpDQVszQVtpbzJMVbJ
LNHjNHjmLLjNqvGgvVQJQDVLbDVDpdQQzQ
nqmqGHjwgHvgwGHjGgccNTSWrrlCZrFfPSFFCP
qWzCQqhPCHjHmqJhqvqmjRgSFMTFggMFTFVRVVTgTm
SptGsDlnGfnDLgTMTwgRFFFs
bBcntZdpGZZcctlGtDfnDnBCSWqJvQhqjqzjhJqJQCQWPd
SjZJrSSDShddqLvPqzzdwq
nTssfRpQQmQCHlPBBgGmwVGzwm
TWQsbCRQFHFWQRTpzRHRsRrMtDrjhjbtMbccrttJjJht
cCChVMwPPMHCPCCPrvJnntdTJSvTtdrSRt
FGfFDBhGGlfGGfWJWdbSRSnRNbTvdn
fGpGlDmBhflgfDFmmfFpcVzMzqZZzcCPQVZzqP
SmgtSjGPjppBjbqqWTCZDQTHHHTg
VsFfCzLvsMfzNfNRhVMslzlHqrWrQDQcqDqTrLWHcrWJJW
dsRdsNCvNMVpwPdnnGbbPb`

}
