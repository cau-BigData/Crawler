const getSubtitles = require('youtube-captions-scraper').getSubtitles
const fs = require('fs')

// set all id list
// let allIDs = '3Ryq0X1itcE,2Nabhux10zw,hNEKyf1iAnE,gcyX3wvYJ4M,G3oMNkMXOwI,gN3aLB0-SSI,NeZQQAAUgIQ,epyhhkf8nXA,FEhRq0RYdUw,67u30pVSnxY,zb8_90t8SXk&t=1s,IlZtRQf47Q0,brg7UrJqbLw,_6ro-V8cLf0,9DX2JBiPx8s,RDqe9tUXavY,lL2sQ0pxnIQ,2aFlQmRQD_0,PPkTc4Wlnzs,iq7Z2z9VoQI,H6kq-_wkQXg,ORBffmHuoq4,cVKIVgsbi1Y,pnByOpXHKnM,XRA9Box_pOU,Wetnd700zqM,bosgefGa3IU,8uX1lLlftb4,l-jWMu4qVdU,6vJMFzM8LWI,XwE32tCtG8s,ARdpJ7C1GHk,bv3fW_kkppc,HKjrj3Y-iz4,vEikfoe-kdo,v075_zs1D-8,qJPaXLGeX8I,Rk-OD7LXHVY,TaeAe8GZMQ0&t=81s,yjJn3BXeIc4,L5GbwFNrQeE,evmWXNZBYYc,PCQLc7RTwC4,gXRZ5BdqyKw,uUJqZJJUpVI,7QsELO4yilU,ij22G-EkOY4,HWK4UWc750w,nvM7ZS0fM1k,oAWR4ANwPEs,87zKmMRAkNU,yFk_IoLItDg,IraEJMqdLhs,hK6KUIsfZ1c,Ncwt82A-Gc4,2fjprF-y9aM,QFGGHK9gl0k,DQkye-1TGCI,RMTUX_XIa8I,qoxby2nuO2Y,rEEL2jW1Z7g,i6785S1J3X8,qdGMOXmWIL8,ksnS0mRm29o,u_iPDe4j1Z8,0ZhDblYVG1s,JEttIEVV6T4,FC8BDM2Lqng,cda_A5DULtk,zUJmz5KSG6M,APzwi0fgcyI,nGWiPhihcfc,L_F9liZbhnk,pXjrLbQw4VY,lPbi_Sv4YVw,xjO2vXhOUf0,TljvsWZ61po,B3PNMt8YR-U,SQZqKSNRcXY,DK5G-wPxkfg,qrTEktr-lyo,NbWUSAx0dYc,Nf8RNG6omjY,yddN1J6SUaE,ojhG0RsYRdA,jdPuOxruHrU,MbdGjVAjYJE,ZS0NBv9jcxw,W3ueLyYEL4M,oy5lkrJCaxI,KGHXBKqtrG8,pY02atZOBAk,cK-HhX_9mno,TflWj80gtBI,OPC_U2SMV-0,r3JWZSn_Esk,AFQaEY1M3c4,UnSOyeyd6dg,DxgTPDQ0nvs,WNDHKJ152-Q,ULrC8rRM6aU,j3aKnLS2Qvc,GMtaVUNkFvs,VnPWoYN7JoM,40jArMWDfHY,MnI9Z9pv4tg,EnhN06b5o6k,tf6sZ-8JTJ4,C-B2XlyKEnE,n4xSA9Nf1JE,4rzbRlgN8dg,0wAoNesP_Rs,KPimz90ycvo,K6bTH5ZCdrU,_dTzGpMRhxQ,QLWDjTqHJ3I,qhabuSPpRzw,tU9T46arHTQ,VMpZOHQBSto,0Qm--c68pLE,LtPuIGBLumA,YYvEcZFPcSw,IEanazyzy1w,NZ2TzV_KqUI,ZLY6Kyj65Fc,9LqCzH4eFX4,PB-1eqKXRlQ,ZeAlmcL3fcw,UG0hjQhpqkw,yxpY3izT1E4,JYQb3WuFZkw,eR5fpJDWaL4,-sdJRb0HHL4,bavBA4yGSC8,tEZHj55SxEM,Jiw2Ss3-FMQ,RD4sLTPEscQ,xJc9DAO4z0Y,zL7WZoqGM0s,i7br3OWOrrM,UHUz9CN7WhY,GhJVrvn7JRQ,qGTryw_C5sM,lyVL6cIDrxQ,CXlnEFor7Ro,fwgfY2qjnBA,6DOWAP1nAdQ,KfSODyqMbWA,UKf5iqwku80,LF5Wa1SLHlo,IRXS_hXqHFQ,NAOaibETcNs,ENs0gzZuxr8,8_aD-WPtTMw,NPBbBlE_EfM,DcsGJpvc8Zc,fwIdOX4DJ-0,O-IoGg1jo6U,W8f_l_26QjI,-W9Iiyg5nBg,qGPfqRjsPls,9MXpu7jm1NE,DJmog3vvnZ0,a6lxmJPxuIM,PqiDv2vYO7g,pEoqytYwDNU,y085h1lnYWQ,8KY13lyLp_k,kUtot88Qrgg,YXM8-uE5e9Q,v9lqJteB0H0,uM4bJKUPbgE,vikq-fLDk-E,gOheHw7F7-s,53zhw-OWVd8,HyOP44W8eRk,xAN5abRY_Co,jZjJu5YBqwI,kTMSeGJ5trw,3s1lOiWddN8,VOokfmrS-Uc,kUtMQVVmk-Y,FuA25fSt4qU,d2-7AzJFd8U,nf-upQ4Cd3w,cXS5lpiorw0,i0_sxIsz-9M,UkBSzPRQ0tI,aRluYQ32xfc,ZCtVc3kl0V0,gUT0nO3rM9M,0E4GD6Tqbm8,VftC0cLp-TQ,6QhrJkegpQg,4LFSWrY5HsU,Ncg7FyY_qZY,PSOIoTMgXzc,1C8yU4NO3yw,CrHacS5CTug,oOSN6_jvtWg,NoG8od5l2VY,A5eHh6UDvvw,qV77oPcFiEQ,NNTA-ehqtXk,VPcbvBF8wh8,gBoUa5x3U1E,NukG09IKM0o,5XwF7SdpTvc,LxF08MNuYqs,EfmneHvoR5s,vUc0FjE-4lg,KeRStk5yIBw,yjkVleRHFp0,AsxyrrF5egU,ninh0LAYCVw,pk9xyzNhqVQ,jt6i1ucm2kk,JBPxWO1-OiQ,CK0hiLT-Ydc,Ef2-YxKxA7Q,g1e3Pr8nc7Y,OqUuiGF1Z4w,IWzsCtGb0g0,4rfVmhOrIps,cl11fjljceY,59KIXLbq9bc,wFyvejkKkl8,WvGdHEsHq-Q,3BBcFrSDZTQ,n40tNgE3dmU,MOX6_DljlIY,xzrB8iT7tHA,zO1hGUlJK5I,Dx8a_8xGB1s,DY1MEyK2bKQ,EHgBPTPJYz0,MmGoM457_3o,aeK3N5itzgY,F28W66Yjwwo,pV66-H37jV0,8iNcLuCURAA,sV3M6-Xc6F0,U95lpiufKFc,PSqK1i1hANk,_ijaArj7Bm8,NpddAKsnFRA,CB8k57x5--I,Pk8ZE7p31oI,CwpZiGUL2C8,Ynx7DK1J9fo,XZS-o_yogis,MAwgq6XeQ_0,6AgJxwqu6hs,wC2mLiv76Bk,1LdEidxmOJA,Oi28QDbApFk,Rxit4k_c1O0,BEVQOIs9BBU,z0Yk5kiaf70,ADePE-nuiCU,V1Bga4n-zn4,dyIeb-FClvw,rsh9kMspdeE,2rrtuEpL0CE,ijGj3CYaxks,iBc43ywbHRk,e5GIFFJZZsE,tIi5vOx-6fw,2qIFM3FhZ44,ZtmKGY_S8UU,N53ulz36DYg,okHkKlw-P8w,zIO44XaCEr8,brOYzOKIP_g,zpivP5wHJrA,AVvV6Ck46uM,kUR58DmmZF4,DDAXWhCzccA,bsxz84Nfp60,6HCELxjmIZc,yZaoqPxrB3s,OS76VcB9fWg,3CzcfjGvul4,3vuyVleIFx0,NjucE-58iMQ,i14ZerNiyZ8,Mj9tIOpN-3I,PTm-ZUd2tvU,P-ZJjPdJARA,E4zeQhnXtZk,g-d_NgA7NC4,C-5Dg-Gc5VU,mHsHCQH98cw,VIi1-87Zvng,vAHP-RT12Po,q5gyQc0dWSs,4J0O00cJAY0,iuzO1dEGVDs,XSir4gO8PSU,gltA_X7zhGk,SwfQfQ2qxM4,zxpGS3tTwRs,PaTWRBixuYk,Fumhy2ZsqrA,yoGD7QCNQxU,brazLl04Iy8,2rySfxImZ_I,npE5-U8CYW4,10j_-UwRmws,cXyIPaw5Rz8,6ZQXwIHp6Us,6LVegiZLEnQ,UovfLWLN6zU,dYs8Wr7FOM8,VBYuzs6q-2w,OonlOlc_oeE,gI_sWl_nmXU,4HG0Od2RB3E,RG-YwVDufzM,a4mmB_kmD1Y,16_QQlLMYYU,icAoSZuwPL8,YYVqSE6gMLI,Hp5Fv2oWQrs,Wxx6PxA22Q8,KMHcz6TgVmw,FO4WNkyh7m4,rrTUUmzSs4Q,RbLmSKV8tw8,7pwXwEWKR9c,1OjSvl4YNXQ,MytmrKqak8c,jIhM3IK_Fhc,70kC5gkWFSk,7JPeUXjsmYg,RuU--ks4NWc,gOk9V6A46dk,oZ2Va63p2yo,BgcsibCYLkE,WOmFORQJ7V4,yA7umTqIcSI,_1bEo6t43VI,JNlYBU694oo,nGxflfDCzno,b4PMB1zFRN8,-w9Sc385u0w,gPOLiiq87jQ,1U-BFmddw9g,3hstoPUOmyQ,yli6LJvS6nA,vYdgKQJrk8M,jhZKRkTB_qg,TsZ9lanMHnM,Ah-XqTNCsCY,Jy2I3j5j6HI,qutlfgEKNEU,jyTGW8kNKlE,d47knwx2fEI,JmwQxqffUQM,oihq3SM5_zs,N1M2uF9uWVY,1RHEqpj0TOg,D7nebLATuD0,ruU053qL5f8,J-KJObi7IN4,fUD9MP4W05E,_zzL5QtM93s,ZylWVrA8tvc,2O-T0cDEa50,IFLdudw740w,C-Ye-kAwLhQ,Bi8wkiS5siA,lEcciEZOOUM,cllrOeT-NdM,5UnIq94Ufrc,_12mSrKcJ-s,aQuI1DN13OM,nq9zexFovBg,Ctj6PH8Du_0,mY2922jtNM0,tZuPELIeRvs,ahfftJ2zX38,46ZSq-UQ0gY,rBXAUGLZvhg,hMGPz0TOeJ0,YkIPBx-K4HY,BJa3OCgA_2E,BFJGg38GuNw,XXSQo0h-SBI,wT58ZEA7Ono,iqvZ_Th1CXQ,7U5jdCzICoA,rDWjd-Fd5oU,MjNpWOCami8,tZ6CfkfdgNI,YPCqtg9-wgo,92W1FUx5Joc,L864gfc67Nk,uCDZaE799Qk,m8pl98jJLN8,VzMhXz30qDE,3F77u9DjbEs,MjCPfR0jTY8,WywCBtuSRo8,WgMCjtO7VWQ,9JPdWYHtuXw,Dl6WYgvYaUE,KkcNienrv1c,ih3VTU9p6Ws,ykMZ-Kqwm-k,kMVXHCf2bOg,GQ33dfBTZkE,ezc9uzOVv8M,KskNux9xqHo,6KNcwIXuuyg,9cXrsGMklX8,4cJtNDEyqoM,iJdRgLlpyQ4,9eBwl-Ux5gg,7ouUWhyzu7U,mNRr07dRb_s,AbVEps9LdoU,cHqRi-qT_No,5baMQ5JjS30,IshorwqDs6U,2s4vuZphVIE,hTDpNWfn4V0,zrKPPow7dFI,FR4e42OsMfQ,3ej0u_eVJDU,D3VVDqVoJM8,zspo0IualeY,HR6AAg419po,TUbsK0S2DD8,7uQKi59aUG0,7Ksc1qlWowk,Lsz8UpoLpOA,1QgJYYwoShA,pi3HYfCMGms,YcxEacmEuyA,Y1hmyrVW5pI,q7TasiIjHCE,OMW-k3DXUJo,W7KvT0hYgkc,cjbt0tYS4EE,EwczS6MPSw4,iQ1QdNpy6vY,PogAs1EYL3o,07tgun_uobg,fGU_nvX6-Pc,Ya6Xi2MBYNA,dB-1ZuvAisM,JUCa94FAX0M,wSMpcZ11nDM,RDxi_UWswPI,A_QX_yyCAPg,tIWzfCDEUGo,YO7P5ik_Cmg,r9v4wEGv5qA,CYNcnTG6Gs0,w9wxjvEzL1c,WSXvZ1cECZE,i8mO2lZWq4M,k78ShiWlvuM,IdZ0OzqYDGE,Mq3HZNfzjBo,3_wuk9Bfkgs,J3pVuPjwBoc,8_xNxDuNXMg,_6l7NfRAdeg,3tgw_T2Rb-w,Vul0yRys4m8,_CF6F5znZAI,IAHlp1rbQso,EM3Dj-QOhhA,SFpjKief7VU,EnZxU90pnOA,_6xBulsKEX8,YlgCRCIayAY,vJd05cRVX8I,6bHgju3XNgY,432auVHX6_0,f_ME-APxIv0,xvPD19A4brk,2TMaW4J58ok,N8WMp6bxkeA,hqjp7p9INus,LM0Y5ArKUhg,QhIYlXGPIBY,zcHqE0CJGmY,Q-zMZA79Uwg,9CZ4aK4d5sw,a4eRimcCt7Y,KpKUgQsKFN4,OSYVE05W6G0,ftroBBtMXzA,HmNtKaUrn6Q,DZqAsocH-eE,5Xo8-HaOxrE,xG52n8hLky4,vji5hVust3E,B6Q_W9JfP1w,liGReqEWgAY,37FeMnaTbsk,so7Tv7wgV1M,3EY5Il5jKZs,XoiKXsmINlc,CDQj9ivwhC0,j1XOrOWySzc,mq4nINjqBjs,P8PiWcQI7lE,bmFzbhum9h8,FztsDgd53qU,jRFVUltGqZk,p8lTEO6Eppw,FlpeZRJeJiI,2x-bKsZl-2U,esIeZUhyYwI,vKVeqOBdUC8,ORtyaImvtPg,MjDvc5COe6o,3bcfn4ZIu-o,8QVE05xTX4g,qCuvNkf5Zj4,D_Ffv-wxfVU,G8bLzQv7Bug,bdN4nfUX-no,XKmvkmuU_t4,ouKJAVPjR2c,ktZ1ocQC7ns,fsCVHdxKZZc,mYrtGNEqXj8,TzFVOfK_UU4,A8mRG8-eBmU,996h0iLWQV8,6Tt5KuAPQV0,GG0p2Rczi6E,vYNzsnftiWM,tPGpfqmzN2g,tjTeV5TtC0o,jgnVKP-O5a0,7EG2gWmbDKo,DGeiFZZALqw,GHSYZ3so2uM,QPAT82fv8ik,iXLpkPxX1lI,e1yxv1ycjE0,dgjqu4zS7z8,oadroUA7ri0,mvjlImbK51g,guUggyt_Ugw,HwkrD6INcwk,blOaR_EB9sQ,mtuIXs5c0yA,76GJVp76gGU,vsW-yyKM90w,eKuNwiB6iHg,wuedLsMxQBI,Wtq79TxAzQE,kRgBLUyoYoA,cV-Kld-Mses,Xu-XZri9eC0,T0GyhFZEZhc,1X5g9Sh-LRc,lCSe4CH2rQw,Nb-zyXyny6Y,Ru5oRDN-ryw,YI7JSJU4yXI,EBDJdT8Y66k,uYs3DWMAMQI,XEtqvuoqtwQ,1o8GB-FOUF8,E76Yy5l5ePc,CvZA32VFpvw,J92dnJIsg5E,7R6Bs31hSlU,D_4mYFiMvxQ,gL0V_iAs58I,0mNT3MMu2EI,gogz6kjMco8,uJo3DMZyLCc,ng1n09EGCJA,FHJ3sKazvrM,1-HSEKVPxH4,SP0l95ST5U4'.split(',')
// let allIDs = 'g9McJA3XEF4,0FC94Tgz2ho,o-_WXXVye3Y,Ns8ydpZ5-4o,bfbyCTyHFo4&t=7s,_SoviSNZjso,ByayqNQU2fA,u41Zt6z5s7A,wUhf0sWhtKw,mBHY_Qaw5AI,Kl0E8p2IBmw,48bK3mmjgRE,nxf41fMX_Y4,WIVUbBIrbM4,IUyrlM1qkGU,aXfiyuUziY0,eNWG9KRAbCc,UK8HH3_q4yI,OHP1rLwR6r8,LTDuGU38-70,3qtIp8joCE0,2xiCVNwhrDU,CF0Q4iozRIA,x_R-qzjZrKQ,koPg_DZUfOc,ASwVyfebu3E,58xXl597B_4,O8FJSjy3bXA,9arevpoH-4g,-wOdL7HFNOs,PTpoj4f25dk,7wZbsAzNt1o,NZzQQ1090wc,mx8ZDMb5MBg,dPaHNTnN0eE,FV2tMP37ygs,hiiVniW6l7E,WPsvw_Db-y4,ZdC9soHxVC8,lCKcFFDgtNk,-DtSrdh5dHU,7xtX1KNSlrY,zHAB4qDsgKY,pgmHkfvGYnY,x1T-VTFiUwc,Jp8bBZHDULA,NbzpwG4n6Vs,sr2fBCzXo4g,-2pffpPl1lQ,gl62BSjp7Vo,4OnwUz-I2GI,TfYeJZeCCjk,07_IZIoN60Q,NvQmi_ciL1k,KxsFat1ImiY,2SkaD7Q53mA,fLRRStkhcuQ,DOPswcaSsu8,jdlGvS1y_Ls,nmnTAOU44SI,-YFKqKdD3_A,kOEXcMoh2II,6oHrNuXPVck,AjQ7CEeONb4,PRVr1heimY8,VJI88QIW7H4,BsAmXFcQMQ4,kMtN9KJHn5Y,ctWDAdQ81B8,mXgG8k5tTFM,OX1xG0a4TVo,oTZ84U-K_5k,wegxoNTw0_I,UCv7qwuLpHs,uDAv4qOU_04,zIjngBAxTr4,cG8PXdTlDag,DHiKz_lCYMU,q2CdBFA98SI,MrUhzYdcX6w,mfbSqTB74xM,zsEcLVHnxUM,sKJ4i7p-o-4,JR4KHfqw-oE,5TuyvWoaAZk,O6NiridP0Oo,ux4R5GeKMUU,omyZvH7aMtg,aeaBaTqmu8Q,OoY7zp8GkLI,XRiUNPf-_-4,DyX-QZZBgpw,QK8Se8CvyHc,-5BsYYtyENw,-Wwe5OW_jPE,5krV47BLyoQ,UVpJouUyLBM,XoH8no1MQWA,gNK_C78sBWY,pyldH6sefTQ,0T0rop9pE58,_CTUs_2hq6Y,oZVLZDBLROs,lj7kFBz-jw4,qrwBeXBxaWU,WpPw7lUXyI0,ROkXM3csNWY,rie69P0W668,FOp3L2OTG6g,JqyzwbpYYqc,YPln3JP_gKs,dZ_Ab1XxxKg,JdTBIHX-r0M,MOJ1_FtDGNs,M5NVwuyk2uM,3Yes-qyeJ_M,O2iorLuSjOg,Wf1lQdupvPE,QJxbqIo5pC0,xjFPX7EoINs,ySMGudnpdXQ,XnSqlX1kCQo,qZGpmWrVSaU,JEWzl4V2YBI,jFZ0MFYup-o,PVWLD3064Ng,vcaXm9dgcpI,iDKIw3OgNcg,6C_4Bz62b0E,yiyjcXWZ3Qo,Oy8zSYKkczI,vtqtyyGZvXM,x4yF3a3Zn4Y,0Z8J3axc0oY,QKyul7puruQ,qSlDIpD8lD4,VL9rd4NLXCo,3AfpFkrS7Lw,-8oT3dE0hik,0O4_EAGNg7k,KzdLNlCXQSo,OQri1NdscR4,TI4PXFUOPR8,Lg8B4aTZf7o,ay8Ya0DYDYE,faUEM-szlnY,f5_Gvt3mOx8,t9R7xx0joOU,iy1z3ZVASCg,YFtxYb-GN9k,cZIso9uqNls,4mxXdCUXSSs,BSQe-yQ5B84,AnH7cm9Y7CE,I65jo06QinI,iLA1XLO8p1A,9ZjlFZ3_b9E,yz0Cr_nfNM4,gfWjsKsEry0,D1pa3UX89GA,ZX5ajIAhKTk,Q-0V9v-ybKU,wIdpm7cKtFc,zZ8NuPIymlk,HOh6d_r63Bw,cpIEWsQpRMk,MdqKJxyIecE,P5dxd-ocaE8,LPY4u9Gx-xM,_5-bo8a4zU0,Mbc_yzB8oAY,e7sw5xA066Y,nuNYtj8keaE,6w6pEXZutoY,N1e_voQvHYk,xsiV_-o5488,9fyI-SEnNl8,bNLgikGu4Yw,Fd7BrGUSxqQ,_6-XjSvbJsE'.split(',')
// let allIDs = 'cE8anWwKDgc,zKa4_LAc4f8,9cGanCdxBXs,QUkA5MSMceU,1y0zrXXiSUs,EETiJ3mp2dY,z3hg_RAgKdc,T4iM6SSypfA,Uk2qF3fA6wE,_Cr1MeYPQis,-Qf-G5-ulms,K6LnNVEMw6E,HH0j5Fnx6ts,5v6Imm9snmU,tXrV7UVAtj4,ONJCNA1dT5k,FEO3HwuLy2I,UKkqNDSrNL8,4WJJ7pKSIJk,X4QibrtP8aI,EfrQmMN6mgk,IPJRZxYgiY4,zRQO_0GTT9I,xyg0KbaeONw,H-tIUuU6Cvw,vUfRBoeQ_84,TtoxJ7mcM6A,-wRsg8M9nn0,FW0YdCJvK5Y,raTfliXMjcQ,U2blNouMpLc,J11I4u2X_1o,jZhy5hRCoN8,r-JViiJY21U,eVE9mtU0Zwo,PnW1tHFrmvA,4jqoG4sdjRw,AQ-3ZEFUb8Y,TlldsTYnF-k,oCEEnLPLUsg,wD6-sba_Qj4,SnD-uptH3qY,uVts2iyrUWM,admTkMebklQ,MN4sDeRv2rs,tD53k19NHDY,dPEAD556ROg,LWoUpic7oso,pdIAoGNMMA8,WtTpWS8bROA,X7DgHdR-Wys,RRBY9sodPtw,1ztFp0m7pN8,Hgq1svnl4YY,w0s9OTZKOk0,XjxOxEgMxQ4,ravaIR7tGH8,g_tpXIZGeZw,JwkTR5ncH-4,E_bUwXLYQmo,dpEcuClbDNg,oqyskB_68q4,T8nnv0r03lY,ZqQ3VhAVjAg,nEjhbnhty1w,hyXGYxqPHiM,8MNs5JNSfAQ,MxjRu7UtfP0,wJws0Z4p1z0,HaabqL0qEgA,-6kyLR_4RLw,d04u9TIuk3k,KFbvMWa8I8A,Q-q4Bxp6j58,Y-QYLHrR2Qs,NzsxoMnLWFs,1BW1V1avDpo,w1Cjv_I_m2Y,cpE02hQWIJc,ULCgqxhnA4Y,zhh3vj8MxP8,aveYxkPV8s0,-6Xj4yB7HXo,oKz9hxjAgmo,NPVnMBq5xLQ,oLvn-_uLvjU,-9prjO3Qq1s,-POaWeGn86Q,NQnp8_xdXiw,kJQHof9CwI0,wUlxpnUwqOQ,VznyBAm-m9Q,586YtuqGYZ0,-8ha_KmOOX4,b8MAE6qSxtk,MTonkoHDS08,XgEWJNjpZC4,EZAKLeA-F58,q_WURcsi3cs,9Z4QQl6PtQ0,nvdwdxvSHQA,5LwestkVGr0,cOIY9SQkGMY,Wr_wjF1dWSM,t_QF2oIRnnc,nDckpQJzzQk,kk1qBp16MMc,PFoiWRIoly8,Z4O-bfoDBjA,KqiXcF9LIv8,76BVYK3EMQQ,xhuZXQAKEUk,iHoyLKJF250,xBc3_QxZX9I,oDjxPMIMKyk,8OVmzBc8Q8Y,gzPPIU6XAN0,vRW24eSKe3Q,i6Cbf7iDTCc,ZNlCgkw5ceA,HQTfhgXbr9c,sk6pQNbN4oU,EavItmK7JdE,Ncm7_pwAZ8w,B6B8dHlfRu0,5-85cX6nf4U,_IqaBdDngSg,7VliEhhkIls,FdMa5gNZnIU,SzMF3I3fRAo,TdfZVaQ2FrI,RfcFQwrsu3c,2J-hH-qeuYQ,ARQQDP-fs74,KzM3n_z08KQ,hPFvvGXIIf0,7ocVetDvbeI,bA4tZbiiDwo,EXjemGPr8Ns,eQh5bWkJtz8,E0jHyYOESQA,fOEJjthB9vg,me93HpyW4dE,CzJj8YoGn4g,6AVnRuXqONM,9Btn2-ozfpk,egXPjQZchXc,-HrakxB4Klo,FfefGYIeImM,3rG6TCWk4Ms,0dd18HzmqVk,srVKd75Ez_4,WnOY83nY2cg,fMluD_zeKOU,gy_aLyB41wQ,dKthi6quFLM,Y7-VsoPJrQg,WlZ2voJ0lDA,9ZUwdOpIbT8,LxTnJajOmCM,13qOIHy9Qr8,SgZaChCNRPY,2fXdlz1neuk,ZKGa9dmLWHQ,8SgnPcAbuh4,bYSlWZD88cY,PNGpud79sJo,Rk4NhRZvv2I,7r-tPWXptZU,ZlTcUpeibhM,ItYOdWRo0JY,q6sjvskVULo,bYvD7IzGiE4,U22KHDkBMeA,ecu0xAiHaNs,ZJS0HOKMo00,aMkSoeGpPnk,ipKV-O8Ut1c,ZpkKYFnIYgM,TxtMHufLuCE'.split(',')
let allIDs = 'YNWdmih3Yms,oyx-530UUeQ,Cw2mOxehd84,gIefkcNmQ0k,RrC2CjBkLuE,ZoucXNc6vT4,ZWFvULXvgQ4,-T9U7o2NBYg,nD-qWJrM61A,DRnxoErreqY,JJJEEzTBm4E,25FMF4IYn7U,vqr4kzmMaeY,ECRl51jr-R4,j0booWJpNxI,gQ9QF5RssXo,4tmMyk9JbKY,jQK-gT8T5fY,mmB-vMJ2e7k,zPY4Y4_pi0M,IA48Ba9oHy0,fYEN5jvOg6E,QP9LxoBe6pE,MmqSY39oAdI,ht_BoB3BXXc,7S8_2QDAMW0,o-b-qzlTKQk,-QxeJBsb6tA,znNdEwosxhg,_ftHVcNVad0,r8viw9MnOk0,cM9GBzV9trU,vgkDtlmAa2E,-99eRDA1CaA,rCjsgG4kSdo,2HyTdJv0wYM,pTbEOMUHG4E,3gS8LtC6PV8,t0lhqri1JaE,QIyt-JfDe48,Rn0CzX5HJ0Y,PeopsQeJvMc,EsKWxiZrQZM,mNpysh29nS0,knt6nZPYqmQ,QlK-DXa_eHg,_rEkRacjIWs,yIYZaZuQGu8,h-ggX1U_7I0,Fs6fRf9rUyE,kKg76AEFke8,mYbNQgU3ERY,H0SqdKu_bUU,5D_1pgThzmA,-svbq1WiCbY,O7XBnZMPHFo,vJdcghxZ3-I,Mdqi4ELvDhY,ynM4w0L6Lpg,5JM7Gwhm6gM,c93cyqgj83c,nRoEwWU6IZk,Txz1oq8r-kk,q6QcIpDmDPQ,Hz-OphuslD8,VBYDhle005A,p31j5-NWRrE,QyNziqmCshM,8ChdIidFQ3s,zIka5G40EXs,cV_l_yXt_k0,AgZJ7CLBAeI,uulnbVqyc8A,GciKtKG--lU,xdBA6v-fwtw,WAGDT-LqcBw,SR1NXF7XaW4,wZNmEz8CvjY,4_IK295sfxQ,th4lD2RDX3Y,9Idq1DaAhIQ,cO95wwjh0wk,4KyQjw3eAIA,-BwRvGH0Cj8,hTeW5IHDt0o,zgBuLS4-F6w,tzuidIurH5s,fv89JOGNp8E,7TgNLkKIbpE,UH1q5paLbbg,CvwD8V0RF6s,u97_oMN_DYA,pfPeS9vs3Q8,w4bqcMdXOqg,eADnLwlI3PU,W9NGVDmdlu0,nQY4slSLwPs,UeAJhGHOCSU,uvJZdK3KySI,anZliT48oUo,qX6xHwgoqFc,cCN6JAd7bIc,0BD1P4SPbDA,avdxbatmBT4,nTNIWDpMrKc,vWSCDtc6RyI,agOu1vUig7c,WfWYiRjsZgo,GC-bkgcWUMw,ZJ4gafCNtw0,PLb99ToVvng,0mfuVyQaVyw,9XBGLbh_LBI,f3u30mqWOrY,OY1BLCRzzVE,5MhBJBThKYs,C_mL3MG6UcE,iFXubN3hGkE,fWgzbVqprJQ,RUXbBbW6fts,oOTXwqf6yYA,AypFuXEDPt8,gLQmRkfnLto,HQ4NyORnuVY,scQLyOlh2ZE,G-7dd4L_LC8,gQ9ikfgOpN4,IYNcBBMAABQ,MmRKcFLJPYI,pQBhWB2j7MM,BT4EYdeejzY,yEIYA2J4C_4,_TjYZ6-2s9Y,bIyAbgBQW2I,Z_jN0dK-N6Q,ha4KRzOKuJ4,T4IQ9GlcmlI,7v5K6J-4B-o,-NYeskdzk-k,1OCWcEcecoo,wbA5mcXVw7c,ba4gnCuBWFM,Xg-fKJxZivk,zT9keW01Y-M,c_9zvgmyuGQ,6P6ZV8DO2Ro,TZ9mlLpsGeo,Frp9AVuffQY,5Zsw4eyuaIY,5xpXLs063oY,YNWdmih3Yms,oyx-530UUeQ,25FMF4IYn7U,O7XBnZMPHFo,QyNziqmCshM,kKg76AEFke8,rHMUutPZlCA,nTNIWDpMrKc,5D_1pgThzmA,vrsttLdtGk0,gIefkcNmQ0k,fWgzbVqprJQ,8GAvVuRrNVA,knt6nZPYqmQ,f0ilOVveFgc,gQ9QF5RssXo,0I5nrvCTN8s,QP9LxoBe6pE,WjEQlmGYM1w,BCjNK0jITFg'.split(',')

;(async () => {
	const promiseList = []

	// make promise list
	for (const videoID of allIDs) {
		promiseList.push(getSubtitles({
			videoID: videoID,
			lang: 'en'
		}))
	}

	// execute asynchronously
	const results = await Promise.allSettled(promiseList)

	// make caption files
	let i = 0
	for (const result of results) {
		if (result.status === 'fulfilled') {
			const captions = result.value
			let totalCaption = ''
			for (const caption of captions) {
				totalCaption += `${caption.text} `
			}
			console.log(totalCaption + '\n\n\n')
			fs.writeFileSync('./phonearena/' + allIDs[i] + '.txt', totalCaption)
		}

		i += 1
	}
})()
