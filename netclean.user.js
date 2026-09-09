// ==UserScript==
// @name         全网净化大师 NetClean — 广告过滤 + 划词搜索 + 搜索美化
// @namespace    https://github.com/bigoceans
// @version      1.0.5
// @author       bigoceans
// @description  全站广告/弹窗屏蔽（百度/Google/Bing/360/知乎/微博/B站/优酷/腾讯视频/微信公号/YouTube 等 20+ 站点）+ 搜索结果卡片式美化、关键词网址过滤、干净复制、暗黑护眼模式 + 视频倍速、B站画质解锁、YouTube 旋转/翻转/填充+ 划词搜索（多引擎 + 划词翻译，默认开启）。支持配置导入/导出/WebDAV 同步、零数据外传；详细隐私声明与功能说明见主页 README。
// @icon64       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAADAFBMVEVHcExbov8VbfI9i/oVbvIUa/Epe/UMX+Vaov9Omv8cev4QZuwaef5sr/89jf5Ml/9Wnv9Vnv9xsv9sr/9hp/9tsP////8Tb/YSbvUTcPcSbfQSbPMPZesPZuwOZOoQZ+0Ra/IQaO4Vdv4Vdf0Qae8OYugRavEkgf8hf/8aev8cfP8eff8XeP8Wd/8RavAUcfgOY+kNYOYohP8Ucvkxiv8Ra/ERafArhv8phf9Omv8VdPwZef8Uc/olgv9nq/9KmP8igP9Lmv8RbPJqrf9co/8QaO9Zov8uiP9hp/9epf8sh/9hpv8gfv9Snv8Uc/tFlf8MX+VGl/8jgP89kf9Unf9VoP8VdPsvif9RnP9Jmf9prP8NYedFlv8ng/8be/9Bkf9ZoP8TcPgce/8Ucvo5j/8SbfNbpP8Ucfk7kP9cov9ur/9Nm/84i/86jf9Dkv9Vn/9mqf81iv8ffv8/kP9jqf9iqP8hd/YQZ+4NYeZepv83jv9lqP8+kv9DlP9lqv82jf9Zof9FlP80jP9Tn/9Kl/9Clf9Unv9Pm/9Jlv9MmP8adfpvsP8mg/9Mmf8kevkZdPhOnP8yiP9Hlv9hpf8mffk9jv9Dk/9Rnf9Xof9Zo/8mgv8TbvQecvEYef8+j/8xh/8gdfMcdfYTcfhxsf8/k/9Il/9fpP9Vof9Omf84jP8xhfxPnf8ZcvU8j/9TnP8hevtsrv8OY+hWnv87jv8jePc1iP0vg/xAkv8vhv9Rm/87jP4pf/pBk/8abe5dpP8Wb/Qvhf8pgv9AlP9jp/8jfv4dd/lYn/9Fk/9bof8kfPwshP8MXuQzif8def1urv8gefkXcfYcb+9zsv8bd/w2if8tgvwPZu0Tb/c5ivwqg/9Sm/9HlP8yhv0mfvsngP0qgfwlf/5Xn/9epP9oqv9Hlf8gfP1BkP8Xd/9nqv9pq/9Ilf8qgPsYa+wshf8ZbO0XautMl/9Klf4ugfoWaeouh/+uz/0VaOqbxP3R5P6/2f6Juf3f7P/3+v/r8/8Sa/Fal/SEBwF6AAAAFnRSTlMAcGQviKwc2JVN5EnIt8DqudPs0erdo6c8AwAALSRJREFUeAHs1c1rU9vXwPEe83tK8kD67h/TiSIWsRSRy1WoF8GM5NaX1su1A5FKiyVNKAUfJa1OOpH26VUsUgnSIE6EmpEDuYNgnbRKqR21/8Fvn5ecvdd+WWef9CQ5Sff3EMj8s/ZaHQ2pM2VZyXS6/3RfX9/Lr04vQfNIt0BfFJ0X+gP0C+kHbX9//x7oIdIn0AjoGdKqvKGhoXJ5YKC3t6cnaVmpzsbY1LkEgT89/1UoYv/z7eG/ujpWLo+NjZFfeWy13EsGIdFswePYp/u/KjL+Mn/SGIyMQ7m3FacgZaX79PAF/1tIQP0tJi73P+P0A3ZPnb445r+qbIiL13ebLmcGelpoCDoRfIn/vPHH/e22Mpnp7h6rs9m2wSWsfgTf+NfmXy5nyFfeKvfGexF0Bukb/9r9MxkyAGQT9MZ2D1hpHfN5JATc6bwqubir/kNo309fnHaRVJs4j46JM01PT2dgPVazrcUSyT6tN18P/z9OmH9ma6s7Ga9TkEpr7vz6+7P8vyT8beFv15NqtrofdvmNf538Sb3xuARWH2qu9g8SJ7110xZ3lj4Nqt/DxDF/TJxteBhTH0OC6ApvoY2t7uaPQAh+4x+t/9bOzs5Gk0cgDH+s/B+2if/GTjO3gHUa4qP8LeOP8cfO36m3OSOQSgc8/Xkkpb8gHuwviDvq95BCiCP8q4qGxPTFUf8N2BWv9W89qcb7J7/G2H+/ef6B/JH7OzOQbDA/d/yNf3P9Sd2NvAMJsP2NfxP8Of4rVzau9CQa9vznbXQZu8JfKe6iMwWLs+o0W73ao0eYONPk5KQHf9EtlPguTf/g+007YeIb6rJZiL/u9O1bY5aA+/wx/Tr7nzH+Mn+7RiwB9/ob/zj6r693130JpGVHHwO/JfrricN4cffWu9V08QVxlf8wCaqjN17pj4Mz7ezs8OZqcb5vybryJ/qP5//F+NfZf3Ott45nwHoZpf954x+5v1PdzkDya3z89xvtv9sy/ptrdToD6ZeyMP8vXm8lofy/fv0SXjyrvv+omqa4p05Tidut+u0KYf6seLmcQfKovTBvPpl4tc1qaz114E/0N8z/F/D/YfxD+m+une1NRO2f6ouhP8b/EOFvc397BLpT0fpbL1vM/9OJ9t/cHFyz6uKPicNCXHzQGRBUR198tUk7Th0TJw3T9MX9LthNg0Rxqr6hKpvNhhGH6oOgNbsIJyBp/FvPP3+YNP4S/pj6Z0X/9WP5k6KagLbyf4b477aX/1o+F8kEaPl/QcQxfyj+48cPiM7kut/3guqfqslevNTfFV8lqcARfj1xqk6D6ig42+joKKa+piwfwQTE3n+y4f66/E33X8sfHXsCjH/N/jvN98/nD485AZbxb77/t9r984cH1rH851/KxGFvEX9MHAbV7/kJF99Rp10EycVd9FU3ir770Q8RHyuXy9OqeH/KPTExgYmj/t+YZOgq/jzo0C13jAlIzQfz19f/vvE/pv9hLpeq1T/RZ/xr9t+IiT+pO1HjAPQfb/0b/1r4o/ef/dlbm39axo+KI/x/COL7UJ12HwTVP31Si3P+w2wQHRP3uuCGi2+x6PbW96vKZ52U4qOjo9/4KPrc3FxN4p477aCrFv9klP5njH/z/HO5o2R4fys+/pON9r/QZv5kAqyw/olbdfPfb0P/iXj7546OEiEHoP+WGOaPvngQBL8Heug3Kcbq8/7PSFR8ddfvI5/KP0jc76odVN9gQsRddCZBHRHX8GfF/Y68esP5J2Pnj/Fz/rvGX/DfHk+G8bduzbeQ/zPjH+R/dHCwben7J/oivPiIuB09+CHFoTpNT5y99UEX3xP31ZkDLyT6C+KIetiLL4rDDpgWuzu1ByBt/NvO/+Bgpkv/ADTK/37U/rut4L/ZFP/tbd0jkPjSJv76/CfDf/sooXsA3mL+mDjskczfE3/48KFSHPF/wInbKcRFfx3wTGZra2sHojMFiVN1ztpvjoSALyws5JFmQUHiXEddmgcgtv4PmuyP8cfff3t7RucIDLw1/i3ofxDsPzMz3h3sn3x7y/g3zz8fib+c3y4Z5J/ixZX+euKMOm0ShFz8kWfPhpV9BIniFH1a0XOSB3/VDaqj4kxLS0ujIKiuBq++ej8IfkjSW/ign1D9M9P4+0TAAKTPG//29ScT0IX7W8a/Bv/R1vEfX0yhA9Cvx6/vf//E+W8i/mtN9x8f79VfAKy4xFzJ/0hfXOb/wEtfnOnFixcXQFA94+eJ70B1Pf/1dUScNOcnff6IOFXPIUHybTaJOOxGwUIG4HQU/veMf3z9Sd2aC6A5/g8a7T9x0vzHl9UrYCBy/8k29B9tbX9kBVi8v5643X15GP+Inwg+LPe/6QTRx7TEq+q0MC9+HT56iT8i7qnn1Z09e3YWpC3uqNN8+kU74fpXe6daAafj6f8R879g/MP637jRHbgA4us/ZPyP7b9XkK+AfuN/IvxJXTL/FKKu8tcXhz0AKcQdde7g211Q5ME/d4PomDjbpUs+/ZIdJz7HNoi0AOLRD7XFaT9JUP0z2yLmzbf3d0oyAGnj3xj/w6b77+1JVkCitf2ngT9c+hPGn/Pf20sIA5A8If7Z1vaficZ/LykMwEBYcX3/kZERPXEbncmnf2EnF3fRM15XJWH+V9h4cKc5eVB8jaQSP3SblbSyslKVf+pUtXbb9hPEHXUa5r8nrdTN+1vGv6X8F4/lv1copLgBSBv/+vnPyv1zkfjXwG/XBf07W9//aqv64/zbka9/r86gC4D5B4iPQHXcXxB30C8g2eq0GsUddRr0x8Adcagu8z9L4sxzTK44Vd+GzbBB9TDif4OW2e5aYAD6jb+m/1p7+C8vgxuQCLX+jX8Qf17kj5v/8jJ7A6yaDz7nHyzOnXrf/wWT5OL74hlEXOV/iQTVMXHMXxQ/66f2Zk69108QRIe3HhOX+au8C0LsDUjX6n+xMf7PjX/k/iXmBnSeEP8l489Gb4AVif8D499S/nun5BdAX3zkgTrIz4PbYRcfqNOuIv5Z0BW/JSHMH4qvCeJQXeq/srLCqx9Q7suXL8+APoMWQZj/XjWJeEEvegMGmugv5zf+dfcvVbqr/gnjf/L8yQSUEt4AWMb/BPoXCn9Z3gCk78vD/DHxj6Sbil6AoD8Gzol7PXYj6JdotYrDWP1r15TipBzN9nYD6jTRP6S4r07T97/rvHtalzcAA5H734zaf6IV/J+2mH+p4vonWts/C/yXjL+2f6mUcAbAalt/jN/4l0rLp5wBSIYVx/z1xaenn8v6fzulvydO1a+QVOKI/201+MJCPo+I2634PQVx6jOiOFUfV/SeJPhri99VJ/gXKoWkMwD9xj/G/tyjj8y/UCmV/u1yBuCT8Y/QH1n4x/cPWPhh3n+lUKqUKrZ/ogX9L7WqP84/Xq/1z/uT7U8+MgEJMgBWKH9MXN8foivFSVnaJb4lECI+h4m7XfMC+tTfFc+RhI3vqc+om5paBEF0KM6ue16c9obkqr/z4sVLaMTe7RQZgKTx9/mvyfnbzr86AHv/IQPQg/EbfwX/AfCfaSl/ewK8EegiA9Cvf/6Nf2j/qVj6u/oldwBGEHEVvyg+NDSkJe6q00T/x35ZbXHaE5IHf9sN8J+D6oqN76jnvJ5Kcra+H4/+WVtc298Tr6qH8L4jPn62jo7ONvW/bfxxf/dvZ0fK+J9If68EOwC1+g8Bf5y/DfwvN8//XdT+pVMdlkJ/GHQT6QVI5q8Gn6DqWdIlRZj/nJ8gPrjAdg3G+a+wcS+epBL/7LYo6cOHD1X5907a4ssFNk4c97/DV8GzOpLx8M8a/3r4B/BX7vzHG4C2979m/GUV/6ejJ+DiC/7B4vKjD/0fg2oSZ289e/HPeUF1ycX3xXOCOFSX+k9NTfHozLkPEJf6v3Gr3vp3gRf/DlZFo2Klq6P3Ytz8l1rBf0r0H289/2KRDEC8/fX5jX8N/mQABtrEfxD4L7Sa/5um+FeK/2sPACZei78oPjGBXHyV/+vXr6vyT5yg+iDNFV+g6meRVkBA//p15cUnqcGr6jTMf9nPE2fQMXG3f7ww/r9I//IVZVUqHavDxr/K32z/u432LxZf8QNg/I/vfyMS/1r5Q/kXix2x93+C+5+Lub+Kf9nnb6p/seOmGl5P3ENngv6sPu+/BBqleeIAnekcCPNHLv7Tnz8vq7PVp/yo/QcSh856//67UpxUoL3jg/7/gGTItBDcfN+9DWD8T6Z/9QQYf03+RZ+/Lfy/exvA+Efj/3uL+bsb4KYGv+hfk7jo/9rPVqdB8cHBQVHcQ4fis7OzK5J+s3PYr1cTxan6Imicxr33qjpN9H/jh4mXSiVEXK1fi/93WEd7+a8Y/3D+8gHA+I1/W/lLByDo/OvxG//4+xdfverQEYePXub/WEgEX6LqoyREfBCq066BoD9Uf1oNEafqNFv9g997EK8uilP1AkklDvsHhInz3P8HKmrEP/9X7gA02n/U+EfuX6zJ/7szAG3n/5vx1zr/5P3bA2D8T7L/qw6lPyIuqivE6dX3ewK6jfkvLCzobXxHnXYdxPkL4lR9nCSIe+h/q/vzzz/fgN6BAsT/y179/tZN3XEc919h9uPJNKRlj4YUMiVITBXsQaVuDJUCGVKrsi5oQWOIaNJ9kLbqVhYk6HYRSeBBG4lb1Ia1NEOCS4NIImgKbalCIJdWa/cDkKIhIdoykrj+cW3u7Gtf28c+Pj62z9c+vtlb2wOexNV9fc451OJLSM8FetHXvyI7GU7gyP8OxP8viP8WEP9xTVG08c3sjw6A2v/JYv2Ps/FflQzRzJBWN6//ScH/4r8cXRL/pOK4R5/iwXfAO0/9zsgHP3jh27f+IVV0UxuBF38HUsC889QnFif4j+D8abyx5ifpEzan/x8bPn4rRcvZ/zE+/H0D2Ez+miKGamrHU/i/zsI/ET9bf28AL28a/3G5KWIz5Ney+aP8b+Vy/Wf0PynEiz9AFrd6BRvRP6m4gz4eLNJ/P5L56NvdH8VvpUsTu3cHwa1m8NEff9KNf8kNe+KT+ceTn0YSNpf/HbIhkpMe7W5/lB8/gK71H4/lb98Cfwvwd7P/ZWHz+O/XmvH8Vob8p03jjxkAFh7rn0Dc7K6ISP7bkVB1svgL7qM/P//447NmtPxWTXn38PAwK3EsvNMSEtn7TSTT+x1fVN5h//AAePffmc5fU8RENbXN4R8cwANd6G/yNxLyWymNzeAfGEBafr79D6liqtRD3e9/WXgg8tDfQ4ie/7f04seRxt12hkL4x1D/eaTZ2S9S8rcnsPp6uNHR0Y78gXaR/iHxS5cuUYq/GVdi/8uB1uwEYP+7CvZ/VBIzJZ1L7T8C6B/LT+vvDqCs/mNkf9nI5i+KhlxG/9O0/p0BdKd/QxEZpCx3sf+a8CQ2RuIE/rD/di/CjX8v+cX39ZTEgr/9DvzVhx754ofUL9kt4Uri/06g03FdxreGSyjIP3z8o/hT+i9qmW9/3zugdas/fgA8+ZP4Cf4/VdnxW6lPpPNf4twfO4Cy+BOOv8yW30ruSn97APdE90pa/zhxT33cLErcacwO4V+M9v9CYe8vispZjP9IRARwovg7MWX3/9LK+y+hC/0Bjr9zCbDwz8LP3t8aQEH+24H8V0GOv3MJTCTn59t/Tug2f1mH8xdFXe4y/zmBRE4vTum/PdhOJBQdEd8ffePPzu622mF1VoXkt1IvhMUvkV58f1uT+F8MRsX9qa8vA81hErrJf14DPf7OJaB1kz86gJL73yvB81tJz3ePPzKAkvs/oeTjL4rKNOWLz79/ewCv4KL3jxQ3O04l3lH3Ivgfc+n3We3olMf138n3DJD86cUvkroaCOsf5R7jbw2gK/znc7r+O0knusN/TkjMz6X/z3K7/jspD3eFf2cAbB78h7BPfZQ/nTj64ns3frvfWw0PD2tG3v6iaDTI4kgbOP/rTnHkV8/4+hQXvbfTpJvA0H9LUf45X/+d5Hz8Y/mz+NsDKIn/vgh/tRh/UVS58P8yi397AOX2vyP3599LeaGE/n7+9gDo/THiEeo7Q+JoWP9FM9v9mJOl7oX6D9udLeD59zIumPZbzVBynHgHnd47+s5n528OAN7/XoL//oz+jSL5rQ6V239S4Ml/HvGfjfcfkov2F0Wt1P6BAfDrjz3+w1LR+lZSmf0nhWhxkv92Qnj/kLjZvJctPuup48XR1KLt7VQsuKfuldH/E7cI7n8HmoyrWhVK7K8ULd9JifBPxF+Mv38AgP5jZP9jafz3cXL+rdTs/meK8fcNoGT+vNz/yAIA/YP8jPzdARDFt2xJeuN76l6W+qLbMaR9SCT/GSeu/J0FoOok8TPEEO9gBPJE/LZ/ZwD/98+aVE5/ZwCl85eK9sYsoJT+9gDy8V/san9rASX0rwp3hUrtHzrxnvr8/HwmcV9DQ6Nc+ouifBFTr1kC/8OfkErrXY1OKJ//kFy0dIIF8O4fGsBD/Ps3inaO7hCGn2//4ACC/NT+Y7n531+0Mqmny+ZfFYLikeiBA281FtEi0jGkFP6m+tDQ61ajo6MzetHIxE5cjBE/jOQH/sz6f7CQ9/tOk7RVEwygBP6jatHE5Jqw/u+z9kcGUAZ/uWjhuCSu/OP4kQGUwV8r2jc+uVT+dW8A2wmh/ij4fgL4rFkUeJR4B93XaKcvitalqRGp3oOEWCfyR0vgXQ8nFOUfzR/t/1SzaFyq9pbI3x0Av/4u/+gOpWhauox/lMe/LsSLR9DH+id68LHiVge8pKJlaVOuhtTvQwppf/auL5K3VzVpH35IOwBO/bWiXemTifw8+eMGwKn/tF40a4ImyuKPGQCn/qNK0ahJUl7M4v9+fv7hAZDY91u54vPpxWdQdQr/AxKMlGHA/F35vsiI/lax/K/akbgjwZ0qnYSS+K8CHVUJaFjiBZ79Xf7QAHj1P6ACOWka0B9Wy+EfGECc/2JB/gehmMRWC+ovL5fCHx1AtP7Y2CLSsZT+1Cf+wAmrg04zTSAlfW5SB/rTylWM97ukSN7BEO5Q0d6hhDL4H5ShjqlSrSpQf1srg79/APz6P21AIcnVKti4jOdL4O8NYCe//ifAjMSJan0C7I/LJfCvCFhyEnhqcXr/g0gjv4R6pkV9rVpdAxuA/vi7ifqPG9nf7cPY4viPHhX49x+RwIgU8xTVFbA/L2fyfzUPf2cAXPv/AQxI1Ez/ugb25/X/FupfofC3B5D2wc/FH/ACEFumf70F9/cl7v2PCmPB6P0T8CcS99fXt0UH8zEs/3rdgPvA735uReJ2yuz9nhmFdyghD38Sf5x/nwzGI0pt/zrgFaPx7h8aQN7+RH7Lv68Jx7PXHsBeuC80efcPDoA7/5EGnI4+Zw9gEu6REZc59z8qMBFn6d+HpsLhOC8A6BugYryjS+X/Xrij9Amc+x+HsxEnbP5KfQLuG/pjfPsjA+DQv08DtJns3ACgb0BWflh//wA48A/y923N4wWoVQDfACnv45/M3zeAtP7ZTjxOva9vaWnQbtSAoznn+FcqlXNwXzHOkNQ/cHO8O/9JEkZ6xiwZ+SkkgWv/wWU4mabnX6k04b4zwZc/yu8NgE//QcC7WfP5VzS478hc+58S4sWx+EO46P37CA36UsBc9DWff21NB/uQ0rbeg3hHZJF+bPYebdn9nQHw6r8FjEWUfP5mgFfNWzz72wPg1b+vAcdy3u9fq52H+9Iyz/7WAPbx6j84CHcuVeT812o1FexTEs/+5gCI/MMEdXrxkZFo8SUrV/y5rf42DDCVVsC/1gL7VHPPnj2x/B987ETiDoX4PhvoFFUCz/4zYChq0B/yCri6h5o/d//AAPjy33gNzKQV8p+CuwL+CeNP5Kf1RwcQyV+M/8YyFIka8oe8AiY49kcGEGAfio7En8B/EGlr0H9DgyI5j/Gf+hzqa40o76ieienZ2E6lGQAb/yB/Bv8NCUhExvibC5ChPsexv28AefuT+G3/DaBL2ZjD+ddqVQPmeyrH/t4AOPTfUGBAzuL9a7VpmO8pHPufEtrwfvowfyLxkSj12Avfadu2bf12A02YAxnlPzUFc+UofPm/jSTw69/fDzIA/Uqk/9RJkEegybG/MwA+/ftBOKYj/c3/XYD4okHNn7+/PQCe/D3+/n4dQEOOPv9WMsAndVbHH8D/bQHPnsK/jxDZf5svv38/AIZSJfpP1RSAAYAd94/IYbyDHRE49gcYgHGF7D819Qb7d0cvyj+e/4gzgCEu/a8zfwL0Vpz/1EqL/Vc59rcHwKn/deaHcTrW3+wc668aHPsfEXIX3/ChB8XtBtr19vY2GUss0/ivrKwy/myzCP+P6PzRAXDmz3oAGo2/tQANfADc+CMD4M2/V2Hq0KDzNwew0GD6YYVjf/8AuPNnOgB9ldrfbFpn+GmVY3/fAOD9tyGh/gNItn+vytC/lcR/ZaXFcAHq950ivB9sR+C+3YyRt9MjbgLH/gwH0Pw6mf/KyudNZh+XsvnH8mfx7wxglEf/XonZGVxL6r+wUGf2dalg/yME/0eETOCpxa/78om3u2q2qx0jAr1RqSX0b7fM6BmQg/63mqH+Xndaufp33hnyv+02lv72ACAOPAP/AZnJ7+9e/4n8F8yusHkGZI792wPI+8K/Tue/axeLAehaNY1/ewALUxqLS0Dm2N8aQJH+AyT/AS37j69eqaT3X7hxbY3BM6Rx7G8OIH//AX+o/y6k5aw/ffNCPYu/uYCFhZaS9V9x9la7B7Hevm4PdFuwbwe7BelILPcjdwf6RuDY//Br2X545Ww9o785gBs3Mk/ga479AwPgy//wTCb+aR9/Sn9zAWYLN7JN4DTH/ugA8vbvJfsfPpz6N9elVr2S+fzb/jduXLv2VUvSU/9bsP5x/Dn5fyMwEN/Y2CCIX/ehx4F79bRrpvvJm9pa3YqZ/7Vr6+u15ZTXQBPG/xYm/v4B8Oe/S03ze8vtw8/W37wDzD6X0yxS5cP/bqy/bwD8+ff0SEl/bEU7X+/E3P+r9ZvrJ7XE94DEs783gPT+28D8fygnOvrS8hVXH8L/q/X19Zs31+vTyS4CjWd/dwBp/f36Qf8BJLz/n9tZ6j9x6/j39CxT/sa6Iq++Ua2a7FVY//YEzGotWdEp/3F7f+HU8f61ncv9m3Yd65deeulXZoj33wPg30I78h0k0/u7vizu77n92O4HTj8SePbveTj+5zVUefn8pIlfde0T+f+PvXppbSS7Ajhen6IWpqfHltxuvRw3CCdgOSAMJhvhhQjOylrYi5Cts8giq+ySCTSEns5GbRh6YSZeNPQkHRIGr5oee6XOaNFoBoZZCDwEhnHaolRPUanSs26pVKrHuVXnVs35ALeEfv97TyD/4fTurhV5sPwXvsfsPw4Aqf/D33oKoGsGELm/EYDuKYALzP6jALD6P3zoZwVE6e9nBaD2HwaA178u8d5HFVqdKPz/cS6qPn6W5OBfRuNvBoDYvy7y/kZSbuj63ymSz58kLvXfmvnP81P2NwLA7F9v8b5HFXVa/h1F9f97nlD0bzbd+L34/4TzzB+Hf/2vfJBR23fw/s9aUqAf8you/z0n/w2bv1sA3vmp+dfrg0B/Oq8JOqy/LmjBfskAt/9PuUiff9/+dZkPOtI1mP+tLgX+GTJu/8UB4PCvKoH/eSOBcxD/MPw8r+D2XxgACv9qtfo6xH/P8+oX4f1D8fP8Z7j9FwWAxb/691D/Ps8LF+H8PxZC/oB/4vZfEAAa/2pVDQmgKSH8f2hrIT8vIfd3DoCG/1Ew/2rYG2jsgZug/p2w9Rkv0Iz/hOSf+j+P03+di9jfK//Ev6qENuC1diD/XksL/+12MH9Xfkh/pwBQ+Vf/EB7BuIeP/fs/C//2GNOh4b+yzH/Vs79DALj8czkJwmG2Bjz69wCef2PkmP23SX+S3/SfDwCbfw5gBxij6f7uvw7w/BujYPefCwCdf+5rEAleO/dz/69h/Pkr7P72APD5A+0AY9re738L6JMSen9bABj9cyKQBq949W9DfVFE708GgNI/dw7FwXe9+b8G++Cn6P2JAHD65+oqGIjuxV8H+5y6a+VH6b/PoffP5QQwEU1f7n+jgX1OnPffmvnP88fgbwkAlb+FP5frgonwg7sl/r27AdzXziH9m003/qD+0wB+hdc/9wtAE+mZ+/2/lABrexyZ/56T/4YH/0kA3vmj98/VRTgUXnT174F+CqX/OuE/DoDG9Qfzr9V+CajC6y7+tzrkl94z4L/GMeBfq8mALNrd4vt/B7hseJkF/2EAKPyrzv4mf63WhryY8sL7fwsZGv9fFvzNAPD71/4FeTP56wX+34MugMFjFvyNABjwr52KoDSfON//L0EzE5nwX+No+B9B+5/+G5KGFx39+6CV8VcW/qn/c2z+tgBg/b3yL/c/PQXdzlrHwb/XAfWXPfu78tP2JwPA63/6Z1AdwcG/J4B+ogvkv7LMfzWUPxEAYv/Tr1RQns68P+wDoL6J3H+b9Cf5F/lbA8DsX6wpoD7ynH8fdMnwClb/fdLfEgBq/2LxLwNQoBubP/QD8A0j/rMAkPsXi8BPgM2/B/8AMOH/O44V/+LPVFCiDukP/AA8ZsV/EgB+f+gnQCT8eyLo4W1m/McBsOBf/Ar0CdA+sfo/0yDPVt8y4z8KgAn/YgP2CWhZ/Hst0KPbZYJ/y4kfif+HXPz+OW/+xeJD0CdA/X7m3wM9WfoorH+z6cYP6W8GwIp/sdgGvaf61L+vgx7couu/5+S/EdD/Q86NH5l/oShBOglT/74Aea5URuO/TvqvzfvbAgjKH41/oQC6qrXLif8PGuS5XQb8J/y2ALD7FwoypJQ+9ofdAAJT/kQAkflXnf1rS/0LfwKlGvvDboArpvytAWDxX8xvjAhIpX058r+E3AAKW/6WAJjwL/xcBcTSh/49yA0gvWXLfxZAUP+jSP0LhRaglmD6w26A1zP/5yz4TwMI6++VP6x/oQjINRi+AP0BYFJL/F354/CfBMCMf+H4j4Abu2P6d+DO025C+a8s818F9x8HwJD/cVGBA1MM/5eQ50Xlv036k/x+/N9xrPkfH9clMDDZfAFksOOkN7j895f5v3v3Acec//Hxb8DEtMt+/xLsNP4Fe/5mAKz5HzdEMDK939fBDlMY9DcCYM+/0QB7tZV+X4E6S2bR/wOORf/G/zQotH4fKibthkV/WwCM+DcKbSi121uoltpM+pMBsOLfaOQFILZOB+ggYeo/z4/YnwggAv8ckH/+byqMW6sFc456EdS/2XTjp+1vDYAl/3y+C3RxgZ6SJ3T895z8NwD9LQHg929Y/PPHIszNhXlJxPj910n/NW/+0wC88+Pwz+drMszdhRj5I8T+dn7CfxIAO/756TyFubwAo75i1n8cAEX/qrN/LbR/Pv+FFrf8aDSdXf9RAPH5e+V38s/nW3HTj6bLsP8wAFb9KxUlbntzFJb973F+/I+Q+VcqQtz6PC+M+Bn1NwLw7++Vn75/pS7H7S+/XeTvyo/F/x7HtH+lcqXG6692AvqvLPNfjcTfFgBz/pXKdbwBvKDvv036k/xh/ckAGPSvnLXi9O+i8d9f5m/nH/kTATDpf3amxOevMO9vDYBBf4P/7KwkxuUvsu9vCYBZ/1JJiMdfSID/LACG/UslOQ5/OQn+0wCY9i+VpOj9pUT4TwJg3L9UUqP2V4f+8/yM+Y8DoOKfi9C/VNKi9dcC+Tebbvxx+I8CSIB/qRRtABT895z8Nyj7DwPA6N/w61/6LkX+66T/WnB/IwA3fpb8v9v80X+Of87fxm8EgNk/78t/M7ICEuR/n4P0rzr710D8K4S/nd/0j6qAJPmTAdD198ofxH9zPD/6+/QnAmDfP4oCkuVvDcCZny1/+gWY/AnytwQQ7vpj8d/c1Gjyawv8Xfkx+88CSIp/JqPS81eD+a8s81+NzX8aQHL8MxmJlr9E3X+b9Cf5afhPAkiSfyYj0/GXsfjvL/O38y/2HweQLP9MRqThLybHf8o/DoAJ/zPv/lQKSKb/MIDk+Wey4AUk1N8MIIH+RgEKrL+SUH8jgET6ZzIl0AIS63+fS6h/JpvtalD82u9N/3n+BPjbAgjsn8Pnn81+qsL4q++D+DebbvxY/B9xyfXPZl/JEP7yBbz/npP/Rgz+RABx+Tco+WezGTG8v1iO13+d9F+D9bcGkDx/Y5Sw/soWVn87/5z/PQ/+lgBi9s9T8c/uvB6E4R+cJ9x/FoBf/6qzfw3Ev0L42/l9+BvzXgruL10l3X8aALC/V/4g/u78dv9s9ls5qL/weeL9JwEk13/HGDGYv7iVfP9RAEfJ9t/ZaQfxbw/5E+4/DMAvP3P+OzvXA7/8g+tF/q78rPmbAaTAf2fnRvLnLz0N6L+yzH8Vlb8RQCr8Dw+/Efz4Cx/T998m/Un+qPwfcSnxN0b07q9sofHfX+Zv5/fn/5JLjf/hYcurfytJ/vdd/ScBIPM/o+F/cPC15Gn960n2f0T6jwNIh//BwbeCh/X/eZr8RwGw75/15H9wcKJ4Wv/p8X/ApcP/YDK7n6lu/OqLlPmbAaTKf3f3wmUNCBdj/3n+hPobAfj2zzHtb4zi/vwH8G823fgx+z/g0ue/u3vtuAbUazr+e07+G0j8xwFE599A4H9y0nFYA0Infv910n+Nvv8ogLT5n5wczq0BpYzZ384/538voP8wgMj983H7n5yUnxBrQD3fSo//S4u/GcBy/6qzfw3Ev0L42/lp+Zf/cyPP/OWnKfOf8JsBhPb3yh/E350/hL8xb8SJv/gmtf4PuCT52/kP7fxW/3J5qzsw+QfdrfT6DwNIjf8J4V8u//rKWAPy1ZQ/hf5GAO781P3/z14d4zaOZAEYfiiySLTEAywMw7BhSVhHMiEoMhpoGFDWEBg5EdCJA11BZ1gseg8gOPENHG80MTHAHGGSieYAnQ5NS5aqSFWRVBWrinzvCt//3jPpv17//PXrp8hfyN8F/zH02j+b6Rn+FzL/a+v9jwJAf43+c9af5TfpfwgA/c37L2T+PP/5/p8BoH8X/K9q+6/AuP8L+uvyv5f5r1a7ANC/r/4fAbjlf4v+6vzzADrmvyz3n6F/if97AL30nx78i/w98s8CEPr/G/15/+1WxO+a/wrQX6X/Y5n/xGJ/LgC1/j/QX+A/Yv1vzPhvAP1t8+f5C/6XCv2ZALT436G/Sf83if8GfuP8v5X7f1fi/8D48/zor8V/LPLfwN+1/KvyN/EX86O/Fv8NDBz15/mfeH70r+If7gPonP8z579m/F/RP/dfhRD995O/5/5C/m76v1+ACP0r+V/I/K9d9M8CoF/RX63/nPVn+e3yj2MKPvob8V/I/Hl+Lf6pD/5X9HfS/0qBfxz7QNr0f0F/Xf73Mv9VmX9K4Av698t/c+Qfx0PwrPa/RX+t/lkAgdP+y3L/GfpX848DgP933n968C/y99s/AYConB/93/m3In73/eMwC4CifzP/xzL/iVP+Kc0C8JX4/0B/gf+I9b+xxD+O/SwAgv7m/Hn+gv+lVv+UZAF46vzv0N+k/1td/zj2sgDgT97/uxL/B8af50d/Lf5jmT/DH8fv/hB9O2/9m/iL+dG/Jf8wD8C33p/nf+L50b+Rf+rnARDn/Z85/zXj/4r+5f5xTPIAvB76C/l7458EeQAwQH/W/0Lmf90J/zj88AeK/k3956w/y2+7f0p3ARD01+u/kPnz/K34JwnZBeChv+X+V1r8U28XAAx0+L+gvy7/e5n/qop/Eu79gaJ/N/03Iv+UfgZArPC/Rf82/ZOEfAYQOOG/LPefoX8z/zT4DACizvhPD/5FfvQ/8k8OHyD7Aej/r+1WxN89//TwAbIfgP5i/8cy/4nL/kly9AF2P6Cq/w/0F/iPWP8bW/3DY//8B6C/Xn+ev+B/2aZ/cvwB8h9Q0/8O/U36v53rnzIfAICe5f/A+PP86K/FfyzzjwX+CWX94Us1/ib+Yn70b8//wJ+kQy4AGFjiz/M/8fzor8A/CXl/8B3xf+b814z/K/pX8k/9QgBeZ/2F/P30T5KgEADQfvpfyPyvO+if0qI/DNFf7D9n/Vl+p/yTZFgSAETor8B/IfPn+U34h2X+QNDfBv8r/f4JKQ0ABo39X9Bfl/+9zH9V37/8AOxPAPq76b+p7J+eOAAfJ6Ad/1v0N+d/6gDkJ8AS/2W5/wz9z/c/fQCyE+CU//TgX+RH/1P+pw9AdgJ64r/divi77S86AAAR+uf8Bf9JZ/xFB4A5AQw/+pf6j1j/Gwf806EwAKDor8Kf5y/4X5ryp2J/8Mr879DfpP+bQn/ZAQDwZf4PjD/Pj/5a/Mcy/7iivy/zBxjs+Zv4i/nRvz3/Uv40lPsDac+f53/i+dFfrX9KKgQA1Br/Z85/zfi/on9df1rFH4K/3PUX8vfePw0qBQCkq/4XMv/rbvtXegAfT6Dv/nPWn+V31Z9W9YdggP5V/Bcyf57fqH/VB5A/AfRvxf+qTf/KD+B9/NP+L+ivy/9e5r86w9+v4w8Qob/F/pv6/mE9f/B+V+Z/i/7m/VOvZgBAWvNflvvP0F+hP6nrD+Bb5T89+Bf50V/m79f3B6Dd8N9uRfz98KdN/AGi7vs/lvlPuuYfNvMHb4D+B/8R63/jkH/QMAAYon8Ff56/4H9p1j8dNvUHIOjfsv+ben/S3D8r4Nif50d/Lf5jmX/cnj+Af9pfzI/+7fkL+FP/PP9dAQr8ef4nnh/9rfTPC2jD/5nzXzP+r+hvyj8rwFJ/IT/6K/PPC3DP/0Lmf43+1QvotP+c9Wf50T8fgv4LmT/Pb9yfqPNnCkD/Zv5XLvsDDAfor9T/Xua/Oss/HKr1B/Ai9Dfiv2nkH6j2z4ZW8L9Ffxv8qQb+bPzz/Zfl/jP0V+nv6/EHIO34Tw/+RX70l/oTXf4AXmS3/3Yr4u+Hf+jp88/Gd9f/scx/0jV/bed/P+Q/PfAfsf437vhrPP/7CWiP/Xn+gv+lUX8a6PffHQH0P9//TbV/C+u/PwLor8Z/LPOPq/u3tP67IzBAfzP+p/jD1tZ/N77An+d/4vnRX7W/3zJ/Nh5t7P/M+a8Z/1f0r+tPvfb9syFRa/5C/r77h0Mj/HkCAyv8L2T+1x32b/358wk45T9n/Vl+F/0N8xcT6IT/QubP85vyt4A/TyBCfzG/Hn9L+N9nSNG/4vqX+q8a+NOhaXVmAn+A/mf7b6r6h35gWrw4hKJ/O/6WLf9hAhId+S/L/Wfof5Z/SCxcfraBOv7Tg3+RH/15f2q3/r4BOmjBf7sV8XfQP3RCfzdeFoFJ/8cy/4m7/hm+Z9q0QQR+9D/7/Ues/411/qHvIP5xBTT6w0l/nr/gf6nZP9v7Fuz/Ka8OagAAYRiKHsggWeffB04miS+BUy/7Fl6TWtpLDCGqMrtH+t8vfzoUwEuew3/0PjTW9zhEZgAAAABJRU5ErkJggg==
// @match        *://*.baidu.com/*
// @match        *://haokan.baidu.com/*
// @match        *://*.google.com/*
// @match        *://*.google.com.hk/*
// @match        *://*.bing.com/*
// @match        *://*.so.com/*
// @match        *://*.zhihu.com/*
// @match        *://*.douban.com/*
// @match        *://*.weibo.com/*
// @match        *://twitter.com/*
// @match        *://x.com/*
// @match        *://*.youtube.com/*
// @match        *://*.bilibili.com/*
// @match        *://*.csdn.net/*
// @match        *://mp.weixin.qq.com/*
// @match        *://*.youku.com/*
// @match        *://v.qq.com/*
// @match        *://www.52pojie.cn/*
// @match        *://*/*
// @match        file:///*
// @inject-into  content
// @run-at       document-start
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_info
// @grant        GM_setClipboard
// @noframes
// @connect      baidu.com
// @connect      baiducontent.com
// @connect      zhihu.com
// @connect      bilibili.com
// @connect      dict.iciba.com
// @connect      translate.googleapis.com
// @connect      content-dictionaryextension-pa.googleapis.com
// @connect      www.googleapis.com
// @connect      api.dictionaryapi.dev
// @connect      api-free.deepl.com
// @connect      api.mymemory.translated.net
// @license      MIT
// @homepageURL  https://github.com/bigoceans
// @supportURL   https://github.com/bigoceans
// @downloadURL https://update.greasyfork.org/scripts/594888/%E5%85%A8%E7%BD%91%E5%87%80%E5%8C%96%E5%A4%A7%E5%B8%88%20NetClean%20%E2%80%94%20%E5%B9%BF%E5%91%8A%E8%BF%87%E6%BB%A4%20%2B%20%E5%88%92%E8%AF%8D%E6%90%9C%E7%B4%A2%20%2B%20%E6%90%9C%E7%B4%A2%E7%BE%8E%E5%8C%96.user.js
// @updateURL https://update.greasyfork.org/scripts/594888/%E5%85%A8%E7%BD%91%E5%87%80%E5%8C%96%E5%A4%A7%E5%B8%88%20NetClean%20%E2%80%94%20%E5%B9%BF%E5%91%8A%E8%BF%87%E6%BB%A4%20%2B%20%E5%88%92%E8%AF%8D%E6%90%9C%E7%B4%A2%20%2B%20%E6%90%9C%E7%B4%A2%E7%BE%8E%E5%8C%96.meta.js
// ==/UserScript==

(function() {
  'use strict';

  /* ================================================================
   *  0. 核心常量 & 工具函数
   * ================================================================
   *
   *  ┌─ 模块架构总览（v10 重构后）──────────────────────────────────────┐
   *  │ 0  核心常量 & 工具函数      HOST/HREF/VERSION、dbg()、$$/$ 等     │
   *  │ 1  存储层                  getConfig/setConfig/writeConfig/flush（GM_* 原生调用） │
   *  │ 2  网络层                  GM_xmlhttpRequest 封装、WebDAV 同步     │
   *  │ 3  DOM 引擎                ncObserve(统一 MutationObserver 管理)   │
   *  │ 3c 定时器引擎              ncInterval(统一 setInterval 收口)        │
   *  │ 4  通用广告过滤            scheduleProcess / passiveAdBlock         │
   *  │ 5  处理器注册              registerHandler(按域名分派, 幂等去重)     │
   *  │ 6  逐站处理器              process*(百度/谷歌/B站…) + 视频旋转      │
   *  │ 7  设置面板 & 云同步        openSettings / cloudSync*               │
   *  │ 8  验证码识别 / 划词搜索    initCaptcha / initSelectionSearch       │
   *  │ 9  启动                     bootCore → registerHandler → 早退闸     │
   *  └────────────────────────────────────────────────────────────────┘
   *  约定：所有 MutationObserver 经 ncObserve；所有 setInterval 经 ncInterval；
   *        处理器注册经 registerHandler（重复注册幂等）。单一职责、行为保持。
   */
  const HOST = location.hostname;
  // 注意：HREF 必须是函数而不是 const —— 百度/360/部分搜索站会用 SPA 拦截搜索表单 submit，
  // URL 通过 history.pushState 变化但页面不刷新（脚本不重新注入）。
  // 若锁成 const，Baidu SPA 跳转后 processBaidu/processBaiduResults 等所有 inHref 判定都会读到启动时的 URL，
  // 导致「#kw 里输入关键词 → 回车 → 进入 /s?wd=... 搜索结果页后脚本整体失效」的恶性 bug（B-划词-02）。
  const HREF = () => location.href;
  const IS_MOBILE = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);
  const VERSION = '1.0.5';
  const NC_Z_TOP = 0x7FFFFFFF;   // 统一最高层级 z-index（替代散落的 NC_Z_TOP）
  // 调试日志开关：默认关闭，避免污染控制台。开启方式：URL 加 ?ncdebug，或在油猴里 GM_setValue('nc_debug', 1)
  window.__NC_DEBUG = /[?&]ncdebug/.test(location.search) || (typeof GM_getValue === 'function' && GM_getValue('nc_debug') === 1);
  function dbg() { if (!window.__NC_DEBUG) return; try { console.log.apply(console, arguments); } catch (e) {} }
  const PROCESSED = 'data-adc-v6';
  const DARK_CLASS = 'adc-dark-mode';
  // 已知站点（@match 命中域名），用于「仅白名单域名启用」模式下保留这些站点的处理
  const KNOWN_DOMAINS = ['baidu.com','google.com','google.com.hk','bing.com','so.com','zhihu.com','douban.com','weibo.com','twitter.com','x.com','youtube.com','bilibili.com','csdn.net','mp.weixin.qq.com','weixin.qq.com','youku.com','v.qq.com','52pojie.cn','haokan.baidu.com'];
  function inKnownDomain() {
    return KNOWN_DOMAINS.some(d => HOST === d || HOST.endsWith('.' + d) || HOST.indexOf(d) !== -1);
  }
  let BLOCKING_PAUSED = false;
  const STATS = { css: 0, fetch: 0, dom: 0, skippedAds: 0 };
  const BLOCKED_SELECTORS = new Set();
  const COUNTED_ADS = new WeakSet();
  const TOTAL_ADS_KEY = 'adc_total_blocked_ads_v2';
  const SITE_ADS_KEY = 'adc_site_blocked_ads_v2';
  let totalBlocked = 0;
  try { totalBlocked = parseInt(GM_getValue(TOTAL_ADS_KEY, '0'), 10) || 0; } catch(e) { totalBlocked = 0; }
  let siteBlocked = {};
  try { siteBlocked = JSON.parse(GM_getValue(SITE_ADS_KEY, '{}')) || {}; } catch(e) { siteBlocked = {}; }
  function persistTotalStats() {
    try { GM_setValue(TOTAL_ADS_KEY, String(totalBlocked)); } catch(e) {}
    try { GM_setValue(SITE_ADS_KEY, JSON.stringify(siteBlocked)); } catch(e) {}
  }
  function registerBlockedSelectors(cssText) {
    // 解析 CSS 规则中的选择器，用于后续轻量扫描计数
    cssText.split('}').forEach(rule => {
      const idx = rule.indexOf('{');
      if (idx < 0) return;
      const sel = rule.slice(0, idx).trim();
      if (!sel || sel.startsWith('@')) return;
      sel.split(',').forEach(s => {
        s = s.trim();
        if (s && !s.startsWith('@')) BLOCKED_SELECTORS.add(s);
      });
    });
  }
  let _lastCountTime = 0;
  function countBlockedAds() {
    if (BLOCKING_PAUSED) return;
    const cfg = getScriptCfg();
    if (cfg.adStats === false) return;
    const now = Date.now();
    if (now - _lastCountTime < 1500) return;
    _lastCountTime = now;
    let added = 0;
    BLOCKED_SELECTORS.forEach(sel => {
      try {
        document.querySelectorAll(sel).forEach(el => {
          if (!COUNTED_ADS.has(el)) {
            COUNTED_ADS.add(el);
            added++;
          }
        });
      } catch(e) {}
    });
    if (added) {
      STATS.skippedAds += added;
      STATS.css += added;
      totalBlocked += added;
      siteBlocked[HOST] = (siteBlocked[HOST] || 0) + added;
      persistTotalStats();
    }
  }

  // 划词搜索：默认搜索引擎清单（移植自划词搜索助手 Pro，{keyword} 自动替换为选中文字）
  const DEFAULT_SEL_ENGINES = [
    { id: 'open',  name: '打开网站',   icon: 'link',        url: '',                                                        enabled: true, order: 1,  onlyURL: true },
    { id: 'copy',  name: '复制',       icon: 'copy',        url: '',                                                        enabled: true, order: 2,  action: 'copy' },
    { id: 'baidu', name: '百度',       icon: 'baidu',       url: 'https://www.baidu.com/s?wd={keyword}',                     enabled: true, order: 3 },
    { id: 'goog',  name: 'Google',     icon: 'google',      url: 'https://www.google.com/search?q={keyword}',                 enabled: true, order: 4 },
    { id: 'bing',  name: '必应',       icon: 'bing',        url: 'https://www.bing.com/search?q={keyword}',                   enabled: true, order: 5 },
    { id: 'bili',  name: '哔哩哔哩',   icon: 'bilibili',    url: 'https://search.bilibili.com/all?keyword={keyword}',         enabled: true, order: 6 },
    { id: 'yt',    name: 'YouTube',    icon: 'youtube',     url: 'https://www.youtube.com/results?search_query={keyword}',    enabled: true, order: 7 },
    { id: 'wb',    name: '微博',       icon: 'weibo',       url: 'https://s.weibo.com/weibo?q={keyword}',                     enabled: true, order: 8 },
    { id: 'wiki',  name: 'Wikipedia',  icon: 'wiki',        url: 'https://zh.wikipedia.org/wiki/{keyword}',                   enabled: true, order: 9 },
    { id: 'bfy',   name: '百度翻译',   icon: 'translate',   url: 'https://fanyi.baidu.com/#auto/zh/{keyword}',                enabled: true, order: 10 },
    { id: 'xhs',   name: '小红书',     icon: 'xiaohongshu', url: 'https://www.xiaohongshu.com/search_result?keyword={keyword}', enabled: true, order: 11 }
  ];

  // 划词搜索：图标 / 引擎渲染辅助（设置页预览与运行时共用同一套逻辑）
  const SS_ICONS = {
    link:        '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M10.6 13.4a1 1 0 0 1 0-1.4l3-3a3 3 0 1 1 4.2 4.2l-1.5 1.5a1 1 0 1 1-1.4-1.4l1.5-1.5a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 1-1.4 0Zm2.8-2.8a1 1 0 0 1 0 1.4l-3 3a3 3 0 0 0 4.2 4.2l1.5-1.5a1 1 0 1 1 1.4 1.4l-1.5 1.5a5 5 0 1 1-7.1-7.1l3-3a1 1 0 0 1 1.4 0Z"/></svg>',
    copy:        '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4v2h12V1Zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h11v14Z"/></svg>',
    baidu:       '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#2932e1"/><text x="12" y="17" text-anchor="middle" font-size="14" fill="#fff" font-family="sans-serif" font-weight="bold">百</text></svg>',
    google:      '<svg viewBox="0 0 24 24"><text x="12" y="18" text-anchor="middle" font-size="18" font-weight="bold" fill="#4285F4" font-family="sans-serif">G</text></svg>',
    bing:        '<svg viewBox="0 0 24 24"><path fill="#008373" d="M6 2v14l8 5 5-3-7-4V8L9 6v8l4 2-5 3V2z"/></svg>',
    bilibili:    '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="15" rx="4" fill="#00aeec"/><text x="12" y="16" text-anchor="middle" font-size="9" fill="#fff" font-family="sans-serif" font-weight="bold">B</text></svg>',
    youtube:     '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="4" fill="#ff0000"/><polygon points="10,9 16,12 10,15" fill="#fff"/></svg>',
    weibo:       '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#e6162d"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="#fff" font-family="sans-serif" font-weight="bold">微</text></svg>',
    wiki:        '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#666" stroke-width="1"/><text x="12" y="17" text-anchor="middle" font-size="13" fill="#000" font-family="serif" font-weight="bold">W</text></svg>',
    translate:   '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#1677ff"/><text x="12" y="17" text-anchor="middle" font-size="12" fill="#fff" font-family="sans-serif">译</text></svg>',
    xiaohongshu: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#ff2442"/><text x="12" y="16" text-anchor="middle" font-size="9" fill="#fff" font-family="sans-serif" font-weight="bold">红</text></svg>'
  };
  const SS_SVG_SAFE_TAGS = new Set(['svg','path','rect','circle','ellipse','line','polyline','polygon','text','g','defs','use','linearGradient','radialGradient','stop','title','desc']);
  const SS_SVG_SAFE_ATTRS = new Set(['viewBox','d','cx','cy','r','rx','ry','x','y','x1','y1','x2','y2','width','height','fill','stroke','stroke-width','stroke-linecap','stroke-linejoin','stroke-dasharray','opacity','transform','points','text-anchor','font-size','font-family','font-weight','fill-opacity','stroke-opacity','gradientUnits','offset','stop-color','stop-opacity','xmlns','href','xlink:href']);
  function ssSanitizeSvg(html) {
    return html.replace(/<\/?(\w+)([^>]*)>/g, (match, tag, attrs) => {
      if (!SS_SVG_SAFE_TAGS.has(tag.toLowerCase())) return '';
      const cleanAttrs = attrs.replace(/\s([\w:-]+)\s*=\s*"[^"]*"/g, (m, name) => {
        const n = name.toLowerCase();
        if (n.startsWith('on')) return '';
        if (n === 'href' || n === 'xlink:href') { const v = m.match(/=\s*"([^"]*)"/); if (v && /^\s*javascript:/i.test(v[1])) return ''; }
        if (!SS_SVG_SAFE_ATTRS.has(n)) return '';
        return m;
      }).replace(/\s([\w:-]+)\s*=\s*'[^']*'/g, (m, name) => {
        const n = name.toLowerCase(); if (n.startsWith('on') || !SS_SVG_SAFE_ATTRS.has(n)) return ''; return m;
      }).replace(/\s([\w:-]+)\s*=\s*[^\s>]+/g, (m, name) => {
        const n = name.toLowerCase(); if (n.startsWith('on') || !SS_SVG_SAFE_ATTRS.has(n)) return ''; return m;
      });
      return '<' + tag + cleanAttrs + (match.endsWith('/>') ? '/>' : '>');
    });
  }
  function ssRenderIcon(val) {
    if (!val) return SS_ICONS.copy;
    if (SS_ICONS[val]) return SS_ICONS[val];
    if (/<svg[\s>]/i.test(val)) return ssSanitizeSvg(val);
    if (/^https?:\/\//i.test(val) || /^data:image\//i.test(val)) return '<img src="' + val.replace(/"/g, '&quot;') + '" style="width:22px;height:22px;border-radius:6px;object-fit:cover"/>';
    return SS_ICONS.copy;
  }
  /* —— 图标本地化：用脚本特权 GM_xhr 抓取任意图片（绕过 CORS），缩放为 32px PNG 并内联为 data URI —— */
  function localizeIcon(url) {
    return new Promise(resolve => {
      if (!url || !/^https?:\/\//i.test(url)) { resolve({ ok: false, reason: '不是图片网址' }); return; }
      let done = false;
      const finish = r => { if (!done) { done = true; resolve(r); } };
      GM_xmlhttpRequest({
        method: 'GET', url, responseType: 'blob', timeout: 12000,
        onload: r => {
          const blob = r.response;
          if (!blob || (blob.size || 0) === 0) { finish({ ok: false, reason: '图片为空或下载失败' }); return; }
          try {
            const reader = new FileReader();
            reader.onload = () => {
              const dataUrl = reader.result;
              const img = new Image();
              img.onload = () => {
                try {
                  const S = 32;
                  const iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
                  if (!iw || !ih) { finish({ ok: false, reason: '图片尺寸异常' }); return; }
                  const cv = document.createElement('canvas'); cv.width = S; cv.height = S;
                  const ctx = cv.getContext('2d');
                  ctx.clearRect(0, 0, S, S);
                  const scale = Math.min(S / iw, S / ih);
                  const w = Math.max(1, Math.round(iw * scale)), h = Math.max(1, Math.round(ih * scale));
                  ctx.drawImage(img, Math.round((S - w) / 2), Math.round((S - h) / 2), w, h);
                  finish({ ok: true, data: cv.toDataURL('image/png') });
                } catch (e) { finish({ ok: false, reason: '转换失败：' + (e && e.message || e) }); }
              };
              img.onerror = () => finish({ ok: false, reason: '图片解码失败（可能是损坏文件）' });
              img.src = dataUrl;
            };
            reader.onerror = () => finish({ ok: false, reason: '读取失败' });
            reader.readAsDataURL(blob);
          } catch (e) { finish({ ok: false, reason: '封装失败' }); }
        },
        onerror: () => finish({ ok: false, reason: '网络请求失败' }),
        ontimeout: () => finish({ ok: false, reason: '请求超时' })
      });
    });
  }
  // 脚本启用站点黑名单（敏感站点排除）预设：命中这些域名的站点，开启黑名单后脚本整体暂停。
  // 覆盖银行/支付/政府/邮箱/本地内网等敏感场景；匹配按 HOST.includes(条目)（填主域名覆盖子域）。
  const SCRIPT_BLACKLIST_PRESET = [
    'icbc.com.cn', 'ccb.com', 'abchina.com', 'boc.cn', 'bankcomm.com', 'cmbchina.com',
    'citicbank.com', 'cib.com.cn', 'spdb.com.cn', 'pingan.com', 'cmbc.com.cn', 'cebbank.com', 'hxb.com.cn',
    'alipay.com', 'paypal.com',
    'gov.cn',
    'mail.qq.com', 'mail.163.com', 'mail.sina.com.cn', 'mail.126.com', 'outlook.com', 'outlook.live.com',
    'localhost', '127.0.0.1'
  ];

  const DEFAULT_CONFIG = {
    baidu: {
      // —— 搜索引擎结果美化（默认开启，安装即可感知）——
      baiducss: true, googlecss: true, bingcss: true, yandexcss: true, so360css: true,
      // —— 其余功能默认关闭，由用户按需开启（性能 / 隐私优先）——
      kgbaidued: false, kgbaiduad: false, baidulogo: false, baidulianjie: false,
      baiduhot: false, baidueye: false,
      baidumenu: false,
      kggoogleed: false, kggooglead: false, googleAI: false,
      kg360ed: false, kg360ad: false, kgyandexed: false,
      kgbinged: false, kgbingad: false, bingAI: false,
      kgtwied: false, kgtwimv: false,
      kgyoued: false, kgyoumv: false, kgyouad: false,
      kgweixined: false, kgweixinad: false,
      kgdoubaned: false, kgdoubanad: false,
      pojieSignIn: false,
      ytpRotate: false,
      haokanPauseAd: false,
      kgzhihued: false, kgzhihuad: false,
      kgbilied: false, kgbiliad: false, kgbiliLogin: false, kgbiliQuality: false,
      kgweiboed: false, kgweiboad: false, kgweibomv: false,
      kgpingbis: false, kgpingbiiframe: false,
      darkMode: false, cleanCopy: false, videoSpeed: 1,
      // 暗黑模式按站点让行：darkSkipHosts 里的域名「交给网站自己的深色模式」；
      // darkForceHosts 里的域名「无视站点自带深色，强制用脚本统一暗色」
      darkSkipHosts: [], darkForceHosts: [],
      // 界面语言：zh-CN（默认简体）/ zh-TW（繁體，由简中转）/ en（English）
      uiLang: 'zh-CN',
      shortcutPanel: false, shortcutPause: false, shortcutYtp: false,
      baidueyecolor: 'rgba(204,232,207,1)',
      // 护眼强度（soft 柔和 / standard 标准 / strong 增强）→ 控制全局护眼蒙版 applyEyeCare() 的 alpha 深度
      baidueyestrength: 'standard',
      // 20-20-20 休息提醒（行为护眼，比单纯色温柔和更有效）：护眼模式开启后每 20 分钟 toast 提醒远眺
      baidueyerest: true,
      csdnAd: false, csdnLink: false, csdnExpand: false, csdnClean: false, xhsclean: false, juejinclean: false, sfclean: false,
      // —— 性能优化 ——
      perfWhitelist: false, scriptBlacklistEnabled: false, passiveGlobal: false, adStats: true,
      // —— 验证码（可选模块，默认关闭）——
      captchaEnabled: false, captchaEngine: 'auto', captchaTrigger: 'manual',
      captchaAutoFind: true, captchaShowHint: true, captchaSlide: true,
      captchaPreciseId: '', captchaYunmaToken: '',
      // 识别接口地址：默认留空 = 不发起任何外部请求。本脚本不内置任何第三方打码平台地址，
      // 需你自行在下方粘贴信任的接口（如 like996 公益接口或自建接口）；留空时「极速/精准」引擎直接跳过，不会上传任何图片。
      captchaApiFast: '', captchaApiPrecise: '',
      // —— 划词搜索（默认开启，选中文字弹条多引擎搜索 + 划词翻译）——
      selectionSearch: true, selSearchShowTranslate: true, selSearchAlwaysShowOpenLink: false
    },
    pingbiurl: [], whiteurl: [], pingbikw: [], scriptBlacklist: SCRIPT_BLACKLIST_PRESET.slice(),
    // 性能优化：启用域名白名单（内部激活白名单模式用）
    scopeWhitelist: [],
    // 验证码：自动启用站点白名单（captchaTrigger=whitelist 时生效）
    captchaWhitelist: [],
    // 验证码：识别黑名单（URL 含其中字符串则跳过）
    captchaBlacklist: [],
    // 划词搜索：引擎表 / 外观主题 / 翻译配置（独立于 baidu.* 的复杂对象）
    selSearchEngines: JSON.parse(JSON.stringify(DEFAULT_SEL_ENGINES)),
    selSearchTheme: { mode: 'dark', opacity: 1, glass: false },
    selSearchTrans: { engine: 'iciba', auto: false, target: 'zh', deeplKey: '', baiduId: '', baiduKey: '', customUrl: '', customKey: '', proxyUrl: '', forceAutoTarget: true, autoSave: true },
    // 云端同步：支持 WebDAV（坚果云/Nextcloud/OwnCloud 等）
    cloudSync: {
      enabled: false,
      type: 'webdav',  // 云备份/同步 provider 类型：webdav | gist | dropbox | onedrive | gdrive | yandex
      // WebDAV 通用字段（坚果云/Nextcloud/OwnCloud）
      server: '', username: '', password: '', path: '/netclean/netclean-config-v6.json', protect: false,
      // GitHub Gist：只需 PAT（Personal Access Token）
      gistToken: '', gistDescription: 'NetClean config backup',
      // OAuth 网盘：用户需自行在浏览器完成 OAuth 后，把 Access Token 粘贴进来
      oauthToken: '', oauthFolder: '/netclean-backups',
      lastSync: 0
    },
    // 视频下载：可配置下载站点（高速/稳定/自定义）。点击播放器「下载」按钮直接跳转并预填链接
    videoDownload: {
      active: 'cobalt',
      sites: [
        { key: 'cobalt',   name: 'Cobalt',   tpl: 'https://cobalt.tools/?u={url}',   tag: '稳定' },
        { key: 'yt5s',     name: 'YT5s',     tpl: 'https://yt5s.biz/?url={url}',     tag: '高速' },
        { key: 'savefrom', name: 'SaveFrom', tpl: 'https://savefrom.net/?url={url}', tag: '通用' },
        { key: 'getfvid',  name: 'Getfvid',  tpl: 'https://getfvid.com/?url={url}',  tag: '通用' }
      ]
    },
    // 配置修改时间戳（用于云同步冲突解决：本地较新时优先保留本地）
    modifiedAt: 0
  };

  const CONFIG_TIME = 1770000000;
  const FAVICON_API = 'https://favicon.yandex.net/favicon/v2/';

  // 安全的 favicon 插入：inline-flex 容器，按当前字体大小缩放，与标题中线对齐
  function insertFavicon(parentNode, domain) {
    if (!parentNode || parentNode.querySelector('.adc-favicon-el')) return;
    // 图标绝对定位：不占用标题行内空间，避免 inline-flex 改变基线/行高导致标题与摘要重叠
    const cs = getComputedStyle(parentNode);
    if (cs.position === 'static') parentNode.style.position = 'relative';
    // 在原 padding-left 基础上留出 1.4em 的图标空间，避免图标压住标题
    const basePL = parseFloat(cs.paddingLeft) || 0;
    parentNode.style.paddingLeft = (basePL / parseFloat(cs.fontSize || 16) + 1.4) + 'em';
    const wrap = document.createElement('span');
    wrap.className = 'adc-favicon-el';
    wrap.style.cssText =
      'position:absolute!important;left:0!important;top:50%!important;' +
      'transform:translateY(-50%)!important;' +
      'display:inline-flex!important;align-items:center!important;justify-content:center!important;' +
      'width:1.05em!important;height:1.05em!important;min-width:1.05em!important;' +
      'line-height:1!important;overflow:hidden!important';
    const img = document.createElement('img');
    img.style.cssText =
      'width:100%!important;height:100%!important;object-fit:contain!important;' +
      'border-radius:2px!important;display:block!important';
    img.src = FAVICON_API + domain + '?size=32';
    img.onerror = function() { wrap.style.display = 'none'; };
    wrap.appendChild(img);
    parentNode.appendChild(wrap);
    return wrap;
  }

  /* ================================================================
   *  0.1 配置管理
   * ================================================================ */
  // 配置读写带内存缓存：GM_getValue 每次都要跨油猴沙箱边界，热路径（划词 mouseup、each idle tick）频繁调用
  // 全量读取会拖慢交互；写配置时失效缓存即可，所有写入均经 setConfig，安全。
  let _configCache = undefined;
  // 深合并：用 over 覆盖 base，对象逐层合并、数组与基本类型直接覆盖；用于把存储/云端配置与默认配置对齐，避免缺字段变 undefined
  /* ================================================================
   *  验证码识别：第三方识别接口（可选，默认不启用）
   *  - 为什么需要服务端：验证码识别依赖图像模型，纯本地算法无法完成自动填入，
   *    因此本模块提供「填入推荐」引导，由用户主动决定是否使用第三方公益接口。
   *  - 合规设计：脚本不内置任何第三方打码平台地址，默认留空、不自动发起任何请求。
   *    识别接口需你自行粘贴（如 like996 公益接口或自建接口），地址仅在你填写并启用后才会被使用，使用时会明确提示数据流向。
   *  - 无障碍价值：对视障等有需要的用户，验证码自动识别是重要的辅助能力。
   *  - 注意：极速接口为 http 明文，介意者可只用精准接口或自行搭建服务。
   * ================================================================ */
  // 识别接口地址完全由用户自填：本脚本不内置任何第三方打码平台地址（避免向未知服务器上传验证码图片）。
  // 下方「接口说明」按钮仅给出填写引导，不会自动写入任何地址。

  function deepMerge(base, over) {
    if (over === undefined || over === null) return JSON.parse(JSON.stringify(base));
    if (typeof over !== 'object') return over;
    if (Array.isArray(base) || Array.isArray(over)) return JSON.parse(JSON.stringify(over));
    const out = {};
    const keys = new Set([].concat(Object.keys(base || {}), Object.keys(over || {})));
    keys.forEach(function(k) {
      if (base && typeof base[k] === 'object' && base[k] !== null && !Array.isArray(base[k]) &&
          over && typeof over[k] === 'object' && over[k] !== null && !Array.isArray(over[k])) {
        out[k] = deepMerge(base[k], over[k]);
      } else if (over && Object.prototype.hasOwnProperty.call(over, k)) {
        out[k] = (over[k] !== null && typeof over[k] === 'object' && !Array.isArray(over[k]))
          ? JSON.parse(JSON.stringify(over[k])) : over[k];
      } else {
        out[k] = (base && typeof base[k] === 'object' && !Array.isArray(base[k]))
          ? JSON.parse(JSON.stringify(base[k])) : base[k];
      }
    });
    return out;
  }
  function getConfig() {
    if (_configCache !== undefined) return _configCache;
    const raw = GM_getValue('allconfig');
    let cfg;
    if (!raw) { cfg = JSON.parse(JSON.stringify(DEFAULT_CONFIG)); GM_setValue('allconfig', cfg); }
    else { cfg = deepMerge(DEFAULT_CONFIG, raw); }
    _configCache = cfg;
    return cfg;
  }
  // 配置落盘：内存缓存立即更新（所有读都走 _configCache，即时正确），
  // 但 GM_setValue 全量序列化合并到 400ms 防抖窗口，避免拖开关/拖滑块/连续输入时
  // 频繁跨沙箱写盘造成主线程卡顿（划词引擎那一处早已用局部 persistLater 防抖，这里是全局统一）。
  // 关键写操作（重置/导入/恢复顺序）与页面隐藏时调用 flushConfig() 立即落盘，防止丢失最近改动。
  let _writeTimer = null;
  function _flushConfigNow() {
    if (_writeTimer) { clearTimeout(_writeTimer); _writeTimer = null; }
    try { GM_setValue('allconfig', _configCache); } catch (e) {}
  }
  function flushConfig() { _flushConfigNow(); }
  function writeConfig(cfg, skipSync) {
    _configCache = cfg;
    if (_writeTimer) clearTimeout(_writeTimer);
    _writeTimer = setTimeout(_flushConfigNow, 400);
    if (!skipSync) scheduleCloudSyncUp();
  }
  function setConfig(cfg, skipSync) {
    cfg.modifiedAt = Date.now();
    writeConfig(cfg, skipSync);
  }
  // 取脚本配置：返回 getConfig().baidu 命名空间下的全部用户开关与偏好。
  //   * 历史命名：脚本早期只面向百度搜索结果页，所有配置都挂在 getConfig().baidu 子对象下；
  //   * 现状：经多年迭代，脚本已发展为「全站净化大师」通用方案，但 `cfg.baidu` 这个 key 已通过
  //     GM_setValue 持久化在用户硬盘里，**绝不能改名**（改了就丢用户全部配置）。
  //   * 故采用「保留配置 key + 改内部命名」的双轨：业务代码统一调 getScriptCfg()，并保留
  //     cfgBaidu 作为历史 alias（兼容旧调用点 + 防止遗漏场景崩溃）。
  function getScriptCfg() { return getConfig().baidu; }
  const cfgBaidu = getScriptCfg; // 历史 alias（保留兼容，业务代码统一改用 getScriptCfg）

  /* ================================================================
   *  0.0c 界面语言（i18n）：简体中文（默认） / 繁體中文
   *
   *  设计约束（务必遵守，否则字典必然腐烂）：
   *   1. 只翻译「UI 短文案」层：油猴菜单、设置面板骨架、轻提示、通用按钮。
   *      功能说明长文（HELP 五段式 effect/impl/maintain/risk，约 1 万中文字）
   *      保持中文 —— 翻译成本远高于收益，且改一次功能要同步三份长文，必漏。
   *   2. 繁体**不建第三份字典**：以简中为唯一基准，zh-TW 由运行时简→繁
   *      字形映射转换（且作用于整棵子树，未进字典的文案也跟着转）。
   *      避免「改一句文案要改三处」的必然漏改。
   *   3. 未收录的 key 回退中文（t 找不到条目时返回 key 并 dbg 告警），
   *      可以渐进式补齐 —— 绝不出现空白或鬼画符。
   *
   *  用法：t('panel.title')；插值 t('toast.updated', { ver: '1.0.0' })
   *  注：英文版暂不出（用户决定），如未来要加，加一个 'en' 字段 + UI_LANGS 即可
   *  ================================================================ */
  const UI_LANGS = [['zh-CN', '简体中文'], ['zh-TW', '繁體中文'], ['en', 'English']];
  const I18N = {
    'menu.panel':          { 'zh-CN': '【⚙ 控制面板】', 'en': '【⚙ Control Panel】' },
    'menu.rescue':         { 'zh-CN': '【🧹 状态 / 恢复】', 'en': '【🧹 Status / Restore】' },
    'menu.darkOwner':      { 'zh-CN': '【🌙 暗黑：本站「交给网站 / 脚本接管」切换】', 'en': '【🌙 Dark: toggle site-handled / script-handled】' },
    'panel.title':         { 'zh-CN': '⚙ 控制面板', 'en': '⚙ Control Panel' },
    'panel.search':        { 'zh-CN': '搜索设置', 'en': 'Search settings' },
    'panel.searchPh':      { 'zh-CN': '搜索设置项…', 'en': 'Search settings…' },
    'panel.clear':         { 'zh-CN': '清除', 'en': 'Clear' },
    'panel.clearAria':     { 'zh-CN': '清除搜索', 'en': 'Clear search' },
    'panel.autoSave':      { 'zh-CN': '⚡ 自动保存', 'en': '⚡ Auto save' },
    'panel.autoSaveTip':   { 'zh-CN': '所有开关和输入修改后自动保存，无需手动点击', 'en': 'All switches and inputs auto-save on change — no manual save needed' },
    'panel.allOn':         { 'zh-CN': '全部开启', 'en': 'Enable all' },
    'panel.helpTip':       { 'zh-CN': '功能说明', 'en': 'What this does' },
    'panel.lang':          { 'zh-CN': '界面语言', 'en': 'UI language' },
    'panel.langTip':       { 'zh-CN': '切换面板与提示文字的语言（油猴菜单项需刷新页面后生效）', 'en': 'Switch panel and toast language. Tampermonkey menu items need a page reload.' },
    'toast.needReload':    { 'zh-CN': '，刷新后生效', 'en': '. Reload to apply.' },
    'toast.opening':       { 'zh-CN': '正在打开云备份管理…', 'en': 'Opening cloud backup manager…' },
    'toast.openFailed':    { 'zh-CN': '打开失败：', 'en': 'Failed to open: ' },
    'toast.notAccepted':   { 'zh-CN': '你未接受使用条款，脚本本次未启用；刷新页面可重新查看并同意', 'en': 'Terms not accepted — script disabled this session. Reload to review and accept.' },
    'toast.updated':       { 'zh-CN': '✨ 全网净化大师已更新至 v{ver}（控制面板 → 关于 查看新功能）', 'en': '✨ NetClean updated to v{ver} (Control Panel → About for what\'s new)' },
    'toast.langSwitched':  { 'zh-CN': '界面语言已切换，油猴菜单项需刷新页面后生效', 'en': 'UI language switched. Tampermonkey menu items need a page reload.' }
,
    'panel.add': { 'zh-CN': '添加', 'en': 'Add' },
    'panel.apiGuide': { 'zh-CN': '接口说明', 'en': 'API guide' },
    'cat.adblock': { 'zh-CN': '净化增强', 'en': 'Ad blocking' },
    'cat.captcha': { 'zh-CN': '验证码识别', 'en': 'Captcha solver' },
    'cat.selsearch': { 'zh-CN': '划词搜索', 'en': 'Selection search' },
    'cat.videodl': { 'zh-CN': '视频下载', 'en': 'Video download' },
    'cat.perf': { 'zh-CN': '性能与高级', 'en': 'Performance & advanced' },
    'cat.shortcuts': { 'zh-CN': '快捷键', 'en': 'Keyboard shortcuts' },
    'cat.cloud': { 'zh-CN': '配置同步', 'en': 'Cloud sync' },
    'cat.about': { 'zh-CN': '关于', 'en': 'About' },
    'cat.server': { 'zh-CN': '服务器地址', 'en': 'Server URL' },
    'cat.username': { 'zh-CN': '用户名', 'en': 'Username' },
    'cat.password': { 'zh-CN': '密码 / 应用密码', 'en': 'Password / app password' },
    'cat.path': { 'zh-CN': '远程路径', 'en': 'Remote path' },
    'cat.protect': { 'zh-CN': '密码保护（XOR 加密）', 'en': 'Password protect (XOR)' },
    'item.t.kgpingbis': { 'zh-CN': '被动去广告', 'en': 'Passive ad blocking' },
    'item.t.kgpingbiiframe': { 'zh-CN': '禁用第三方 iframe', 'en': 'Block 3rd-party iframes' },
    'item.t.kgbaidued': { 'zh-CN': '百度广告过滤', 'en': 'Baidu ad blocking' },
    'item.t.kggoogleed': { 'zh-CN': 'Google 广告过滤', 'en': 'Google ad blocking' },
    'item.t.kg360ed': { 'zh-CN': '360 广告过滤', 'en': '360 ad blocking' },
    'item.t.kgbinged': { 'zh-CN': 'Bing 广告过滤', 'en': 'Bing ad blocking' },
    'item.t.kgyandexed': { 'zh-CN': 'Yandex 广告过滤', 'en': 'Yandex ad blocking' },
    'item.t.baiducss': { 'zh-CN': '百度卡片式美化', 'en': 'Baidu card-style beautify' },
    'item.t.googlecss': { 'zh-CN': 'Google 卡片美化', 'en': 'Google card-style beautify' },
    'item.t.bingcss': { 'zh-CN': 'Bing 卡片美化', 'en': 'Bing card-style beautify' },
    'item.t.yandexcss': { 'zh-CN': 'Yandex 卡片美化', 'en': 'Yandex card-style beautify' },
    'item.t.so360css': { 'zh-CN': '360 卡片美化', 'en': '360 card-style beautify' },
    'item.t.baidulogo': { 'zh-CN': '搜索结果网站图标', 'en': 'Result site favicons' },
    'item.t.baidulianjie': { 'zh-CN': '链接直达优化', 'en': 'Skip Baidu redirect links' },
    'item.t.baiduhot': { 'zh-CN': '隐藏热搜 / AI 栏', 'en': 'Hide hot list / AI bar' },
    'item.t.googleAI': { 'zh-CN': '隐藏 AI 概述', 'en': 'Hide Google AI Overview' },
    'item.t.bingAI': { 'zh-CN': '隐藏 Bing Copilot', 'en': 'Hide Bing Copilot' },
    'item.t.baidueye': { 'zh-CN': '护眼模式', 'en': 'Eye-care mode' },
    'item.t.baidueyecolor': { 'zh-CN': '护眼色', 'en': 'Eye-care color' },
    'item.t.baidueyestrength': { 'zh-CN': '护眼强度', 'en': 'Eye-care intensity' },
    'item.t.baidumenu': { 'zh-CN': '页面快捷入口', 'en': 'In-page quick link' },
    'item.t.kgyoued': { 'zh-CN': 'YouTube / 优酷 / 腾讯 广告过滤', 'en': 'YouTube / Youku / Tencent ad blocking' },
    'item.t.kgbilied': { 'zh-CN': 'B站广告过滤', 'en': 'Bilibili ad blocking' },
    'item.t.haokanPauseAd': { 'zh-CN': '好看视频暂停广告', 'en': 'Haokan pause ads' },
    'item.t.kgtwied': { 'zh-CN': 'Twitter / X 推广过滤', 'en': 'Twitter / X promo filter' },
    'item.t.ytpRotate': { 'zh-CN': 'YouTube 旋转 / 翻转', 'en': 'YouTube rotate / flip' },
    'item.t.kgbiliQuality': { 'zh-CN': 'B站画质解锁', 'en': 'Bilibili 1080P unlock' },
    'item.t.kgbiliLogin': { 'zh-CN': 'B站绕过登录', 'en': 'Bilibili bypass login' },
    'item.t.kgyoumv': { 'zh-CN': 'YouTube 视频下载', 'en': 'YouTube video download' },
    'item.t.kgtwimv': { 'zh-CN': 'Twitter / X 视频下载', 'en': 'Twitter / X video download' },
    'item.t.kgzhihued': { 'zh-CN': '知乎广告 + 登录弹窗', 'en': 'Zhihu ads + login popup' },
    'item.t.kgdoubaned': { 'zh-CN': '豆瓣广告 + 登录墙', 'en': 'Douban ads + login wall' },
    'item.t.kgweiboed': { 'zh-CN': '微博广告过滤', 'en': 'Weibo ad blocking' },
    'item.t.kgweixined': { 'zh-CN': '微信公号广告过滤', 'en': 'WeChat MP ad blocking' },
    'item.t.csdnAd': { 'zh-CN': 'CSDN 广告过滤', 'en': 'CSDN ad blocking' },
    'item.t.xhsclean': { 'zh-CN': '小红书广告清理', 'en': 'Xiaohongshu cleanup' },
    'item.t.juejinclean': { 'zh-CN': '掘金广告清理', 'en': 'Juejin cleanup' },
    'item.t.sfclean': { 'zh-CN': '思否广告清理', 'en': 'SegmentFault cleanup' },
    'item.t.csdnLink': { 'zh-CN': 'CSDN 外链直达', 'en': 'CSDN direct link' },
    'item.t.csdnExpand': { 'zh-CN': 'CSDN 自动展开', 'en': 'CSDN auto-expand' },
    'item.t.csdnClean': { 'zh-CN': 'CSDN 纯净阅读', 'en': 'CSDN clean reading' },
    'item.t.kgweibomv': { 'zh-CN': '微博视频下载', 'en': 'Weibo video download' },
    'item.t.pojieSignIn': { 'zh-CN': '吾爱破解自动签到', 'en': '52pojie auto check-in' },
    'item.t.kgbaiduad': { 'zh-CN': '百度关键词过滤', 'en': 'Baidu keyword filter' },
    'item.t.kggooglead': { 'zh-CN': 'Google 关键词过滤', 'en': 'Google keyword filter' },
    'item.t.kg360ad': { 'zh-CN': '360 关键词过滤', 'en': '360 keyword filter' },
    'item.t.kgbingad': { 'zh-CN': 'Bing 关键词过滤', 'en': 'Bing keyword filter' },
    'item.t.kgzhihuad': { 'zh-CN': '知乎关键词过滤', 'en': 'Zhihu keyword filter' },
    'item.t.kgbiliad': { 'zh-CN': 'B站关键词过滤', 'en': 'Bilibili keyword filter' },
    'item.t.kgweiboad': { 'zh-CN': '微博关键词过滤', 'en': 'Weibo keyword filter' },
    'item.t.kgweixinad': { 'zh-CN': '微信公号关键词过滤', 'en': 'WeChat MP keyword filter' },
    'item.t.kgdoubanad': { 'zh-CN': '豆瓣关键词过滤', 'en': 'Douban keyword filter' },
    'item.t.kgyouad': { 'zh-CN': 'YouTube 关键词过滤', 'en': 'YouTube keyword filter' },
    'item.t.captchaEnabled': { 'zh-CN': '启用验证码识别', 'en': 'Enable captcha solver' },
    'item.t.captchaTrigger': { 'zh-CN': '触发方式', 'en': 'Trigger mode' },
    'item.t.captchaEngine': { 'zh-CN': '识别引擎', 'en': 'Engine' },
    'item.t.captchaApiFast': { 'zh-CN': '极速接口地址', 'en': 'Fast API URL' },
    'item.t.captchaApiPrecise': { 'zh-CN': '精准接口地址', 'en': 'Precise API URL' },
    'item.t.captchaPreciseId': { 'zh-CN': '精准引擎识别码', 'en': 'Precise engine ID' },
    'item.t.captchaYunmaToken': { 'zh-CN': '云码 Token', 'en': 'Yunma token' },
    'item.t.captchaAutoFind': { 'zh-CN': '自动查找验证码', 'en': 'Auto-find captcha' },
    'item.t.captchaShowHint': { 'zh-CN': '显示提示条', 'en': 'Show hint banner' },
    'item.t.captchaSlide': { 'zh-CN': '滑动验证码', 'en': 'Slide captcha' },
    'item.t.selectionSearch': { 'zh-CN': '启用划词搜索', 'en': 'Enable selection search' },
    'item.t.selSearchShowTranslate': { 'zh-CN': '显示翻译按钮', 'en': 'Show translate button' },
    'item.t.selSearchTransAuto': { 'zh-CN': '自动翻译', 'en': 'Auto translate' },
    'item.t.selSearchAlwaysShowOpenLink': { 'zh-CN': '打开链接按钮常驻', 'en': 'Always show open link' },
    'item.t.perfWhitelist': { 'zh-CN': '仅白名单域名启用', 'en': 'Whitelist domains only' },
    'item.t.passiveGlobal': { 'zh-CN': '被动扫描全局化', 'en': 'Passive scan globally' },
    'item.t.darkMode': { 'zh-CN': '暗黑模式', 'en': 'Dark mode' },
    'item.t.cleanCopy': { 'zh-CN': '干净复制', 'en': 'Clean copy' },
    'item.t.adStats': { 'zh-CN': '广告拦截统计', 'en': 'Ad-block stats' },
    'item.t.scriptBlacklistEnabled': { 'zh-CN': '启用脚本站点黑名单', 'en': 'Enable site blacklist' },
    'item.t.shortcutPanel': { 'zh-CN': '打开控制面板', 'en': 'Open control panel' },
    'item.t.shortcutPause': { 'zh-CN': '暂停/恢复净化', 'en': 'Pause/resume blocking' },
    'item.t.shortcutYtp': { 'zh-CN': '旋转快捷键', 'en': 'Rotate shortcut' },
    'item.d.kgpingbis': { 'zh-CN': '算法分析并过滤悬浮广告，对任意网页都生效（适合大部分网页）', 'en': 'Heuristic floating-ad removal for any site (covers most cases)' },
    'item.d.kgpingbiiframe': { 'zh-CN': '屏蔽来自其他域名的内嵌框架，阻断联盟广告与跟踪', 'en': 'Block cross-origin iframes to cut affiliate and tracking ads' },
    'item.d.kgbaidued': { 'zh-CN': '过滤百度搜索系全站广告（含知道 / 百科 / 文库 / 贴吧）', 'en': 'Block ads across Baidu search family (Zhidao / Baike / Wenku / Tieba)' },
    'item.d.kggoogleed': { 'zh-CN': '过滤 Google 搜索广告', 'en': 'Filter Google search ads' },
    'item.d.kg360ed': { 'zh-CN': '过滤 360 搜索及子站广告', 'en': 'Filter 360 search and subdomain ads' },
    'item.d.kgbinged': { 'zh-CN': '过滤 Bing 搜索广告', 'en': 'Filter Bing search ads' },
    'item.d.kgyandexed': { 'zh-CN': '过滤 Yandex 搜索广告', 'en': 'Filter Yandex search ads' },
    'item.d.baiducss': { 'zh-CN': '百度搜索结果现代卡片式布局', 'en': 'Modern card layout for Baidu search results' },
    'item.d.googlecss': { 'zh-CN': 'Google 搜索结果现代卡片式布局', 'en': 'Modern card layout for Google search results' },
    'item.d.bingcss': { 'zh-CN': 'Bing 搜索结果现代卡片式布局', 'en': 'Modern card layout for Bing search results' },
    'item.d.yandexcss': { 'zh-CN': 'Yandex 搜索结果现代卡片式布局', 'en': 'Modern card layout for Yandex search results' },
    'item.d.so360css': { 'zh-CN': '360 搜索结果现代卡片式布局', 'en': 'Modern card layout for 360 search results' },
    'item.d.baidulogo': { 'zh-CN': '在搜索结果中显示网站 favicon', 'en': 'Show site favicon next to each result' },
    'item.d.baidulianjie': { 'zh-CN': '跳过百度跳转链接，直达原始网页', 'en': 'Skip Baidu redirect links and jump to original page' },
    'item.d.baiduhot': { 'zh-CN': '隐藏百度热搜推荐和 AI 辅助侧边栏', 'en': 'Hide Baidu hot list and AI sidebar' },
    'item.d.googleAI': { 'zh-CN': '隐藏 Google AI Overview', 'en': 'Hide Google AI Overview' },
    'item.d.bingAI': { 'zh-CN': '隐藏 Bing 搜索页的 AI / Copilot 侧边栏与深度搜索区', 'en': 'Hide Bing AI / Copilot sidebar and deep-search panel' },
    'item.d.baidueye': { 'zh-CN': '全站护眼蒙版（视觉柔和）+ 20-20-20 休息提醒', 'en': 'Full-site soft overlay (visual softening) + 20-20-20 rest reminders' },
    'item.d.baidueyecolor': { 'zh-CN': '选预设暖色调（Kindle/Night Shift 风格）或用取色器自定义', 'en': 'Pick a preset warm tone (Kindle / Night Shift style) or use the color picker' },
    'item.d.baidueyestrength': { 'zh-CN': '护眼蒙版深浅：柔和不刺眼，增强更暖画面（视觉柔和更强）', 'en': 'Overlay depth: soft to strong, stronger warm tint (more visual softening)' },
    'item.d.baidumenu': { 'zh-CN': '在百度页面显示控制面板入口', 'en': 'Show control-panel entry on Baidu pages' },
    'item.d.kgyoued': { 'zh-CN': '自动跳过三家平台的贴片广告（同一开关，同时覆盖三家）', 'en': 'Skip pre-roll ads on all three (one switch covers them)' },
    'item.d.kgbilied': { 'zh-CN': '过滤 B站推广卡片、直播广告、小火箭广告', 'en': 'Filter Bilibili promo cards, live ads, rocket-launcher ads' },
    'item.d.haokanPauseAd': { 'zh-CN': '自动关闭好看视频暂停时弹出的联盟暂停广告', 'en': 'Auto-dismiss Haokan pause-time affiliate popups' },
    'item.d.kgtwied': { 'zh-CN': '隐藏推广推文', 'en': 'Hide promoted tweets' },
    'item.d.ytpRotate': { 'zh-CN': '嵌入旋转 / 翻转 / 填充工具栏（普通视频 + Shorts）', 'en': 'Inject rotate / flip / fill toolbar (regular videos + Shorts)' },
    'item.d.kgbiliQuality': { 'zh-CN': '未登录状态解锁 1080P 画质选项', 'en': 'Unlock 1080P quality without login' },
    'item.d.kgbiliLogin': { 'zh-CN': '关闭登录弹窗和"请登录后观看"提示', 'en': 'Close login popups and "please log in to watch" prompts' },
    'item.d.kgyoumv': { 'zh-CN': '播放器工具栏添加下载按钮，跳转设置页所选站点并预填链接', 'en': 'Add download button to player toolbar — opens your chosen site with link prefilled' },
    'item.d.kgtwimv': { 'zh-CN': '在推文视频旁添加下载按钮', 'en': 'Add download button next to tweet videos' },
    'item.d.kgzhihued': { 'zh-CN': '过滤知乎广告、关闭登录弹窗并重定向登录页', 'en': 'Filter Zhihu ads, close login popups, redirect login pages' },
    'item.d.kgdoubaned': { 'zh-CN': '过滤广告并关闭登录弹窗', 'en': 'Filter ads and close login popups' },
    'item.d.kgweiboed': { 'zh-CN': '过滤微博信息流广告', 'en': 'Filter Weibo feed ads' },
    'item.d.kgweixined': { 'zh-CN': '过滤微信公众文章里插入的广告和推广', 'en': 'Filter ads embedded in WeChat public-account articles' },
    'item.d.csdnAd': { 'zh-CN': '去除 CSDN 广告和登录弹窗', 'en': 'Remove CSDN ads and login popups' },
    'item.d.xhsclean': { 'zh-CN': '清理信息流推广、侧栏广告与登录墙', 'en': 'Clean feed promos, sidebar ads and login walls' },
    'item.d.juejinclean': { 'zh-CN': '清理掘金信息流与侧栏广告', 'en': 'Clean Juejin feed and sidebar ads' },
    'item.d.sfclean': { 'zh-CN': '清理思否广告位与登录墙', 'en': 'Clean SegmentFault ad slots and login walls' },
    'item.d.csdnLink': { 'zh-CN': '跳过 CSDN 外链重定向', 'en': 'Skip CSDN outbound redirect' },
    'item.d.csdnExpand': { 'zh-CN': '自动展开全文和代码块', 'en': 'Auto-expand full text and code blocks' },
    'item.d.csdnClean': { 'zh-CN': '隐藏侧边栏，文章居中显示', 'en': 'Hide sidebar, center article' },
    'item.d.kgweibomv': { 'zh-CN': '在微博视频旁添加下载按钮', 'en': 'Add download button next to Weibo videos' },
    'item.d.pojieSignIn': { 'zh-CN': '进入吾爱破解论坛后自动完成每日签到', 'en': 'Auto daily check-in on 52pojie forum' },
    'item.d.kgbaiduad': { 'zh-CN': '按关键词 / 网址过滤搜索结果', 'en': 'Block results by keyword / URL' },
    'item.d.kggooglead': { 'zh-CN': '按关键词 / 网址过滤搜索结果', 'en': 'Block results by keyword / URL' },
    'item.d.kg360ad': { 'zh-CN': '按关键词 / 网址过滤搜索结果', 'en': 'Block results by keyword / URL' },
    'item.d.kgbingad': { 'zh-CN': '按关键词 / 网址过滤搜索结果', 'en': 'Block results by keyword / URL' },
    'item.d.kgzhihuad': { 'zh-CN': '按关键词过滤回答与搜索结果', 'en': 'Filter answers and search results by keyword' },
    'item.d.kgbiliad': { 'zh-CN': '按关键词过滤搜索与评论', 'en': 'Filter search and comments by keyword' },
    'item.d.kgweiboad': { 'zh-CN': '按关键词过滤微博内容', 'en': 'Filter Weibo content by keyword' },
    'item.d.kgweixinad': { 'zh-CN': '按关键词过滤文章段落内容', 'en': 'Filter article paragraphs by keyword' },
    'item.d.kgdoubanad': { 'zh-CN': '按关键词过滤搜索 / 小组 / 电影', 'en': 'Filter search / group / movie by keyword' },
    'item.d.kgyouad': { 'zh-CN': '按关键词过滤推荐与评论', 'en': 'Filter recommendations and comments by keyword' },
    'item.d.captchaEnabled': { 'zh-CN': '总开关。默认关闭，按需开启；关闭后本页所有设置均不生效。', 'en': 'Master switch. Off by default. When off, all settings on this page are inert.' },
    'item.d.captchaTrigger': { 'zh-CN': '手动：点悬浮「识」按钮才扫描（零常驻开销，推荐）；白名单：仅下方名单站点自动扫描；全局：全站常驻扫描（最耗性能，不推荐）。', 'en': 'Manual: click the floating "识" button to scan (zero idle cost, recommended). Whitelist: auto-scan only sites in the list below. Global: scan every page (heaviest, not recommended).' },
    'item.d.captchaEngine': { 'zh-CN': '自动：极速接口优先，失败后回退精准；极速：免识别码，但需填写下方接口地址（数英/算术）；精准：需下方识别码（支持滑块）。', 'en': 'Auto: try fast API first, fall back to precise. Fast: no ID required, but needs API URL below (text/math). Precise: needs ID below (supports slide).' },
    'item.d.captchaApiFast': { 'zh-CN': '「极速」引擎调用的服务地址。留空 = 极速引擎直接跳过，不向任何外部服务器发送数据。请自行搭建或选用可信 OCR 服务后填写；验证码图片将上传至该地址。点击右侧「接口说明」查看填写方式。', 'en': 'API URL for the Fast engine. Leave blank to skip the Fast engine entirely (no data sent). Self-host or use a trusted OCR service. Captcha images will be uploaded to this URL. Click "API guide" on the right for setup help.' },
    'item.d.captchaApiPrecise': { 'zh-CN': '「精准」引擎（含滑块）调用的服务地址。留空 = 精准引擎直接跳过。填写后验证码图片、识别码与当前网页网址会发送给该服务器；常用 like996 公益接口（官网 https://www.like996.icu:1205/，第三方服务，与本脚本无关），点击右侧「接口说明」可直达注册页。', 'en': 'API URL for the Precise engine (slide captcha). Leave blank to skip. Captcha images, your ID and current page URL are sent to this server. Common choice: like996 free public API (https://www.like996.icu:1205/, third-party service — not affiliated with this script). Click "API guide" for the signup page.' },
    'item.d.captchaPreciseId': { 'zh-CN': '仅「精准 / 自动」模式需要，由你所填写的精准接口服务方提供（原 like996 为 32 位）。留空则精准模式跳过识别。', 'en': 'Only needed for Precise / Auto mode. Provided by the API service you filled above (e.g. 32-char ID from like996). Leave blank to skip precise mode.' },
    'item.d.captchaYunmaToken': { 'zh-CN': '仅「算术验证码」需要（如「3+5=?」图片）。在 jfbym.com 获取 Token（商业服务，按识别次数计费，需充值积分，官网 https://www.jfbym.com，第三方服务，与本脚本无关）；留空则算术图跳过识别。点击右侧「接口说明」可直达注册页。', 'en': 'Only needed for arithmetic captchas (e.g. "3+5=?"). Get a token at jfbym.com (paid service, billed per solve — https://www.jfbym.com, third-party, not affiliated with this script). Leave blank to skip arithmetic. Click "API guide" for signup.' },
    'item.d.captchaAutoFind': { 'zh-CN': '无手动规则时，按属性关键词（code/captcha/yzm…）自动定位验证码与输入框并填充。', 'en': 'When no manual rules, auto-locate captcha and input by attribute keywords (code/captcha/yzm…).' },
    'item.d.captchaShowHint': { 'zh-CN': '顶部灰条显示识别状态（识别中 / 完成 / 错误）。', 'en': 'Top banner shows solving state (solving / done / error).' },
    'item.d.captchaSlide': { 'zh-CN': '启用滑动拼图 / 滑块行为验证码的自动识别与拖拽。需「精准引擎 + 识别码」。', 'en': 'Auto-solve and drag slide / puzzle captchas. Requires Precise engine + ID.' },
    'item.d.selectionSearch': { 'zh-CN': '选中网页文字弹出搜索工具条（默认开启，修改后刷新页面生效）', 'en': 'Selection search toolbar pops up on text selection (on by default; reload to apply changes)' },
    'item.d.selSearchShowTranslate': { 'zh-CN': '工具条末尾显示「译」按钮，点按划词翻译', 'en': 'Show "译" button at the end of the toolbar for translating selected text' },
    'item.d.selSearchTransAuto': { 'zh-CN': '划词后立即自动翻译（默认关闭，避免打扰）', 'en': 'Auto-translate immediately after selection (off by default to avoid noise)' },
    'item.d.selSearchAlwaysShowOpenLink': { 'zh-CN': '无论选中内容是否像地址，都显示「打开网站」按钮（默认关闭）', 'en': 'Always show "open as link" button even if the selection does not look like a URL (off by default)' },
    'item.d.perfWhitelist': { 'zh-CN': '开启后仅在「启用域名」与已知站点运行，其余页面注入后秒退（近零开销）。油猴 @match 为静态元数据无法运行时切换，此项以注入后早退实现「域名内」', 'en': 'Only run on whitelisted / known sites — others exit immediately after injection (~zero cost). Tampermonkey @match is static metadata; this switch early-exits by skipping the per-page work.' },
    'item.d.passiveGlobal': { 'zh-CN': '关闭时通用被动广告扫描只在已知站点运行；开启后扫描所有页面（更重，慎开）', 'en': 'Off: generic passive ad scan only on known sites. On: scan every page (heavier, use with care)' },
    'item.d.darkMode': { 'zh-CN': '跟随系统自动切换暗黑模式', 'en': 'Auto-switch dark mode based on system preference' },
    'item.d.cleanCopy': { 'zh-CN': '复制链接时自动去除追踪参数', 'en': 'Strip tracking parameters when copying links' },
    'item.d.adStats': { 'zh-CN': '统计并显示本次/累计/当前站点拦截数量。关闭后不再扫描 DOM，可略微降低开销，设置面板仍显示「统计已关闭」', 'en': 'Show per-session / total / per-site block counts. When off, DOM scan stops for stats — minor perf gain. Panel still shows "stats off".' },
    'item.d.scriptBlacklistEnabled': { 'zh-CN': '开启后，本表内的站点脚本整体暂停（不注入任何净化/美化/划词/验证码）。改动需刷新页面生效。', 'en': 'When enabled, the script is fully paused on listed sites (no ad/beautify/selection-search/captcha). Reload after changes.' },
    'item.d.shortcutPanel': { 'zh-CN': 'Ctrl+Shift+A 一键打开设置面板', 'en': 'Ctrl+Shift+A opens the control panel' },
    'item.d.shortcutPause': { 'zh-CN': 'Ctrl+Shift+P 全局暂停或恢复广告净化', 'en': 'Ctrl+Shift+P globally pauses or resumes ad blocking' },
    'item.d.shortcutYtp': { 'zh-CN': 'Alt+Shift+R/F/H/V 旋转/填充/翻转视频', 'en': 'Alt+Shift+R/F/H/V rotates / fits / flips videos' },
    'ph.坚果云邮箱_用户名': { 'zh-CN': '坚果云邮箱 / 用户名', 'en': 'Nutstore email / username' },
    'ph.坚果云_应用密码_': { 'zh-CN': '坚果云「应用密码」', 'en': 'Nutstore "app password"' },
    'ph.输入网址关键词': { 'zh-CN': '输入网址关键词', 'en': 'Enter URL keyword' },
    'ph.输入关键词_至少2个字_': { 'zh-CN': '输入关键词（至少2个字）', 'en': 'Enter keyword (≥2 chars)' },
    'ph.如_example_com': { 'zh-CN': '如 example.com', 'en': 'e.g. example.com' },
    'ph.输入网址片段': { 'zh-CN': '输入网址片段', 'en': 'Enter URL fragment' },
    'ph.输入域名': { 'zh-CN': '输入域名', 'en': 'Enter domain' },
    'ph.如_baidu_com': { 'zh-CN': '如 baidu.com', 'en': 'e.g. baidu.com' },
    'ph.如_icbc_com_cn': { 'zh-CN': '如 icbc.com.cn', 'en': 'e.g. icbc.com.cn' },
    'title.关闭': { 'zh-CN': '关闭', 'en': 'Close' },
    'title.NetClean：本站已暂停，点击管理': { 'zh-CN': 'NetClean：本站已暂停，点击管理', 'en': 'NetClean: paused on this site — click to manage' },
    'title.关闭提示': { 'zh-CN': '关闭提示', 'en': 'Dismiss prompt' },
    'title.盐选内容（可在控制面板关闭此效果）': { 'zh-CN': '盐选内容（可在控制面板关闭此效果）', 'en': 'Yan-selected content (disable in control panel)' },
    'title.拖动调整位置｜左键打开菜单｜右键隐藏（刷新恢复）': { 'zh-CN': '拖动调整位置｜左键打开菜单｜右键隐藏（刷新恢复）', 'en': 'Drag to move · left-click to open · right-click to hide (reload to restore)' },
    'title.翻译': { 'zh-CN': '翻译', 'en': 'Translate' },
    'sec.百度广告过滤': { 'zh-CN': '百度广告过滤', 'en': 'Baidu ad blocking' },
    'sec.关键词过滤': { 'zh-CN': '关键词过滤', 'en': 'Keyword filter' },
    'sec.链接优化': { 'zh-CN': '链接优化', 'en': 'Link optimisation' },
    'sec.网站图标': { 'zh-CN': '网站图标', 'en': 'Site favicons' },
    'sec.卡片式美化': { 'zh-CN': '卡片式美化', 'en': 'Card-style beautify' },
    'sec.隐藏热搜/AI栏': { 'zh-CN': '隐藏热搜/AI栏', 'en': 'Hide hot list / AI bar' },
    'sec.护眼模式': { 'zh-CN': '护眼模式', 'en': 'Eye-care mode' },
    'sec.快捷入口': { 'zh-CN': '快捷入口', 'en': 'Quick entry' },
    'sec.Google 广告过滤': { 'zh-CN': 'Google 广告过滤', 'en': 'Google ad blocking' },
    'sec.Google 关键词过滤': { 'zh-CN': 'Google 关键词过滤', 'en': 'Google keyword filter' },
    'sec.隐藏 AI 概述': { 'zh-CN': '隐藏 AI 概述', 'en': 'Hide AI Overview' },
    'sec.Google 美化': { 'zh-CN': 'Google 美化', 'en': 'Google beautify' },
    'sec.360 广告过滤': { 'zh-CN': '360 广告过滤', 'en': '360 ad blocking' },
    'sec.360 关键词过滤': { 'zh-CN': '360 关键词过滤', 'en': '360 keyword filter' },
    'sec.360 卡片美化': { 'zh-CN': '360 卡片美化', 'en': '360 card beautify' },
    'sec.Yandex 广告过滤': { 'zh-CN': 'Yandex 广告过滤', 'en': 'Yandex ad blocking' },
    'sec.Yandex 卡片美化': { 'zh-CN': 'Yandex 卡片美化', 'en': 'Yandex card beautify' },
    'sec.Bing 广告过滤': { 'zh-CN': 'Bing 广告过滤', 'en': 'Bing ad blocking' },
    'sec.隐藏 Bing Copilot': { 'zh-CN': '隐藏 Bing Copilot', 'en': 'Hide Bing Copilot' },
    'sec.Bing 关键词过滤': { 'zh-CN': 'Bing 关键词过滤', 'en': 'Bing keyword filter' },
    'sec.Bing 美化': { 'zh-CN': 'Bing 美化', 'en': 'Bing beautify' },
    'sec.知乎广告 + 登录弹窗': { 'zh-CN': '知乎广告 + 登录弹窗', 'en': 'Zhihu ads + login popup' },
    'sec.知乎关键词过滤': { 'zh-CN': '知乎关键词过滤', 'en': 'Zhihu keyword filter' },
    'sec.B站广告过滤': { 'zh-CN': 'B站广告过滤', 'en': 'Bilibili ad blocking' },
    'sec.B站关键词过滤': { 'zh-CN': 'B站关键词过滤', 'en': 'Bilibili keyword filter' },
    'sec.绕过登录限制': { 'zh-CN': '绕过登录限制', 'en': 'Bypass login' },
    'sec.画质解锁': { 'zh-CN': '画质解锁', 'en': 'Quality unlock' },
    'sec.豆瓣广告 + 登录墙': { 'zh-CN': '豆瓣广告 + 登录墙', 'en': 'Douban ads + login wall' },
    'sec.豆瓣关键词过滤': { 'zh-CN': '豆瓣关键词过滤', 'en': 'Douban keyword filter' },
    'sec.微博广告过滤': { 'zh-CN': '微博广告过滤', 'en': 'Weibo ad blocking' },
    'sec.微博关键词过滤': { 'zh-CN': '微博关键词过滤', 'en': 'Weibo keyword filter' },
    'sec.微博视频下载': { 'zh-CN': '微博视频下载', 'en': 'Weibo video download' },
    'sec.YouTube 视频旋转/翻转': { 'zh-CN': 'YouTube 视频旋转/翻转', 'en': 'YouTube rotate / flip' },
    'sec.YouTube 广告过滤': { 'zh-CN': 'YouTube 广告过滤', 'en': 'YouTube ad blocking' },
    'sec.YouTube 关键词过滤': { 'zh-CN': 'YouTube 关键词过滤', 'en': 'YouTube keyword filter' },
    'sec.YouTube 视频下载': { 'zh-CN': 'YouTube 视频下载', 'en': 'YouTube video download' },
    'sec.Twitter 广告过滤': { 'zh-CN': 'Twitter 广告过滤', 'en': 'Twitter ad blocking' },
    'sec.Twitter 视频下载': { 'zh-CN': 'Twitter 视频下载', 'en': 'Twitter video download' },
    'sec.CSDN 广告过滤': { 'zh-CN': 'CSDN 广告过滤', 'en': 'CSDN ad blocking' },
    'sec.CSDN 外链直达': { 'zh-CN': 'CSDN 外链直达', 'en': 'CSDN direct link' },
    'sec.CSDN 自动展开': { 'zh-CN': 'CSDN 自动展开', 'en': 'CSDN auto-expand' },
    'sec.CSDN 纯净阅读': { 'zh-CN': 'CSDN 纯净阅读', 'en': 'CSDN clean reading' },
    'sec.小红书广告清理': { 'zh-CN': '小红书广告清理', 'en': 'Xiaohongshu cleanup' },
    'sec.掘金广告清理': { 'zh-CN': '掘金广告清理', 'en': 'Juejin cleanup' },
    'sec.思否广告清理': { 'zh-CN': '思否广告清理', 'en': 'SegmentFault cleanup' },
    'sec.微信公号广告过滤': { 'zh-CN': '微信公号广告过滤', 'en': 'WeChat MP ad blocking' },
    'sec.微信公号关键词过滤': { 'zh-CN': '微信公号关键词过滤', 'en': 'WeChat MP keyword filter' },
    'sec.吾爱破解自动签到': { 'zh-CN': '吾爱破解自动签到', 'en': '52pojie auto check-in' },
    'sec.暗黑模式': { 'zh-CN': '暗黑模式', 'en': 'Dark mode' },
    'sec.干净复制': { 'zh-CN': '干净复制', 'en': 'Clean copy' },
    'sec.被动去广告': { 'zh-CN': '被动去广告', 'en': 'Passive ad blocking' },
    'sec.禁用第三方 iframe': { 'zh-CN': '禁用第三方 iframe', 'en': 'Block 3rd-party iframes' },
    'sec.护眼色': { 'zh-CN': '护眼色', 'en': 'Eye-care color' },
    'sec.网址过滤列表': { 'zh-CN': '网址过滤列表', 'en': 'URL filter list' },
    'sec.关键词过滤列表': { 'zh-CN': '关键词过滤列表', 'en': 'Keyword filter list' },
    'sec.打开控制面板快捷键': { 'zh-CN': '打开控制面板快捷键', 'en': 'Open control panel' },
    'sec.暂停/恢复快捷键': { 'zh-CN': '暂停/恢复快捷键', 'en': 'Pause / resume' },
    'sec.YouTube 旋转快捷键': { 'zh-CN': 'YouTube 旋转快捷键', 'en': 'YouTube rotate shortcut' },
    'sec.好看视频暂停广告屏蔽': { 'zh-CN': '好看视频暂停广告屏蔽', 'en': 'Haokan pause ads' },
    'sec.仅白名单域名启用': { 'zh-CN': '仅白名单域名启用', 'en': 'Whitelist only' },
    'sec.被动扫描全局化': { 'zh-CN': '被动扫描全局化', 'en': 'Passive scan global' },
    'sec.启用域名（内部白名单）': { 'zh-CN': '启用域名（内部白名单）', 'en': 'Enabled domains (internal whitelist)' },
    'sec.启用验证码识别': { 'zh-CN': '启用验证码识别', 'en': 'Enable captcha solver' },
    'sec.验证码触发方式': { 'zh-CN': '验证码触发方式', 'en': 'Trigger mode' },
    'sec.识别引擎': { 'zh-CN': '识别引擎', 'en': 'Engine' },
    'sec.极速接口地址': { 'zh-CN': '极速接口地址', 'en': 'Fast API URL' },
    'sec.精准接口地址': { 'zh-CN': '精准接口地址', 'en': 'Precise API URL' },
    'sec.自动查找验证码': { 'zh-CN': '自动查找验证码', 'en': 'Auto-find captcha' },
    'sec.显示提示条': { 'zh-CN': '显示提示条', 'en': 'Show hint banner' },
    'sec.滑动验证码': { 'zh-CN': '滑动验证码', 'en': 'Slide captcha' },
    'sec.精准引擎识别码': { 'zh-CN': '精准引擎识别码', 'en': 'Precise engine ID' },
    'sec.云码 Token': { 'zh-CN': '云码 Token', 'en': 'Yunma token' },
    'sec.验证码自动启用站点': { 'zh-CN': '验证码自动启用站点', 'en': 'Auto-solver sites' },
    'sec.验证码识别黑名单': { 'zh-CN': '验证码识别黑名单', 'en': 'Captcha solver blacklist' },
    'sec.脚本启用站点黑名单': { 'zh-CN': '脚本启用站点黑名单', 'en': 'Script site blacklist' },
    'sec.黑名单站点': { 'zh-CN': '黑名单站点', 'en': 'Blacklist sites' },
    'sec.白名单域名': { 'zh-CN': '白名单域名', 'en': 'Whitelist domains' },
    'sec.广告拦截统计': { 'zh-CN': '广告拦截统计', 'en': 'Ad-block stats' },
    'sec.划词搜索总开关': { 'zh-CN': '划词搜索总开关', 'en': 'Master switch' },
    'sec.显示翻译按钮': { 'zh-CN': '显示翻译按钮', 'en': 'Show translate button' },
    'sec.自动翻译': { 'zh-CN': '自动翻译', 'en': 'Auto translate' },
    'sec.打开链接按钮常驻': { 'zh-CN': '打开链接按钮常驻', 'en': 'Always show open link' },
    'sec.工具栏主题': { 'zh-CN': '工具栏主题', 'en': 'Toolbar theme' },
    'sec.工具栏透明度': { 'zh-CN': '工具栏透明度', 'en': 'Toolbar opacity' },
    'sec.毛玻璃效果': { 'zh-CN': '毛玻璃效果', 'en': 'Frosted glass' },
    'sec.翻译引擎': { 'zh-CN': '翻译引擎', 'en': 'Translate engine' },
    'sec.自动翻译（翻译设置）': { 'zh-CN': '自动翻译（翻译设置）', 'en': 'Auto translate (translate settings)' },
    'sec.目标语言': { 'zh-CN': '目标语言', 'en': 'Target language' },
    'sec.自动目标语言': { 'zh-CN': '自动目标语言', 'en': 'Auto target language' },
    'sec.CORS 代理前缀（兜底）': { 'zh-CN': 'CORS 代理前缀（兜底）', 'en': 'CORS proxy prefix (fallback)' },
    'sec.① 通用防护（全站生效）': { 'zh-CN': '① 通用防护（全站生效）', 'en': '① Universal protection (all sites)' },
    'sec.② 搜索引擎 · 广告过滤': { 'zh-CN': '② 搜索引擎 · 广告过滤', 'en': '② Search engines · ad blocking' },
    'sec.③ 搜索引擎 · 美化与增强': { 'zh-CN': '③ 搜索引擎 · 美化与增强', 'en': '③ Search engines · beautify & enhance' },
    'sec.④ 视频平台 · 广告过滤': { 'zh-CN': '④ 视频平台 · 广告过滤', 'en': '④ Video platforms · ad blocking' },
    'sec.⑤ 视频平台 · 增强与下载': { 'zh-CN': '⑤ 视频平台 · 增强与下载', 'en': '⑤ Video platforms · enhance & download' },
    'sec.⑥ 社区内容 · 广告与登录墙': { 'zh-CN': '⑥ 社区内容 · 广告与登录墙', 'en': '⑥ Community · ads & login walls' },
    'sec.⑦ 社区内容 · 增强': { 'zh-CN': '⑦ 社区内容 · 增强', 'en': '⑦ Community · enhance' },
    'sec.⑧ 关键词过滤（各站统一）': { 'zh-CN': '⑧ 关键词过滤（各站统一）', 'en': '⑧ Keyword filter (cross-site)' },
    'sec.① 基础开关': { 'zh-CN': '① 基础开关', 'en': '① Basic switches' },
    'sec.② 识别引擎与凭证': { 'zh-CN': '② 识别引擎与凭证', 'en': '② Engine & credentials' },
    'sec.③ 智能与防护': { 'zh-CN': '③ 智能与防护', 'en': '③ Smart & protection' },
    'sec.总开关': { 'zh-CN': '总开关', 'en': 'Master switch' },
    'sec.性能模式': { 'zh-CN': '性能模式', 'en': 'Performance' },
    'sec.全局增强': { 'zh-CN': '全局增强', 'en': 'Global enhancements' },
    'sec.统计与显示': { 'zh-CN': '统计与显示', 'en': 'Stats & display' },
    'sec.全局快捷键': { 'zh-CN': '全局快捷键', 'en': 'Global shortcuts' },
    'sec.YouTube 视频旋转': { 'zh-CN': 'YouTube 视频旋转', 'en': 'YouTube rotate' },
    'sec.从云端下载': { 'zh-CN': '从云端下载', 'en': 'Download from cloud' },
    'sec.无法添加': { 'zh-CN': '无法添加', 'en': 'Cannot add' },
    'sec.删除搜索引擎': { 'zh-CN': '删除搜索引擎', 'en': 'Delete search engine' },
    'sec.恢复默认引擎': { 'zh-CN': '恢复默认引擎', 'en': 'Restore default engines' },
    'sec.删除条目': { 'zh-CN': '删除条目', 'en': 'Delete entry' },
    'sec.导入预设站点': { 'zh-CN': '导入预设站点', 'en': 'Import preset sites' },
    'sec.清空黑名单': { 'zh-CN': '清空黑名单', 'en': 'Clear blacklist' },
    'sec.过短条目确认': { 'zh-CN': '过短条目确认', 'en': 'Too-short entry confirm' },
    'sec.致命条目确认': { 'zh-CN': '致命条目确认', 'en': 'Critical entry confirm' },
    'sec.导入配置': { 'zh-CN': '导入配置', 'en': 'Import config' },
    'sec.恢复默认设置': { 'zh-CN': '恢复默认设置', 'en': 'Restore defaults' },
    'sec.验证码类型': { 'zh-CN': '验证码类型', 'en': 'Captcha type' },
    'sec.验证码子类': { 'zh-CN': '验证码子类', 'en': 'Captcha subtype' },
    'sec.导入云备份': { 'zh-CN': '导入云备份', 'en': 'Import cloud backup' },
    'sec.导入成功': { 'zh-CN': '导入成功', 'en': 'Import success' },
    'sec.下载失败': { 'zh-CN': '下载失败', 'en': 'Download failed' },
    'sec.删除云备份': { 'zh-CN': '删除云备份', 'en': 'Delete cloud backup' },
    'sec.打开失败': { 'zh-CN': '打开失败', 'en': 'Open failed' },

  };
  // 简→繁字形映射（两串等长，逐位对应）。只收无歧义常用字，未收字保持原样 —— 宁可不转也不错字。
  const S2T_FROM = '爱奥摆败办帮报备贝笔边变标别宾拨补财参产长场车称处传创从达带单当导灯点电调东动独断对儿发范飞费风复盖个给构购关观广规国过还汉号红后护华话坏环换会获机极几记际继间检简见将讲结节紧进经净静举开课块宽况来蓝乐类离历丽联连练两临领龙楼论罗马买卖满么门们难内鸟宁农盘齐钱强桥亲轻请区却确让热认荣杀闪伤设摄谁审声师时识实适书输术树数双说诉随台谈汤题体条铁听统头图团万网为围卫闻问无务误习细显现线选学询压样药页业医仪义艺议异银应优邮语预园远愿阅云运杂赞则战张涨这针诊阵证织执职质钟种众专转装状准资总组态该击计读译试详评词访许讯讨训级终绝绩续绪维绿缓编缩隐启暂删辑览载验码测络链签户属扩扫';
  const S2T_TO   = '愛奧擺敗辦幫報備貝筆邊變標別賓撥補財參產長場車稱處傳創從達帶單當導燈點電調東動獨斷對兒發範飛費風復蓋個給構購關觀廣規國過還漢號紅後護華話壞環換會獲機極幾記際繼間檢簡見將講結節緊進經淨靜舉開課塊寬況來藍樂類離歷麗聯連練兩臨領龍樓論羅馬買賣滿麼門們難內鳥寧農盤齊錢強橋親輕請區卻確讓熱認榮殺閃傷設攝誰審聲師時識實適書輸術樹數雙說訴隨臺談湯題體條鐵聽統頭圖團萬網為圍衛聞問無務誤習細顯現線選學詢壓樣藥頁業醫儀義藝議異銀應優郵語預園遠願閱雲運雜贊則戰張漲這針診陣證織執職質鐘種眾專轉裝狀準資總組態該擊計讀譯試詳評詞訪許訊討訓級終絕績續緒維綠緩編縮隱啟暫刪輯覽載驗碼測絡鏈簽戶屬擴掃';
  // 词级特例（简繁用词不同，非单纯字形）：先于字映射处理
  const S2T_WORDS = [['软件', '軟體'], ['硬件', '硬體'], ['鼠标', '滑鼠'], ['内存', '記憶體'], ['视频', '視頻']];
  function s2t(s) {
    if (!s) return s;
    let out = String(s);
    for (let i = 0; i < S2T_WORDS.length; i++) out = out.split(S2T_WORDS[i][0]).join(S2T_WORDS[i][1]);
    let r = '';
    for (let i = 0; i < out.length; i++) {
      const p = S2T_FROM.indexOf(out[i]);
      r += p >= 0 ? S2T_TO[p] : out[i];
    }
    return r;
  }
  // 当前界面语言（非法值一律回退 zh-CN）
  function uiLang() {
    try {
      const v = getScriptCfg().uiLang;
      return v === 'zh-TW' || v === 'en' ? v : 'zh-CN';
    } catch (e) { return 'zh-CN'; }
  }
  // 取文案：优先当前语言 → 简中；zh-TW 缺失键时由简中自动 s2t 转繁；en 缺失键时回退简中（不可自动转换）；{var} 插值
  //   设计要点：字典条目通常只写 zh-CN（避免「改一句文案要改三处」的必然漏改）。
  //   - zh-TW：条目没显式 'zh-TW' 键 → 把 zh-CN 通过 s2t 转繁（运行时字形映射）
  //   - en：条目没显式 'en' 键 → 回退 zh-CN（不转换 —— 英文不是字形问题，必须字典显式给值）
  //   这样新增 UI 文案只写 zh-CN 一份，繁体自动跟随；en 需逐条补 en 值（不可自动化）
  function t(key, vars) {
    const e = I18N[key];
    if (!e) { dbg('[NetClean] i18n 未收录的 key：' + key); return key; }
    const cur = uiLang();
    let s = e[cur] != null ? e[cur] : e['zh-CN'];
    if (s == null) s = '';
    // 繁体模式且回退到简中（无显式 zh-TW 值）→ 自动 s2t 转繁
    if (cur === 'zh-TW' && e['zh-TW'] == null) s = s2t(s);
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return s;
  }
  // 【i18n 修复】带 fallback 的翻译取值：字典未收录该 key 时，返回 fallback（原值）而非 key 字符串。
  //   这是给「面板 data 里的裸简中字符串（item.t / item.d / ls.title / placeholder / cat.label / sec.title）」
  //   做英文兜底用的 —— item.t 等是数据对象里的简中，不是 I18N 字典 key；
  //   用 t(key) 直接查会因「未收录返回 key 自身」而把整个 label 显示成 'item.t.xxx' 之类的 key 字符串
  //   （致命 bug：fallback `||` 永远走不到，因为 key 字符串 truthy）。
  //   所以统一用 tp(key, fallback)：收录则取翻译值（为空也兜底），未收录直接返回 fallback。
  function tp(key, fb) {
    const e = I18N[key];
    if (!e) return fb;
    const s = t(key);
    return (s == null || s === '') ? fb : s;
  }
  // 繁体模式：把一棵子树里的可见文本整体转繁（覆盖未进字典的文案，如菜单项标题/说明）
  function tTree(root) {
    if (uiLang() !== 'zh-TW' || !root) return;
    const SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, SVG: 1, INPUT: 1, TEXTAREA: 1 };
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = []; let n;
    while ((n = w.nextNode())) nodes.push(n);
    for (const node of nodes) {
      const p = node.parentElement;
      if (!p || SKIP[p.tagName]) continue;
      const v = node.nodeValue;
      if (!v || !v.trim()) continue;
      const c = s2t(v);
      if (c !== v) node.nodeValue = c;
    }
    // 属性里也会显示文字：placeholder / title / aria-label
    root.querySelectorAll('[placeholder],[title],[aria-label]').forEach(el => {
      ['placeholder', 'title', 'aria-label'].forEach(a => {
        const v = el.getAttribute(a);
        if (v && v.trim()) { const c = s2t(v); if (c !== v) el.setAttribute(a, c); }
      });
    });
  }

  /* ================================================================
   *  0.1a WebDAV 云端同步（坚果云 / Nextcloud / OwnCloud 等）
   *  - 使用 GM_xmlhttpRequest 绕过 CORS，支持 http basic auth
   *  - 配置可选 XOR 加密后上传，密钥即用户填写的 WebDAV 密码
   *  ================================================================ */
  function xorCrypt(text, key) {
    if (!key) return text;
    // 先把文本与密钥都转成 UTF-8 字节串（每个 charCode 落在 0-255），XOR 结果才能安全 btoa（否则中文密码会抛 InvalidCharacterError）
    const src = unescape(encodeURIComponent(String(text)));
    const k = unescape(encodeURIComponent(String(key)));
    let out = '';
    for (let i = 0; i < src.length; i++) {
      out += String.fromCharCode(src.charCodeAt(i) ^ k.charCodeAt(i % k.length));
    }
    return 'enc:' + btoa(out);
  }
  function xorDecrypt(cipher, key) {
    if (!cipher || !key) return cipher;
    if (!String(cipher).startsWith('enc:')) return cipher;
    const payload = String(cipher).slice(4);
    const k = unescape(encodeURIComponent(String(key)));
    const text = atob(payload);
    let out = '';
    for (let i = 0; i < text.length; i++) {
      out += String.fromCharCode(text.charCodeAt(i) ^ k.charCodeAt(i % k.length));
    }
    try { return decodeURIComponent(escape(out)); } catch(e) { return out; }
  }
  function webdavAuthHeader(user, pass) {
    try { return 'Basic ' + btoa(unescape(encodeURIComponent(user + ':' + pass))); } catch(e) { return 'Basic ' + btoa(user + ':' + pass); }
  }
  // 规范服务器地址：补 https、去多余斜杠；path 做分段 URL 编码（保留中文文件名等）
  function webdavBaseUrl(server, path) {
    let s = (server || '').trim().replace(/[\\]+/g, '/');
    if (!s) return '';
    if (!/^https?:\/\//i.test(s)) s = 'https://' + s;
    if (s.endsWith('/')) s = s.slice(0, -1);
    let p = (path || '').trim().replace(/[\\]+/g, '/');
    if (p.startsWith('/')) p = p.slice(1);
    // 对每一段做编码，避免中文/空格/特殊字符导致 404；先尝试解码以兼容用户已填的百分号编码（避免二次编码 %2520）
    const seg = p.split('/').map(function(x){
      let d = x; try { d = decodeURIComponent(x); } catch(e) {}
      try { return encodeURIComponent(d); } catch(e) { return x; }
    });
    return s + '/' + seg.join('/');
  }
  // 把响应里 XML 错误信息精炼成可读文字
  function webdavErrText(r) {
    let t = (r && (r.responseText || r.response)) || '';
    const m = t.match(/<s:message>([\s\S]*?)<\/s:message>/i) || t.match(/<message>([\s\S]*?)<\/message>/i);
    if (m) t = m[1].trim();
    if (t.length > 160) t = t.slice(0, 160) + '…';
    return t;
  }
  function webdavRequest(opts) {
    return new Promise((resolve, reject) => {
      const cs = getConfig().cloudSync || {};
      if (!cs.server || !cs.username) { reject(new Error('请先填写 WebDAV 服务器与用户名')); return; }
      GM_xmlhttpRequest({
        method: opts.method || 'GET',
        url: webdavBaseUrl(cs.server, opts.path || cs.path),
        headers: Object.assign({
          'Authorization': webdavAuthHeader(cs.username, cs.password || ''),
          'Content-Type': opts.contentType || 'application/octet-stream'
        }, opts.headers || {}),
        data: opts.data,
        responseType: opts.responseType || 'text',
        timeout: opts.timeout || 15000,
        onload: r => resolve(r),
        onerror: r => reject(Object.assign(new Error('网络请求失败' + (r && r.status ? ' HTTP ' + r.status : '')), { resp: r })),
        ontimeout: () => reject(new Error('请求超时'))
      });
    });
  }
  // 逐级创建远程父目录（MKCOL）。path 形如 /a/b/c.json → 创建 /a/b
  // 已确认存在的目录缓存在会话内：否则每次上传都要重复发 N 次 MKCOL（N=目录层级），
  // 白增网络往返，坚果云这类服务还可能因频繁请求触发限流。
  const _ensuredDirs = new Set();
  async function webdavEnsureDirs(path) {
    const dirs = (path || '').replace(/^\//, '').split('/');
    dirs.pop(); // 去掉文件名
    let acc = '';
    for (let i = 0; i < dirs.length; i++) {
      acc += '/' + dirs[i];
      if (_ensuredDirs.has(acc)) continue;
      try {
        const r = await webdavRequest({ method: 'MKCOL', path: acc });
        // 201=已创建 405=已存在 409=父不存在（逐级建理论上不会发生）
        if (r.status === 201 || r.status === 405 || r.status === 409) _ensuredDirs.add(acc);
        // 其他状态不致命，继续尝试，最终 PUT 会暴露真实错误
      } catch(e) { /* 忽略单级失败，最终 PUT 会暴露真实错误 */ }
    }
  }
  async function cloudSyncUp(force) {
    const cfg = getConfig();
    const cs = cfg.cloudSync || {};
    if (!force && !cs.enabled) return { ok: false, msg: '自动同步未开启' };
    const p = getCloudProvider(cs.type);
    if (cs.type === 'webdav') {
      if (!cs.server || !cs.username) return { ok: false, msg: '服务器/用户名未填写' };
    } else if (cs.type === 'gist') {
      if (!cs.gistToken) return { ok: false, msg: 'GitHub Token 未填写' };
    } else {
      if (!cs.oauthToken) return { ok: false, msg: 'Access Token 未填写' };
    }
    try {
      const exportCfg = JSON.parse(JSON.stringify(cfg));
      if (exportCfg.cloudSync) exportCfg.cloudSync.password = '';
      let body = JSON.stringify(exportCfg, null, 2);
      if (cs.type === 'webdav' && cs.protect && cs.password) body = xorCrypt(body, cs.password);
      const mainName = (cs.path || '/netclean/netclean-config-v6.json').split('/').pop() || 'netclean-config-v6.json';
      const r = await p.create(cfg, body, mainName);
      if (r.ok) {
        const cfgNow = getConfig();
        if (!cfgNow.cloudSync) cfgNow.cloudSync = {};
        cfgNow.cloudSync.lastSync = Date.now();
        try { writeConfig(cfgNow, true); } catch(e) {}
      }
      return r.ok ? { ok: true, msg: '已上传到云端' } : r;
    } catch(e) {
      const t = e.resp ? webdavErrText(e.resp) : '';
      return { ok: false, msg: e.message + (t ? '：' + t : '') };
    }
  }
  async function cloudSyncDown(force) {
    const cfg = getConfig();
    const cs = cfg.cloudSync || {};
    if (!force && !cs.enabled) return { ok: false, msg: '自动同步未开启' };
    const p = getCloudProvider(cs.type);
    if (cs.type === 'webdav') {
      if (!cs.server || !cs.username) return { ok: false, msg: '服务器/用户名未填写' };
    } else if (cs.type === 'gist') {
      if (!cs.gistToken) return { ok: false, msg: 'GitHub Token 未填写' };
    } else {
      if (!cs.oauthToken) return { ok: false, msg: 'Access Token 未填写' };
    }
    try {
      // 先列出，找到主配置文件名对应项
      const mainName = (cs.path || '/netclean/netclean-config-v6.json').split('/').pop() || 'netclean-config-v6.json';
      let content = '';
      if (cs.type === 'webdav') {
        const r = await webdavRequest({ method: 'GET' });
        if (r.status === 404) return { ok: false, msg: '云端暂无配置文件（先用「上传到云端」创建）' };
        if (r.status === 401) return { ok: false, msg: 'HTTP 401：账号或密码错误（坚果云需用「应用密码」而非登录密码）' };
        if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
        content = String(r.responseText == null ? (r.response == null ? '' : r.response) : r.responseText);
      } else {
        const listRes = await p.list(cfg);
        if (!listRes.ok) return listRes;
        const item = listRes.files.find(f => f.name === mainName);
        if (!item) return { ok: false, msg: '云端未找到主配置文件 ' + mainName };
        const r = await p.importItem(cfg, item);
        if (!r.ok) return r;
        content = r.content;
      }
      if (content.slice(0, 4) === 'enc:') {
        if (!cs.password) return { ok: false, msg: '云端配置是加密格式，但本机未填写同步密码。请先在上方「密码 / 应用密码」填入与上传时相同的密码，再点「从云端下载」' };
        content = xorDecrypt(content, cs.password);
      }
      let cloudCfg;
      try { cloudCfg = JSON.parse(content); }
      catch(pe) { return { ok: false, msg: '云端配置解析失败：' + (cs.password ? '解密后不是合法 JSON，通常是同步密码与备份时不一致' : '云端内容不是合法 JSON') + '（' + pe.message + '）' }; }
      if (!cloudCfg || typeof cloudCfg !== 'object') return { ok: false, msg: '云端配置格式异常' };
      const localCfg = getConfig();
      const localSync = JSON.parse(JSON.stringify(localCfg.cloudSync || {}));
      const downed = Object.assign({}, cloudCfg, { cloudSync: Object.assign({}, localSync, cloudCfg.cloudSync || {}, { password: localSync.password }) });
      const merged = deepMerge(DEFAULT_CONFIG, downed);
      if (!cloudCfg.ui && localCfg.ui) merged.ui = JSON.parse(JSON.stringify(localCfg.ui));
      merged.cloudSync.lastSync = Date.now();
      merged.modifiedAt = cloudCfg.modifiedAt || Date.now();
      writeConfig(merged, true);
      return { ok: true, msg: '已从云端下载并合并到本地配置' };
    } catch(e) {
      const t = e.resp ? webdavErrText(e.resp) : '';
      return { ok: false, msg: e.message + (t ? '：' + t : '') };
    }
  }
  // 测试连接：依次 PROPFIND 根、尝试写入临时文件再删除，验证账号/密码/可写
  async function cloudSyncTest() {
    const cfg = getConfig();
    const cs = cfg.cloudSync || {};
    const p = getCloudProvider(cs.type);
    return p.test(cfg);
  }

  // ===== 云备份文件管理（WebDAV：列出/创建/导入/删除/下载）=====
  function webdavDirOfPath(p) {
    let s = (p || '').trim().replace(/[\\]+/g, '/').replace(/^\//, '');
    const parts = s.split('/'); parts.pop();
    return parts.length ? '/' + parts.join('/') + '/' : '/';
  }
  // 以绝对 URL 直接发请求：PROPFIND 响应里的 href 一般是带 host 的绝对 URL，
  // 但不少服务器（坚果云/Nextcloud）返回的是「绝对路径」如 /dav/netclean/xxx.json（不含 host），
  // 若直接当 url 发给 GM_xmlhttpRequest 会以当前页面域名为基准 → DELETE/GET 打到贴吧等域名 → 405。
  // 因此这里对「相对/绝对路径」自动补上 server 的 origin（scheme://host）。
  function webdavResolveUrl(url, server) {
    if (!url) return url;
    if (/^https?:\/\//i.test(url)) return url; // 已是绝对 URL
    let base = (server || '').trim().replace(/[\\]+/g, '/');
    if (!/^https?:\/\//i.test(base)) base = 'https://' + base;
    let origin;
    try { origin = new URL(base).origin; }
    catch(e) { origin = base.replace(/^(https?:\/\/[^\/]+).*$/i, '$1'); }
    if (!origin) return url;
    return origin + (url.charAt(0) === '/' ? '' : '/') + url;
  }
  function webdavRequestUrl(url, opts) {
    opts = opts || {};
    return new Promise((resolve, reject) => {
      const cs = getConfig().cloudSync || {};
      if (!cs.username) { reject(new Error('请先填写用户名')); return; }
      GM_xmlhttpRequest({
        method: opts.method || 'GET',
        url: webdavResolveUrl(url, cs.server),
        headers: Object.assign({
          'Authorization': webdavAuthHeader(cs.username, cs.password || ''),
          'Content-Type': opts.contentType || 'application/octet-stream'
        }, opts.headers || {}),
        data: opts.data,
        responseType: opts.responseType || 'text',
        timeout: opts.timeout || 15000,
        onload: r => resolve(r),
        onerror: r => reject(Object.assign(new Error('网络请求失败' + (r && r.status ? ' HTTP ' + r.status : '')), { resp: r })),
        ontimeout: () => reject(new Error('请求超时'))
      });
    });
  }
  // 解析 WebDAV PROPFIND multistatus 响应，跳过目录/集合
  // 关键：真实 WebDAV（坚果云/Nextcloud 等）返回带 DAV: 命名空间前缀的 <d:response>，
  // getElementsByTagName('response') 用 qualified name 匹配不到；必须用命名空间感知的
  // getElementsByTagNameNS('*', 'response')（匹配任意命名空间 + 无前缀），否则解析出 0 个文件。
  function _nse(elem, name) {
    try {
      const n = elem.getElementsByTagNameNS('*', name);
      if (n && n.length) return n;
    } catch (e) { /* 某些环境不支持 NS 查询，回退 */ }
    return elem.getElementsByTagName(name);
  }
  function parsePropfindResponse(xmlText) {
    const out = [];
    let doc;
    try { doc = new DOMParser().parseFromString(xmlText || '', 'application/xml'); }
    catch(e) { return out; }
    if (_nse(doc, 'parsererror').length) return out;
    const responses = _nse(doc, 'response');
    for (let i = 0; i < responses.length; i++) {
      const r = responses[i];
      // 跳过目录/集合（collection 元素可能是 d:collection 或无前缀）
      if (_nse(r, 'collection').length) continue;
      const hrefNode = _nse(r, 'href')[0];
      if (!hrefNode) continue;
      const href = (hrefNode.textContent || '').trim();
      if (!href) continue;
      const lenNode = _nse(r, 'getcontentlength')[0];
      const size = lenNode ? (parseInt(lenNode.textContent || '0', 10) || 0) : 0;
      const lmNode = _nse(r, 'getlastmodified')[0];
      const mtime = lmNode ? new Date(lmNode.textContent || 0) : null;
      out.push({ href, size, mtime: mtime && !isNaN(mtime.getTime()) ? mtime.getTime() : 0 });
    }
    return out;
  }
  function openCloudBackupManager() {
    const cfg = getConfig();
    const cs = cfg.cloudSync || {};
    const provider = getCloudProvider(cs.type);
    const old = document.getElementById('zk-bk-mgr'); if (old) old.remove();
    if (!document.getElementById('zk-bk-mgr-style')) {
      const st = document.createElement('style');
      st.id = 'zk-bk-mgr-style';
      st.textContent = BK_MGR_CSS;
      document.head.appendChild(st);
    }
    const wrap = document.createElement('div');
    wrap.id = 'zk-bk-mgr';
    // 关键：定位/遮罩/居中样式直接内联，不依赖注入的 <style>，
    // 防止页面 CSP / 脚本清除 style 后 modal 变成普通 div 掉进文档流不可见。
    wrap.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483647;background:rgba(15,23,42,.55);display:flex;align-items:center;justify-content:center;';
    const provName = (provider.label || '云备份').split('（')[0];
    const box = document.createElement('div');
    box.className = 'zk-bk-mgr-box';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', '管理云备份');
    box.style.cssText = 'background:#fff;border-radius:14px;width:680px;max-width:94vw;max-height:86vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.3);overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif;color:#1f2937;';
    box.innerHTML = '<div class="zk-bk-mgr-head"><h3>📋 管理 ' + escHtml(provName) + ' 备份</h3><button class="zk-bk-mgr-close" title="关闭">×</button></div>'
      + '<div class="zk-bk-mgr-body"><div class="zk-bk-mgr-status">正在加载云端文件列表…</div></div>'
      + '<div class="zk-bk-mgr-foot">备份文件命名规则为 netclean-backup-YYYYMMDD-HHMMSS.json；「导入」会覆盖当前本地配置。</div>';
    wrap.appendChild(box);
    document.body.appendChild(wrap);
    console.log('[openCloudBackupManager] mounted #zk-bk-mgr:', !!document.getElementById('zk-bk-mgr'), '| parent:', wrap.parentElement && wrap.parentElement.tagName);
    wrap.querySelector('.zk-bk-mgr-close').onclick = () => wrap.remove();
    wrap.addEventListener('click', (e) => { if (e.target === wrap) wrap.remove(); });
    const body = wrap.querySelector('.zk-bk-mgr-body');
    function setStatus(msg, type) {
      body.innerHTML = '<div class="zk-bk-mgr-status" style="color:' + (type === 'err' ? '#ef4444' : '#64748b') + '">' + escHtml(msg) + '</div>';
    }
    function escHtml(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
    function fmtSize(n) {
      if (!n) return '0 B';
      if (n < 1024) return n + ' B';
      if (n < 1024*1024) return (n/1024).toFixed(1) + ' KB';
      return (n/1024/1024).toFixed(2) + ' MB';
    }
    function fmtTime(ts) {
      if (!ts) return '—';
      try { return new Date(ts).toLocaleString('zh-CN', { hour12: false }); } catch(e) { return '—'; }
    }
    async function reload() {
      setStatus('正在加载云端文件列表…');
      let res;
      try {
        res = await cloudBackupList();
      } catch (e) {
        console.error('[openCloudBackupManager] list error:', e && e.stack || e);
        setStatus('加载失败：' + (e && e.message || e), 'err');
        return;
      }
      if (!res.ok) { setStatus(res.msg, 'err'); return; }
      if (!res.files.length) { setStatus('该目录下暂无文件。可点下方「➕ 立即备份当前配置」创建第一个云备份。', ''); return; }
      renderList(res.files, res.mainName);
    }
    function renderList(files, mainName) {
      body.innerHTML = '<div class="zk-bk-mgr-list">'
        + files.map(f => {
          const name = f.name || decodeURIComponent((String(f.raw && f.raw.href || f.id || '').split('/').pop() || f.id || ''));
          const isMain = mainName && name === mainName;
          return '<div class="zk-bk-mgr-item" data-id="' + escHtml(f.id) + '">'
            + '<div class="zk-bk-mgr-name">' + escHtml(name) + (isMain ? '<span class="zk-bk-mgr-tag">当前自动同步</span>' : '') + '<div class="zk-bk-mgr-meta">' + fmtSize(f.size) + ' · ' + fmtTime(f.mtime) + '</div></div>'
            + '<div class="zk-bk-mgr-ops">'
            +   '<button class="zk-bk-mgr-btn zk-bk-import">导入</button>'
            +   '<button class="zk-bk-mgr-btn zk-bk-dl">下载</button>'
            +   '<button class="zk-bk-mgr-btn danger zk-bk-del">删除</button>'
            + '</div></div>';
        }).join('')
        + '<div class="zk-bk-mgr-foot-row" style="display:flex;gap:8px;justify-content:center;padding:10px;border:1px dashed #cbd5e1;border-radius:10px;background:transparent">'
        +   '<button class="zk-bk-mgr-btn zk-bk-mgr-refresh">🔄 刷新列表</button>'
        +   '<button class="zk-bk-mgr-btn zk-bk-create">➕ 立即备份当前配置</button>'
        + '</div></div>';
      // 为每个 item 绑定数据对象（避免靠 data-id 反查）
      body.querySelectorAll('.zk-bk-mgr-item').forEach((itemEl, idx) => {
        const item = files[idx];
        const name = item.name;
        itemEl.querySelector('.zk-bk-import').onclick = async () => {
          if (!(await zkConfirm('从云备份「' + name + '」导入将覆盖当前本地配置，确定继续？', { title: '导入云备份', okText: '确定导入', danger: false }))) return;
          const btn = itemEl.querySelector('.zk-bk-import'); btn.textContent = '导入中…';
          const r = await cloudBackupImport(item);
          if (r.ok) { btn.textContent = '导入'; await zkAlert(r.msg, { title: '导入成功' }); } else { btn.textContent = '导入'; await zkAlert(r.msg, { title: '导入失败', danger: true }); }
          if (r.ok) reload();
        };
        itemEl.querySelector('.zk-bk-dl').onclick = async () => {
          const btn = itemEl.querySelector('.zk-bk-dl'); btn.textContent = '下载中…';
          const r = await cloudBackupDownload(item, name);
          btn.textContent = '下载';
          if (!r.ok) await zkAlert(r.msg, { title: '下载失败', danger: true });
        };
        itemEl.querySelector('.zk-bk-del').onclick = async () => {
          if (!(await zkConfirm('确定从云端删除「' + name + '」？此操作不可撤销。', { title: '删除云备份', okText: '确定删除', danger: true }))) return;
          const btn = itemEl.querySelector('.zk-bk-del'); btn.textContent = '删除中…';
          const r = await cloudBackupDelete(item);
          await zkAlert(r.msg, { title: r.ok ? '删除成功' : '删除失败', danger: !r.ok });
          reload();
        };
      });
      body.querySelector('.zk-bk-mgr-refresh').onclick = reload;
      body.querySelector('.zk-bk-create').onclick = async () => {
        const btn = body.querySelector('.zk-bk-create'); btn.textContent = '备份中…';
        const r = await cloudBackupCreate();
        btn.textContent = '➕ 立即备份当前配置';
        await zkAlert(r.msg, { title: r.ok ? '备份成功' : '备份失败', danger: !r.ok });
        if (r.ok) reload();
      };
    }
    reload().catch(e => { console.error('[openCloudBackupManager] reload rejected:', e && e.stack || e); setStatus('加载失败：' + (e && e.message || e), 'err'); });
  }
  // 公开入口：把 openCloudBackupManager 暴露为带同步反馈 + 错误显式化的封装
  // - 立即同步 toast，避免用户看不到反馈
  // - catch 后 alert 弹窗 + console.error，避免错误被静默吞掉
  // - 1.5s 后仍未挂载 modal 视为失败，给出明确诊断
  function openCloudBackupManagerUi() {
    // 立即反馈（同步、不依赖 await）
    try { zkToast(t('toast.opening'), { dur: 1500 }); } catch (e) { /* toast 不存在也不影响 */ }
    let done = false;
    setTimeout(() => {
      if (!done && !document.getElementById('zk-bk-mgr')) {
        zkAlert('云备份管理弹窗未能挂载。\n\n可能原因：\n1) 当前页面 body 被框架拦截，无法插入弹层\n2) 浏览器/扩展拦截了 document.body.appendChild\n3) 脚本被 CSP 限制\n\n请打开浏览器开发者工具 → Console 查看详细错误。', { title: '打开失败' });
        console.error('[openCloudBackupManager] timeout: modal not mounted after 1.5s');
      }
    }, 1500);
    (async () => {
      try {
        await openCloudBackupManager();
        done = true;
      } catch (e) {
        done = true;
        console.error('[openCloudBackupManager] error:', e && e.stack || e);
        zkAlert('打开云备份管理失败：' + (e && e.message || e) + '\n\n请检查浏览器 Console 获取详细信息。', { title: '打开失败' });
        try { zkToast(t('toast.openFailed') + (e && e.message || e), { type: 'err', dur: 4000 }); } catch (e2) {}
      }
    })();
  }
  // 云备份管理弹窗样式（注入到 document.head 一次）
  const BK_MGR_CSS = ''
    + '.zk-bk-mgr{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:2147483647;display:flex;align-items:center;justify-content:center;animation:zkBkFade .2s ease}'
    + '@keyframes zkBkFade{from{opacity:0}to{opacity:1}}'
    + '.zk-bk-mgr-box{background:#fff;border-radius:14px;width:680px;max-width:94vw;max-height:86vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.3);overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif;color:#1f2937}'
    + '.zk-bk-mgr-head{padding:16px 20px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;gap:10px}'
    + '.zk-bk-mgr-head h3{margin:0;font-size:16px;flex:1}'
    + '.zk-bk-mgr-close{width:30px;height:30px;border:none;background:#f1f5f9;border-radius:50%;cursor:pointer;font-size:18px;color:#64748b;line-height:30px}'
    + '.zk-bk-mgr-close:hover{background:#e2e8f0}'
    + '.zk-bk-mgr-body{flex:1;overflow-y:auto;padding:12px 20px}'
    + '.zk-bk-mgr-list{display:flex;flex-direction:column;gap:8px}'
    + '.zk-bk-mgr-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;font-size:13px}'
    + '.zk-bk-mgr-item:hover{border-color:#1677ff;background:#fff}'
    + '.zk-bk-mgr-name{flex:1;min-width:0;font-weight:600;color:#0f172a;word-break:break-all}'
    + '.zk-bk-mgr-meta{font-size:11px;color:#94a3b8;margin-top:2px;font-weight:400}'
    + '.zk-bk-mgr-tag{display:inline-block;font-size:10px;padding:1px 6px;border-radius:8px;background:rgba(22,119,255,.12);color:#1677ff;margin-left:6px;vertical-align:middle;font-weight:500}'
    + '.zk-bk-mgr-ops{display:flex;gap:6px;flex-shrink:0}'
    + '.zk-bk-mgr-btn{border:1px solid #cbd5e1;background:#fff;color:#475569;padding:5px 10px;border-radius:7px;cursor:pointer;font-size:12px}'
    + '.zk-bk-mgr-btn:hover{border-color:#1677ff;color:#1677ff}'
    + '.zk-bk-mgr-btn.danger:hover{background:#ef4444;border-color:#ef4444;color:#fff}'
    + '.zk-bk-mgr-status{padding:20px;text-align:center;color:#64748b;font-size:13px}'
    + '.zk-bk-mgr-foot{padding:10px 20px;border-top:1px solid #e2e8f0;background:#f8fafc;font-size:11px;color:#94a3b8;line-height:1.6}';

  // ================================================================
  //  云备份 Provider 架构（v1.0.0）
  //  目标：像油猴一样让用户可选多种云端备份途径。
  //  现实约束：纯 userscript 无法像浏览器扩展那样托管 OAuth client_id，
  //  因此 WebDAV/Gist 可完全自助；Dropbox/OneDrive/GoogleDrive/Yandex 需
  //  用户自行获取 Access Token 后粘贴使用。
  // ================================================================
  const CLOUD_PROVIDERS = {
    webdav: {
      label: 'WebDAV（坚果云 / Nextcloud / OwnCloud）',
      fields: [
        { key: 'server', label: '服务器地址', type: 'text', placeholder: 'https://dav.jianguoyun.com/dav/', help: '坚果云固定填 https://dav.jianguoyun.com/dav/' },
        { key: 'username', label: '用户名', type: 'text', placeholder: '坚果云邮箱 / 用户名', help: '' },
        { key: 'password', label: '密码 / 应用密码', type: 'password', placeholder: '坚果云「应用密码」', help: '不是网页登录密码，需在坚果云安全设置里生成' },
        { key: 'path', label: '远程路径', type: 'text', placeholder: '/netclean/netclean-config-v6.json', help: '主配置文件路径；备份文件会放在其所在目录' },
        { key: 'protect', label: '密码保护（XOR 加密）', type: 'switch', help: '用上方密码对上传内容做简单 XOR 加密' }
      ],
      async test(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.server || !cs.username) return { ok: false, msg: '请填写服务器地址与用户名' };
        try {
          await webdavEnsureDirs(cs.path);
          const r = await webdavRequest({ method: 'PROPFIND', path: webdavDirOfPath(cs.path), headers: { Depth: '0' }, timeout: 15000 });
          if (r.status === 401 || r.status === 403) return { ok: false, msg: '账号或密码错误（坚果云请用「应用密码」）' };
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '连接失败 HTTP ' + r.status };
          return { ok: true, msg: 'WebDAV 连接正常' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async list(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.server || !cs.username) return { ok: false, msg: '请填写服务器地址与用户名' };
        try {
          await webdavEnsureDirs(cs.path);
          const dir = webdavDirOfPath(cs.path);
          const r = await webdavRequest({ method: 'PROPFIND', path: dir, headers: { Depth: '1' }, timeout: 15000 });
          if (r.status === 401 || r.status === 403) return { ok: false, msg: '账号或密码错误' };
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '列出文件失败 HTTP ' + r.status };
          const files = parsePropfindResponse(r.responseText || r.response || '').map(f => ({ id: f.href, name: decodeURIComponent(f.href.split('/').pop() || f.href), size: f.size, mtime: f.mtime, raw: f }));
          const mainName = (cs.path || '').split('/').pop();
          return { ok: true, files, dir, mainName };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async create(cfg, body, filename) {
        const cs = cfg.cloudSync || {};
        if (!cs.server || !cs.username) return { ok: false, msg: '请填写服务器地址与用户名' };
        try {
          const dir = webdavDirOfPath(cs.path);
          const fullPath = (dir === '/' ? '/' : dir) + filename;
          await webdavEnsureDirs(fullPath);
          const r = await webdavRequest({ method: 'PUT', path: fullPath, data: body, contentType: 'text/plain; charset=utf-8' });
          if (r.status >= 200 && r.status < 300) return { ok: true, msg: '已备份到云端：' + filename, id: fullPath };
          return { ok: false, msg: '备份失败 HTTP ' + r.status };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async importItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await webdavRequestUrl(item.raw.href, { method: 'GET' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
          return { ok: true, content: String(r.responseText == null ? (r.response == null ? '' : r.response) : r.responseText) };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async deleteItem(cfg, item) {
        try {
          const r = await webdavRequestUrl(item.raw.href, { method: 'DELETE' });
          if (r.status === 204 || r.status === 200 || (r.status >= 200 && r.status < 300)) return { ok: true, msg: '已删除' };
          return { ok: false, msg: '删除失败 HTTP ' + r.status };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async downloadItem(cfg, item, filename) {
        try {
          const r = await webdavRequestUrl(item.raw.href, { method: 'GET', responseType: 'arraybuffer' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
          const blob = new Blob([r.response], { type: 'application/octet-stream' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a'); a.href = url; a.download = filename || 'netclean-backup.json';
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(() => URL.revokeObjectURL(url), 1500);
          return { ok: true, msg: '已下载到磁盘' };
        } catch(e) { return { ok: false, msg: e.message }; }
      }
    },
    gist: {
      label: 'GitHub Gist（Personal Access Token）',
      fields: [
        { key: 'gistToken', label: 'GitHub Token', type: 'password', placeholder: 'ghp_xxxxxxxxxxxxxxxxxxxx', help: '在 GitHub Settings → Developer settings → Personal access tokens 生成，只需 gists 权限' },
        { key: 'gistDescription', label: 'Gist 描述', type: 'text', placeholder: 'NetClean config backup', help: '新建 Gist 时使用的描述，方便在 GitHub 上识别' }
      ],
      async _request(token, opts) {
        return new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            method: opts.method || 'GET',
            url: opts.url,
            headers: Object.assign({ 'Authorization': 'token ' + token, 'Accept': 'application/vnd.github+json', 'Content-Type': 'application/json' }, opts.headers || {}),
            data: opts.data,
            responseType: opts.responseType || 'text',
            timeout: opts.timeout || 15000,
            onload: r => resolve(r),
            onerror: r => reject(Object.assign(new Error('网络请求失败' + (r && r.status ? ' HTTP ' + r.status : '')), { resp: r })),
            ontimeout: () => reject(new Error('请求超时'))
          });
        });
      },
      async test(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.gistToken) return { ok: false, msg: '请填写 GitHub Personal Access Token' };
        try {
          const r = await this._request(cs.gistToken, { url: 'https://api.github.com/user', method: 'GET' });
          if (r.status === 401) return { ok: false, msg: 'Token 无效或已过期' };
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '连接失败 HTTP ' + r.status };
          const u = JSON.parse(r.responseText || '{}');
          return { ok: true, msg: 'GitHub 连接正常（' + (u.login || 'unknown') + '）' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async list(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.gistToken) return { ok: false, msg: '请填写 GitHub Personal Access Token' };
        try {
          const r = await this._request(cs.gistToken, { url: 'https://api.github.com/gists?per_page=100', method: 'GET' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '列出 Gist 失败 HTTP ' + r.status };
          const gists = JSON.parse(r.responseText || '[]');
          const files = [];
          gists.forEach(g => {
            const fname = Object.keys(g.files || {})[0];
            const f = fname ? g.files[fname] : null;
            if (f && /^netclean-(backup|config)/i.test(f.filename || '')) {
              files.push({ id: g.id, name: f.filename, size: f.size || 0, mtime: new Date(g.updated_at || g.created_at).getTime(), raw: g });
            }
          });
          return { ok: true, files, mainName: null };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async create(cfg, body, filename) {
        const cs = cfg.cloudSync || {};
        if (!cs.gistToken) return { ok: false, msg: '请填写 GitHub Personal Access Token' };
        try {
          const payload = JSON.stringify({ description: cs.gistDescription || 'NetClean config backup', public: false, files: { [filename]: { content: body } } });
          const r = await this._request(cs.gistToken, { url: 'https://api.github.com/gists', method: 'POST', data: payload });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '创建 Gist 失败 HTTP ' + r.status };
          const g = JSON.parse(r.responseText || '{}');
          return { ok: true, msg: '已备份到 Gist：' + (g.id || filename), id: g.id };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async importItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.gistToken, { url: 'https://api.github.com/gists/' + item.id, method: 'GET' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '读取 Gist 失败 HTTP ' + r.status };
          const g = JSON.parse(r.responseText || '{}');
          const fname = item.name;
          const f = (g.files && g.files[fname]) || Object.values(g.files || {})[0];
          if (!f) return { ok: false, msg: 'Gist 中未找到备份文件' };
          return { ok: true, content: f.content || '' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async deleteItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.gistToken, { url: 'https://api.github.com/gists/' + item.id, method: 'DELETE' });
          if (r.status === 204 || r.status === 200 || (r.status >= 200 && r.status < 300)) return { ok: true, msg: '已删除' };
          return { ok: false, msg: '删除失败 HTTP ' + r.status };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async downloadItem(cfg, item, filename) {
        const r = await this.importItem(cfg, item);
        if (!r.ok) return r;
        const blob = new Blob([r.content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = filename || 'netclean-backup.json';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1500);
        return { ok: true, msg: '已下载到磁盘' };
      }
    },
    dropbox: {
      label: 'Dropbox（Access Token）',
      fields: [
        { key: 'oauthToken', label: 'Dropbox Access Token', type: 'password', placeholder: 'sl.xxxxxxxxxxxxxxxxxxxxxxxx', help: '在 https://www.dropbox.com/developers/apps 创建 App 并生成 access token，或从 OAuth 回调 URL 中复制 access_token=' },
        { key: 'oauthFolder', label: '远程文件夹', type: 'text', placeholder: '/netclean-backups', help: '备份文件存放路径，不存在会自动创建' }
      ],
      async _request(token, opts) {
        return new Promise((resolve, reject) => {
          const headers = { 'Authorization': 'Bearer ' + token };
          if (opts.json) { headers['Content-Type'] = 'application/json'; }
          GM_xmlhttpRequest({
            method: opts.method || 'GET',
            url: opts.url,
            headers: Object.assign(headers, opts.headers || {}),
            data: opts.data,
            responseType: opts.responseType || 'text',
            timeout: opts.timeout || 20000,
            onload: r => resolve(r),
            onerror: r => reject(Object.assign(new Error('网络请求失败' + (r && r.status ? ' HTTP ' + r.status : '')), { resp: r })),
            ontimeout: () => reject(new Error('请求超时'))
          });
        });
      },
      _folder(cfg) { return (cfg.cloudSync || {}).oauthFolder || '/netclean-backups'; },
      _path(cfg, filename) { return this._folder(cfg) + '/' + filename; },
      async test(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 Dropbox Access Token' };
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://api.dropboxapi.com/2/users/get_current_account', method: 'POST', json: true, data: 'null' });
          if (r.status === 401) return { ok: false, msg: 'Access Token 无效或已过期' };
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '连接失败 HTTP ' + r.status };
          return { ok: true, msg: 'Dropbox 连接正常' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async list(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 Dropbox Access Token' };
        const folder = this._folder(cfg);
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://api.dropboxapi.com/2/files/list_folder', method: 'POST', json: true, data: JSON.stringify({ path: folder === '/' ? '' : folder }) });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '列出文件失败 HTTP ' + r.status + ' ' + (r.responseText || '') };
          const data = JSON.parse(r.responseText || '{}');
          const files = (data.entries || []).filter(e => e['.tag'] === 'file' && /^netclean-(backup|config)/i.test(e.name)).map(e => ({ id: e.id, name: e.name, size: e.size || 0, mtime: new Date(e.client_modified || e.server_modified).getTime(), raw: e }));
          return { ok: true, files, mainName: null };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async create(cfg, body, filename) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 Dropbox Access Token' };
        try {
          // 先尝试上传，若文件夹不存在会返回 409 path_not_found
          const r = await this._request(cs.oauthToken, {
            url: 'https://content.dropboxapi.com/2/files/upload',
            method: 'POST',
            headers: { 'Dropbox-API-Arg': JSON.stringify({ path: this._path(cfg, filename), mode: 'add', autorename: true, mute: true }) },
            data: body
          });
          if (r.status === 409) {
            // 创建文件夹后重试
            await this._request(cs.oauthToken, { url: 'https://api.dropboxapi.com/2/files/create_folder_v2', method: 'POST', json: true, data: JSON.stringify({ path: this._folder(cfg), autorename: false }) });
            const r2 = await this._request(cs.oauthToken, {
              url: 'https://content.dropboxapi.com/2/files/upload',
              method: 'POST',
              headers: { 'Dropbox-API-Arg': JSON.stringify({ path: this._path(cfg, filename), mode: 'add', autorename: true, mute: true }) },
              data: body
            });
            if (r2.status < 200 || r2.status >= 300) return { ok: false, msg: '备份失败 HTTP ' + r2.status };
          } else if (r.status < 200 || r.status >= 300) {
            return { ok: false, msg: '备份失败 HTTP ' + r.status };
          }
          return { ok: true, msg: '已备份到 Dropbox：' + filename };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async importItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.oauthToken, {
            url: 'https://content.dropboxapi.com/2/files/download',
            method: 'POST',
            headers: { 'Dropbox-API-Arg': JSON.stringify({ path: item.raw.path_lower || item.raw.path_display }) }
          });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
          return { ok: true, content: String(r.responseText == null ? (r.response == null ? '' : r.response) : r.responseText) };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async deleteItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://api.dropboxapi.com/2/files/delete_v2', method: 'POST', json: true, data: JSON.stringify({ path: item.raw.path_lower || item.raw.path_display }) });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '删除失败 HTTP ' + r.status };
          return { ok: true, msg: '已删除' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async downloadItem(cfg, item, filename) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.oauthToken, {
            url: 'https://content.dropboxapi.com/2/files/download',
            method: 'POST',
            headers: { 'Dropbox-API-Arg': JSON.stringify({ path: item.raw.path_lower || item.raw.path_display }) },
            responseType: 'arraybuffer'
          });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
          const blob = new Blob([r.response], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a'); a.href = url; a.download = filename || 'netclean-backup.json';
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(() => URL.revokeObjectURL(url), 1500);
          return { ok: true, msg: '已下载到磁盘' };
        } catch(e) { return { ok: false, msg: e.message }; }
      }
    },
    onedrive: {
      label: 'OneDrive（Access Token）',
      fields: [
        { key: 'oauthToken', label: 'OneDrive Access Token', type: 'password', placeholder: 'Ewxxxxxxxxxxxxxxxxxxxx', help: '在 https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps 注册应用并获取 token，或从 OAuth 回调 URL 复制 access_token=' },
        { key: 'oauthFolder', label: '远程文件夹', type: 'text', placeholder: '/netclean-backups', help: '位于 OneDrive 根目录下的文件夹路径' }
      ],
      _base: 'https://graph.microsoft.com/v1.0/me/drive/root:',
      _itemUrl(cfg, filename) {
        const folder = (cfg.cloudSync || {}).oauthFolder || '/netclean-backups';
        const path = folder + '/' + filename;
        return this._base + encodeURIComponent(path).replace(/%2F/g, '/');
      },
      async _request(token, opts) {
        return new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            method: opts.method || 'GET',
            url: opts.url,
            headers: Object.assign({ 'Authorization': 'Bearer ' + token }, opts.headers || {}),
            data: opts.data,
            responseType: opts.responseType || 'text',
            timeout: opts.timeout || 20000,
            onload: r => resolve(r),
            onerror: r => reject(Object.assign(new Error('网络请求失败' + (r && r.status ? ' HTTP ' + r.status : '')), { resp: r })),
            ontimeout: () => reject(new Error('请求超时'))
          });
        });
      },
      async test(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 OneDrive Access Token' };
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://graph.microsoft.com/v1.0/me', method: 'GET' });
          if (r.status === 401) return { ok: false, msg: 'Access Token 无效或已过期' };
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '连接失败 HTTP ' + r.status };
          return { ok: true, msg: 'OneDrive 连接正常' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async list(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 OneDrive Access Token' };
        const folder = cs.oauthFolder || '/netclean-backups';
        try {
          const url = this._base + encodeURIComponent(folder).replace(/%2F/g, '/') + ':/children';
          const r = await this._request(cs.oauthToken, { url, method: 'GET' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '列出文件失败 HTTP ' + r.status };
          const data = JSON.parse(r.responseText || '{}');
          const files = (data.value || []).filter(e => e.file && /^netclean-(backup|config)/i.test(e.name)).map(e => ({ id: e.id, name: e.name, size: e.size || 0, mtime: new Date(e.lastModifiedDateTime || 0).getTime(), raw: e }));
          return { ok: true, files, mainName: null };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async create(cfg, body, filename) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 OneDrive Access Token' };
        try {
          const url = this._itemUrl(cfg, filename) + ':/content';
          const r = await this._request(cs.oauthToken, { url, method: 'PUT', headers: { 'Content-Type': 'application/json' }, data: body });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '备份失败 HTTP ' + r.status };
          return { ok: true, msg: '已备份到 OneDrive：' + filename };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async importItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://graph.microsoft.com/v1.0/me/drive/items/' + item.id + '/content', method: 'GET' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
          return { ok: true, content: String(r.responseText == null ? (r.response == null ? '' : r.response) : r.responseText) };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async deleteItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://graph.microsoft.com/v1.0/me/drive/items/' + item.id, method: 'DELETE' });
          if (r.status < 200 || r.status >= 300 && r.status !== 204) return { ok: false, msg: '删除失败 HTTP ' + r.status };
          return { ok: true, msg: '已删除' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async downloadItem(cfg, item, filename) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://graph.microsoft.com/v1.0/me/drive/items/' + item.id + '/content', method: 'GET', responseType: 'arraybuffer' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
          const blob = new Blob([r.response], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a'); a.href = url; a.download = filename || 'netclean-backup.json';
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(() => URL.revokeObjectURL(url), 1500);
          return { ok: true, msg: '已下载到磁盘' };
        } catch(e) { return { ok: false, msg: e.message }; }
      }
    },
    gdrive: {
      label: 'Google Drive（Access Token）',
      fields: [
        { key: 'oauthToken', label: 'Google Drive Access Token', type: 'password', placeholder: 'ya29.xxxxxxxxxxxxxxxxxxxxxxxx', help: '通过 Google OAuth 获取，或从回调 URL 复制 access_token=' },
        { key: 'oauthFolder', label: '远程文件夹', type: 'text', placeholder: '/netclean-backups', help: '位于 Google Drive 根目录下的文件夹名称' }
      ],
      async _request(token, opts) {
        return new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            method: opts.method || 'GET',
            url: opts.url,
            headers: Object.assign({ 'Authorization': 'Bearer ' + token }, opts.headers || {}),
            data: opts.data,
            responseType: opts.responseType || 'text',
            timeout: opts.timeout || 20000,
            onload: r => resolve(r),
            onerror: r => reject(Object.assign(new Error('网络请求失败' + (r && r.status ? ' HTTP ' + r.status : '')), { resp: r })),
            ontimeout: () => reject(new Error('请求超时'))
          });
        });
      },
      async _ensureFolder(cfg) {
        const cs = cfg.cloudSync || {};
        const name = (cs.oauthFolder || '/netclean-backups').replace(/^\//, '');
        // 查询同名文件夹
        const q = "mimeType='application/vnd.google-apps.folder' and name='" + name + "' and trashed=false";
        const r = await this._request(cs.oauthToken, { url: 'https://www.googleapis.com/drive/v3/files?q=' + encodeURIComponent(q) + '&spaces=drive', method: 'GET' });
        const data = JSON.parse(r.responseText || '{}');
        if (data.files && data.files.length) return data.files[0].id;
        // 创建文件夹
        const cr = await this._request(cs.oauthToken, { url: 'https://www.googleapis.com/drive/v3/files', method: 'POST', headers: { 'Content-Type': 'application/json' }, data: JSON.stringify({ name, mimeType: 'application/vnd.google-apps.folder' }) });
        const c = JSON.parse(cr.responseText || '{}');
        return c.id;
      },
      async test(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 Google Drive Access Token' };
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://www.googleapis.com/drive/v3/about?fields=user', method: 'GET' });
          if (r.status === 401) return { ok: false, msg: 'Access Token 无效或已过期' };
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '连接失败 HTTP ' + r.status };
          return { ok: true, msg: 'Google Drive 连接正常' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async list(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 Google Drive Access Token' };
        try {
          const folderId = await this._ensureFolder(cfg);
          const q = "'" + folderId + "' in parents and trashed=false";
          const r = await this._request(cs.oauthToken, { url: 'https://www.googleapis.com/drive/v3/files?q=' + encodeURIComponent(q) + '&orderBy=modifiedTime desc', method: 'GET' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '列出文件失败 HTTP ' + r.status };
          const data = JSON.parse(r.responseText || '{}');
          const files = (data.files || []).filter(e => !e.mimeType.includes('folder') && /^netclean-(backup|config)/i.test(e.name)).map(e => ({ id: e.id, name: e.name, size: parseInt(e.size || '0', 10), mtime: new Date(e.modifiedTime || 0).getTime(), raw: e }));
          return { ok: true, files, mainName: null };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async create(cfg, body, filename) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 Google Drive Access Token' };
        try {
          const folderId = await this._ensureFolder(cfg);
          const metadata = JSON.stringify({ name: filename, parents: [folderId] });
          const boundary = '-------314159265358979323846';
          const data = '--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + metadata + '\r\n--' + boundary + '\r\nContent-Type: application/json\r\n\r\n' + body + '\r\n--' + boundary + '--';
          const r = await this._request(cs.oauthToken, {
            url: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
            method: 'POST',
            headers: { 'Content-Type': 'multipart/related; boundary="' + boundary + '"' },
            data: data
          });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '备份失败 HTTP ' + r.status };
          return { ok: true, msg: '已备份到 Google Drive：' + filename };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async importItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://www.googleapis.com/drive/v3/files/' + item.id + '?alt=media', method: 'GET' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
          return { ok: true, content: String(r.responseText == null ? (r.response == null ? '' : r.response) : r.responseText) };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async deleteItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://www.googleapis.com/drive/v3/files/' + item.id, method: 'DELETE' });
          if (r.status < 200 || r.status >= 300 && r.status !== 204) return { ok: false, msg: '删除失败 HTTP ' + r.status };
          return { ok: true, msg: '已删除' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async downloadItem(cfg, item, filename) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.oauthToken, { url: 'https://www.googleapis.com/drive/v3/files/' + item.id + '?alt=media', method: 'GET', responseType: 'arraybuffer' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
          const blob = new Blob([r.response], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a'); a.href = url; a.download = filename || 'netclean-backup.json';
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(() => URL.revokeObjectURL(url), 1500);
          return { ok: true, msg: '已下载到磁盘' };
        } catch(e) { return { ok: false, msg: e.message }; }
      }
    },
    yandex: {
      label: 'Yandex.Disk（Access Token）',
      fields: [
        { key: 'oauthToken', label: 'Yandex OAuth Token', type: 'password', placeholder: 'y0_Agxxxxxxxxxxxxxxxxxxxxxx', help: '在 https://oauth.yandex.com/ 创建应用并获取 token，或从回调 URL 复制 access_token=' },
        { key: 'oauthFolder', label: '远程文件夹', type: 'text', placeholder: '/netclean-backups', help: '位于 Yandex.Disk 根目录下的文件夹路径' }
      ],
      _base: 'https://cloud-api.yandex.net/v1/disk/resources',
      _path(cfg, filename) {
        const folder = (cfg.cloudSync || {}).oauthFolder || '/netclean-backups';
        return folder + '/' + filename;
      },
      async _request(token, opts) {
        return new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            method: opts.method || 'GET',
            url: opts.url,
            headers: Object.assign({ 'Authorization': 'OAuth ' + token, 'Accept': 'application/json' }, opts.headers || {}),
            data: opts.data,
            responseType: opts.responseType || 'text',
            timeout: opts.timeout || 20000,
            onload: r => resolve(r),
            onerror: r => reject(Object.assign(new Error('网络请求失败' + (r && r.status ? ' HTTP ' + r.status : '')), { resp: r })),
            ontimeout: () => reject(new Error('请求超时'))
          });
        });
      },
      async test(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 Yandex OAuth Token' };
        try {
          const r = await this._request(cs.oauthToken, { url: this._base + '?path=disk%3A%2F', method: 'GET' });
          if (r.status === 401) return { ok: false, msg: 'OAuth Token 无效或已过期' };
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '连接失败 HTTP ' + r.status };
          return { ok: true, msg: 'Yandex.Disk 连接正常' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async list(cfg) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 Yandex OAuth Token' };
        const path = (cs.oauthFolder || '/netclean-backups').replace(/^\//, '');
        try {
          const r = await this._request(cs.oauthToken, { url: this._base + '?path=' + encodeURIComponent(path) + '&limit=100', method: 'GET' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '列出文件失败 HTTP ' + r.status };
          const data = JSON.parse(r.responseText || '{}');
          const items = (data._embedded && data._embedded.items) || [];
          const files = items.filter(e => e.type === 'file' && /^netclean-(backup|config)/i.test(e.name)).map(e => ({ id: e.path, name: e.name, size: e.size || 0, mtime: new Date(e.modified || 0).getTime(), raw: e }));
          return { ok: true, files, mainName: null };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async create(cfg, body, filename) {
        const cs = cfg.cloudSync || {};
        if (!cs.oauthToken) return { ok: false, msg: '请填写 Yandex OAuth Token' };
        try {
          const uploadReq = await this._request(cs.oauthToken, { url: this._base + '/upload?path=' + encodeURIComponent(this._path(cfg, filename).replace(/^\//, '')) + '&overwrite=true', method: 'GET' });
          const uploadData = JSON.parse(uploadReq.responseText || '{}');
          if (!uploadData.href) return { ok: false, msg: '未获取到上传地址：' + (uploadData.error || uploadReq.status) };
          const put = await this._request(cs.oauthToken, { url: uploadData.href, method: 'PUT', data: body });
          if (put.status < 200 || put.status >= 300) return { ok: false, msg: '备份失败 HTTP ' + put.status };
          return { ok: true, msg: '已备份到 Yandex.Disk：' + filename };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async importItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const downloadReq = await this._request(cs.oauthToken, { url: this._base + '/download?path=' + encodeURIComponent(item.raw.path.replace(/^\//, '')), method: 'GET' });
          const d = JSON.parse(downloadReq.responseText || '{}');
          if (!d.href) return { ok: false, msg: '未获取到下载地址：' + (d.error || downloadReq.status) };
          const r = await this._request(cs.oauthToken, { url: d.href, method: 'GET' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
          return { ok: true, content: String(r.responseText == null ? (r.response == null ? '' : r.response) : r.responseText) };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async deleteItem(cfg, item) {
        const cs = cfg.cloudSync || {};
        try {
          const r = await this._request(cs.oauthToken, { url: this._base + '?path=' + encodeURIComponent(item.raw.path.replace(/^\//, '')) + '&permanently=true', method: 'DELETE' });
          if (r.status < 200 || r.status >= 300 && r.status !== 204 && r.status !== 202) return { ok: false, msg: '删除失败 HTTP ' + r.status };
          return { ok: true, msg: '已删除' };
        } catch(e) { return { ok: false, msg: e.message }; }
      },
      async downloadItem(cfg, item, filename) {
        const cs = cfg.cloudSync || {};
        try {
          const downloadReq = await this._request(cs.oauthToken, { url: this._base + '/download?path=' + encodeURIComponent(item.raw.path.replace(/^\//, '')), method: 'GET' });
          const d = JSON.parse(downloadReq.responseText || '{}');
          if (!d.href) return { ok: false, msg: '未获取到下载地址：' + (d.error || downloadReq.status) };
          const r = await this._request(cs.oauthToken, { url: d.href, method: 'GET', responseType: 'arraybuffer' });
          if (r.status < 200 || r.status >= 300) return { ok: false, msg: '下载失败 HTTP ' + r.status };
          const blob = new Blob([r.response], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a'); a.href = url; a.download = filename || 'netclean-backup.json';
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(() => URL.revokeObjectURL(url), 1500);
          return { ok: true, msg: '已下载到磁盘' };
        } catch(e) { return { ok: false, msg: e.message }; }
      }
    }
  };
  function getCloudProvider(type) { return CLOUD_PROVIDERS[type] || CLOUD_PROVIDERS.webdav; }

  // 统一的云备份操作入口（按当前 provider 分发）
  async function cloudBackupList() {
    const cfg = getConfig();
    const p = getCloudProvider((cfg.cloudSync || {}).type);
    return p.list(cfg);
  }
  async function cloudBackupCreate() {
    const cfg = getConfig();
    const cs = cfg.cloudSync || {};
    const p = getCloudProvider(cs.type);
    const exportCfg = JSON.parse(JSON.stringify(cfg));
    if (exportCfg.cloudSync) exportCfg.cloudSync.password = '';
    let body = JSON.stringify(exportCfg, null, 2);
    if ((cs.type === 'webdav') && cs.protect && cs.password) body = xorCrypt(body, cs.password);
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    const stamp = d.getFullYear() + pad(d.getMonth()+1) + pad(d.getDate()) + '-' + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());
    const filename = 'netclean-backup-' + stamp + '.json';
    return p.create(cfg, body, filename);
  }
  async function cloudBackupImport(item) {
    const cfg = getConfig();
    const cs = cfg.cloudSync || {};
    const p = getCloudProvider(cs.type);
    try {
      const r = await p.importItem(cfg, item);
      if (!r.ok) return r;
      let body = r.content;
      if (body.slice(0, 4) === 'enc:') {
        if (!cs.password) return { ok: false, msg: '该备份是加密格式，但本机未填写同步密码' };
        body = xorDecrypt(body, cs.password);
      }
      let cloudCfg;
      try { cloudCfg = JSON.parse(body); }
      catch(pe) { return { ok: false, msg: '解析失败：' + (cs.password ? '解密后不是合法 JSON，通常是同步密码与备份时不一致' : '内容不是合法 JSON') }; }
      if (!cloudCfg || typeof cloudCfg !== 'object') return { ok: false, msg: '配置格式异常' };
      const localCfg = getConfig();
      const localSync = JSON.parse(JSON.stringify(localCfg.cloudSync || {}));
      const downed = Object.assign({}, cloudCfg, { cloudSync: Object.assign({}, localSync, cloudCfg.cloudSync || {}, { password: localSync.password }) });
      const merged = deepMerge(DEFAULT_CONFIG, downed);
      if (!cloudCfg.ui && localCfg.ui) merged.ui = JSON.parse(JSON.stringify(localCfg.ui));
      merged.cloudSync.lastSync = Date.now();
      merged.modifiedAt = cloudCfg.modifiedAt || Date.now();
      writeConfig(merged, true);
      return { ok: true, msg: '已从云备份恢复，刷新页面后生效' };
    } catch(e) { return { ok: false, msg: e.message }; }
  }
  async function cloudBackupDelete(item) { return getCloudProvider((getConfig().cloudSync || {}).type).deleteItem(getConfig(), item); }
  async function cloudBackupDownload(item, filename) { return getCloudProvider((getConfig().cloudSync || {}).type).downloadItem(getConfig(), item, filename); }
  function currentCloudProviderName() { return getCloudProvider((getConfig().cloudSync || {}).type).label; }


  let _cloudSyncTimer = null;
  function scheduleCloudSyncUp() {
    const cs = getConfig().cloudSync || {};
    if (!cs.enabled) return;
    clearTimeout(_cloudSyncTimer);
    _cloudSyncTimer = setTimeout(() => cloudSyncUp(true), 3000);
  }
  // 启动时若开启自动同步，延迟拉取一次云端配置
  setTimeout(() => {
    const cs = getConfig().cloudSync || {};
    if (cs.enabled) cloudSyncDown(false);
  }, 8000);
  function cfgPingbiurl() { return getConfig().pingbiurl || []; }
  function cfgWhiteurl() { return getConfig().whiteurl || []; }
  function cfgPingbikw() { return getConfig().pingbikw || []; }
  // 关键词命中 / 网址命中：把各站点处理器里重复的过滤循环收敛为一个判断
  function _kwHit(text) { const kws = cfgPingbikw(); for (let i = 0; i < kws.length; i++) if (text && String(text).includes(kws[i])) return true; return false; }
  function _urlHit(url) { if (!url) return false; const bls = cfgPingbiurl(); for (let i = 0; i < bls.length; i++) if (String(url).includes(bls[i])) return true; return false; }

  // 配置版本迁移
  (function() {
    const stored = GM_getValue('allconfigtime');
    if (!stored || parseInt(stored) < CONFIG_TIME) {
      GM_setValue('allconfigtime', CONFIG_TIME);
      const old = getConfig();
      // 以默认配置为基底深合并 old，确保所有字段（含后来新增的 videoDownload 等）都不丢失
      const merged = deepMerge(DEFAULT_CONFIG, old);
      delete merged.baidu.baiduAutoNext;
      setConfig(merged);
    }
  })();

  /* ================================================================
   *  0.8 启动早退「状态 / 恢复」入口（v12.0.0）
   *  —— 必须注册在下面三道启动闸之前 ——
   *  背景：whiteurl / scriptBlacklist / perfWhitelist 三道闸都在设置面板
   *        定义之前直接 return，而「控制面板」菜单注册在阶段 6（最末）。
   *        于是当前站点一旦命中任一名单，油猴菜单里根本没有面板入口 ——
   *        用户把自己常用的站点加进名单后就再也进不去设置，形成死锁。
   *  约束：本入口只可依赖本文件靠前部分（getConfig / setConfig / getScriptCfg /
   *        flushConfig / GM_* / zkToast / dbg）。绝不可触碰 HELP、groups、
   *        toast、openSettings —— 它们是闸之后才初始化的 const / 局部函数，
   *        早退场景下调用会直接 TDZ 崩溃。
   * ================================================================ */
  let NC_EARLY_EXIT = null;   // { gate, list, title, hint } —— null 表示脚本完整启动

  // 查询当前站点命中了名单里的哪一条（用于急救面板展示证据）
  function ncMatchOf(listKey) {
    const arr = getConfig()[listKey] || [];
    for (let i = 0; i < arr.length; i++) { if (arr[i] && HOST.includes(arr[i])) return String(arr[i]); }
    return '';
  }
  function ncMarkEarlyExit(gate, list, title, hint) {
    const m = ncMatchOf(list);
    NC_EARLY_EXIT = { gate: gate, list: list, title: title, hint: hint || '', match: m };
    dbg('[NetClean] 启动早退：' + title + '（gate=' + gate + '，命中条目=' + (m || '—') + '，host=' + HOST + '）');
    return true;
  }
  function ncWhenDomReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
    else fn();
  }
  function ncEl(tag, css, text) {
    const e = document.createElement(tag);
    if (css) e.style.cssText = css;
    if (text != null) e.textContent = text;
    return e;
  }
  function ncBtn(label, primary, onClick) {
    const b = ncEl('button', 'flex:1;padding:10px 12px;border-radius:10px;cursor:pointer;font-size:13px;font-weight:500;' +
      'border:1px solid ' + (primary ? '#1677ff' : '#e2e8f0') + ';background:' + (primary ? '#1677ff' : '#fff') +
      ';color:' + (primary ? '#fff' : '#475569') + ';font-family:inherit', label);
    b.type = 'button';
    b.addEventListener('click', onClick);
    return b;
  }

  // 三道闸的解封配方
  const NC_GATE_FIX = {
    whiteurl:        { list: 'whiteurl',        sw: null,                     fix: 'remove', hint: '当前站点在「白名单域名」中，脚本常驻暂停。', fixLabel: '把本站从「白名单域名」移除' },
    scriptBlacklist: { list: 'scriptBlacklist', sw: 'scriptBlacklistEnabled', fix: 'remove', hint: '当前站点在「黑名单站点」中，且黑名单开关已启用。', fixLabel: '把本站从「黑名单站点」移除' },
    perfWhitelist:   { list: 'scopeWhitelist',  sw: 'perfWhitelist',          fix: 'add',    hint: '「仅白名单域名启用」已开启，当前站点既不在「启用域名」内，也不是内置已知站点。', fixLabel: '把本站加入「启用域名」' }
  };

  // 急救面板：只做「解封」这一件事，纯 DOM 自绘、零依赖
  function ncOpenRescue() {
    const info = NC_EARLY_EXIT;
    if (!info) { ncOpenStatus(); return; }
    const GATE = NC_GATE_FIX[info.gate];
    if (!GATE) return;
    const old = document.getElementById('nc-rescue-box'); if (old) old.remove();

    const box = ncEl('div', 'position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2147483647;' +
      'width:540px;max-width:94vw;background:#fff;border-radius:18px;overflow:hidden;' +
      'box-shadow:0 32px 90px rgba(15,23,42,.38),0 0 0 1px rgba(15,23,42,.06);' +
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif;color:#1f2937');
    box.id = 'nc-rescue-box';

    const hd = ncEl('div', 'display:flex;align-items:center;gap:10px;padding:16px 20px;background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff');
    hd.appendChild(ncEl('span', 'font-size:18px', '\uD83D\uDE98'));
    hd.appendChild(ncEl('div', 'font-size:15px;font-weight:700;flex:1', '脚本在本站已暂停'));
    const close = ncEl('span', 'cursor:pointer;font-size:20px;line-height:18px;opacity:.6;padding:0 2px', '\u00D7');
    close.title = '关闭';
    close.addEventListener('click', () => box.remove());
    hd.appendChild(close);
    box.appendChild(hd);

    const dialogBody = ncEl('div', 'padding:20px');
    [['当前站点', HOST], ['暂停原因', info.title], ['命中条目', info.match || '（按规则整体排除，无精确条目）'], ['说明', info.hint || GATE.hint]]
      .forEach(function (r) {
        const line = ncEl('div', 'display:flex;gap:10px;font-size:13px;padding:7px 0;border-bottom:1px dashed #eef2f7');
        line.appendChild(ncEl('span', 'width:64px;flex:0 0 auto;color:#64748b', r[0]));
        line.appendChild(ncEl('span', 'flex:1;color:#0f172a;word-break:break-all;line-height:1.6' + (r[0] === '当前站点' ? ';font-weight:700' : ''), r[1]));
        dialogBody.appendChild(line);
      });
    dialogBody.appendChild(ncEl('div', 'font-size:12px;color:#64748b;line-height:1.8;margin-top:14px',
      '这是名单生效后的正常表现：脚本没有在本页注入任何功能。若你想在本站继续使用，请任选下面的解封方式，页面会自动刷新。'));

    const statusEl = ncEl('div', 'font-size:12px;min-height:18px;margin-top:12px;color:#16a34a', '');
    const acts = ncEl('div', 'display:flex;flex-direction:column;gap:10px;margin-top:14px');
    let handled = false;
    function done(msg) {
      if (handled) return; handled = true;
      statusEl.textContent = msg + '，正在刷新页面…';
      try { zkToast(msg + t('toast.needReload')); } catch (e) {}
      const badge = document.getElementById('nc-paused-badge'); if (badge) badge.remove();
      setTimeout(function () { try { location.reload(); } catch (e) {} }, 1100);
    }
    acts.appendChild(ncBtn(GATE.fixLabel + '（推荐）', true, function () {
      const cfg = getConfig();
      if (!Array.isArray(cfg[GATE.list])) cfg[GATE.list] = [];
      if (GATE.fix === 'remove') {
        const before = cfg[GATE.list].length;
        cfg[GATE.list] = cfg[GATE.list].filter(function (u) { return !u || HOST.indexOf(u) === -1; });
        if (cfg[GATE.list].length === before) {
          statusEl.style.color = '#f59e0b';
          statusEl.textContent = '名单中没有匹配本站的条目，请改用下面的方式。';
          return;
        }
      } else {
        if (cfg[GATE.list].indexOf(HOST) === -1) cfg[GATE.list].unshift(HOST);
      }
      setConfig(cfg); flushConfig();
      done('已解封 ' + HOST);
    }));
    if (GATE.sw) {
      acts.appendChild(ncBtn('关闭「' + info.title + '」开关（整份名单停用）', false, function () {
        const cfg = getConfig();
        if (!cfg.baidu) cfg.baidu = {};
        cfg.baidu[GATE.sw] = false;
        setConfig(cfg); flushConfig();
        done('已关闭「' + info.title + '」');
      }));
    }
    const row2 = ncEl('div', 'display:flex;gap:10px');
    row2.appendChild(ncBtn('刷新页面', false, function () { try { location.reload(); } catch (e) {} }));
    row2.appendChild(ncBtn('关闭', false, function () { box.remove(); }));
    acts.appendChild(row2);
    dialogBody.appendChild(acts);
    dialogBody.appendChild(statusEl);
    box.appendChild(dialogBody);
    (document.body || document.documentElement).appendChild(box);
    dbg('[NetClean] 已打开启动早退急救面板：' + info.gate);
  }

  // 脚本正常启动时的「状态 / 诊断」卡片（同一个菜单项，两种用途）
  function ncOpenStatus() {
    const old = document.getElementById('nc-rescue-box'); if (old) old.remove();
    const cfg = getConfig(), scriptCfg = cfg.baidu || {};
    const box = ncEl('div', 'position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2147483647;' +
      'width:520px;max-width:94vw;background:#fff;border-radius:18px;overflow:hidden;' +
      'box-shadow:0 32px 90px rgba(15,23,42,.38),0 0 0 1px rgba(15,23,42,.06);' +
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif;color:#1f2937');
    box.id = 'nc-rescue-box';
    const hd = ncEl('div', 'display:flex;align-items:center;gap:10px;padding:16px 20px;background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff');
    hd.appendChild(ncEl('span', 'font-size:18px', '\u2705'));
    hd.appendChild(ncEl('div', 'font-size:15px;font-weight:700;flex:1', '脚本在本站正常运行'));
    hd.appendChild(ncEl('span', 'font-size:11px;background:rgba(22,119,255,.22);border:1px solid rgba(125,211,252,.25);padding:3px 10px;border-radius:12px;color:#7dd3fc', 'v' + VERSION));
    const close = ncEl('span', 'cursor:pointer;font-size:20px;line-height:18px;opacity:.6;padding:0 2px;margin-left:4px', '\u00D7');
    close.addEventListener('click', () => box.remove());
    hd.appendChild(close);
    box.appendChild(hd);

    const body = ncEl('div', 'padding:20px');
    [['当前站点', HOST],
     ['白名单域名', (cfg.whiteurl || []).length ? '已配置 ' + cfg.whiteurl.length + ' 条 · 本站未命中' : '未配置'],
     ['黑名单站点', scriptCfg.scriptBlacklistEnabled ? ('已启用 · 共 ' + ((cfg.scriptBlacklist || []).length) + ' 条 · 本站未命中') : '未启用'],
     ['仅白名单域名启用', scriptCfg.perfWhitelist ? ('已开启 · ' + ((cfg.scopeWhitelist || []).length) + ' 条启用域名 · 本站已放行') : '未开启']
    ].forEach(function (r) {
      const line = ncEl('div', 'display:flex;gap:10px;font-size:13px;padding:7px 0;border-bottom:1px dashed #eef2f7');
      line.appendChild(ncEl('span', 'width:120px;flex:0 0 auto;color:#64748b', r[0]));
      line.appendChild(ncEl('span', 'flex:1;color:#0f172a;line-height:1.6;word-break:break-all', r[1]));
      body.appendChild(line);
    });
    const acts = ncEl('div', 'display:flex;gap:10px;margin-top:16px');
    acts.appendChild(ncBtn('打开完整控制面板', true, function () { box.remove(); try { openSettings(); } catch (e) { console.error('[NetClean]', e); } }));
    acts.appendChild(ncBtn('关闭', false, function () { box.remove(); }));
    body.appendChild(acts);
    box.appendChild(body);
    (document.body || document.documentElement).appendChild(box);
  }

  // 「本站已暂停」提示胶囊：8 秒后收成小圆点，点击可开急救面板，× 关闭
  function ncShowPausedBadge() {
    ncWhenDomReady(function () {
      try {
        const info = NC_EARLY_EXIT; if (!info) return;
        if (document.getElementById('nc-paused-badge')) return;
        const pill = ncEl('div', 'position:fixed;right:14px;bottom:14px;z-index:2147483646;display:flex;align-items:center;gap:8px;' +
          'background:rgba(15,23,42,.92);color:#fff;padding:9px 12px;border-radius:999px;' +
          'font:500 12px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif;' +
          'box-shadow:0 8px 26px rgba(15,23,42,.32);cursor:pointer;max-width:80vw;user-select:none');
        pill.id = 'nc-paused-badge';
        pill.title = 'NetClean：本站已暂停，点击管理';
        const tx = ncEl('span', '', '\u23F8 本站已暂停 · ' + info.title);
        const x = ncEl('span', 'opacity:.55;font-size:16px;line-height:12px;padding:0 2px', '\u00D7');
        x.title = '关闭提示';
        pill.appendChild(tx); pill.appendChild(x);
        const shrink = setTimeout(function () { try { tx.style.display = 'none'; } catch (e) {} }, 8000);
        pill.addEventListener('click', function (e) {
          if (e.target === x) { clearTimeout(shrink); pill.remove(); return; }
          ncOpenRescue();
        });
        (document.body || document.documentElement).appendChild(pill);
      } catch (e) {}
    });
  }

  // 阶段 0：菜单先落地（早退时它是唯一的自救通道）
  try { GM_registerMenuCommand(t('menu.rescue'), ncOpenRescue); } catch (e) {}

  // 白名单检查（豁免名单：命中的站点脚本常驻暂停）
  function isWhitelisted() {
    const wl = cfgWhiteurl();
    return wl.length && wl.some(u => HOST.includes(u));
  }
  if (isWhitelisted()) {
    ncMarkEarlyExit('whiteurl', 'whiteurl', '白名单域名');
    ncShowPausedBadge();
    return;
  }

  // 脚本启用站点黑名单（敏感站点排除）：开启后，命中名单的站点脚本整体暂停。
  // 默认关闭；名单预置敏感站点，由用户手动启用。与 isWhitelisted 同路径（启动早期直接 return）。
  // 设计说明：命中即「完全不介入」而非「部分停用」。对银行 / 支付 / 政务这类站点，
  // 半启用（继续改 DOM、继续跑自动化）反而会带来不可预期的风险，故不做「仅停用自动化」的折中档。
  function isScriptBlacklisted() {
    if (!getScriptCfg().scriptBlacklistEnabled) return false;
    const bl = getConfig().scriptBlacklist || [];
    if (!bl.length) return false;
    const m = bl.find(u => u && HOST.includes(u));
    if (!m) return false;
    dbg('[NetClean] 命中脚本启用站点黑名单：' + m + '（host=' + HOST + '），脚本在本页整体暂停');
    return true;
  }
  if (isScriptBlacklisted()) {
    ncMarkEarlyExit('scriptBlacklist', 'scriptBlacklist', '脚本启用站点黑名单');
    ncShowPausedBadge();
    return;
  }

  // 性能优化：仅白名单域名启用（内部激活白名单）
  // 开启后，当前域名既不在「启用域名」也不在「已知站点」时，脚本主 IIFE 直接退出，几乎零开销。
  // 说明：油猴 @match 为静态元数据、运行时不可改，此项通过注入后早退实现「域名内」而非「全局」。
  if (getScriptCfg().perfWhitelist) {
    const wl = getConfig().scopeWhitelist || [];
    const inWl = wl.some(u => u && HOST.indexOf(u) !== -1);
    if (!inWl && !inKnownDomain()) {
      ncMarkEarlyExit('perfWhitelist', 'scopeWhitelist', '仅白名单域名启用');
      ncShowPausedBadge();
      return; // 非白名单/未知站点：直接退出整个脚本，不做任何处理
    }
  }

  // 全局暂停：白名单后不初始化任何功能
  function isPaused() { return BLOCKING_PAUSED; }

  // 全局键盘快捷键 Ctrl+Shift+A
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'A' && getScriptCfg().shortcutPanel) {
      e.preventDefault();
      openSettings();
    }
    // Ctrl+Shift+P 暂停/恢复
    if (e.ctrlKey && e.shiftKey && e.key === 'P' && getScriptCfg().shortcutPause) {
      e.preventDefault();
      BLOCKING_PAUSED = !BLOCKING_PAUSED;
      const indicator = document.getElementById('zk-pause-indicator');
      if (BLOCKING_PAUSED) {
        const div = document.createElement('div');
        div.id = 'zk-pause-indicator';
        div.style.cssText = 'position:fixed;top:10px;left:50%;transform:translateX(-50%);background:#ff5252;color:#fff;padding:6px 20px;border-radius:20px;font-size:12px;z-index:' + NC_Z_TOP + ';font-family:sans-serif;pointer-events:none';
        div.textContent = '⏸ 广告净化已暂停';
        document.body.appendChild(div);
        setTimeout(() => { if (div.parentNode) div.remove(); }, 2500);
      } else {
        if (indicator) indicator.remove();
        const div = document.createElement('div');
        div.id = 'zk-pause-indicator';
        div.style.cssText = 'position:fixed;top:10px;left:50%;transform:translateX(-50%);background:#009688;color:#fff;padding:6px 20px;border-radius:20px;font-size:12px;z-index:' + NC_Z_TOP + ';font-family:sans-serif;pointer-events:none';
        div.textContent = '▶ 广告净化已恢复 · 已拦截 ' + STATS.skippedAds + ' 个广告';
        document.body.appendChild(div);
        setTimeout(() => { if (div.parentNode) div.remove(); }, 2500);
      }
    }
  });

  // DOM 工具
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ----------------------------------------------------------------
   * 搜索结果卡片统一标识（百度 / Google / Bing 三端同款）
   * 三家 DOM 结构各异且常年改版，统一给「单条结果」打上 .nc-result-card，
   * 美化 CSS 与关键词过滤都只认这个类：
   *   · 美化：三端共用同一份卡片样式 → 视觉完全一致
   *   · 过滤：只要标题还在就能继续工作 → 改版自愈
   * 警告：任何情况下都不要对结果容器无差别 remove()，历史 bug 曾因此整页清空。
   * ---------------------------------------------------------------- */
  const NC_CARD_CLS = 'nc-result-card';
  const NC_SERP_ENGINES = [
    { host: 'baidu.com',  root: '#content_left', unit: '#content_left > div',
      on: () => /(\/s\?|&wd=|\?wd=|&word=)/.test(HREF()) && !inHref('&rtt=') },
    { host: 'bing.com',   root: '#b_results',    unit: '#b_results > li.b_algo',
      on: () => inHref('/search?') && inHref('q=') },
    { host: 'google.com', root: '#rso',          unit: null, title: 'h3',
      on: () => inHref('/search?') },
    { host: 'yandex.com', root: '#search-result', unit: '.serp-item',
      on: () => inHref('/search/') && inHref('text=') },
    { host: 'so.com',     root: '#container',     unit: 'li.res-list',
      on: () => inHref('so.com/s') }
  ];
  const onDomReady = (fn) => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  };
  function inHost(h) { return HOST.includes(h); }
  function inHref(h) { return HREF().includes(h); }

  // 统一轻提示（替代分散的 notify / 设置面板 toast，安东蓝配色）
  function zkToast(msg, opts) {
    opts = opts || {};
    // 【i18n】仅繁体模式：所有 toast 文案（不管调用方有没有 t() 包装）统一转繁。
    //   这样未进字典的提示（如「已开启「xx」全部选项」「设置已保存，刷新后生效」）
    //   在繁体模式下也自动跟着转。en 模式不触发 s2t（英文字符不受字形映射影响）；
    //   en 模式调用方需自行包 t()（t() 内 en 缺失键自动回退简中，至少用户看到 key 字符串而非乱码）。
    if (uiLang() === 'zh-TW' && typeof msg === 'string') msg = s2t(msg);
    const type = opts.type || 'ok';
    const dur = opts.dur || 2600;
    const top = !!opts.top;
    try {
      let el = document.getElementById('zk-toast');
      if (el) el.remove();
      el = document.createElement('div');
      el.id = 'zk-toast';
      const bg = type === 'err'
        ? 'linear-gradient(135deg,#ff5252,#ff7875)'
        : 'linear-gradient(135deg,#1677ff,#38bdf8)';
      const ring = type === 'err' ? 'rgba(255,82,82,.35)' : 'rgba(22,119,255,.35)';
      const glyph = type === 'err' ? '\u2715' : '\u2713';
      el.innerHTML = '';
      const ic = document.createElement('span');
      ic.textContent = glyph;
      ic.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;margin-right:8px;border-radius:50%;background:rgba(255,255,255,.22);font-size:11px;font-weight:700;line-height:18px;flex:0 0 auto';
      const tx = document.createElement('span');
      tx.textContent = msg;
      el.appendChild(ic); el.appendChild(tx);
      const offY = top ? '-14px' : '14px';
      el.style.cssText = 'position:fixed;' + (top ? 'top:60px;' : 'bottom:30px;') + 'left:50%;z-index:' + NC_Z_TOP + ';' +
        'background:' + bg + ';color:#fff;padding:10px 22px;border-radius:999px;' +
        'font-size:13px;font-weight:500;font-family:-apple-system,"Microsoft YaHei",sans-serif;' +
        'box-shadow:0 8px 28px ' + ring + ',0 2px 8px rgba(15,23,42,.18);' +
        'display:inline-flex;align-items:center;pointer-events:none;max-width:min(86vw,460px);' +
        'opacity:0;transform:translateX(-50%) translateY(' + offY + ') scale(.94);' +
        'transition:opacity .26s ease,transform .32s cubic-bezier(.25,.8,.25,1)';
      requestAnimationFrame(function () {
        el.style.opacity = '1';
        el.style.transform = 'translateX(-50%) translateY(0) scale(1)';
      });
      (document.body || document.documentElement).appendChild(el);
      setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50%) translateY(' + (top ? '-10px' : '10px') + ') scale(.96)';
        setTimeout(() => el.remove(), 320);
      }, dur);
    } catch (e) {}
  }

  // 全局轻提示（供各站点处理器反馈状态，转发到统一 zkToast）
  function notify(msg, type) { zkToast(msg, { type: type === 'err' ? 'err' : 'ok', dur: 2600 }); }

  /* ----------------------------------------------------------------
   * 主题化对话框（替代浏览器原生 confirm/alert）
   * 目标：所有危险/确认/结果提示都用脚本自身的安东蓝 UI 风格，
   *   取代浏览器原生 confirm/alert 的「裸白底 + 系统字体 + 阻塞页面」。
   *   zkConfirm(message, opts)  → Promise<boolean>  确定 true / 取消 false
   *   zkAlert(message, opts)     → Promise<void>
   *
   * 关闭策略（用户要求 v1.0.x："引起用户重视"）：
   *   - opts.dismissable === false 时：不绑定 Esc 键，不绑定点遮罩外部点击。
   *     关闭只能通过「确定」「取消」两个按钮触发。
   *   - opts.dismissable === true  时：仍允许 Esc 键与点遮罩外部关闭（体验向 alert 看齐）。
   *   - 默认：zkConfirm 永远 dismissable:false（确认/删除必须按按钮）；
   *          zkAlert 在 danger:true 时 dismissable:false（删除失败必须按按钮），
   *          普通成功提示仍 dismissable:true（Esc 一键收）。
   *
   * 实现注意：
   *   - 样式全部内联（吸取教训：不依赖注入 <style>，防止被 CSP/页面脚本清除）
   *   - 挂在 document.body，z-index 用 NC_Z_TOP 最高层
   * ---------------------------------------------------------------- */
  function zkEscH(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function zkDialog(opts) {
    return new Promise(function (resolve) {
      opts = opts || {};
      const title = opts.title || (opts.danger ? '危险操作' : '提示');
      const msg = opts.message || '';
      const okText = opts.okText || '确定';
      const cancelText = opts.cancelText || '取消';
      const showCancel = !!opts.showCancel;
      const danger = !!opts.danger;
      // 默认关闭策略：危险/确认必须按按钮；普通提示仍允许 Esc + 点遮罩外部关闭。
      // 调用方可显式 opts.dismissable=true/false 覆盖默认。
      const dismissable = opts.dismissable === undefined ? !danger : !!opts.dismissable;
      const accent = danger ? '#ef4444' : '#1677ff';
      const old = document.getElementById('zk-dlg'); if (old) old.remove();
      const dlg = document.createElement('div');
      dlg.id = 'zk-dlg';
      dlg.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:' + NC_Z_TOP + ';background:rgba(15,23,42,.55);display:flex;align-items:center;justify-content:center;';
      const box = document.createElement('div');
      box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
      box.style.cssText = 'background:#fff;border-radius:14px;width:400px;max-width:92vw;box-shadow:0 20px 60px rgba(0,0,0,.3);overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif;color:#1f2937;';
      const okBtn = 'padding:9px 20px;border:none;border-radius:8px;background:' + accent + ';color:#fff;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 4px 14px ' + accent + '40;transition:filter .15s;';
      const cancelBtn = 'padding:9px 20px;border:1px solid #d0d7e2;background:#fff;color:#475569;font-size:13px;font-weight:600;border-radius:8px;cursor:pointer;';
      const dismissHint = dismissable
        ? '<div style="font-size:11.5px;color:#94a3b8;margin-top:8px;line-height:1.5">提示：可按 Esc 或点击此区域外部关闭</div>'
        : '<div style="font-size:11.5px;color:#94a3b8;margin-top:8px;line-height:1.5">请使用下方按钮完成操作</div>';
      box.innerHTML = ''
        + '<div style="padding:18px 20px 0;display:flex;align-items:center;gap:10px">'
        +   '<span style="width:28px;height:28px;border-radius:50%;background:' + accent + '1f;color:' + accent + ';font-size:16px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto">' + (danger ? '!' : 'i') + '</span>'
        +   '<div style="font-size:15px;font-weight:700;color:#0f172a">' + zkEscH(title) + '</div>'
        + '</div>'
        + '<div style="padding:12px 20px 20px;font-size:13.5px;line-height:1.7;color:#475569;white-space:pre-line;word-break:break-word">' + zkEscH(msg) + dismissHint + '</div>'
        + '<div style="display:flex;justify-content:flex-end;gap:10px;padding:14px 20px 18px;border-top:1px solid #eef2f7">'
        +   (showCancel ? '<button data-act="cancel" style="' + cancelBtn + '">' + zkEscH(cancelText) + '</button>' : '')
        +   '<button data-act="ok" style="' + okBtn + '">' + zkEscH(okText) + '</button>'
        + '</div>';
      dlg.appendChild(box);
      (document.body || document.documentElement).appendChild(dlg);
      // 必须先定义再绑定（cleanup 闭包引用 onEsc）
      function onEsc(e) { if (e && e.key === 'Escape') { close(showCancel ? false : true); } }
      function cleanup() { document.removeEventListener('keydown', onEsc); }
      function close(v) { cleanup(); try { dlg.remove(); } catch (e) {} resolve(v); }
      // 只有 dismissable=true 时才允许「Esc」「点遮罩外部」关闭，否则这两个事件直接不绑定 → 弹窗只能按按钮关。
      if (dismissable) {
        document.addEventListener('keydown', onEsc);
        dlg.addEventListener('click', function (e) { if (e.target === dlg) close(showCancel ? false : true); });
      }
      const okEl = box.querySelector('[data-act="ok"]');
      const cancelEl = box.querySelector('[data-act="cancel"]');
      if (okEl) okEl.onclick = function () { close(true); };
      if (cancelEl) cancelEl.onclick = function () { close(false); };
      try { (okEl || cancelEl).focus(); } catch (e) {}
    });
  }
  /** 确认框：默认 dismissable:false，确认/删除必须按按钮才能关闭 */
  function zkConfirm(message, opts) {
    const o = Object.assign({}, opts, { message: message, showCancel: true });
    if (o.dismissable === undefined) o.dismissable = false;
    return zkDialog(o);
  }
  /** 提示框：危险结果默认 dismissable:false，普通通知 dismissable:true（Esc 一键收） */
  function zkAlert(message, opts) {
    const o = Object.assign({}, opts, { message: message, showCancel: false, okText: (opts && opts.okText) || '知道了' });
    if (o.dismissable === undefined) o.dismissable = !o.danger;
    return zkDialog(o);
  }


  /* ================================================================
   *  0.2 系统暗黑模式检测
   * ================================================================ */
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  /* ================================================================
   *  1. CSS 规则注入（文档加载前注入，最高性能）
   * ================================================================ */
  function injectCSS() {
    if (isPaused()) return;
    const cfg = getScriptCfg();
    const rules = [];

    /* ── 域名作用域守卫（v10.2.0 性能整改）──────────────────────────────
     * 历史问题：本函数过去只按「配置开关」拼接 CSS，完全不判断当前域名。
     * 于是在 youtube.com 看视频时，百度贴吧/文库/经验/图片、知乎、B站、
     * CSDN 等上百条与当前页无关的选择器仍被 GM_addStyle 全量注入，
     * 浏览器每次样式计算都要拿这些规则遍历整个 DOM 做匹配——纯浪费。
     *
     * 现在站点专属块一律加域名守卫，只注入与当前站点相关的规则。
     * 注意：通用块（广告网络 / 通用悬浮 / 暗黑）必须保持全站生效，
     * 因为百度联盟 pos.baidu.com、Google adsbygoogle 等会寄生在任意第三方小站。
     * 行为保持：在各自目标站点上，注入的规则与整改前逐字符一致。
     */
    const on = {
      baidu:  inHost('baidu.com'),
      google: inHost('google.com') || inHost('google.com.hk'),
      bing:   inHost('bing.com'),
      so:     inHost('so.com'),
      zhihu:  inHost('zhihu.com'),
      bili:   inHost('bilibili.com'),
      douban: inHost('douban.com'),
      csdn:   inHost('csdn.net'),
      yandex: inHost('yandex.com'),
      xhs:    inHost('xiaohongshu.com'),
      juejin: inHost('juejin.cn'),
      sf:     inHost('segmentfault.com')
    };

    // === 通用广告网络（2026 更新） ===
    rules.push(
      '.adsbygoogle,[id*="google_ads"],[data-google-query-id],[data-ad-status],script[src*="adsbygoogle.js"],script[src*="g.doubleclick.net"]{display:none!important}',
      'script[src*="pos.baidu.com"],iframe[src*="pos.baidu.com"]{display:none!important}',
      'iframe[src*="//googleads"],iframe[src*="mediav.com"]{display:none!important}',
      'div[class*="wwads-cn"],div[data-type="GoogleRender"],div[data-adblockkey]{display:none!important}',
      'div[id*="google_ads_iframe"],ins.adsbygoogle{display:none!important;width:0!important;height:0!important;overflow:hidden!important}',
      'div[data-testid="ad"]{display:none!important}'
      // 注意：X/Twitter 的普通视频播放器内部也使用 data-testid="placementTracking"，
      // 全局隐藏会连正常推文视频一起抹掉；推广推文已在 processTwitter 中按文本识别处理。
    );

    // === 百度搜索（2026 更新） ===
    if (cfg.kgbaidued && on.baidu) {
      rules.push(
        '[cmatchid],.ec-pc_mat_c_banner__cc_banner_background_b{display:none!important}',
        '.ec_wise_ad,.ec-result-inner,.c-result[srcid="xcx_multi"],.c-result[srcid="ad"],.ec-ad-result{display:none!important}',
        'div[data-module="b"],div[class*="c-container ec_resitem"],div[class*="c-container ec-container"]{display:none!important}',
        '.result-op[tpl="sp_hot_sale"],.result-op[tpl="b2b_prod"],.san-card[tpl="feed-ad"]{display:none!important}',
        '.ec-ad-row,.ec_ad_results,.ec_wise_pp,.ec_wise_im,.ec_adv_{display:none!important}',
        'div[class*="ec-pc_mat"][class*="ad"],div[class*="new-pmd"][class*="ad"]{display:none!important}',
        '.c-gap-top-small[class*="ad"]{display:none!important}'
      );
    }
    // 百度热搜榜使用 html class 控制，支持设置面板实时切换
    if (on.baidu) rules.push('html.adc-hide-baiduhot .hot-news-wrapper,html.adc-hide-baiduhot #s-hotsearch-wrapper,html.adc-hide-baiduhot .s-hotsearch-wrapper,html.adc-hide-baiduhot .hotsearch-box,html.adc-hide-baiduhot [class*="hotsearch"],html.adc-hide-baiduhot #con-ar,html.adc-hide-baiduhot #searchTag,html.adc-hide-baiduhot .guide-info-new,html.adc-hide-baiduhot .select-search-ai-guide,html.adc-hide-baiduhot .FYB_RD,html.adc-hide-baiduhot #content_right .cr-content{display:none!important}');

    // === 百度知道 ===
    if (cfg.kgbaidued && on.baidu) {
      rules.push(
        '.shop-entrance,.activity-entry,.task-list-button,.bannerdown,.aside.fixheight,.wgt-bottom-ask,.leftup,.wgt-iknow-special-business{display:none!important}',
        '.feed-recommend-list,.wgt-ads,.wgt-bottom-union,.adTopImg,.exp-topwld-tip{display:none!important}',
        '#knowledge-answer,.grid-r.qb-side,#wgt-ecom-banner,#wgt-ecom-right{display:none!important}',
        '.question-number-text-chain,.ec-pc_mat_coeus__related_link_text-content{display:none!important}',
        '.ecs-wraper,.wap-youx-change-asp,#feed-recommend,[class*="ecom-ads"]{display:none!important}',
        'div[class^="wgt-vva"]{display:none!important}'
      );
    }

    // === 百度百科 ===
    if (cfg.kgbaidued && on.baidu) {
      rules.push(
        '.yitiao-container,.configModuleBanner,.topA,.right-ad,.bottom-recommend-wrapper,.lemmaWgt-promotion-vbaike,.lemmaWgt-promotion-slide,#side_box_unionAd,#navbarAdNew,.userbar_mall{display:none!important}',
        'div[class="yitiao-content J-yitiao-content"]{display:none!important}'
      );
    }

    // === 百度文库 ===
    if (cfg.kgbaidued && on.baidu) {
      rules.push(
        '.banner-ad,.ad-box,#banurl,.vip-card,.zsj-topbar,.lastcell-dialog,.zsj-toppos,.fc-result-container{display:none!important}',
        '#fengchaoad,.adlist-wrap,.yuedu-recommend-wrap,.search-aside-adWrap,.fc-first-result-wrap,.fc-result{display:none!important}',
        '.hx-bottom-wrapper,.hx-warp,.fc-fold-page,.hx-recom-wrapper,.relative-recommend-wrapper,.fc-container,.union-ad-bottom{display:none!important}',
        '.ad-vip-close-bottom,.operation-wrapper,.relative-course-wrapper,.hot-search-wrapper,.hx-right-wrapper,#relative-videos-wrap{display:none!important}',
        '.add-has-money-pay,.top-ads-banner-wrap,.wangpan-tip,.new-user-discount-tip,.pay-vip-btn-wrap,.relative-doc-ad-wrapper,.view-like-recom-fc{display:none!important}',
        '.middle-box-root,.fc-ad-contain,.shops-hot,.b-bigpic-root,.video-rec-wrap,.fold-pager.with-margin{display:none!important}',
        '.new-guideapp-card-btn.new-guideapp-card-animation{display:none!important}'
      );
    }

    // === 百度图片 ===
    if (cfg.kgbaidued && on.baidu) {
      rules.push('li.newfcImgli,#pnlBeforeContent,.fcImgli{display:none!important}');
      rules.push('.text-link-ads,.rsresult-card,#adCard{display:none!important}');
    }

    // === 百度视频 ===
    if (cfg.kgbaidued && on.baidu) {
      rules.push(
        '#PCallpagesidebar1,#PCallpagesidebar2,.bdvideo-adver-carousel,.section-ad,.full-collunm-ad,.top-ad-cont,.side-content{display:none!important}',
        '[id*="adone"],[id*="adtwo"],#pallcommoncolumnad,#index_right_top,#qzfcadid,#pcshortchannelTopRight,#detail_adm_right,.ctt-adver1-banner{display:none!important}',
        '[id*="PCDetailPageTopRightList"],[id*="channelBannerAdver"],[id*="adv-carousel-item"],[id*="FeedAdSys"],[id*="TabAd"]{display:none!important}',
        '#searchPagefeedBanner,#searchResultAdOne,#searchHotShortSeven,#searchHotShortSevenTwo{display:none!important}'
      );
    }

    // === 百度经验 ===
    if (cfg.kgbaidued && on.baidu) {
      rules.push(
        '#fresh-share-exp-e,.wgt-income-money,.aside-pro-container,#bottom-ads-container,.magzine-list{display:none!important}',
        '.aside-wrap.wgt-cms-banner,.right-fixed-related-wrap,.ad-card,.rel-exp-feed-ad-item{display:none!important}'
      );
    }

    // === 百度贴吧 ===
    if (cfg.kgbaidued && on.baidu) {
      rules.push(
        '.bus-top-activity-wrap,.plat_recom_carousel,.activity_head,#branding_ads{display:none!important}',
        '#fc-wrap,#mediago-frs-aside,#mediago-tb-pb-list-aside,.fengchao-wrap,.fengchao-wrap-box{display:none!important}',
        '[id*="mediago-tb-"],[ad-dom-img]{display:none!important}',
        '#aside-ad-wrapper,.fengchao-wrap-feed,div.l_post[data-field="{}"]{display:none!important}',
        '.banner-wrapper-defensive,.fengchao-banner-defensive,.tb-banner-wrapper-defensive.tb-banner.tb-threadlist__item{display:none!important}'
      );
    }

    // === Google 搜索（2026 更新） ===
    if (cfg.kggoogleed && on.google) {
      rules.push(
        '#taw,#bottomads,div[id*="google_ads"],div[data-google-query-id]{display:none!important}',
        'div[data-text-ad],g-more-link,div[aria-label="Ads"],div[data-hveid][jsaction*="ad"]{display:none!important}',
        '.commercial-unit-desktop-top,.commercial-unit-desktop-rhs{display:none!important}',
        '.mnr-c.xpd.O9g5cc.uUPGi{display:none!important}'
      );
    }
    // Google AI Overview hiding
    if (cfg.googleAI === true && on.google) {
      rules.push('div[data-testid="ai-overview"],.hdzaWe,.cUnQKe{display:none!important}');
    }

    // === Bing 搜索 ===
    if (cfg.kgbinged && on.bing) {
      rules.push('.b_ad,.b_bingoad,.b_adTop,.adsLine{display:none!important}');
    }
    // Bing AI / Copilot 侧边栏隐藏
    if (cfg.bingAI === true && on.bing) {
      rules.push('#b_sydConvCont,#b_sydResults,.b_sydConv,.cib-serp-main,.b_deep{display:none!important}');
    }

    // === 360 搜索 ===
    if (cfg.kg360ed && on.so) {
      rules.push(
        'ul[class*="mh-list g-list mh-sdk-sad"],div[class*="open-screen__ad"],#__lawnImageContainer{display:none!important}',
        '#e_idea_pp,#right_show_top,#right_show,#so_kw-ad,#lm-rightbottom,#res-mediav-right,.res-mediav-right,#mohe-360pic_sad--normal,#e_map_idea,#e_idea_pp_vip_bottom{display:none!important}',
        '.aside,#js-bussiness-bot-list,#js-mod-fixed-inn,#e_idea_wenda_leftBox,li.m-spread-middle.e-buss,#mohe-360pic_ext--normal{display:none!important}',
        'li[data-from="ad"],li>div[data-so-mod="list-ad"],li>div[data-so-c="list-ad"]{display:none!important}',
        '.right-ad-concern,#J-mod-right-ad-interest,#J-mod-right-recommend,.doc-widget-rightbanner,.box-bd.cl.js-plus-body,.boxwrap{display:none!important}',
        '.rt-side,.side-mod,#card_container,div[class^="g-ad-card"],div.tg-wrap,div[data-so-biz-type]{display:none!important}',
        '.g-card.res-list.has-summary,li[data-so-mod="ad"],li.recommend-item__cm.recommend-item__no-img{display:none!important}',
        'li.v-list-item:empty,li[data-so-mod="ad"],a.link.js-ad-curl,[class*="info-flow__ad"],[class*="open-screen__ad"]{display:none!important}',
        '.left-rec-list.js-left-flow-busi,#attention,.mod-detail-normal.pt25.hide.js-mod-flow,article.card,article.card-bor,.busi-article.js-busi-article,.js-relate-list,ul.relate-list,.g-card.recflow-list.js-recflow-list,#js-sd-list{display:none!important}'
      );
    }

    // === 知乎（2026 更新） ===
    if (cfg.kgzhihued && on.zhihu) {
      rules.push(
        '.Pc-card.Card,.Pc-word,.Pc-feedAd,.Banner-adsense,a.MBannerAd,a.MHotFeedAd,.Card.RelatedReadings{display:none!important}',
        '.KfeCollection-PcCollegeCard,.KfeCollection-AnswerListCard{display:none!important}',
        '.css-4k0hzb,.MobileAppHeader-link{display:none!important}',
        '.Question-sideColumn>.Sticky{display:none!important}',
        '.RichContent-actions .Button--blue,.ContentItem-actions .Button--blue{display:none!important}'
      );
    }

    // === B站（2026 更新） ===
    if (cfg.kgbilied && on.bili) {
      rules.push(
        '.flip-view.p-relative.over-hidden.w-100{display:none!important}',
        '.bili-video-card__info--ad,.video-page-special-card,.ad-block,.ad-report.video-card-ad-small{display:none!important}',
        '.floor-single-card[data-loc-id],.banner-card,.bili-live-card__info--ad{display:none!important}',
        '.recommend-list-v1 .ad-card,.pop-live-small-mode,.bili-header__channel>div:last-child{display:none!important}',
        'a[href*="cm.bilibili.com/cm/api/fees"],a[href*="cm.bilibili.com"]{display:none!important}',
        '.video-page-special-card,.bpx-player-ending-activity{display:none!important}',
        '.login-tip,.bili-mini-login{display:none!important}'
      );
    }

    // === 豆瓣 ===
    if (cfg.kgdoubaned && on.douban) {
      rules.push(
        'div[ad-status="appended"]{display:none!important}',
        '.billboard,.login-pop,.TalionNav-static{display:none!important}'
      );
    }

    // === CSDN（2026 更新） ===
    if (cfg.csdnAd && on.csdn) {
      rules.push(
        '.wwads-cn.wwads-vertical,.ad_fullWidth,#kp_box_blog_up,#kp_box_www_swiper{display:none!important}',
        '#blogExtensionBox,#kunpeng-sc-csdn-ad,.recommend-right,.recommend-ad-box{display:none!important}',
        '.passport-login-container,.weixin-shadowbox.wap-shadowbox,.hide-article-box.hide-article-pos.text-center,.readall_box{display:none!important}',
        '.csdn-side-toolbar .toolbar-ad,.csdn-toolbar-ad,.template-box,.recommend-box{display:none!important}',
        '.blog_container_aside .aside-box.kind_person,.csdn-ads,.article-info-box{display:none!important}'
      );
    }

    // === Yandex 搜索广告 ===
    if (cfg.kgyandexed && on.yandex) {
      rules.push(
        '.serp-item__ad,[class*="advert"],[data-fast-wzrd]{display:none!important}'
      );
    }

    // === 小红书（页面广告清理） ===
    if (cfg.xhsclean && on.xhs) {
      rules.push(
        '.login-popup-container,.login-container,.sign-container,.login-mask{display:none!important}',
        '.side-bar,.sidebar{display:none!important}',
        '.ad-badge,[class*="sponsor"],[class*="Sponsor"],[class*="promote"],[class*="Promote"]{display:none!important}'
      );
    }

    // === 掘金（广告清理） ===
    if (cfg.juejinclean && on.juejin) {
      rules.push(
        '.login-mask,.login-dialog,.auth-modal{display:none!important}',
        '.sidebar,.side-bar,.aside,.article-aside{display:none!important}',
        '[class*="wwads"],[class*="sponsor"],[class*="promote"]{display:none!important}'
      );
    }

    // === 思否 SegmentFault（广告清理） ===
    if (cfg.sfclean && on.sf) {
      rules.push(
        '.login-dialog,.login-mask{display:none!important}',
        '.sf-hl-ad,.article__ad,.ad-box,[class*="sf-ads"],[class*="sfAds"],.aside__ad{display:none!important}'
      );
    }

    // === 通用悬浮广告 ===
    rules.push(
      '.fixed_s{display:none!important}',
      'div.exo_wrapper{display:none!important}',
      '#HMcoupletDivleft,#HMcoupletDivright,#hbidbox,#HMRichBox{display:none!important}',
      '#fix_bottom_dom,#HMCOVER_ID1{display:none!important}',
      'div[id^="cproIframe"],div[id^="cproIframeholder"]{display:none!important}'
    );
    // 以下规则非常宽泛，在 X/Twitter 上容易误伤视频/媒体容器；
    // X 的推广推文由 processTwitter 单独处理，这里不再注入。
    if (!inHost('twitter.com') && !inHost('x.com')) {
      rules.push(
        'div.ad-container{display:none!important}',
        'div[class*="-ad-"],div[class*="_ad_"]:not([class*="head"]):not([class*="header"]){display:none!important}'
      );
    }

    // === 搜索结果 CSS 美化（各引擎独立开关，按需注入） ===
    injectSearchBeautifyCSS();

    // === 暗黑模式全局CSS ===
    if (cfg.darkMode) {
      injectDarkModeCSS();
    }

    if (rules.length) {
      const allRules = rules.join('');
      // 可观测性：暴露本次实际注入的规则条数，便于沙箱 / 控制台核查「按域名裁剪」是否生效
      window.__NC_CSS_RULES = rules.length;
      dbg('[NetClean] CSS 注入', rules.length, '条规则 @', HOST);
      GM_addStyle(allRules);
      registerBlockedSelectors(allRules);
    }
  }

  /* ================================================================
   *  搜索结果美化：百度 / Google / Bing 三端共用同一套卡片样式
   *  ---------------------------------------------------------------
   *  实现要点：先用 ncTagResultUnits() 给「单条结果」打上 .nc-result-card，
   *  再用「引擎根容器 + 卡片类」限定作用域注入同一份 CSS。
   *  好处：① 三端视觉 100% 一致；② Google 改版后只要标题还在就能继续工作。
   * ================================================================ */

  // 启发式：从标题向上收敛到「只包住这一个标题」的最大容器，即单条结果
  function ncDetectUnits(root, titleSel) {
    const titles = Array.from(root.querySelectorAll(titleSel));
    const units = [];
    for (const t of titles) {
      let el = t, guard = 0;
      while (el && el !== root && el.parentElement && el.parentElement !== root && guard++ < 12) {
        const p = el.parentElement;
        // 父级含多个标题 ⇒ 它已是「结果列表容器」，再往上就套错层了
        if (p.querySelectorAll(titleSel).length > 1) break;
        el = p;
      }
      if (el && el !== root && units.indexOf(el) === -1) units.push(el);
    }
    // 去掉互相嵌套的（只留最外层，避免双层描边）
    return units.filter(el => !units.some(o => o !== el && o.contains(el)));
  }

  // 给当前搜索引擎的结果卡片打标，返回本次标记数量
  function ncTagResultUnits() {
    if (IS_MOBILE) return 0;
    for (const e of NC_SERP_ENGINES) {
      if (!inHost(e.host) || !e.on()) continue;
      const root = $(e.root);
      if (!root) return 0;
      // 每轮先清标记：换页 / 增量加载后不会残留脏卡片
      root.querySelectorAll('.' + NC_CARD_CLS).forEach(el => el.classList.remove(NC_CARD_CLS));
      // 注意：unit 选择器带根容器 id（如 '#content_left > div'），必须在 document 上查。
      // 元素级 querySelectorAll 要求选择器最左侧匹配 root 的「后代」，
      // root 自身不算自己的后代 —— 写成 $$(e.unit, root) 会恒返回 0（历史 bug）。
      const units = e.unit ? $$(e.unit) : ncDetectUnits(root, e.title);
      let n = 0;
      for (const u of units) {
        const tag = u.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') continue;
        if (!(u.textContent || '').trim()) continue;
        // 【B-美化-01 百度热搜 AI 卡文字被裁】百度新版「聚合卡」：一层 c-group-wrapper 包着
        //   多条 result-op（AI 热搜 rel_baikan_index / 延展热点 rel_omnipotent / 百科聚合 rel_entity）。
        //   整包打成一张大卡后，卡片级 padding:20px 22px + contain:paint 会在百度自有排版
        //   （cosd-markdown / cos-line-clamp 固定高度）外面再收一层内容盒 → 标题/摘要右侧
        //   截断、摘要第三行被裁一半。普通 result-op 卡从未出现此问题 → 跳过 wrapper，
        //   把打标转移到子 .result-op，让它们各自成卡（与普通卡同等对待）。结构再变时
        //   （子选择器命不中）回退为原样打卡，宁可样式臃肿也不漏美化。
        if (u.classList.contains('c-group-wrapper') || u.classList.contains('c-group')) {
          const subs = u.querySelectorAll(':scope > .result-op');
          if (subs.length) {
            subs.forEach(s => {
              const t = s.tagName;
              if (t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT') return;
              if (!(s.textContent || '').trim()) return;
              s.classList.add(NC_CARD_CLS);
              n++;
            });
            continue;
          }
        }
        u.classList.add(NC_CARD_CLS);
        n++;
      }
      return n;
    }
    return 0;
  }

  // 三端共用的一份卡片样式（入参为逗号分隔的选择器组）
  function ncCardCss(base) {
    const list = base.split(',').map(s => s.trim()).filter(Boolean);
    const j = (suffix) => list.map(s => s + suffix).join(',');
    return `
      ${base}{
        position:relative!important;
        background:#fff!important;
        border:1px solid rgba(16,24,40,.07)!important;
        border-radius:16px!important;
        padding:20px 22px!important;
        margin:0 0 16px 0!important;
        box-shadow:0 1px 2px rgba(16,24,40,.04),0 6px 16px rgba(16,24,40,.045)!important;
        box-sizing:border-box!important;
        contain:layout paint style!important;
        outline-offset:3px!important;
        transition:transform .28s cubic-bezier(.22,1,.36,1),box-shadow .28s ease,border-color .2s ease,outline-color .15s ease!important
      }
      ${j('::after')}{
        content:''!important;
        position:absolute!important;
        left:18px!important;
        right:18px!important;
        bottom:0!important;
        height:2px!important;
        background:linear-gradient(90deg,#3476d2,#00b4aa)!important;
        border-radius:2px 2px 0 0!important;
        transform:scaleX(0)!important;
        transform-origin:left center!important;
        opacity:0!important;
        transition:transform .4s cubic-bezier(.22,1,.36,1),opacity .25s ease!important;
        pointer-events:none!important;
        z-index:1!important
      }
      ${j(':hover')}{
        transform:translateY(-3px)!important;
        box-shadow:0 12px 28px rgba(52,118,210,.13)!important;
        border-color:rgba(52,118,210,.22)!important
      }
      ${j(':hover::after')}{transform:scaleX(1)!important;opacity:1!important}
      ${j(':focus-within')}{outline:2px solid rgba(52,118,210,.3)!important;outline-offset:3px!important}
      ${j(':focus-within::after')}{transform:scaleX(1)!important;opacity:.65!important}
      ${j(':active')}{transform:translateY(-1px) scale(.995)!important}
      /* 标题：三端统一字号 / 字重 / 行高 / 配色
         【B-美化-01】 :not() 排除百度新版 COSC 组件标题（cosc-title / pc-title 等带
         cosc-/cosd-/cos-/pc-/marklang/rbk- 类名前缀）——这些模板自带字号/行高与
         固定高度 + line-clamp 排版，外来强制 18px/1.5 + margin 会把标题挤出裁剪区；
         对 Google/Bing/Yandex/360 无影响（它们的 h2/h3 不带这些类名） */
      ${j(' h3:not([class*="cosc-"]):not([class*="cosd-"]):not([class*="cos-"]):not([class*="pc-"]):not([class*="marklang"]):not([class*="rbk-"])')},${j(' h2:not([class*="cosc-"]):not([class*="cosd-"]):not([class*="cos-"]):not([class*="pc-"]):not([class*="marklang"]):not([class*="rbk-"])')},${j(' .t')}{
        font-size:18px!important;
        font-weight:600!important;
        line-height:1.5!important;
        margin:0 0 10px 0!important
      }
      ${j(' h3 a')},${j(' h2 a')},${j(' .t a')}{
        color:#1a0dab!important;
        text-decoration:none!important;
        transition:color .15s ease!important
      }
      ${j(' h3 a:visited')},${j(' h2 a:visited')},${j(' .t a:visited')}{color:#681da8!important}
      ${j(' h3 a:hover')},${j(' h2 a:hover')},${j(' .t a:hover')}{color:#3476d2!important;text-decoration:underline!important}
      /* 摘要：三端统一字号 / 行高 / 灰度（同样排除百度 COSC 新组件，理由同上：
         marklang-paragraph（AI 摘要）等自有排版被强制 14px/1.8 后会与容器定高冲突） */
      ${j(' p:not([class*="cosc-"]):not([class*="cosd-"]):not([class*="cos-"]):not([class*="pc-"]):not([class*="marklang"]):not([class*="rbk-"])')},${j(' .c-abstract')},${j(' .b_caption')},${j(' .VwiC3b')},${j(' .yDYNvb')}{
        font-size:14px!important;
        line-height:1.8!important;
        color:#4d5156!important
      }
      /* 元信息（来源 / 时间 / 网址） */
      ${j(' cite')},${j(' .c-color-gray')},${j(' .c-showurl')},${j(' [class*="source"]')}{
        color:#70757a!important;
        font-size:12px!important;
        font-style:normal!important
      }
      /* 缩略图统一圆角 */
      ${j(' img')}{border-radius:10px!important}
    `;
  }

  // 搜索结果美化 CSS（各引擎独立开关，但共用同一套卡片样式）
  function injectSearchBeautifyCSS() {
    const cfg = getScriptCfg();
    if (IS_MOBILE) return;
    const scopes = [];
    if (cfg.baiducss && inHost('baidu.com') && /(\/s\?|&wd=|\?wd=|&word=)/.test(HREF()) && !inHref('&rtt=')) {
      scopes.push('#content_left');
      GM_addStyle('#container,#wrapper{background:#fff!important}');
    }
    if (cfg.googlecss && inHost('google.com') && inHref('/search?')) scopes.push('#rso');
    if (cfg.bingcss && inHost('bing.com') && inHref('/search?') && inHref('q=')) scopes.push('#b_results');
    if (cfg.so360css && inHost('so.com') && inHref('so.com/s')) scopes.push('#container');
    if (cfg.yandexcss && inHost('yandex.com') && inHref('/search/') && inHref('text=')) scopes.push('#search-result');
    if (!scopes.length) return;
    // 按引擎根容器限定作用域，三端共用同一份卡片样式 → 视觉完全一致
    GM_addStyle(ncCardCss(scopes.map(s => s + ' .' + NC_CARD_CLS).join(', ')));
  }

  // 暗黑模式注入（两级策略）
  //   ① 精修站点（百度 / Google / Bing）：选择器级重配色，卡片质感最好
  //   ② 其余站点：整页 CSS filter 反色（invert + hue-rotate）
  //      渲染层像素级反转 → 背景与文字颜色自动对调，无需逐站适配；
  //      图片/视频/脚本自身 UI 再二次反转还原
  // 运行时「残留亮块」自适应扫描：静态选择器无法覆盖站点运行时生成的未知容器（打不完的地鼠），
  // 这里反其道而行——不猜是谁画的，直接遍历 DOM 找「体积够大 + 背景接近纯白」的块，打标后统一压暗。
  // 体积下限与透明度下限用于避开图标/小按钮；跳过脚本自身 UI，避免把设置面板也一并压暗。
  const NC_FORCED_DARK = 'nc-forced-dark';
  const NC_SCAN_FLAG = 'ncScanDone';
  const _ncStandDownNotified = {};
  let _ncForceScanTimer = null;
  let _ncForceObserverInited = false;
  function ncForceDarkScan() {
    try {
      const htmlEl = document.documentElement;
      if (!htmlEl || !htmlEl.classList.contains(DARK_CLASS)) return;
      /* 【v1.0.5 P2 清理】原此处有一行死分支 `ncIsFineDarkSite() && !contains(DARK_CLASS) return`——
         上一行已确认 DARK_CLASS 存在，本条件恒 false，从未生效。
         语义澄清：精修站点（百度/Google/Bing）【有意】也跑本扫描——扫描只标记
         近白背景（lum≥235）的漏网容器，精修 CSS 压暗过的暗底不会被二次打标，无双暗化风险 */
      const list = document.body ? document.body.querySelectorAll('*') : [];
      const max = Math.min(list.length, 4000);
      for (let i = 0; i < max; i++) {
        const el = list[i];
        if (el.dataset && el.dataset[NC_SCAN_FLAG] === '1') continue;
        if (!(el instanceof window.HTMLElement)) continue;
        if (el.dataset) el.dataset[NC_SCAN_FLAG] = '1';
        const tag = el.tagName.toLowerCase();
        if (tag === 'script' || tag === 'style' || tag === 'svg' || tag === 'img' ||
            tag === 'video' || tag === 'canvas' || tag === 'iframe' || tag === 'br' || tag === 'hr') continue;
        // 表单控件与其容器不参与压暗：输入框/文本域保持浅色才好输入（白底深字是正确观感）
        if (tag === 'input' || tag === 'textarea' || tag === 'select' || tag === 'button' ||
            tag === 'option' || tag === 'label') continue;
        if (el.isContentEditable) continue;
        // 输入区整体让行：搜索框/聊天输入框这类「白底深字」是正确观感，不该被压暗
        // 注意：只跳过真正承担输入职责的容器（form + id/input 命名的输入条自身），
        // 不要再用 [class*="chat"] 整个 class 含 chat 的模块都会跳过——
        // 百度首页中央 .chat-input-background_3edHa 就是反例（白底容器需要被压暗，
        // 否则用户看到的还是"中间一个白盒"）。
        if (el.closest && el.closest('form,[id*="input"],[id*="Input"],textarea#chat-textarea')) continue;
        // 先清掉旧标记：脚本更新后规则变严，之前误打的标记要能被撤销
        if (el.classList.contains(NC_FORCED_DARK)) el.classList.remove(NC_FORCED_DARK);
        // 跳过脚本自身 UI（设置面板 / toast / 弹窗 / 护眼蒙版 / 划词条）
        const idAttr = el.id || '';
        if (idAttr && /^(zk-|nc-|sh-)/.test(idAttr)) continue;
        if (el.closest && el.closest('#zk-set-cleaner-settings,#zk-toast,#zk-dlg,#nc-modal,#nc-eye-overlay,#sh-bar')) continue;
        let cs;
        try { cs = window.getComputedStyle(el); } catch (e) { continue; }
        const bg = (cs && cs.backgroundColor) || '';
        const m = bg.match(/rgba?\(([^)]+)\)/);
        if (!m) continue;
        const p = m[1].split(',').map(Number);
        const alpha = p.length > 3 ? p[3] : 1;
        if (alpha < 0.5) continue;                       // 半透明/透明背景不处理
        const lum = 0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2];
        if (lum < 235) continue;                          // 只命中「接近纯白」的块
        const r = el.getBoundingClientRect();
        if (r.width * r.height < 4000) continue;          // 小图标/小按钮不处理
        el.classList.add(NC_FORCED_DARK);
      }
    } catch (e) {}
  }
  function ncScheduleForceScan(delay) {
    try {
      if (_ncForceScanTimer) clearTimeout(_ncForceScanTimer);
      _ncForceScanTimer = setTimeout(() => { _ncForceScanTimer = null; ncForceDarkScan(); }, delay || 400);
    } catch (e) {}
  }
  function ncInitForceDarkObserver() {
    try {
      if (_ncForceObserverInited || !window.MutationObserver || !document.body) return;
      _ncForceObserverInited = true;
      const mo = new MutationObserver(() => ncScheduleForceScan(400));
      mo.observe(document.body, { childList: true, subtree: true });
      window.addEventListener('load', () => ncScheduleForceScan(600), { once: true });
    } catch (e) {}
  }

  function ncIsFineDarkSite() {
    return inHost('baidu.com') || inHost('google.com') || inHost('google.com.hk') || inHost('bing.com');
  }
  function injectDarkModeCSS() {
    if (!prefersDark.matches && !getScriptCfg().darkMode) return;

    /* ---- ① 精修站点：原有选择器级方案 + 文字对比度修复 ---- */
    if (ncIsFineDarkSite()) {
      GM_addStyle(`
      html.adc-dark-mode,html.adc-dark-mode body{background:#1a1a2e!important;color:#e0e0e0!important}
      html.adc-dark-mode :is(
        #wrapper #content_left>.c-container,#wrapper #content_left>.result-op,
        #wrapper #content_left>.result,#wrapper #content_left>.c-result,
        #wrapper #content_left>div[tpl],#wrapper #content_left>div[srcid],
        #rso div.g,#b_results li.b_algo,
        #content_left .nc-result-card,#rso .nc-result-card,#b_results .nc-result-card
      ){
        background:#16213e!important;
        color:#ccc!important;
        border-color:rgba(255,255,255,.06)!important;
        box-shadow:0 1px 2px rgba(0,0,0,.2),0 4px 12px rgba(0,0,0,.25)!important
      }
      html.adc-dark-mode :is(
        #wrapper #content_left>.c-container,#wrapper #content_left>.result-op,
        #wrapper #content_left>.result,#wrapper #content_left>.c-result,
        #wrapper #content_left>div[tpl],#wrapper #content_left>div[srcid],
        #rso div.g,#b_results li.b_algo,
        #content_left .nc-result-card,#rso .nc-result-card,#b_results .nc-result-card
      ):hover{
        background:#1a1a3e!important;
        border-color:rgba(126,184,255,.25)!important;
        box-shadow:0 10px 36px rgba(0,0,0,.35)!important
      }
      html.adc-dark-mode :is(
        #wrapper #content_left>.c-container,#wrapper #content_left>.result-op,
        #wrapper #content_left>.result,#wrapper #content_left>.c-result,
        #wrapper #content_left>div[tpl],#wrapper #content_left>div[srcid],
        #rso div.g,#b_results li.b_algo,
        #content_left .nc-result-card,#rso .nc-result-card,#b_results .nc-result-card
      ):focus-within{
        outline:2px solid rgba(126,184,255,.3)!important;
        outline-offset:2px!important
      }
      html.adc-dark-mode a{color:#7eb8ff!important}
      html.adc-dark-mode a:visited{color:#b388ff!important}
      html.adc-dark-mode input{background:#16213e!important;color:#e0e0e0!important;border-color:#333!important}
      /* 运行时自适应扫描兜底：任何"体积够大 + 接近纯白"的未知容器都会被打上此标记并统一压暗 */
      html.adc-dark-mode .nc-forced-dark{background-color:#1a1a2e!important}
      html.adc-dark-mode .nc-forced-dark :not(a):not(a *):not(svg):not(svg *):not(img):not(script):not(style){color:#ccc!important}
      html.adc-dark-mode .nc-forced-dark :is(a,a *){color:#7eb8ff!important}
      /* 卡内正文统一浅色：站点自带深灰/红色描述文字在暗底上不可读 */
      html.adc-dark-mode #wrapper #content_left :not(a):not(a *):not(script):not(style):not(svg):not(svg *):not(img){color:#ccc!important}
      /* 关键词高亮由站点红色改为暖橙，暗底可读且保留强调语义 */
      html.adc-dark-mode #wrapper #content_left em{color:#ffb454!important;font-style:normal}
      /* 右侧栏 / 热搜面板 / 头部搜索区补暗色 */
      html.adc-dark-mode :is(#content_right,.cr-content,.s-hotsearch-wrapper,#con-ceiling-wrapper,#head,.s_form,#form,.s_tab,#s_tab){
        background:#16213e!important;color:#ccc!important;border-color:rgba(255,255,255,.06)!important
      }
      html.adc-dark-mode :is(#content_right,.cr-content,.s-hotsearch-wrapper,#con-ceiling-wrapper) :not(a):not(a *):not(svg):not(svg *):not(img){color:#ccc!important}
      /* 页面级结构容器压暗（百度 body/#wrapper_wrapper 自带白底，卡片间露白即来源于此） */
      html.adc-dark-mode :is(#wrapper,#wrapper_wrapper,#container){background:transparent!important}
      html.adc-dark-mode :is(#content_left,#content_right,#con-ar,#s_wrap,#page,#rs_new,#help,.se_common_footer,#foot,.s-bottom){
        background:#1a1a2e!important
      }
      /* 链接颜色加强压制：百度自带规则（#wrapper #content_left h3 a 等）两级 id + !important，
         单层 html.adc-dark-mode a 压不住，此处用同等特异性 + 后置注入反压 */
      html.adc-dark-mode #wrapper_wrapper :is(#content_left,#content_right,#con-ar,#rs_new,#page) :is(a,a *):not(em):not(em *){
        color:#7eb8ff!important
      }
      html.adc-dark-mode #wrapper_wrapper :is(#content_left,#content_right,#con-ar,#rs_new,#page) :is(a,a *):not(em):not(em *):visited{
        color:#b388ff!important
      }
      /* 链接内关键词高亮保持暖橙（后置覆盖链接蓝） */
      html.adc-dark-mode #wrapper_wrapper #content_left a em{color:#ffb454!important}
      /* 百度 CSS 变量修正：首页组件消费 html 内联的 --sh-* 变量（白底/深字来源），
         样式表 !important 可覆盖非 important 的内联变量，整体翻转成暗色 token */
      html.adc-dark-mode{--sh-bg-rgb:26,26,46!important;--sh-text:#e0e0e0!important;--sh-hover-rgb:255,255,255!important;--sh-hover-op:.08!important;--sh-opacity:1!important;--sh-blur:0px!important;--sh-border:rgba(255,255,255,.08)!important}
      /* 百度首页：顶部导航条 / 热榜卡片 / 底部栏（#head 双 id 链提高特异性） */
      html.adc-dark-mode #head :is(#s-top-bar,#s-top-left,#s-hotsearch-wrapper,#hotsearch-content-wrapper,.s-hotsearch-title,.s-hotsearch-content,.hotsearch-item,#lm-new,#bottom_layer,#head_wrapper,.s-center-box,.s-top-nav){
        background:#16213e!important;color:#ccc!important
      }
      html.adc-dark-mode #head :is(#s-hotsearch-wrapper,#hotsearch-content-wrapper,#lm-new) :is(a,a *):not(svg *):not(em):not(em *){
        color:#7eb8ff!important
      }
      /* 百度首页（baidu.com/）特殊结构：中央 chat 输入区 + 热搜框自带白底
         - 稳定 id：#main-wrapper(ai-input) / #input-root / #chat-input-main / #chat-submit-button
         - hash class（可能变）：.chat-input-background_3edHa / .san-card / .chat-input-wrapper / .right-tools-wrapper
         - .s-hotsearch-content 整个 ul 是 #fff
         - #s_kw_wrap / #s_btn_wr / .s_btn 是经典搜索框
         这部分不能用 runtime scan 兜底（chat 容器之前被 [class*="chat"] 排除），所以直接精修；
         id 选择器特异性高，能压过百度内联/普通规则；hash class 作第二层共存（百度前端改版也不受影响） */
      html.adc-dark-mode :is(#main-wrapper,#input-root,#chat-input-main,.san-card,.chat-input-background_3edHa,.chat-input-wrapper,.chat-input-container,.right-tools-wrapper){
        background:#16213e!important;color:#e0e0e0!important;border-color:rgba(255,255,255,.08)!important
      }
      /* 聊天输入框内的文本域保持可输入、文字浅色（textarea 本体不压暗，只改文字/占位色） */
      html.adc-dark-mode :is(#main-wrapper,#chat-input-main) textarea{background:transparent!important;color:#e0e0e0!important}
      html.adc-dark-mode :is(#main-wrapper,#chat-input-main) textarea::placeholder{color:#6b7280!important}
      /* 输入区内的链接文字（文心助手跳转等）浅蓝 */
      html.adc-dark-mode :is(#main-wrapper,#input-root,#chat-input-main,.san-card) :is(a,a *):not(svg *):not(em):not(em *){color:#7eb8ff!important}
      /* 提交按钮"百度一下"：白底蓝字 → 暗底浅蓝 */
      html.adc-dark-mode #chat-submit-button{background:#1a1a2e!important;color:#7eb8ff!important;border-color:rgba(126,184,255,.5)!important}
      html.adc-dark-mode #chat-submit-button:hover{background:#16213e!important;color:#a8caff!important}
      /* 经典搜索框：#s_kw_wrap/.s_ipt_wr 输入条 + #s_btn_wr/.s_btn 提交按钮（备用入口） */
      html.adc-dark-mode :is(#s_kw_wrap,.s_ipt_wr,#s_btn_wr,.s_btn){
        background:#16213e!important;color:#e0e0e0!important;border-color:rgba(255,255,255,.08)!important
      }
      html.adc-dark-mode :is(#s_kw_wrap,.s_ipt_wr) input{background:transparent!important;color:#e0e0e0!important}
      /* 热搜 ul/li：内容是 #fff */
      html.adc-dark-mode :is(.s-hotsearch-content,.s-hotsearch-wrapper,#s-hotsearch-wrapper,.s-menu-container,#hotsearch-content-wrapper){
        background:#16213e!important;color:#e0e0e0!important;border-color:rgba(255,255,255,.08)!important
      }
      html.adc-dark-mode :is(.s-hotsearch-content,#hotsearch-content-wrapper) :is(a,a *):not(svg *){color:#e0e0e0!important}
      html.adc-dark-mode :is(.s-hotsearch-content,#hotsearch-content-wrapper) :is(a,a *):hover{color:#7eb8ff!important}
      /* 热搜标红徽章（热/新）在暗底上保持可辨 */
      html.adc-dark-mode .c-text-hot,html.adc-dark-mode .c-text-new{color:#ffb454!important}
      /* 文心助手胶囊按钮：白底蓝字 → 暗底浅蓝 */
      html.adc-dark-mode .guide-bub_2c8ND{background:rgba(78,110,242,.15)!important;color:#a8caff!important;border-color:rgba(126,184,255,.25)!important}
      /* 谷歌：补齐未被美化的裸 MjjYud 卡片与 .g 块；正文浅灰、链接用 Google 官方暗色蓝 #8ab4f8 */
      html.adc-dark-mode :is(#rso,#search) :is(.MjjYud,.g){
        background:#16213e!important;color:#ccc!important;
        border-color:rgba(255,255,255,.06)!important;
        box-shadow:0 1px 2px rgba(0,0,0,.2),0 4px 12px rgba(0,0,0,.25)!important
      }
      html.adc-dark-mode #rso :not(a):not(a *):not(svg):not(svg *):not(img):not(script):not(style){color:#ccc!important}
      html.adc-dark-mode :is(#search,#rso) :is(a,a *):not(svg *){color:#8ab4f8!important}
      html.adc-dark-mode :is(#search,#rso) :is(a,a *):not(svg *):visited{color:#c58af9!important}
      `);
      return;
    }

    /* ---- ② 通用兜底：整页 filter 反色，全站生效 ---- */
    GM_addStyle(`
      html.adc-dark-mode{filter:invert(1) hue-rotate(180deg)!important;background:#fff!important}
      /* 媒体内容二次反转，避免照片/视频变负片 */
      html.adc-dark-mode :is(img,video,picture,canvas,iframe,embed,object,svg,[style*="background-image"]){filter:invert(1) hue-rotate(180deg)}
      /* 脚本自身 UI 二次反转，保持安东蓝原色 */
      html.adc-dark-mode :is(#zk-set-cleaner-settings,#zk-set-help-backdrop,#zk-set-help-pop,#zk-bk-mgr,#zk-dlg,#nc-modal,#zk-toast,#zk-pause-indicator,#nc-paused-badge,#nc-rescue-box,#sh-bar){filter:invert(1) hue-rotate(180deg)}
      /* filter 会让 position:fixed 相对 html 定位（吸顶元素随页滚动）；
         护眼蒙版改为 absolute + 撑满 body 文档高度，保证仍覆盖整页 */
      html.adc-dark-mode body{position:relative!important}
      html.adc-dark-mode #nc-eye-overlay{position:absolute!important;height:100%!important;filter:invert(1) hue-rotate(180deg)}
    `);
  }

  /* ================================================================
   *  2. fetch/XHR 拦截层（网络级广告拦截）
   *  从源头阻止广告请求，节省带宽
   * ================================================================ */
  function initRequestInterceptor() {
    const cfg = getScriptCfg();
    const adDomains = [
      'doubleclick.net', 'googlesyndication.com', 'googleadservices.com',
      'pos.baidu.com', 'cpro.baidu.com', 'eiv.baidu.com', 'mobads.baidu.com',
      'mediav.com', 'tanx.com', 'mmstat.com', 'cpro.baidustatic.com',
      'cm.bilibili.com/cm/api/fees', 'api.bilibili.com/x/web-interface/promote',
      'wwads.cn', 'kunpeng-sc.csdn.net', 'kunpeng.csdn.net',
      'pstatp.com/obj/tetris', 's0.pstatp.com', 's3.pstatp.com',
      'adsmind.gdtimg.com', 'sdkclick.qcloud.com',
      'alog.umeng.com', 'umtrack.com',
      'youku.com/html/player/ad/', 'valp.atm.youku.com', 'valf.atm.youku.com',
      'livep.l.qq.com', 'ads.privacy.qq.com', 'btrace.video.qq.com'
    ];

    function isAdRequest(url) {
      if (!url || typeof url !== 'string') return false;
      return adDomains.some(d => url.includes(d));
    }

    function incBlocked(count) {
      if (!count) return;
      STATS.skippedAds += count;
      totalBlocked += count;
      siteBlocked[HOST] = (siteBlocked[HOST] || 0) + count;
      persistTotalStats();
    }

    // Hook fetch
    const origFetch = window.fetch;
    window.fetch = function(input, init) {
      const url = typeof input === 'string' ? input : (input && input.url ? input.url : '');
      if (!isPaused() && isAdRequest(url)) {
        STATS.fetch++;
        incBlocked(1);
        return Promise.reject(new Error('Ad request blocked'));
      }
      return origFetch.apply(this, arguments);
    };

    // Hook XMLHttpRequest
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
      if (!isPaused() && isAdRequest(url)) {
        this._blocked = true;
        STATS.fetch++;
        incBlocked(1);
      }
      return origOpen.apply(this, arguments);
    };
    const origSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
      if (this._blocked) {
        this.abort();
        return;
      }
      return origSend.apply(this, arguments);
    };
  }

  /* ================================================================
   *  3. MutationObserver 引擎 + IntersectionObserver
   * ================================================================ */
  const handlerRegistry = { _all: [] };
  let _activeHandlersCache = null;
  function registerHandler(fn, hosts) {
    _activeHandlersCache = null;
    if (!hosts || !hosts.length) {
      // 幂等：避免同一处理器被重复压入 _all（根治 processBaidu 类重复注册）
      if (!handlerRegistry._all.includes(fn)) handlerRegistry._all.push(fn);
      return;
    }
    for (const h of hosts) {
      handlerRegistry[h] = handlerRegistry[h] || [];
      if (!handlerRegistry[h].includes(fn)) handlerRegistry[h].push(fn);
    }
  }
  function getActiveHandlers() {
    if (_activeHandlersCache !== null) return _activeHandlersCache;
    const all = handlerRegistry._all.slice();
    for (const host in handlerRegistry) {
      if (host !== '_all' && HOST.includes(host)) all.push(...handlerRegistry[host]);
    }
    _activeHandlersCache = all;
    return all;
  }

  function scheduleProcess() {
    if (scheduleProcess._pending) return;
    scheduleProcess._pending = true;
    const idle = window.requestIdleCallback;
    if (idle) {
      idle(() => {
        scheduleProcess._pending = false;
        if (isPaused()) return;
        // 【重要】异常必须留痕：此前 catch 完全静默，导致「链式 forEach 抛 TypeError」
        // 这类错误长期无人察觉。开 __NC_DEBUG 后可在控制台看到，同时也挂到全局便于排查。
        getActiveHandlers().forEach(fn => {
          try { fn(); }
          catch (e) { window.__NC_LAST_ERR = e; dbg('[NetClean] handler 异常', (fn && fn.name) || fn, e); }
        });
        countBlockedAds();
      }, { timeout: 100 });
    } else {
      (window.requestAnimationFrame || (fn => setTimeout(fn, 16)))(() => {
        scheduleProcess._pending = false;
        if (isPaused()) return;
        // 【重要】异常必须留痕：此前 catch 完全静默，导致「链式 forEach 抛 TypeError」
        // 这类错误长期无人察觉。开 __NC_DEBUG 后可在控制台看到，同时也挂到全局便于排查。
        getActiveHandlers().forEach(fn => {
          try { fn(); }
          catch (e) { window.__NC_LAST_ERR = e; dbg('[NetClean] handler 异常', (fn && fn.name) || fn, e); }
        });
        countBlockedAds();
      });
    }
  }

  function startObserver() {
    let debounceTimer;
    function waitForBody() {
      if (document.body) {
        // 主 DOM 监听：复用统一管理器（与 processYouku / processTencentVideo / 验证码识别共享同一 body observer）
        ncObserve(document.body, function (mutations) {
          if (!mutations.some(m => m.addedNodes.length)) return;
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(scheduleProcess, 120);
        }, { childList: true, subtree: true });
        // 切回前台时补跑一次，避免后台期间累积的 DOM 变动被跳过
        document.addEventListener('visibilitychange', () => { if (!document.hidden) scheduleProcess(); });
        scheduleProcess();
      } else {
        requestAnimationFrame(waitForBody);
      }
    }
    waitForBody();
  }

  /* ================================================================
   *  3b. 统一 MutationObserver 管理器（ncObserve）
   *  - 相同 target 仅创建一个底层 Observer，回调以 Set 聚合，避免 Observer 无界累积；
   *  - 内置 document.hidden 跳过（后台标签页不再无谓扫描 DOM）；
   *  - 不同调用方对同 target 传入不同 options 时自动合并（childList/subtree/attributes/characterData + attributeFilter 取并集）；
   *  - 按引用计数拆除：仅当某 target 的最后一个回调移除时才 disconnect，互不误伤。
   * ================================================================ */
  const _ncObsMap = (typeof WeakMap !== 'undefined') ? new WeakMap() : null;
  function _mergeObsOptions(a, b) {
    const o = {
      childList: !!(a.childList || b.childList),
      subtree: !!(a.subtree || b.subtree),
      attributes: !!(a.attributes || b.attributes),
      characterData: !!(a.characterData || b.characterData)
    };
    if (o.attributes) {
      const f = {};
      (a.attributeFilter || []).forEach(function (x) { f[x] = 1; });
      (b.attributeFilter || []).forEach(function (x) { f[x] = 1; });
      const keys = Object.keys(f);
      if (keys.length) o.attributeFilter = keys;
    }
    return o;
  }
  function ncObserve(target, cb, opts) {
    if (!target || typeof cb !== 'function') return function () {};
    if (!_ncObsMap) {
      // 极老旧环境兜底：直接裸建一个独立 Observer（放弃合并能力，但保证功能可用）
      let o = null;
      try { o = new MutationObserver(cb); o.observe(target, opts || { childList: true, subtree: true }); } catch (e) {}
      return function () { try { if (o) o.disconnect(); } catch (e) {} };
    }
    let entry = _ncObsMap.get(target);
    if (!entry) {
      const options = opts || { childList: true, subtree: true };
      const cbs = new Set();
      const observer = new MutationObserver(function (muts) {
        if (document.hidden) return; // 后台标签页跳过，切回前台后由各自逻辑/visibilitychange 补跑
        cbs.forEach(function (fn) { try { fn(muts); } catch (e) {} });
      });
      try { observer.observe(target, options); } catch (e) { return function () {}; }
      entry = { observer: observer, cbs: cbs, options: options };
      _ncObsMap.set(target, entry);
    } else if (opts) {
      // 复用已有 Observer：合并 options（如 video 倍速仅 childList，好看暂停广告额外需要 attributes:class）
      const merged = _mergeObsOptions(entry.options, opts);
      if (JSON.stringify(merged) !== JSON.stringify(entry.options)) {
        entry.options = merged;
        try { entry.observer.observe(target, merged); } catch (e) {}
      }
    }
    entry.cbs.add(cb);
    return function ncUnobserve() {
      const e = _ncObsMap.get(target);
      if (!e) return;
      e.cbs.delete(cb);
      if (e.cbs.size === 0) {
        try { e.observer.disconnect(); } catch (err) {}
        _ncObsMap.delete(target);
      }
    };
  }

  // 播放前贴片广告跳过（优酷 / 腾讯视频共用）：点击跳过按钮 + 隐藏 VIP 浮层。
  // 仅在 body 上挂一个 MutationObserver，复用上方统一管理器；逻辑与原内联实现一致，仅选择器不同。
  function ncVideoPrerollAdSkip(skipSel, vipSel) {
    let _prerollT;
    ncObserve(document.body, function (muts) {
      if (!muts.some(m => m.addedNodes.length)) return;   // 仅新增节点时处理，避免每个 mutation 全文档空扫
      clearTimeout(_prerollT);
      _prerollT = setTimeout(() => {
        $$(skipSel).forEach(btn => { btn.click(); STATS.skippedAds++; });
        $$(vipSel).forEach(el => el.style.display = 'none');
      }, 150);
    }, { childList: true, subtree: true });
  }

  /* ================================================================
   *  3c. 统一定时器管理器（收口散落的 setInterval）
   * ----------------------------------------------------------------
   *  设计要点：
   *   ① 在脚本作用域内 shadow 原生 setInterval / clearInterval，使全部
   *      本站定时器自动经此收口，无需逐处改动 12+ 调用点；
   *   ② 页面卸载(pagehide)时统一清理，避免后台定时器泄漏；
   *   ③ 同 id 重复注册自动去重（先清旧再建新）；
   *   ④ 集中可观测（_ncTimers 持有全部句柄）。
   *  行为保持：ncInterval 透传给原生 setInterval，回调/间隔语义不变。
   * ================================================================ */
  const _nativeSetInterval = window.setInterval.bind(window);
  const _nativeClearInterval = window.clearInterval.bind(window);
  const _ncTimers = new Map(); // key: id(可选) 或 handle -> handle

  function ncInterval(fn, ms, id) {
    if (id != null) {
      const old = _ncTimers.get(id);
      if (old != null) { try { _nativeClearInterval(old); } catch (e) {} _ncTimers.delete(id); }
    }
    const h = _nativeSetInterval(fn, ms);
    _ncTimers.set(id != null ? id : h, h);
    return h;
  }
  function ncClearInterval(h) {
    try { _nativeClearInterval(h); } catch (e) {}
    for (const k of _ncTimers.keys()) { if (_ncTimers.get(k) === h) { _ncTimers.delete(k); break; } }
  }
  window.addEventListener('pagehide', function () {
    _ncTimers.forEach(function (h) { try { _nativeClearInterval(h); } catch (e) {} });
    _ncTimers.clear();
  });
  // 作用域内 shadow：此后所有 setInterval/clearInterval 均经管理器收口
  const setInterval = ncInterval;
  const clearInterval = ncClearInterval;

  /* ================================================================
   *  4. 通用广告过滤
   * ================================================================ */
  let _passiveLoginChecked = false, _passiveLoginAllow = true;
  function passiveAdBlock() {
    const cfg = getScriptCfg();
    if (!cfg.kgpingbis && !cfg.kgpingbiiframe) return;
    // 作用域：默认仅在「已知站点」运行；开启「全局扫描」后才在所有站点运行（更重）
    if (!cfg.passiveGlobal && !inKnownDomain()) return;

    let allow = true;
    const loginHosts = ['suning.com', 'vip.com', 'jd.com', 'taobao.com', 'mall.com', 'tmall.com'];
    if (loginHosts.some(h => inHost(h))) allow = false;

    // 登录输入框检测只需做一次：页面加载后登录状态通常不会动态翻转
    if (allow && !_passiveLoginChecked) {
      _passiveLoginChecked = true;
      const inputs = $$('input:visible, [type="password"], [type="email"]');
      for (const inp of inputs) {
        const ph = inp.placeholder || '';
        const nm = (inp.name || '').toLowerCase();
        if (/手机|邮箱|账号|密码|注册|username|password|email|phone|code/.test(nm + ph)) {
          _passiveLoginAllow = allow = false; break;
        }
      }
    }
    if (!_passiveLoginAllow) return;

    if (cfg.kgpingbiiframe && allow) {
      $$('iframe').forEach(iframe => {
        const src = iframe.src;
        if (!src) return;
        const safeIframes = ['recaptcha.google', 'captcha.qq.com', 'alicdn.com', 'aliyun.com',
          'taobao.com', 'qq.com', 'youku.com', 'bilibili.com', 'youtube.com', 'zhihu.com', 'baidu.com'];
        if (safeIframes.some(s => src.includes(s))) return;
        if (src.startsWith('http') && !src.includes(HOST)) {
          iframe.remove();
        }
      });
    }

    if (cfg.kgpingbis && allow) {
      const winW = window.innerWidth * (IS_MOBILE ? 0.9 : 0.8);
      const maxH = IS_MOBILE ? 150 : 200;
      // 大图/通栏广告：跳过视频播放器内的图片，避免误删视频封面导致黑屏（如 X 视频海报）
      $$('img').forEach(img => {
        if (!img.offsetParent || img.getAttribute(PROCESSED)) return;
        if (img.closest && img.closest('video,[role="video"],.html5-video-player,.bpx-player-video-wrap,article')) return;
        const rect = img.getBoundingClientRect();
        if (rect.top >= 50 && img.offsetWidth >= winW && img.offsetHeight <= maxH && img.offsetHeight > 10) {
          img.remove();
        }
      });
      // 浮动固定层广告：跳过含 <video> 的播放器容器；未布局完成（面积 0）时不误删，避免 X 视频全屏被误杀
      $$('[style*="position:fixed"], [style*="position: fixed"]').forEach(el => {
        if (el.getAttribute(PROCESSED)) return;
        el.setAttribute(PROCESSED, '1');
        const cs = getComputedStyle(el);
        if (cs.position !== 'fixed') return;
        if (el.querySelector && el.querySelector('video')) return;
        if (el.closest && el.closest('video,[role="video"],.html5-video-player,.bpx-player-video-wrap,article')) return;
        if (el.className && /\bnav\b/i.test(String(el.className))) return;
        const imgs = $$('img', el);
        if (!imgs.length) return;
        const img = imgs[0];
        const elArea = el.offsetWidth * el.offsetHeight;
        if (elArea === 0) return; // 尚未布局，跳过，避免误杀合法固定层
        const imgArea = img.offsetWidth * img.offsetHeight;
        if (imgArea >= elArea * 0.8 || !el.textContent.trim()) {
          el.remove();
        }
      });
    }
  }

  /* ================================================================
   *  5. 站点模块
   * ================================================================ */

  // --- 百度搜索（2026 全面重构） ---
  function processBaidu() {
    if (!inHost('baidu.com')) return;
    const cfg = getScriptCfg();
    updateBaiduHotClass();

    // 首页广告
    // 【修复】原先只调用 $$() 取数组却没做任何处理，等于空转，开关根本不生效
    if (cfg.kgbaidued && (/^(https:\/\/www\.baidu\.com\/?(\?.*)?)$/.test(HREF()) || inHref('www.baidu.com/?'))) {
      $$('.san-card[tpl="feed-ad"],.s-news-wrapper .s-news-item[data-lnnc]').forEach(el => el.remove());
    }

    // 结果卡片打标：美化 CSS 与关键词过滤共用（PC 端搜索结果页）
    ncTagResultUnits();

    // 百家号
    if (inHref('baijiahao.baidu.com/s') && cfg.baiduhot) {
      $$('[class^="index-module_topList"]').forEach(el => el.remove());
    }

    // 百度搜索 PC
    if (inHref('www.baidu.com/s') && !inHref('&rtt=')) {
      // 小程序类广告由广告过滤开关控制（热搜榜由 baiduhot CSS class 单独控制）
      if (cfg.kgbaidued) {
        $$('.c-result[srcid="xcx_multi"]').forEach(el => el.remove());
      }

      // 移除右侧登录提示等浮层（保留热搜栏，由 baiduhot 单独控制）
      $$('.hint_right_middle').forEach(el => el.remove());

      // 广告结果
      // 【重要】百度新布局下普通结果同样使用 .c-container，绝不能无差别 remove()，
      // 否则整列结果会被清空（历史恶性 bug）。必须先判定「广告 / 推广」标记再删。
      if (cfg.kgbaidued) {
        $$('#content_left .c-container,.c-result-content').forEach(el => {
          if (el.getAttribute('nc-ad-checked')) return;
          el.setAttribute('nc-ad-checked', '1');
          for (const s of $$('span', el)) {
            const t = (s.textContent || '').trim();
            if (t === '广告' || t === '推广' || t === '商业推广') { el.remove(); return; }
          }
        });
      }

      // 护眼模式：已由 bootCore 阶段 3 的 applyEyeCare() 全屏蒙版全局接管（全站生效 + 覆盖全面 + 视觉柔和 + 20-20-20 休息提醒），
      //   这里不再给白名单元素逐个刷 background-color（旧实现只在百度结果页生效、且漏掉白底子元素导致绿底+白卡片割裂）。

      // 搜索结果项处理
      processBaiduResults(cfg);
    }

    // 百度搜索移动端
    if (inHref('.baidu.com/s') && !inHref('&rtt=') && IS_MOBILE) {
      // 【修复】原写法每轮都会新建一个浮动按钮（旧按钮只被隐藏、从不移除），
      // 且 $$('.zxbcopenxcd') 是空转语句。改为存在即跳过，彻底根治按钮累积。
      if (cfg.baidumenu && !$('.zxbcopenxcd')) {
        const btn = document.createElement('div');
        btn.className = 'zxbcopenxcd';
        btn.textContent = '⚙';
        btn.style.cssText = 'position:fixed;top:auto;bottom:calc(92px + env(safe-area-inset-bottom));right:calc(14px + env(safe-area-inset-right));width:46px;height:46px;background:#1677ff;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;z-index:999999;cursor:pointer;box-shadow:0 2px 12px rgba(22,119,255,.3)';
        onDomReady(() => { if (document.body) document.body.appendChild(btn); });
        btn.addEventListener('click', () => openSettings());
        setTimeout(() => { if (btn) btn.style.display = 'none'; }, 3000);
      }

      // 护眼模式（移动端）：同样由 applyEyeCare() 全局蒙版接管，不再逐元素刷背景色
      //   （旧实现选择器列表 #page-bd article,... 同样存在白底子元素漏掉、割裂问题，且仅限百度结果页）。

      $$('.c-result-content,.result.c-container.new-pmd .c-result-content').forEach(el => {
        if (el.getAttribute('nc-filtered')) return;
        el.setAttribute('nc-filtered', '1');
        if (cfg.kgbaiduad) {
          const text = el.textContent || '';
          if (_kwHit(text)) { el.remove(); return; }
        }
      });

      $$('.c-result.result').forEach(el => {
        if (el.getAttribute('nc-url-done')) return;
        el.setAttribute('nc-url-done', '1');
        try {
          let durl = '';
          const logAttr = el.getAttribute('data-log');
          if (logAttr) { const log = JSON.parse(logAttr); durl = log.mu || ''; }
          if (!durl) return;
          if (cfg.baidulogo) {
            try {
              const domain = new URL(durl).hostname;
              const h3 = $('h3', el);
              if (h3) insertFavicon(h3, domain);
            } catch(e) {}
          }
          if (cfg.kgbaiduad && cfg.baidulianjie) {
            if (_urlHit(durl)) { el.remove(); return; }
          }
        } catch(e) {}
      });
    }

    // 百度图片
    if (inHref('baidu.com/sf/vsearch?pd=image_content') && cfg.kgbaidued) {
      $$('[class^="sfc-image-content-waterfall-item"]').forEach(el => {
        if ($('.sfc-image-content-img-toolbar-ad-text', el) || $('.commodity-row-item', el)) el.remove();
      });
    }

    // 百度地图
    if (inHref('map.baidu.com/search')) {
      $$('.damoce-search-item.damoce-search-item-nopoi').forEach(el => el.remove());
    }

    // 百度经验
    if (inHref('jingyan.baidu.com/search')) {
      $$('.ec_ad').forEach(el => { const p = el.parentElement; el.remove(); if (p) p.remove(); });
    }

    // 百度视频
    if ((inHref('video.baidu.com') || inHref('v.baidu.com')) && cfg.kgbaidued) {
      $$('#pcshortchannelTopRight,#__lawnImageContainer').forEach(el => {
        let p = el; for (let i = 0; i < 3 && p; i++) p = p.parentElement;
        if (p) p.remove();
      });
      $$('[id*="channelColumn"],[id*="ChannelColumn"],[id*="pc"],[id*="PC"]').forEach(el => {
        if (el.parentElement) el.parentElement.remove();
      });
      $$('#searchMoreLong,#psBottomColumn').forEach(el => {
        if (el.parentElement) el.parentElement.remove();
      });
    }
  }

  function processBaiduResults(cfg) {
    $$('#content_left > div').forEach(item => {
      if (item.getAttribute(PROCESSED)) return;
      item.setAttribute(PROCESSED, '1');

      const h3link = $('h3 a', item);
      if (!h3link) return;
      let url = h3link.href;

      // 检测广告标签
      const spans = $$('span', item);
      for (const s of spans) {
        if (/^(广告|推广|商业推广)$/.test(s.textContent)) {
          if (cfg.kgbaidued) { item.remove(); return; }
        }
      }

      // 关键词过滤
      if (cfg.kgbaiduad) {
        const text = (h3link.textContent || '') + ($('.c-abstract', item)?.textContent || '');
        if (_kwHit(text)) { item.remove(); return; }
      }

      // 解析百度跳转链接 + favicon + 网址过滤
      if (url && url.includes('baidu.com/link?')) {
        if (!url.includes('eqid')) url += '&wd=&eqid=';
        GM_xmlhttpRequest({
          method: 'GET', timeout: 2000, url: url,
          onload: function(resp) {
            if (!resp.responseText) return;
            const m = resp.responseText.match(/URL='([^']*)'/);
            if (!m) return;
            const realUrl = m[1];
            h3link.href = realUrl;

            if (cfg.kgbaiduad && cfg.baidulianjie) {
              if (_urlHit(realUrl)) { item.remove(); return; }
            }
            if (cfg.baidulogo) {
              try {
                const domain = new URL(realUrl).hostname;
                const h3 = h3link.closest('h3');
                if (h3) insertFavicon(h3, domain);
              } catch(e) {}
            }
          }
        });
      }

      // 非跳转链接 favicon
      if (cfg.baidulogo && url && !url.includes('baidu.com/link?')) {
        try {
          const domain = new URL(url).hostname;
          const h3 = h3link.closest('h3');
          if (h3) insertFavicon(h3, domain);
        } catch(e) {}
      }
    });
  }

  // --- Google 搜索（2026 增强） ---
  function processGoogle() {
    if (!inHost('google.com') || !inHref('/search?')) return;
    const cfg = getScriptCfg();

    // 控制面板按钮
    if (!$('#bingconfig_btn')) {
      const hdtb = $('#hdtb-tls');
      if (hdtb) {
        const btn = document.createElement('a');
        btn.id = 'bingconfig_btn';
        btn.className = 'gb_Sc';
        btn.style.cssText = 'border:1px solid transparent;text-align:center;border-radius:2px;line-height:19px;cursor:pointer;margin-left:-1px;padding:4px 11px;margin-right:-11px';
        btn.textContent = '⚙';
        btn.href = 'javascript:void(0)';
        btn.addEventListener('click', (e) => { e.preventDefault(); openSettings(); });
        hdtb.insertBefore(btn, hdtb.firstChild);
      }
    }

    // 隐藏 AI Overview
    // 【修复】原先只调用 $$() 取数组却没做任何处理，等于空转，开关根本不生效
    if (cfg.googleAI === true) {
      $$('div[data-testid="ai-overview"],.hdzaWe,.cUnQKe').forEach(el => el.remove());
    }

    // 结果卡片打标：美化 CSS 与下面的关键词过滤共用，Google 改版后仍能自愈
    ncTagResultUnits();

    if (!cfg.kggooglead) return;
    $$('#rso .' + NC_CARD_CLS).forEach(item => {
      if (item.getAttribute(PROCESSED)) return;
      item.setAttribute(PROCESSED, '1');
      const link = $('a', item);
      if (!link) return;
      let url = link.href;

      if (url.startsWith('/url?') && url.includes('&url=')) {
        const m = url.match(/&url=([^&]+)/);
        if (m) { url = decodeURIComponent(m[1]); link.href = url; }
      }

      if (cfg.baidulogo && !link.getAttribute('zlogo') && $('h3', link)) {
        link.setAttribute('zlogo', '1');
        try {
          const domain = new URL(url).hostname;
          const h3 = $('h3', link);
          if (h3) insertFavicon(h3, domain);
        } catch(e) {}
      }

      const text = item.textContent || '';
      if (cfg.baidulianjie) {
        if (_urlHit(url)) { item.remove(); return; }
      }
      if (_kwHit(text)) { item.remove(); return; }
    });
  }

  // --- Bing 搜索 ---
  function processBing() {
    if (!inHost('bing.com') || !inHref('/search?') || !inHref('q=')) return;
    const cfg = getScriptCfg();

    if (!$('#bingconfig_btn')) {
      const sc = $('#id_sc');
      if (sc) {
        const span = document.createElement('span');
        span.id = 'bingconfig_btn';
        span.className = 'cbtn';
        span.style.cssText = 'line-height:45px;margin-left:20px;margin-right:20px';
        span.innerHTML = `<input type="button" value="⚙ 控制面板" class="zk-open-settings" style="cursor:pointer">`;
        span.querySelector('.zk-open-settings').addEventListener('click', () => openSettings());
        sc.parentElement.insertBefore(span, sc);
      }
    }

    if (cfg.kgbinged) {
      $$('.b_algo').forEach(el => {
        const text = el.textContent || '';
        const attr = $('p[class]', el);
        if (text.includes('广告') && attr) el.remove();
      });
    }

    // 隐藏 Bing AI / Copilot
    // 【修复】原先只调用 $$() 取数组却没做任何处理，等于空转，开关根本不生效
    if (cfg.bingAI === true) {
      $$('#b_sydConvCont,#b_sydResults,.b_sydConv,.cib-serp-main,.b_deep').forEach(el => el.remove());
    }

    // 结果卡片打标（美化 CSS 与下面的关键词过滤共用）
    ncTagResultUnits();

    if (cfg.kgbingad) {
      // 【修复】原写法先 remove() 掉全部 li.b_algo（整页结果清空），再对 undefined 链式 forEach 抛异常
      $$('#b_results .' + NC_CARD_CLS).forEach(item => {
        if (item.getAttribute(PROCESSED)) return;
        item.setAttribute(PROCESSED, '1');
        const link = $('h2 a', item);
        if (!link) return;
        const url = link.href;
        const text = item.textContent || '';
        if (cfg.baidulianjie) {
          if (_urlHit(url)) { item.remove(); return; }
        }
        if (_kwHit(text)) { item.remove(); return; }
      });
    }
  }

  // --- 360 搜索 ---
  function process360() {
    if (!inHost('so.com')) return;
    const cfg = getScriptCfg();

    // 结果卡片打标：美化 CSS 依赖 .nc-result-card（v13.1.2 修复：此前漏调，导致 360 结果页无卡片美化）
    ncTagResultUnits();

    if (HREF() === 'https://www.so.com/' || HREF() === 'https://www.so.com' || inHref('www.so.com/?')) {
      if (cfg.kg360ed) {
        $$('#lawnFooterCloseBtn').forEach(el => el.click());
        $$('#res_news_flow li').forEach(li => {
          const txt = $('span.txt', li);
          if (txt && txt.textContent === '广告') li.remove();
        });
      }
    }

    if (inHref('so.com/s')) {
      if (cfg.kg360ed) {
        $$('div.close').forEach(el => el.click());
        $$('.title.home-nav').forEach(el => {
          el.href = 'javascript:void(0)';
          el.textContent = '控制面板';
          el.addEventListener('click', (e) => { e.preventDefault(); openSettings(); });
        });
      }
      $$('li.res-list').forEach(item => {
        if (item.getAttribute(PROCESSED)) return;
        item.setAttribute(PROCESSED, '1');
        const h3link = $('h3 a', item);
        let url = h3link ? (h3link.getAttribute('data-mdurl') || h3link.href) : '';
        const text = item.textContent || '';
        if (url && cfg.kg360ad) {
          if (cfg.baidulianjie) {
            if (_urlHit(url)) { item.remove(); return; }
          }
          if (_kwHit(text)) { item.remove(); return; }
        }
      });
    }

    if (inHref('m.so.com/s') && cfg.kg360ad) {
      $$('[class^="g-card res-list"]').forEach(item => {
        if (item.getAttribute('kw-done')) return;
        item.setAttribute('kw-done', '1');
        const text = item.textContent || '';
        if (_kwHit(text)) { item.remove(); return; }
        const link = $('a', item);
        if (link) {
          let url = decodeURIComponent(link.href.replace(/https:\/\/m\.so\.com\/jump\?u=/g, ''));
          link.href = url;
          if (_urlHit(url)) { item.remove(); return; }
        }
      });
    }

    if (cfg.kg360ed) {
      if (inHref('news.so.com')) $$('li[data-from="ad"]').forEach(el => el.remove());
      if (inHref('tv.360kan.com')) $$('li>div[data-so-mod="list-ad"],li>div[data-so-c="list-ad"]').forEach(el => el.remove());
      if (inHref('image.so.com')) {
        // 【修复】原写法先删光所有 li.cell，再对 undefined 链式 forEach
        $$('li.cell').forEach(li => { const s = $('s', li); if (s && (s.textContent || '').trim() === '广告') li.remove(); });
      }
      if (inHref('ly.so.com')) {
        $$('.f-list-wrap li').forEach(li => { if ($('i', li)) li.remove(); });
      }
      if (inHref('wenda.so.com')) {
        $$('.left-rec-list.js-left-flow-busi,#attention,.mod-detail-normal.pt25.hide.js-mod-flow,article.card,article.card-bor,.busi-article.js-busi-article,.js-relate-list,ul.relate-list,.g-card.recflow-list.js-recflow-list,#js-sd-list').forEach(el => el.remove());
      }
      if (inHref('360kan.com')) {
        $$('li.v-list-item:empty,li[data-so-mod="ad"],a.link.js-ad-curl,[class*="info-flow__ad"],[class*="open-screen__ad"]').forEach(el => el.remove());
      }
    }
  }

  // --- Yandex 搜索（2026-09 新增：美化 + 去广告）---
  function processYandex() {
    if (!inHost('yandex.com')) return;
    const cfg = getScriptCfg();
    // 结果卡片打标：美化 CSS 依赖 .nc-result-card（v13.1.2 修复：此前漏调，导致 Yandex 结果页无卡片美化）
    // 须在「去广告」开关（kgyandexed）之前执行，使美化独立于去广告生效
    ncTagResultUnits();
    if (!cfg.kgyandexed) return;
    // 隐藏赞助/广告结果条目：Yandex 推广位自带专属容器（.serp-item__ad）或广告类标记
    $$('.serp-item').forEach(item => {
      if (item.getAttribute('yandex-ad-done')) return;
      if ($('.serp-item__ad', item) || $('[class*="advert"]', item) || $('[data-fast-wzrd]', item)) {
        item.setAttribute('yandex-ad-done', '1');
        item.style.display = 'none';
        if (window.__NC_DEBUG) try { dbg('[NetClean] Yandex 广告已隐藏'); } catch (e) {}
      }
    });
  }

  // --- 小红书（2026-09 新增：页面广告清理）---
  function processXHS() {
    if (!inHost('xiaohongshu.com')) return;
    const cfg = getScriptCfg();
    if (!cfg.xhsclean) return;
    // 登录墙 / 开屏（CSS 已隐藏，这里兜底 remove 已插入的 DOM，避免 SPA 残留）
    $$('.login-popup-container,.login-container,.sign-container,.login-mask').forEach(el => el.remove());
    // 信息流推广卡片：含赞助/广告标记的笔记
    $$('section.note-item').forEach(card => {
      if (card.getAttribute('xhs-cleaned')) return;
      if ($('.ad-badge,[class*="sponsor"],[class*="Sponsor"],[class*="promote"],[class*="Promote"]', card)) {
        card.setAttribute('xhs-cleaned', '1');
        card.style.display = 'none';
      }
    });
  }

  // --- 掘金（2026-09 新增：广告清理）---
  function processJuejin() {
    if (!inHost('juejin.cn')) return;
    const cfg = getScriptCfg();
    if (!cfg.juejinclean) return;
    $$('.login-mask,.login-dialog,.auth-modal').forEach(el => el.remove());
    // 信息流 / 列表中的推广文章卡片：带广告类或「广告/赞助」专属标记
    $$('.article-item,.entry-item').forEach(card => {
      if (card.getAttribute('jj-cleaned')) return;
      const adEl = $('[class*="ad"],[class*="Ad"],[class*="sponsor"],[class*="Sponsor"],[class*="promote"],[class*="Promote"]', card);
      const hasLabel = Array.from(card.querySelectorAll('span,a,div')).some(n => {
        const t = (n.textContent || '').trim();
        return t === '广告' || t === '赞助' || t === '推广';
      });
      if (adEl || hasLabel) {
        card.setAttribute('jj-cleaned', '1');
        card.style.display = 'none';
      }
    });
  }

  // --- 思否 SegmentFault（2026-09 新增：广告清理）---
  function processSegmentfault() {
    if (!inHost('segmentfault.com')) return;
    const cfg = getScriptCfg();
    if (!cfg.sfclean) return;
    $$('.login-dialog,.login-mask').forEach(el => el.remove());
    $$('.sf-hl-ad,.article__ad,.ad-box,[class*="sf-ads"],[class*="sfAds"],.aside__ad').forEach(el => el.remove());
  }

  // --- 知乎（2026 增强） ---
  function processZhihu() {
    if (!inHost('zhihu.com')) return;
    const cfg = getScriptCfg();

    if (inHref('link.zhihu.com/?target=')) {
      const linkP = $('p.link');
      if (linkP) { location.replace(linkP.textContent.trim()); return; }
    }

    if (!cfg.kgzhihued) return;

    // 移除登录弹窗
    // 【修复】原写法先 remove() 再取关闭按钮，弹窗被直接删掉（易触发 React 状态错乱）
    $$('.signFlowModal-container,.Modal-wrapper').forEach(el => {
      const closeBtn = $('.Button.Modal-closeButton.Button--plain', el) || $('.Modal-closeButton', el);
      if (closeBtn) closeBtn.click();
      else el.remove();
    });

    // 移除"打开App"按钮
    $$('.MobileAppHeader-link,.OpenInAppButton,.app-download-btn').forEach(el => el.remove());

    // 移除"立即登录/注册"
    // 【修复】原写法无差别删除了页面上所有蓝色主按钮（登录/关注/提交全部消失）
    $$('.Button.Button--primary.Button--blue').forEach(btn => {
      if (/立即登录|注册/.test(btn.textContent || '')) {
        if (btn.parentElement) btn.parentElement.style.display = 'none';
      }
    });

    // 盐选内容标记
    if (cfg.kgzhihuad) {
      $$('.KfeCollection-PcCollegeCard,.KfeCollection-AnswerListCard').forEach(el => {
        el.style.opacity = '0.3';
        el.title = '盐选内容（可在控制面板关闭此效果）';
      });
    }

    // 登录页重定向
    if (inHref('zhihu.com/signin?')) {
      location.replace('https://www.zhihu.com/explore');
    }

    // 自动展开回答
    if (inHref('zhihu.com/question')) {
      $$('.Button.ContentItem-expandButton').forEach(btn => btn.click());
    }

    // 关键词过滤（问题页 + 搜索页）
    if (cfg.kgzhihuad) {
      if (inHref('zhihu.com/question')) {
        $$('.List-item').forEach(item => {
          if (item.getAttribute('zkdx')) return;
          item.setAttribute('zkdx', '1');
          const inner = $('.RichContent-inner', item);
          const author = $('.AuthorInfo-name', item);
          let text = (inner?.textContent || '') + (author?.textContent || '');
          if (_kwHit(text)) { item.remove(); return; }
        });
      }
      if (inHref('zhihu.com/search?')) {
        $$('.List .Card.SearchResult-Card').forEach(card => {
          const text = $('.Highlight', card)?.textContent || '';
          if (_kwHit(text)) { card.remove(); return; }
        });
      }
    }
  }

  // --- B站（2026 重大更新） ---
  function processBilibili() {
    if (!inHost('bilibili.com')) return;
    const cfg = getScriptCfg();

    // 未登录画质解锁
    if (cfg.kgbiliQuality && !document.cookie.includes('DedeUserID')) {
      unlockBilibiliQuality();
    }

    // 登录弹窗处理
    if (cfg.kgbiliLogin) {
      $$('.bili-mini-login,.login-tip,.bili-header__login-panel,.login-popup').forEach(el => {
        el.style.display = 'none';
      });
      // 移除登录遮罩
      const loginMask = $('.bpx-player-video-wrap .bpx-player-login-mask');
      if (loginMask) loginMask.remove();
      // 移除"请登录后观看"提示
      $$('.bpx-player-login-tip,.bpx-player-ending-login').forEach(el => el.remove());
    }

    if (!cfg.kgbilied) return;

    // 隐藏看板娘
    // 【修复】只做隐藏，不做删除（原写法连按钮一起删，看板娘无法再被唤起）
    $$('.minimize-btn.pointer.bg-contain').forEach(btn => {
      btn.style.display = 'none';
      const haruna = $('.haruna-ctnr.none-select');
      if (haruna) haruna.style.display = 'none';
    });

    // 推广卡片（2026 新选择器）
    $$('.bili-video-card').forEach(card => {
      const link = $('a', card);
      if (link && (link.href.includes('cm.bilibili.com/cm/api/fees') || link.href.includes('cm.bilibili.com'))) {
        card.style.display = 'none';
      }
      if (card.querySelector('.bili-video-card__info--ad')) card.style.display = 'none';
    });

    // 小火箭广告
    $$('.vcd-ad-container,.video-page-special-card,.ad-report.video-card-ad-small').forEach(el => {
      el.remove();
    });

    // 首页运营卡片
    $$('.floor-single-card[data-loc-id],.banner-card').forEach(el => el.remove());

    // 直播广告
    $$('.bili-live-card__info--ad,.pop-live-small-mode').forEach(el => el.remove());

    // 视频播放页右侧广告
    if (inHref('bilibili.com/video/')) {
      $$('#right-bottom-banner,.video-page-special-card,.ad-con').forEach(el => el.remove());
      $$('.bpx-player-ending-activity').forEach(el => { el.style.display = 'none'; });
    }

    // 搜索结果 + 评论过滤
    if (inHref('search.bilibili.com/') && cfg.kgbiliad) {
      $$('.video-list-item > .bili-video-card').forEach(card => {
        const text = card.textContent || '';
        if (_kwHit(text)) { card.style.display = 'none'; return; }
      });
    }

    if (inHref('bilibili.com/video/') && cfg.kgbiliad) {
      $$('.comment-list .list-item.reply-wrap,.reply-item').forEach(item => {
        const text = ($('p.text', item)?.textContent || $('.reply-content', item)?.textContent || '').replace(/\s+/g, '');
        if (_kwHit(text)) { item.remove(); return; }
      });
    }
  }

  // B站未登录画质解锁
  function unlockBilibiliQuality() {
    if (unlockBilibiliQuality._done) return;
    unlockBilibiliQuality._done = true;

    // Hook播放器配置接口
    const origOpen = XMLHttpRequest.prototype.open;
    const origSend = XMLHttpRequest.prototype.send;
    const qualityMap = { 16: 360, 32: 480, 64: 720, 80: 1080, 112: 1080, 116: 1080, 120: 4 };

    XMLHttpRequest.prototype.open = function(method, url) {
      this._adc_url = url;
      return origOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function() {
      if (this._adc_url && this._adc_url.includes('api.bilibili.com/x/player/v2')) {
        const origOnReady = this.onreadystatechange;
        this.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            try {
              let data = JSON.parse(this.responseText);
              if (data && data.data) {
                // 解锁画质选项
                if (data.data.accept_quality) {
                  data.data.accept_quality = [120, 116, 112, 80, 64, 32, 16];
                }
                if (data.data.quality) {
                  data.data.quality = data.data.quality < 80 ? 80 : data.data.quality;
                }
                // 移除付费标记
                if (data.data.vip_type === 0 || data.data.vip_status === 0) {
                  data.data.vip_type = 2;
                  data.data.vip_status = 1;
                }
                Object.defineProperty(this, 'responseText', { value: JSON.stringify(data) });
                Object.defineProperty(this, 'response', { value: JSON.stringify(data) });
              }
            } catch(e) {}
          }
          if (origOnReady) origOnReady.apply(this, arguments);
        };
      }
      return origSend.apply(this, arguments);
    };
  }

  // --- 豆瓣 ---
  function processDouban() {
    if (!inHost('douban.com')) return;
    const cfg = getScriptCfg();
    if (!cfg.kgdoubaned) return;

    // 登录墙绕过：豆瓣现在不登录也能看大部分内容，但会弹登录窗
    $$('.login-pop,.TalionNav-static,.account-login').forEach(el => {
      el.style.display = 'none';
      const mask = $('.mask,.ui-dialog-mask');
      if (mask) mask.remove();
    });

    if (inHref('search.douban.com/movie/subject_search?') && cfg.kgdoubanad) {
      $$('.root .item-root').forEach(item => {
        const text = $('.title', item)?.textContent || '';
        if (_kwHit(text)) { item.remove(); return; }
      });
    }

    if (inHref('www.douban.com/search?') && cfg.kgdoubanad) {
      $$('.result-list .result').forEach(item => {
        const text = $('h3', item)?.textContent || '';
        if (_kwHit(text)) { item.remove(); return; }
      });
    }

    if (inHref('douban.com/group/') && cfg.kgdoubanad) {
      $$('table.olt tr').forEach(row => {
        const text = (row.textContent || '').replace(/\s+/g, '');
        if (_kwHit(text)) { row.remove(); return; }
      });
      $$('ul.topic-reply li').forEach(li => {
        const text = (li.textContent || '').replace(/\s+/g, '');
        if (_kwHit(text)) { li.remove(); return; }
      });
    }
  }

  // --- 微博 ---
  function processWeibo() {
    if (!inHost('weibo.com')) return;
    const cfg = getScriptCfg();
    if (!cfg.kgweiboad && !cfg.kgweibomv) return;

    $$('.vue-recycle-scroller__item-view').forEach(item => {
      const content = $('.wbpro-feed-content', item);
      const text = content?.textContent || '';

      if (_kwHit(text)) { item.remove(); return; }

      if (cfg.kgweibomv) {
        const video = $('.wbpv-tech', item);
        if (video?.src && !video.getAttribute('data_zt')) {
          video.setAttribute('data_zt', '0');
          const lastA = content?.querySelector('div:first-child a:last-child');
          if (lastA) {
            const dl = document.createElement('a');
            dl.textContent = '📥 下载视频';
            dl.href = video.src;
            dl.target = '_blank';
            dl.style.cssText = 'color:#009688;margin-left:12px;font-size:13px;text-decoration:none';
            lastA.insertAdjacentElement('afterend', dl);
          }
        }
      }
    });

    if (cfg.kgweibomv && inHref('weibo.com/tv/show/')) {
      const tech = $('.wbpv-tech');
      if (tech?.src && !tech.getAttribute('data_zt')) {
        tech.setAttribute('data_zt', '0');
        const optBox = $('.woo-box-flex.woo-box-alignCenter');
        if (optBox) {
          const div = document.createElement('div');
          div.className = 'woo-box-flex woo-box-alignCenter Detail_opt_2w8oi';
          div.innerHTML = `<i class="star-font star-font--retweet"></i><a class="star-f12" style="color:#009688" href="${tech.src}">📥 下载</a>`;
          optBox.prepend(div);
        }
      }
    }
  }

  // --- YouTube（2026 增强） ---
  function processYoutube() {
    if (!inHost('youtube.com')) return;
    const cfg = getScriptCfg();

    if (cfg.kgyoued) {
      // 智能广告跳过：只在检测到广告时才加速轮询，离开 YouTube 自动清理
      // 用静态标志保证定时器只创建一次（YouTube 是 SPA，processYoutube 会被反复调用，否则定时器无界累积）
      if (!processYoutube._skipStarted) {
        processYoutube._skipStarted = true;
        let skipTimer = null;
        let fastPoll = false;
        const trySkip = () => {
          if (!inHost('youtube.com')) { clearInterval(skipTimer); skipTimer = null; return; }
          if (isPaused()) return;
          const skipBtn = document.querySelector('.ytp-ad-skip-button,.ytp-ad-skip-button-modern');
          if (skipBtn) { skipBtn.click(); STATS.skippedAds++; return true; }
          const overlayClose = document.querySelector('.ytp-ad-overlay-close-button');
          if (overlayClose) { overlayClose.click(); STATS.skippedAds++; return true; }
          // 检测是否有广告正在播放
          const hasAd = document.querySelector('.ytp-ad-player-overlay,.ytp-ad-image-overlay');
          if (hasAd && !fastPoll) {
            fastPoll = true;
            clearInterval(skipTimer);
            skipTimer = setInterval(trySkip, 200);
          } else if (!hasAd && fastPoll) {
            fastPoll = false;
            clearInterval(skipTimer);
            skipTimer = setInterval(trySkip, 1500);
          }
          // 加速广告播放
          const adVideo = document.querySelector('.video-stream.html5-main-video[src*="googlevideo.com"]');
          if (adVideo && document.querySelector('.ytp-ad-player-overlay')) {
            adVideo.playbackRate = 16;
          }
          return !!hasAd;
        };
        skipTimer = setInterval(trySkip, 500);
        trySkip();

        // 页面卸载时清理定时器，避免 SPA / 跨域跳转后残留轮询
        const stopSkip = () => { if (skipTimer) { clearInterval(skipTimer); skipTimer = null; } };
        window.addEventListener('pagehide', stopSkip, { once: true });
      }

      // 移除广告元素（幂等，每次调用都做）
      $$('#player-ads,#sparkles-container,#masthead-ad,ytd-compact-promoted-item-renderer,ytd-video-masthead-ad-v3-renderer,ytd-display-ad-renderer').forEach(el => el.remove());
    }

    // 视频下载按钮已迁移到 initYoutubeRotate 的工具栏（YouTube 新版 #info-contents 已不存在）

    // 搜索结果/推荐过滤
    if (cfg.kgyouad) {
      // 【修复】原写法把首页/搜索页所有视频卡片全部 remove()，YouTube 直接白屏
      $$('ytd-rich-item-renderer,ytd-video-renderer,ytd-compact-video-renderer').forEach(item => {
        if (item.getAttribute('yt-filtered')) return;
        item.setAttribute('yt-filtered', '1');
        const text = (item.textContent || '').replace(/\s+/g, '');
        if (_kwHit(text)) { item.remove(); return; }
      });
      $$('ytd-comment-thread-renderer').forEach(item => {
        if (item.getAttribute('yt-filtered')) return;
        item.setAttribute('yt-filtered', '1');
        const text = (item.textContent || '').replace(/\s+/g, '');
        if (_kwHit(text)) { item.remove(); return; }
      });
    }
  }

  // --- Twitter/X ---
  function processTwitter() {
    if (!inHost('twitter.com') && !inHost('x.com')) return;
    const cfg = getScriptCfg();

    $$('article').forEach(article => {
      if (article.getAttribute('d-twitter')) return;
      article.setAttribute('d-twitter', '1');

      // 推广推文
      if (cfg.kgtwied) {
        const spans = $$('span', article);
        for (const s of spans) {
          if (/^(推荐|推广|Promoted|Ad)$/.test(s.textContent)) {
            article.style.display = 'none'; return;
          }
        }
      }

      // 视频下载
      if (cfg.kgtwimv) {
        const videos = $$('video', article);
        if (videos.length && !article.getAttribute('d-vurl')) {
          article.setAttribute('d-vurl', '1');
          const links = $$('a[href*="status"]', article);
          for (const link of links) {
            const m = link.href.match(/status\/(\d+)/);
            if (!m) continue;
            const videoUrl = 'https://twitter.com/i/status/' + m[1];
            const group = article.querySelector('div[role="group"][id^="id"]');
            if (group && !group.getAttribute('downdown')) {
              group.setAttribute('downdown', '1');
              const dlDiv = document.createElement('div');
              dlDiv.setAttribute('downdown', '1');
              dlDiv.style.cssText = 'margin:8px 0';
              dlDiv.innerHTML = `
                <a data-url="${videoUrl}" style="color:#009688;font-size:12px;text-decoration:none;cursor:pointer">📥 下载视频</a>`;
              group.parentElement.insertBefore(dlDiv, group);
              dlDiv.querySelector('a').addEventListener('click', function() {
                openVideoDownloader(videoUrl);
              });
            }
          }
        }
      }
    });
  }

  // --- CSDN（2026 增强） ---
  function processCSDN() {
    if (!inHost('csdn.net')) return;
    const cfg = getScriptCfg();

    if (cfg.csdnAd === true) {
      $$('.wwads-cn.wwads-vertical,.ad_fullWidth,#kp_box_blog_up,#kp_box_www_swiper,#blogExtensionBox,.recommend-right,.recommend-ad-box,.csdn-toolbar-ad,.template-box').forEach(el => el.remove());
      $$('iframe[src*="kunpeng-sc.csdn"]').forEach(el => el.remove());
      $$('.passport-login-container,.weixin-shadowbox.wap-shadowbox,.hide-article-box.hide-article-pos.text-center,.readall_box').forEach(el => el.remove());
    }

    // 展开全文 + 代码块
    if (cfg.csdnExpand === true) {
      // 【修复】这是「展开阅读全文」按钮，应当点击展开而不是删除
      $$('.hide-preCode-bt').forEach(el => el.click());
      $$('.hide-article-box .btn-readmore,.readall_box .btn-readmore').forEach(el => el.click());
      $$('#article_content,.article_content,.blog-content-box').forEach(el => {
        el.style.overflow = 'auto';
        el.style.height = 'auto';
        el.style.maxHeight = 'none';
      });
    }

    // CSDN 外链重定向
    if (cfg.csdnLink === true && inHref('link.csdn.net/?target=')) {
      const loadBtn = $('a.loading-btn');
      if (loadBtn) location.replace(loadBtn.href);
    }

    // 纯净阅读模式
    if (cfg.csdnClean === true && inHref('blog.csdn.net')) {
      $$('.blog_container_aside,.aside-box,.recommend-box,.first-recommend-box,.template-box,.csdn-side-toolbar').forEach(el => {
        el.style.display = 'none';
      });
      const main = $('#mainBox, main, .blog-content-box');
      if (main) {
        main.style.margin = '0 auto';
        main.style.maxWidth = '860px';
        main.style.float = 'none';
      }
    }

    // 解除复制限制（只在首次绑定一次，避免 processCSDN 被反复调用时 copy 监听无界累积）
    if (!processCSDN._copyBound) {
      processCSDN._copyBound = true;
      document.addEventListener('copy', function(e) {
        e.stopPropagation();
      }, true);
    }
    $$('pre code, .hljs').forEach(el => {
      el.style.userSelect = 'text';
      el.style.webkitUserSelect = 'text';
    });
  }

  // --- 微信公号 ---
  function processWeixin() {
    if (!inHost('mp.weixin.qq.com')) return;
    const cfg = getScriptCfg();
    if (!cfg.kgweixined) return;

    // 文章底部广告
    $$('.reward_area,.reward_qrcode_area,.js_promotion_area,.promotion_area').forEach(el => el.remove());
    // 悬浮广告条
    $$('#js_pc_qr_code,.qr_code_pc_outer,.qr_code_pc_inner').forEach(el => el.remove());
    // 文中插入广告
    $$('mp-common-profile,.ad_space,.ad_container,.insert_ad,.js_ad').forEach(el => el.remove());
    // rich_media_area_extra 可能是「相关文章」也可能是正文尾部信息，需按内容判定后再删
    $$('.rich_media_area_extra').forEach(el => {
      const links = $$('a', el);
      if (links.length > 0 && !el.querySelector('.rich_media_meta_list')) el.remove();
    });
    // 关键词过滤
    if (cfg.kgweixinad) {
      $$('.rich_media_content p,.rich_media_content section').forEach(el => {
        const text = (el.textContent || '').replace(/\s+/g, '');
        if (_kwHit(text)) { el.remove(); return; }
      });
    }
  }

  // --- 优酷 ---
  function processYouku() {
    if (!inHost('youku.com')) return;
    const cfg = getScriptCfg();
    if (!cfg.kgyoued) return;

    // 视频播放前广告（Observer 只在首次创建并 observe 一次，避免 processYouku 被反复调用时 Observer 无界累积）
    if (!processYouku._adObserverStarted) {
      processYouku._adObserverStarted = true;
      // 复用统一 MutationObserver 管理器：与 startObserver / 腾讯视频 / 验证码识别共享同一 body observer
      ncVideoPrerollAdSkip('.ykf-ad-skip-btn,.ad-skip-btn,.ad-skip', '.vip-ad,.skp-layer,.ad-left-bottom,.ad-tips');
    }

    // 首页广告
    $$('.yk-pc-main-topfocus,.advert,.slide-ad,.banner_pic,.box_hot,.ad-banner').forEach(el => el.remove());
    // 搜索结果广告
    $$('li[data-spm="ad"]').forEach(el => el.remove());
    // 播放页推荐广告
    if (inHref('v.youku.com/v_show/')) {
      $$('.ad-box,.sidebar-ad,#sideTool,.yk-pc-main-ad').forEach(el => el.remove());
    }
  }

  // --- 腾讯视频 ---
  function processTencentVideo() {
    if (!inHost('v.qq.com')) return;
    const cfg = getScriptCfg();
    if (!cfg.kgyoued) return;

    // 播放前广告跳过（Observer 只在首次创建并 observe 一次，避免 processTencentVideo 被反复调用时 Observer 无界累积）
    if (!processTencentVideo._adObserverStarted) {
      processTencentVideo._adObserverStarted = true;
      // 复用统一 MutationObserver 管理器：与 startObserver / 优酷 / 验证码识别共享同一 body observer
      ncVideoPrerollAdSkip('.txp_ad_skip,.txp_btn_skip,.ad-tips-skip,.txp_ad_skip_info,.skip-ad', '.ad-tips,.ad-tips-wrap,.video-ad-container,.txp_ad_overlay');
    }

    // 首页/频道页广告
    $$('.ad_item,.ad_banner,.slide_ad,.recommend_ad,.index_advertising,.mod_advertising,.ad_side').forEach(el => el.remove());
    // 搜索页广告
    $$('li[data-from="ad"]').forEach(el => el.remove());
    // 播放页广告
    if (inHref('v.qq.com/x/cover/') || inHref('v.qq.com/x/page/')) {
      $$('.video_ad,.ad_detail,.player_float_ad,.recommend_ad_area,.ad_feedback').forEach(el => el.remove());
    }
  }
  function processOther() {
    // 简书
    if (inHref('www.jianshu.com/p')) {
      // 【修复】只清「尺寸较小的 fixed 浮窗」（App 引导/关注条），大浮层不动
      $$('[style*="position: fixed"][style*="width"][style*="height"]').forEach(el => {
        if (el.offsetWidth < 400 && el.offsetHeight < 600) el.remove();
      });
    }
    // 当当
    if (inHref('dang.com')) $$('.fixed_s').forEach(el => el.remove());
  }

  // --- 视频下载：打开用户配置的下载站并预填链接 ---
  // 模板中的 {url} 会被替换为编码后的视频链接；若模板不含 {url} 则仅打开站点首页，
  // 由下方 processVideoDownloader 在站点页面自动填入输入框并点击解析。
  function openVideoDownloader(videoUrl) {
    try {
      const cfg = getConfig();
      const vd = cfg.videoDownload || {};
      const defaults = DEFAULT_CONFIG.videoDownload;
      const sites = (vd.sites && vd.sites.length) ? vd.sites : defaults.sites;
      const activeKey = vd.active || (sites[0] && sites[0].key) || defaults.active;
      let site = sites.find(s => s.key === activeKey) || sites[0];
      let target = (site && (site.tpl || site.url)) || 'https://cobalt.tools';
      if (target.indexOf('{url}') >= 0) {
        target = target.replace(/\{url\}/g, encodeURIComponent(videoUrl));
      } else {
        target = target.replace(/\/?$/, '') + (target.indexOf('?') >= 0 ? '&' : '?') + 'url=' + encodeURIComponent(videoUrl);
      }
      GM_setValue('gogoxvideodown', videoUrl);
      window.open(target, '_blank');
    } catch (e) {}
  }

  // --- 第三方视频下载站 自动填充（跳转后自动填链接 + 点解析）---
  function processVideoDownloader() {
    const videoUrl = GM_getValue('gogoxvideodown');
    if (!videoUrl) return;

    const cfg = getConfig();
    const defaults = DEFAULT_CONFIG.videoDownload;
    const sites = (cfg.videoDownload && cfg.videoDownload.sites && cfg.videoDownload.sites.length)
      ? cfg.videoDownload.sites : defaults.sites;

    // 各站点已知的最佳选择器；不在表内的站点走通用兜底
    const KNOWN = {
      'cobalt.tools': { input: 'input[placeholder*="URL" i],input[placeholder*="链接" i],input[type="url"]', btn: 'button[type="submit"],button' },
      'yt5s.biz':     { input: '#url,input[name="video"],input[type="url"],input[placeholder*="url" i]', btn: '#btn-submit,button[type="submit"],.btn-submit' },
      'savefrom.net': { input: 'input[name="sf_url"],input[type="url"],input[placeholder*="url" i]', btn: 'button.submit,button[type="submit"]' },
      'getfvid.com':  { input: 'input[name="url"],input[type="url"]', btn: '#btn_submit,button[type="submit"]' }
    };
    const GENERIC = { input: 'input[type="url"],input[name*="url" i],input[placeholder*="url" i],input', btn: 'button[type="submit"],button' };

    for (const s of sites) {
      let host = '';
      try { host = new URL(s.tpl || s.url || '').host; } catch (e) { continue; }
      if (host && inHost(host)) {
        const sel = KNOWN[host] || GENERIC;
        setTimeout(() => {
          const inp = document.querySelector(sel.input);
          if (inp) {
            inp.value = videoUrl;
            inp.dispatchEvent(new Event('input', { bubbles: true }));
            GM_deleteValue('gogoxvideodown');
            setTimeout(() => {
              const btn = document.querySelector(sel.btn);
              if (btn) btn.click();
            }, 300);
          }
        }, 600);
        break;
      }
    }
  }

  // --- 吾爱破解论坛自动签到（集成自 X.I.U 精简版）---
  function process52pojie() {
    if (!inHost('www.52pojie.cn')) return;
    if (process52pojie._started) return;   // 每页仅启动一次，避免 MutationObserver 重复创建定时器
    process52pojie._started = true;
    if (isPaused()) return;
    if (!getScriptCfg().pojieSignIn) return;
    // 已处于任务页时不重复触发
    if (location.pathname === '/home.php' && /mod=task/.test(location.search)) return;

    const SIGN_TASK_ID = 2;            // Discuz 每日打卡任务 ID（站点改版时在此调整）
    const POLL_INTERVAL = 400;         // 轮询间隔
    const POLL_TIMEOUT = 6000;         // 最长等待入口出现时间
    const selector = `#um a[href^="home.php?mod=task&do=apply&id=${SIGN_TASK_ID}"]`;

    let done = false;
    const deadline = Date.now() + POLL_TIMEOUT;
    const timer = setInterval(() => {
      try {
        if (isPaused() || !getScriptCfg().pojieSignIn) return;
        const link = document.querySelector(selector);
        if (link && !done) {
          done = true;
          clearInterval(timer);
          doSignIn(link);
        } else if (Date.now() > deadline) {
          clearInterval(timer);
        }
      } catch(e) {}
    }, POLL_INTERVAL);

    function doSignIn(link) {
      try {
        // XHR 无法完成签到，用隐藏 iframe 打开签到页
        const iframe = document.createElement('iframe');
        iframe.style.cssText = 'position:absolute;width:0;height:0;border:0;left:-9999px;';
        iframe.src = link.href;
        iframe.addEventListener('load', () => setTimeout(() => iframe.remove(), 1500), { once: true });
        (document.body || document.documentElement).appendChild(iframe);
        // 把“打卡签到”图标替换为“签到完毕”
        const icon = link.querySelector('.qq_bind');
        if (icon) icon.src = 'https://www.52pojie.cn/static/image/common/wbs.png';
        link.href = 'javascript:void(0);';
        STATS.dom++;
        notify('✅ 吾爱破解 每日签到完成');
      } catch(e) {}
    }
  }

  /* ================================================================
   *  YouTube 播放器工具栏（旋转/翻转/填充 + 视频下载）
   *  原 ytp-rotate v3.4.3 集成：普通视频按钮嵌入 ytp-right-controls，Shorts 嵌入 #right-controls
   *  视频下载按钮同样挂在此处（YouTube 新版 #info-contents 已不可用）
   *  全局 MutationObserver + yt-navigate-finish + 兜底轮询保证按钮不丢失
   *  由 cfg.ytpRotate / cfg.kgyoumv 任一开启即激活；仅 YouTube 域初始化一次
   * ================================================================ */
  function initYoutubeRotate() {
    if (!inHost('youtube.com')) return;
    if (isPaused()) return;
    const cfg = getScriptCfg();
    // 视频旋转/翻转 与 视频下载 都挂载到播放器工具栏；任一开启都需要初始化该模块
    if (!cfg.ytpRotate && !cfg.kgyoumv) return;
    if (initYoutubeRotate._init) return;
    initYoutubeRotate._init = true;
    const ytpRotateEnabled = !!cfg.ytpRotate;
    const ytpDownloadEnabled = !!cfg.kgyoumv;

    /* ============================================================
     * 常量
     * ============================================================ */
    const CSS_VAR  = "--ytp-r-tf";
    const CLS_VID  = "ytp-rotate-vid";
    const CLS_BTN  = "ytp-rotate-btn";
    const ATTR_KEY = "data-ytp-rotate";
    const STORAGE  = "ytp-rotate-state";

    /**
     * 集中管理所有 YT DOM 选择器。改 YT 布局时只需改这一处。
     */
    const SELECTORS = Object.freeze({
      PLAYER: ".html5-video-player",
      VIDEO: ".html5-main-video",
      RIGHT_CONTROLS: ".ytp-right-controls",
      SETTINGS_BTN: ".ytp-settings-button",
      SHORTS_PLAYER_CONTROLS: "ytd-shorts-player-controls",
      SHORTS_RIGHT_CONTROLS: "#right-controls",
      SHORTS_FULLSCREEN: "#fullscreen-button-shape",
      REEL: "ytd-reel-video-renderer",
      CTX_PANEL: ".ytp-contextmenu > .ytp-panel > .ytp-panel-menu",
      CTX_ITEM: "div.ytp-menuitem, a.ytp-menuitem",
      APP_CONTENT: "#content, ytd-app, body",
    });

    const LANG = (navigator.language || "").toLowerCase();
    const T = LANG.includes("zh")
      ? {
          rotate: "顺时针旋转 90° (Alt+Shift+R)",
          cover:  "填充屏幕 (Alt+Shift+F)",
          flipH:  "水平翻转 (Alt+Shift+H)",
          flipV:  "垂直翻转 (Alt+Shift+V)",
          pip:    "画中画",
          toggle: "开/关 旋转插件",
        }
      : {
          rotate: "Rotate 90° (Alt+Shift+R)",
          cover:  "Cover screen (Alt+Shift+F)",
          flipH:  "Flip horizontal (Alt+Shift+H)",
          flipV:  "Flip vertical (Alt+Shift+V)",
          pip:    "Picture in picture",
          toggle: "Toggle ytp-rotate",
        };

    /* ============================================================
     * SVG 图标 — 24×24 viewBox, stroke:currentColor
     * 全部用 document.createElementNS 手动构建（零字符串解析）
     * ============================================================ */
    const _SVG_NS = "http://www.w3.org/2000/svg";

    function _svgEl(tag, attrs, children) {
      const el = document.createElementNS(_SVG_NS, tag);
      for (const k in attrs || {}) el.setAttribute(k, attrs[k]);
      for (const c of children || []) {
        el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
      }
      return el;
    }

    function _iconSvg(inner) {
      return _svgEl("svg", {
        width: "24", height: "24", viewBox: "0 0 24 24", fill: "none",
        stroke: "currentColor", "stroke-width": "2",
        "stroke-linecap": "round", "stroke-linejoin": "round",
      }, inner);
    }

    const SVG = {
      rotate: () => _iconSvg([
        _svgEl("path", { d: "M21 12a9 9 0 1 1-2.64-6.36L21 8" }),
        _svgEl("path", { d: "M21 3v5h-5" }),
      ]),
      cover: () => _iconSvg([
        _svgEl("path", { d: "M15 3h6v6" }),
        _svgEl("path", { d: "M9 21H3v-6" }),
        _svgEl("path", { d: "M21 3l-7 7" }),
        _svgEl("path", { d: "M3 21l7-7" }),
      ]),
      flipH: () => _iconSvg([
        _svgEl("path", { d: "M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" }),
        _svgEl("path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }),
        _svgEl("line", { x1: "12", y1: "2", x2: "12", y2: "22", "stroke-dasharray": "2 3" }),
      ]),
      flipV: () => _iconSvg([
        _svgEl("path", { d: "M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" }),
        _svgEl("path", { d: "M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" }),
        _svgEl("line", { x1: "2", y1: "12", x2: "22", y2: "12", "stroke-dasharray": "2 3" }),
      ]),
      pip: () => _iconSvg([
        _svgEl("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
        _svgEl("rect", { x: "12", y: "12", width: "8", height: "6", rx: "1", fill: "currentColor", stroke: "none" }),
      ]),
      download: () => _iconSvg([
        _svgEl("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        _svgEl("polyline", { points: "7 10 12 15 17 10" }),
        _svgEl("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ]),
    };

    /* ============================================================
     * 状态（localStorage 持久化用户的旋转偏好）
     * ============================================================ */
    const R = { rotate: 0, flipH: false, flipV: false, cover: true, enabled: true };
    try {
      const s = JSON.parse(localStorage.getItem(STORAGE));
      if (s) Object.assign(R, s);
    } catch { /* ignore */ }
    function persist() {
      try { localStorage.setItem(STORAGE, JSON.stringify(R)); } catch { /* ignore */ }
    }

    /* ============================================================
     * CSS
     * ============================================================ */
    let _cssDone = false;
    function ensureCSS() {
      if (_cssDone) return;
      _cssDone = true;
      const el = document.createElement("style");
      el.textContent = `
.${CLS_VID} {
  transform: var(${CSS_VAR}, none) !important;
  transform-origin: center center !important;
  transition: transform 0.25s ease !important;
  will-change: transform;
}
.${CLS_BTN} {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  width: 48px !important;
  height: 48px !important;
  color: #fff !important;
  fill: #fff !important;
  vertical-align: top;
  opacity: 0.9;
  cursor: pointer;
  transition: opacity 0.15s;
}
.${CLS_BTN}:hover { opacity: 1; }
.${CLS_BTN}[aria-pressed="true"] { color: #fc0 !important; fill: #fc0 !important; }
.${CLS_BTN} svg { width: 24px; height: 24px; pointer-events: none; }

.ytp-rotate-shorts-embed-btn {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  width: 40px !important;
  height: 40px !important;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: #fff !important;
  fill: #fff !important;
  cursor: pointer;
  margin: 0 2px;
  opacity: 0.85;
  vertical-align: middle;
  flex-shrink: 0;
  position: relative;
  z-index: 10;
  pointer-events: auto !important;
  transition: opacity 0.15s, background-color 0.15s;
}
.ytp-rotate-shorts-embed-btn:hover { opacity: 1; background: rgba(255,255,255,0.12); }
.ytp-rotate-shorts-embed-btn[aria-pressed="true"] { opacity: 1; background: rgba(255,255,255,0.2); }
.ytp-rotate-shorts-embed-btn svg { width: 24px !important; height: 24px !important; pointer-events: none; }

/* 原生控件条找不到时的自建竖排工具条（YT 改版兜底，保证按钮永远可见） */
.ytp-rotate-shorts-bar {
  position: absolute !important;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex !important;
  flex-direction: column;
  gap: 4px;
  padding: 6px 4px;
  border-radius: 22px;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(6px);
  z-index: 2147483000;
  pointer-events: auto !important;
}
.ytp-rotate-shorts-bar .ytp-rotate-shorts-embed-btn { margin: 0; }

.ytp-rotate-context svg { width: 20px; height: 20px; vertical-align: middle; margin-right: 6px; }
`;
      (document.head || document.documentElement).appendChild(el);
    }

    /* ============================================================
     * Transform 计算 & 应用
     * ============================================================ */
    let _rafPending = false;
    function _apply($video, $player) {
      if (!$video || !$video.isConnected) return;
      if (!R.enabled) { $video.style.setProperty(CSS_VAR, "none"); return; }
      const { rotate, flipH, flipV } = R;
      const isNone = rotate === 0 && !flipH && !flipV;
      if (isNone) { $video.style.setProperty(CSS_VAR, "none"); return; }
      const parts = [`rotate(${rotate * 90}deg)`];
      // 只有 90°/270° 旋转会改变视频方向与容器的匹配关系，需要缩放；
      // 0°/180° 及纯翻转（flip）不应缩放，否则画面会被不必要地缩小一圈。
      if (rotate % 2 === 1) parts.push(`scale(${_calcScale($video, $player)})`);
      if (flipH) parts.push(rotate % 2 === 1 ? "rotateX(180deg)" : "rotateY(180deg)");
      if (flipV) parts.push(rotate % 2 === 1 ? "rotateY(180deg)" : "rotateX(180deg)");
      $video.style.setProperty(CSS_VAR, parts.join(" "));
    }
    function _calcScale($video, $player) {
      if (!$player || !$video) return 1;
      const pw = $player.clientWidth, ph = $player.clientHeight;
      // 用视频原始分辨率计算，避免 clientWidth/clientHeight 被当前 transform 污染
      const vw = $video.videoWidth || $video.clientWidth;
      const vh = $video.videoHeight || $video.clientHeight;
      if (!vw || !vh || !pw || !ph) return 1;
      // 90°/270° 旋转后，视频的宽高与容器互换
      const dw = vh, dh = vw;
      if (dw === 0 || dh === 0) return 1;
      // cover=true 填满容器（可能裁切），cover=false 完整显示（可能有黑边）
      return R.cover ? Math.max(pw / dw, ph / dh) : Math.min(pw / dw, ph / dh);
    }
    function requestUpdate($video, $player) {
      if (_rafPending) return;
      _rafPending = true;
      requestAnimationFrame(() => { _rafPending = false; _apply($video, $player); });
    }

    /* ============================================================
     * 按钮操作
     * ============================================================ */
    function doRotate($v, $p) { R.rotate = (R.rotate + 1) % 4; persist(); requestUpdate($v, $p); }
    function doCover($v, $p)  { R.cover = !R.cover; persist(); requestUpdate($v, $p); }
    function doFlipH($v, $p)  { R.flipH = !R.flipH; persist(); requestUpdate($v, $p); }
    function doFlipV($v, $p)  { R.flipV = !R.flipV; persist(); requestUpdate($v, $p); }
    function doToggle($v, $p) { R.enabled = !R.enabled; persist(); requestUpdate($v, $p); }
    function doReset($v, $p)  { R.rotate = 0; R.flipH = false; R.flipV = false; R.cover = false; persist(); requestUpdate($v, $p); }

    /* ============================================================
     * 图标挂载
     * ============================================================ */
    function _setIcon($el, icon) {
      while ($el.firstChild) $el.removeChild($el.firstChild);
      if (icon instanceof Element) $el.appendChild(icon);
      else if (icon && typeof icon === "string") dbg("[ytp-rotate] _setIcon: 字符串图标不再支持", icon.slice(0, 40));
    }

    /* ============================================================
     * 视频下载：点击按钮直接跳转用户配置的下载站（在设置页选择）
     * 无需二级菜单，链接会在跳转地址中预填（见 openVideoDownloader）
     * ============================================================ */
    /**
     * Shorts 的 /shorts/<id> 路径大多数下载站不识别，统一归一化成 /watch?v=<id>；
     * /embed/<id> 同理。其余页面（/watch、直播等）保持原样。
     */
    function _ytDownloadUrl() {
      try {
        const m = location.pathname.match(/^\/shorts\/([\w-]{6,})/);
        if (m) return location.origin + "/watch?v=" + m[1];
        const e = location.pathname.match(/^\/embed\/([\w-]{6,})/);
        if (e) return location.origin + "/watch?v=" + e[1];
      } catch (err) { /* ignore */ }
      return location.href;
    }
    function _doDownload() {
      openVideoDownloader(_ytDownloadUrl());
    }

    /* ============================================================
     * 普通视频 — 按钮嵌入 ytp-right-controls
     * ============================================================ */
    function _cloneSettingsBtn($player) {
      const orig = $player.querySelector(SELECTORS.SETTINGS_BTN);
      if (!orig) return null;
      const btn = orig.cloneNode(true);
      btn.classList.forEach((c) => { if (c.endsWith("-badge") || c === "ytp-settings-button") btn.classList.remove(c); });
      ["aria-controls","aria-haspopup","aria-expanded","aria-pressed","data-tooltip-text","data-tooltip-target-id","data-title-no-tooltip","data-tooltip-title"].forEach((a) => btn.removeAttribute(a));
      btn.className = "ytp-button " + CLS_BTN;
      btn.removeAttribute("style");
      btn.style.display = "";
      btn.style.visibility = "visible";
      return btn;
    }
    function _addNormalButton($player, { icon, title, key, pressed, handler }) {
      const $rc = $player.querySelector(SELECTORS.RIGHT_CONTROLS);
      if (!$rc) return null;
      const $btn = _cloneSettingsBtn($player);
      if (!$btn) return null;
      _setIcon($btn, icon);
      $btn.title = title;
      $btn.setAttribute("aria-label", title);
      $btn.setAttribute("data-rt-key", key || "");
      if (pressed) $btn.setAttribute("aria-pressed", "true");
      $btn.addEventListener("click", handler);
      $rc.insertBefore($btn, $rc.firstElementChild);
      return $btn;
    }
    function setupNormal($player) {
      if ($player.hasAttribute(ATTR_KEY)) return;
      const $v = $player.querySelector(SELECTORS.VIDEO);
      const $rc = $player.querySelector(SELECTORS.RIGHT_CONTROLS);
      const $sb = $player.querySelector(SELECTORS.SETTINGS_BTN);
      if (!$v || !$rc || !$sb) {
        setTimeout(() => { if ($player.isConnected && !$player.hasAttribute(ATTR_KEY)) setupNormal($player); }, 500);
        return;
      }
      const btns = [];
      if (ytpRotateEnabled) {
        btns.push(
          { key: null,    icon: SVG.rotate(), title: T.rotate, handler: () => { doRotate($v, $player); updatePressed($player); } },
          { key: "cover", icon: SVG.cover(),  title: T.cover,  handler: () => { doCover($v, $player);  updatePressed($player); }, pressed: R.cover },
          { key: "flipH", icon: SVG.flipH(),  title: T.flipH,  handler: () => { doFlipH($v, $player);  updatePressed($player); }, pressed: R.flipH },
          { key: "flipV", icon: SVG.flipV(),  title: T.flipV,  handler: () => { doFlipV($v, $player);  updatePressed($player); }, pressed: R.flipV }
        );
      }
      if (ytpDownloadEnabled) {
        btns.push({ key: "download", icon: SVG.download(), title: "下载视频", handler: _doDownload });
      }
      const added = [];
      let allOk = true;
      try {
        for (const cfg of btns) {
          const $btn = _addNormalButton($player, cfg);
          if (!$btn) { allOk = false; break; }
          added.push($btn);
        }
      } catch (err) {
        dbg("[ytp-rotate] setupNormal threw:", err);
        added.forEach(($btn) => { try { $btn.remove(); } catch (e) {} });
        setTimeout(() => { if ($player.isConnected && !$player.hasAttribute(ATTR_KEY)) setupNormal($player); }, 1000);
        return;
      }
      if (!allOk) {
        added.forEach(($btn) => { try { $btn.remove(); } catch (e) {} });
        setTimeout(() => { if ($player.isConnected && !$player.hasAttribute(ATTR_KEY)) setupNormal($player); }, 500);
        return;
      }
      $player.setAttribute(ATTR_KEY, "1");
      if (ytpRotateEnabled) {
        $v.classList.add(CLS_VID);
        setupContextMenu($player, $v);
        if (window.ResizeObserver) { const ro = new ResizeObserver(() => requestUpdate($v, $player)); ro.observe($player); }
        requestUpdate($v, $player);
        const $vContainer = $player.querySelector(".html5-video-container");
        ncObserve($vContainer || $player, function () {
          const newV = $player.querySelector(SELECTORS.VIDEO);
          if (newV && newV !== $v && newV instanceof HTMLVideoElement) {
            $v.classList.remove(CLS_VID);
            newV.classList.add(CLS_VID);
            requestUpdate(newV, $player);
            const rb = btns.find(b => b.key === null);
            const cb = btns.find(b => b.key === "cover");
            const hb = btns.find(b => b.key === "flipH");
            const vb = btns.find(b => b.key === "flipV");
            if (rb) rb.handler = () => { doRotate(newV, $player); updatePressed($player); };
            if (cb) cb.handler = () => { doCover(newV, $player);  updatePressed($player); };
            if (hb) hb.handler = () => { doFlipH(newV, $player);  updatePressed($player); };
            if (vb) vb.handler = () => { doFlipV(newV, $player);  updatePressed($player); };
          }
        }, { childList: true, subtree: true });
      }
    }
    function updatePressed($root, sel) {
      if (!$root) return;
      const scope = sel || "." + CLS_BTN + "[data-rt-key]";
      $root.querySelectorAll(scope).forEach((b) => {
        const k = b.getAttribute("data-rt-key");
        if (k === "_root" || R[k] === undefined) return;
        b.setAttribute("aria-pressed", R[k] ? "true" : "false");
      });
    }

    /* ============================================================
     * Shorts — 按钮注入
     *
     * v12.1.0 重写要点（修复「Shorts 旋转/镜像/下载失效」）：
     *  1. 控件容器只在**当前 reel 内部**查找，绝不跨 reel 回退。
     *     旧实现优先取 `ytd-reel-video-renderer[selected]`，甚至 document 级兜底，
     *     导致 A reel 的按钮被塞进 B reel 的控件条，而 handler 闭包里握的是 A 的 video —
     *     点了按钮等于在操作一个不可见的视频，表现就是「完全没反应」。
     *  2. handler 改为**点击时实时解析** video / player，不再捕获快照。
     *     Shorts 上下滑动会复用播放器并替换 <video> 元素，旧闭包里的 $v 变成 detached，
     *     _apply() 的 isConnected 检查直接 return，旋转/镜像静默失效。
     *  3. 容器选择器扩展为候选列表（新老版 YouTube 均覆盖），
     *     并在**全部找不到时自建悬浮竖排工具条**，保证按钮永远可见 —— 不再被 YT 改版一击致命。
     *  4. 只有真正注入成功才打标记，失败留给 healer 重试。
     *  5. 下载链接把 /shorts/<id> 归一化成 /watch?v=<id>，多数下载站不认 shorts 路径。
     * ============================================================ */
    let _shortsContainerCache = null;
    function _getShortsContainer() {
      if (_shortsContainerCache && document.contains(_shortsContainerCache)) return _shortsContainerCache;
      _shortsContainerCache = (
        document.querySelector("#shorts-container") ||
        document.querySelector("ytd-shorts") ||
        document.querySelector(SELECTORS.REEL) || null
      );
      return _shortsContainerCache;
    }

    /** 在 reel 内解析出 { $p, $v }；解析不到返回 null。绝不跨 reel。 */
    function _shortsCtx($reel) {
      if (!$reel || !$reel.isConnected) return null;
      const $p = $reel.querySelector(SELECTORS.PLAYER) || $reel.querySelector("#shorts-player") || null;
      if (!$p) return null;
      const $v = $p.querySelector(SELECTORS.VIDEO) || $p.querySelector("video") || null;
      if (!$v) return null;
      return { $p, $v };
    }

    /**
     * 在 reel 内部找原生右侧控件条。候选覆盖新老多版 DOM；找不到返回 null。
     * 注意：只在 $reel 子树里找（含 shadowRoot），不做 document 级兜底。
     */
    function _findShortsRightControls($reel) {
      if (!$reel || !$reel.isConnected) return null;

      const HOSTS = [
        SELECTORS.SHORTS_PLAYER_CONTROLS,          // ytd-shorts-player-controls（旧版）
        "ytd-reel-player-overlay-renderer",        // 新版覆盖层
        "#overlay",
      ];
      const RCS = [
        SELECTORS.SHORTS_RIGHT_CONTROLS,           // #right-controls
        "#actions",
        ".shorts-video-actions",
        "#menu",
      ];
      const hit = () => {
        for (const hostSel of HOSTS) {
          const hosts = $reel.querySelectorAll(hostSel);
          for (const host of hosts) {
            for (const rcSel of RCS) {
              const rc = host.querySelector(rcSel);
              if (rc) return rc;
              if (host.shadowRoot) {
                const rc2 = host.shadowRoot.querySelector(rcSel);
                if (rc2) return rc2;
              }
            }
          }
        }
        // reel 直接子层再兜一次（有些版本 #actions 直接挂在 reel 下）
        for (const rcSel of RCS) {
          const rc = $reel.querySelector(rcSel);
          if (rc) return rc;
        }
        return null;
      };

      const native = hit();
      if (native) {
        // 原生控件条（重新）出现了：撤掉之前的兜底条，避免两套按钮并存
        const stale = $reel.querySelector(".ytp-rotate-shorts-bar");
        if (stale) { try { stale.remove(); } catch (e) {} }
        $reel._ytpNativeMiss = 0;
        return native;
      }
      // 原生找不到：复用已建的兜底条
      const mine = $reel.querySelector(".ytp-rotate-shorts-bar");
      if (mine) return mine;
      return null;
    }

    /**
     * 原生控件条找不到时自建竖排悬浮工具条。
     * 连续 3 次（≈6s，healer 2s 一轮）都找不到原生控件才自建，
     * 避免只是「覆盖层还没渲染完」就急着加一条多余的工具条。
     */
    function _createShortsBar($reel) {
      if (!$reel || !$reel.isConnected) return null;
      let bar = $reel.querySelector(".ytp-rotate-shorts-bar");
      if (bar) return bar;
      $reel._ytpNativeMiss = ($reel._ytpNativeMiss || 0) + 1;
      if ($reel._ytpNativeMiss < 3) return null;
      bar = document.createElement("div");
      bar.className = "ytp-rotate-shorts-bar";
      const anchor = $reel.querySelector(SELECTORS.PLAYER) || $reel.querySelector("#shorts-player");
      const host = (anchor && anchor.parentElement) || $reel;
      // 宿主需要定位上下文，否则 absolute 会跑到更外层
      try {
        const pos = getComputedStyle(host).position;
        if (pos === "static") host.style.position = "relative";
      } catch (e) { /* ignore */ }
      host.appendChild(bar);
      return bar;
    }

    function _embedShortsBtn($controls, before, cfg) {
      if (!$controls) return null;
      const key = cfg.key || "_root";
      const esc = (CSS && CSS.escape) ? CSS.escape(key) : key;
      if ($controls.querySelector('.ytp-rotate-shorts-embed-btn[data-rt-key="' + esc + '"]')) return null;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ytp-rotate-shorts-embed-btn";
      btn.appendChild(cfg.icon);
      btn.title = cfg.title;
      btn.setAttribute("aria-label", cfg.title);
      btn.setAttribute("data-rt-key", key);
      if (cfg.pressed) btn.setAttribute("aria-pressed", "true");
      // 阻止冒泡：Shorts 覆盖层的点击会被 YT 用来暂停/播放
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        cfg.handler(ev);
      });
      if (before && before.parentNode === $controls) $controls.insertBefore(btn, before);
      else $controls.appendChild(btn);
      return btn;
    }

    function updateShortsPressed($controls) {
      updatePressed($controls, ".ytp-rotate-shorts-embed-btn[data-rt-key]");
    }

    /**
     * 保证 $reel 上有按钮，并把 transform 类挂到**当前**的 video 上。
     * 返回 true = 本次新注入了按钮。
     */
    function _ensureShortsButtons($reel) {
      if (!$reel || !$reel.isConnected) return false;
      let $controls = _findShortsRightControls($reel);
      if (!$controls) $controls = _createShortsBar($reel);
      if (!$controls) return false;

      // 每轮都重新解析 video —— Shorts 滑动会换 <video> 元素
      const ctx = _shortsCtx($reel);
      if (ctx && ytpRotateEnabled) {
        if (!ctx.$v.classList.contains(CLS_VID)) ctx.$v.classList.add(CLS_VID);
        requestUpdate(ctx.$v, ctx.$p);
      }

      const $fullscreen = $controls.querySelector(SELECTORS.SHORTS_FULLSCREEN);
      const before = ($fullscreen && $fullscreen.parentNode === $controls) ? $fullscreen : null;

      // handler 统一走实时解析，杜绝闭包持有失效引用
      const live = (act) => () => {
        const c = _shortsCtx($reel);
        if (!c) return;
        act(c.$v, c.$p);
        updateShortsPressed($controls);
      };

      const defs = [];
      if (ytpRotateEnabled) {
        defs.push(
          { key: null,    icon: () => SVG.rotate(), title: T.rotate, handler: live(doRotate) },
          { key: "cover", icon: () => SVG.cover(),  title: T.cover,  handler: live(doCover), pressed: R.cover },
          { key: "flipH", icon: () => SVG.flipH(),  title: T.flipH,  handler: live(doFlipH), pressed: R.flipH },
          { key: "flipV", icon: () => SVG.flipV(),  title: T.flipV,  handler: live(doFlipV), pressed: R.flipV }
        );
      }
      if (ytpDownloadEnabled) {
        defs.push({ key: "download", icon: () => SVG.download(), title: "下载视频", handler: _doDownload });
      }

      let added = 0;
      for (const d of defs) {
        const btn = _embedShortsBtn($controls, before, {
          key: d.key, icon: d.icon(), title: d.title, pressed: d.pressed, handler: d.handler,
        });
        if (btn) added++;
      }
      // 按钮已存在时也要同步高亮态
      updateShortsPressed($controls);
      return added > 0 || !!$controls.querySelector(".ytp-rotate-shorts-embed-btn");
    }

    function _ensureShortsResize($reel) {
      if ($reel._ytpRO) return;
      const ctx = _shortsCtx($reel);
      if (!ctx || !window.ResizeObserver) return;
      $reel._ytpRO = new ResizeObserver(() => {
        const c = _shortsCtx($reel);
        if (c) requestUpdate(c.$v, c.$p);
      });
      $reel._ytpRO.observe(ctx.$p);
    }

    const _healReels = new Set();
    let _healerTimer = null;
    function _registerHeal($reel) { if (_healReels.has($reel)) return; _healReels.add($reel); }
    function _startGlobalHealer() {
      _healerTimer = setInterval(() => {
        if (document.hidden) return;
        for (const reel of _healReels) {
          try {
            if (!document.contains(reel)) {
              if (reel._ytpRO) { try { reel._ytpRO.disconnect(); } catch (e) {} reel._ytpRO = null; }
              _healReels.delete(reel);
              continue;
            }
            _ensureShortsButtons(reel);
          } catch (e) { dbg("[ytp-rotate] heal 异常", e); }
        }
      }, 2000);
    }

    function setupShortsReel($reel) {
      const key = ATTR_KEY + "-s";
      const ok = _ensureShortsButtons($reel);
      // 只有注入成功才打标记，失败下一轮 scanAndSetup / healer 继续重试
      if (ok && !$reel.hasAttribute(key)) $reel.setAttribute(key, "1");
      if (ytpRotateEnabled) _ensureShortsResize($reel);
      _registerHeal($reel);
    }

    /* ============================================================
     * 右键菜单
     * ============================================================ */
    let _menuReady = false;
    let _contextVRef = null;
    let _contextPRef = null;
    function setupContextMenu($player, $v) {
      _contextVRef = $v; _contextPRef = $player;
      if (_menuReady) return;
      document.addEventListener("contextmenu", () => { _injectMenuItems(); }, { once: false });
      _tryInjectMenu();
    }
    function _tryInjectMenu() {
      const panel = document.querySelector(SELECTORS.CTX_PANEL);
      if (!panel || panel.querySelector('[data-ytp-rotate-menu]')) return;
      _menuReady = true;
      const tpl = panel.querySelector(SELECTORS.CTX_ITEM);
      if (!tpl) return;
      _addMenuSep(panel);
      const items = [
        { label: T.rotate, icon: SVG.rotate(), click: () => { if (_contextVRef && _contextPRef) doRotate(_contextVRef, _contextPRef); } },
        { label: T.cover,  icon: SVG.cover(),  click: () => { if (_contextVRef && _contextPRef) doCover(_contextVRef, _contextPRef); } },
        { label: T.flipH,  icon: SVG.flipH(),  click: () => { if (_contextVRef && _contextPRef) doFlipH(_contextVRef, _contextPRef); } },
        { label: T.flipV,  icon: SVG.flipV(),  click: () => { if (_contextVRef && _contextPRef) doFlipV(_contextVRef, _contextPRef); } },
        { label: T.pip,    icon: SVG.pip(),    click: () => {
          if (document.pictureInPictureElement) document.exitPictureInPicture();
          else (_contextVRef || document.querySelector("video"))?.requestPictureInPicture?.();
        }},
        { label: T.toggle, icon: "", click: () => { if (_contextVRef && _contextPRef) doToggle(_contextVRef, _contextPRef); } },
      ];
      for (const item of items) _addMenuItem(panel, tpl, item);
    }
    function _addMenuSep(panel) {
      const sep = document.createElement("div");
      sep.className = "ytp-menuitem";
      sep.setAttribute("role", "menuitem");
      sep.setAttribute("aria-disabled", "true");
      sep.setAttribute("data-ytp-rotate-menu", "");
      sep.style.cssText = "height:1px;margin:4px 8px;background:rgba(255,255,255,0.1);pointer-events:none;";
      const icon = document.createElement("div"); icon.className = "ytp-menuitem-icon";
      const label = document.createElement("div"); label.className = "ytp-menuitem-label";
      const content = document.createElement("div"); content.className = "ytp-menuitem-content";
      sep.appendChild(icon); sep.appendChild(label); sep.appendChild(content);
      panel.appendChild(sep);
    }
    function _addMenuItem(panel, tpl, { label, icon, click }) {
      const el = tpl.cloneNode(true);
      el.setAttribute("data-ytp-rotate-menu", "");
      const $label = el.querySelector(".ytp-menuitem-label");
      const $icon  = el.querySelector(".ytp-menuitem-icon");
      if ($label) $label.textContent = label;
      if ($icon && icon) _setIcon($icon, icon);
      if (click) el.addEventListener("click", click);
      panel.appendChild(el);
    }
    function _injectMenuItems() { setTimeout(_tryInjectMenu, 50); }

    /* ============================================================
     * 全局扫描
     * ============================================================ */
    function scanAndSetup() {
      const players = document.querySelectorAll(SELECTORS.PLAYER + ":not([" + ATTR_KEY + "])");
      for (const p of players) {
        if (p.closest(SELECTORS.REEL) || p.closest("#shorts-container, ytd-shorts")) continue;
        setupNormal(p);
      }
      if (location.pathname.startsWith("/shorts/")) {
        const reels = document.querySelectorAll(SELECTORS.REEL + ":not([" + ATTR_KEY + "-s])");
        for (const r of reels) setupShortsReel(r);
      } else {
        const sc = _getShortsContainer();
        if (sc) {
          const reels = sc.querySelectorAll(SELECTORS.REEL + ":not([" + ATTR_KEY + "-s])");
          for (const r of reels) setupShortsReel(r);
        }
      }
    }

    /* ============================================================
     * 键盘快捷键（Alt+Shift + R/F/H/V）
     * ============================================================ */
    function findActiveVideoCtx() {
      const players = document.querySelectorAll(SELECTORS.PLAYER);
      for (const p of players) {
        if (p.getBoundingClientRect().width === 0) continue;
        const v = p.querySelector(SELECTORS.VIDEO);
        if (v) return { $v: v, $p: p };
      }
      return null;
    }
    if (ytpRotateEnabled) {
      document.addEventListener("keydown", (ev) => {
        if (!ev.altKey || !ev.shiftKey || ev.ctrlKey || ev.metaKey) return;
        if (!getScriptCfg().shortcutYtp) return;
        const ctx = findActiveVideoCtx();
        if (!ctx) return;
        ev.preventDefault();
        const { $v, $p } = ctx;
        switch (ev.code) {
          case "KeyR": doRotate($v, $p); break;
          case "KeyF": doCover($v, $p); break;
          case "KeyH": doFlipH($v, $p); break;
          case "KeyV": doFlipV($v, $p); break;
        }
        if (ev.code === "KeyF" || ev.code === "KeyH" || ev.code === "KeyV") {
          requestAnimationFrame(() => {
            document.querySelectorAll(SELECTORS.PLAYER).forEach((pl) => updatePressed(pl));
          });
        }
      });
    }

    /* ============================================================
     * 右键菜单实时注入 — 持续监听（仅在旋转功能开启时才注入旋转菜单项）
     * ============================================================ */
    if (ytpRotateEnabled) {
      document.addEventListener("contextmenu", (ev) => {
        const player = ev.target.closest?.(SELECTORS.PLAYER);
        if (player) {
          _contextPRef = player;
          _contextVRef = player.querySelector(SELECTORS.VIDEO);
          _tryInjectMenu();
        }
      }, { passive: true });
    }

    /* ============================================================
     * 全局 MutationObserver（缩 scope 到 #content / ytd-app）
     * ============================================================ */
    let _scanRaf = false;
    function scheduleScan() {
      if (_scanRaf) return;
      if (typeof document !== "undefined" && document.hidden) return;
      _scanRaf = true;
      requestAnimationFrame(() => { _scanRaf = false; scanAndSetup(); });
    }
    const _obsTarget = document.querySelector("#content") || document.querySelector("ytd-app") || document.body;
    const _unobBodyMO = ncObserve(_obsTarget, scheduleScan, { childList: true, subtree: true });

    /* ============================================================
     * SPA 导航
     * ============================================================ */
    document.addEventListener("yt-navigate-finish", () => {
      document.querySelectorAll('[data-ytp-rotate-menu]').forEach((el) => el.remove());
      _menuReady = false;
      _shortsContainerCache = null;
      setTimeout(scanAndSetup, 300);
    });

    /* ============================================================
     * 兜底轮询 — 每 5s 扫描未标记播放器
     * ============================================================ */
    let _backupTimer = null;
    _backupTimer = setInterval(() => {
      if (document.hidden) return;
      try { scanAndSetup(); } catch (e) {}
    }, 5000);

    /* ============================================================
     * Shorts 滑动切换监听
     * ============================================================ */
    function setupShortsScrollWatch() {
      const sc = _getShortsContainer();
      if (!sc) return;
      const dispatchReel = (reel) => {
        if (!reel || reel.nodeType !== Node.ELEMENT_NODE) return;
        setTimeout(() => { try { setupShortsReel(reel); } catch (e) {} }, 50);
      };
      ncObserve(sc, function (mutations) {
        for (const m of mutations) {
          if (m.type === "attributes" && m.attributeName === "selected") {
            if (m.target.hasAttribute && m.target.hasAttribute("selected")) dispatchReel(m.target);
          } else if (m.type === "childList") {
            for (const node of m.addedNodes) {
              if (node.nodeType !== Node.ELEMENT_NODE) continue;
              const isReel = node.matches && node.matches(SELECTORS.REEL);
              if (isReel || (node.querySelectorAll && node.querySelectorAll(SELECTORS.REEL).length)) {
                const reels = isReel ? [node] : Array.from(node.querySelectorAll(SELECTORS.REEL));
                for (const r of reels) dispatchReel(r);
              }
            }
          }
        }
      }, { childList: true, subtree: true, attributes: true, attributeFilter: ["selected"] });
    }

    /* ============================================================
     * 启动
     * ============================================================ */
    ensureCSS();
    _startGlobalHealer();
    setTimeout(() => { scanAndSetup(); setupShortsScrollWatch(); }, 500);
    window.addEventListener("pagehide", () => {
      // 仅注销本模块持有的 MutationObserver；setInterval 计时器(_backupTimer/_healerTimer)由 ncInterval 在 pagehide 全局统一清空，无需重复清理
      try { _unobBodyMO(); } catch (e) {}
    }, { once: true });

    dbg("[ytp-rotate] integrated v3.4.3 ready");
  }

  /* ================================================================
   *  5.1 好看视频暂停广告屏蔽
   *  修复原失效脚本（选择器 .tieba-pause-ad-container/.close-btn 早已不存在）；
   *  现用真实 DOM：.lianmeng-pause(.lianmeng-pause-show) + .mediago-pause-close
   * ================================================================ */
  function initHaokanPauseAd() {
    if (!inHost('haokan.baidu.com')) return;
    if (isPaused()) return;
    if (!getScriptCfg().haokanPauseAd) return;
    if (initHaokanPauseAd._init) return;
    initHaokanPauseAd._init = true;

    const AD = '.lianmeng-pause';
    const CLOSE = '.mediago-pause-close';

    /* ============================================================
     * 1) 终极兜底：CSS 永久隐藏广告层，彻底杜绝闪烁
     * ============================================================ */
    const style = document.createElement('style');
    style.textContent = AD + '{display:none!important}';
    (document.documentElement || document.head || document.body).appendChild(style);

    /* ============================================================
     * 2) 关闭逻辑：优先点官方关闭按钮，再强制隐藏兜底
     * ============================================================ */
    function closeAd() {
      const ads = document.querySelectorAll(AD);
      if (!ads.length) return;
      ads.forEach(ad => {
        if (!ad.classList.contains('lianmeng-pause-show')) return;
        const btn = ad.querySelector(CLOSE);
        if (btn) { try { btn.click(); } catch (e) {} }
        // 兜底：直接移除元素，确保广告彻底消失不反复
        ad.classList.remove('lianmeng-pause-show');
        try { ad.style.setProperty('display', 'none', 'important'); } catch (e) {}
        try { ad.remove(); } catch (e) {}
        STATS.skippedAds++;
      });
    }

    /* ============================================================
     * 3) 即时监听：广告注入或显示态变化时立刻关闭
     *    同时顺便绑定后续出现的 <video> 的 pause 事件
     * ============================================================ */
    function bindPause() {
      const v = document.querySelector('video');
      if (v && !v._hkPauseBound) {
        v._hkPauseBound = true;
        v.addEventListener('pause', () => { setTimeout(closeAd, 0); }, { passive: true });
      }
    }
    const _unobHaokan = ncObserve(document.documentElement, function () {
      bindPause();
      if (document.querySelector(AD + '.lianmeng-pause-show')) closeAd();
    }, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    bindPause();

    /* ============================================================
     * 4) 兜底自愈：低频轮询，覆盖“仅靠 class 变化漏接”的边缘情况
     * ============================================================ */
    const heal = setInterval(() => {
      if (document.hidden) return;
      try { closeAd(); } catch (e) {}
    }, 1200);

    /* ============================================================
     * 清理
     * ============================================================ */
    window.addEventListener('pagehide', () => {
      try { _unobHaokan(); } catch (e) {}
      clearInterval(heal);
    }, { once: true });

    // 立即尝试一次
    closeAd();
    dbg("[haokan-pause-ad] integrated ready");
  }

  /* ================================================================
   *  6. 通用功能
   * ================================================================ */

  // 百度热搜榜 class 实时同步
  function updateBaiduHotClass() {
    if (getScriptCfg().baiduhot) document.documentElement.classList.add('adc-hide-baiduhot');
    else document.documentElement.classList.remove('adc-hide-baiduhot');
  }

  // 站点「自带深色模式」判定：不能只看"当前渲染成暗色"——本脚本的美化 CSS / 护眼蒙版也会把页面染暗，
  // 那样会误判（谷歌白卡 bug 的根因）。这里只认站点自己的深色信号：html/根元素上的深色类名、
  // data-theme、color-scheme 声明（meta 或 computed）。判定前先剔除本脚本自己加的类，避免自证循环。
  function ncSiteNativeDarkCapable() {
    try {
      const htmlEl = document.documentElement;
      if (!htmlEl) return false;
      const cls = (htmlEl.className || '').replace(DARK_CLASS, '').replace('adc-hide-baiduhot', '');
      if (/darkmode|dark-mode|theme-dark|night|\bdark\b/i.test(cls)) return true;
      const dt = htmlEl.getAttribute && (htmlEl.getAttribute('data-theme') || '');
      if (/dark/i.test(dt)) return true;
      const cs = window.getComputedStyle(htmlEl);
      const scheme = cs ? String(cs.getPropertyValue('color-scheme') || '') : '';
      if (/dark/i.test(scheme)) return true;
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta && /dark/i.test(meta.getAttribute('content') || '')) return true;
    } catch (e) {}
    return false;
  }

  // 当前域名是否命中用户手动名单（精确域名或父域）
  function ncHostInList(list) {
    try {
      const host = String(HOST || location.hostname || '').toLowerCase();
      if (!host || !Array.isArray(list)) return false;
      return list.some(h => { const d = String(h || '').toLowerCase(); return !!d && (host === d || host.endsWith('.' + d)); });
    } catch (e) { return false; }
  }

  // 暗黑模式按站点让行 / 强制接管（供油猴菜单调用）
  function ncToggleDarkHostOwnership() {
    try {
      const cfg = getScriptCfg();
      const host = String(HOST || location.hostname || '').toLowerCase();
      if (!host) return;
      cfg.darkSkipHosts = Array.isArray(cfg.darkSkipHosts) ? cfg.darkSkipHosts : [];
      cfg.darkForceHosts = Array.isArray(cfg.darkForceHosts) ? cfg.darkForceHosts : [];
      const i = cfg.darkSkipHosts.indexOf(host);
      const j = cfg.darkForceHosts.indexOf(host);
      if (i >= 0) { cfg.darkSkipHosts.splice(i, 1); cfg.darkForceHosts.push(host); notify('本站：已强制由脚本接管暗黑'); }
      else if (j >= 0) { cfg.darkForceHosts.splice(j, 1); notify('本站：已恢复自动判断'); }
      else { cfg.darkSkipHosts.push(host); notify('本站：交给网站自己的深色模式'); }
      try { setConfig(getConfig()); } catch (e) {}
      applyDarkMode();
    } catch (e) {}
  }

  // 页面本身已是深色（暗黑系站点）：跳过反色，避免被洗成刺眼亮色
  function ncSiteAlreadyDark() {
    try {
      const el = document.body || document.documentElement;
      if (!el) return false;
      const bg = getComputedStyle(el).backgroundColor || '';
      const m = bg.match(/rgba?\(([^)]+)\)/);
      if (!m) return false;
      const p = m[1].split(',').map(Number);
      const alpha = p.length > 3 ? p[3] : 1;
      if (alpha < 0.1) return false;          // 背景透明无从判断，按亮色处理
      const lum = 0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2];
      return lum < 70;                         // 亮度足够低 → 视为深色站点
    } catch (e) { return false; }
  }

  // 暗黑模式
  function applyDarkMode() {
    const cfg = getScriptCfg();
    updateBaiduHotClass();
    const htmlEl = document.documentElement;
    const host = String(HOST || (location && location.hostname) || '').toLowerCase();
    const forced = ncHostInList(cfg.darkForceHosts);
    const skipped = ncHostInList(cfg.darkSkipHosts);
    // 让行策略（用户明确要求，简单可预期）：
    //   站点自带深色模式 / 当前已渲染为深色 → 脚本暗黑直接禁用，交给网站自己处理。
    //   否则两套暗色（站点的 + 脚本的）会同时生效、互相打架，观感最差。
    //   优先级：用户手动 darkForceHosts 强制接管 > 让行判定 > darkSkipHosts 用户手动让行。
    let wantDark = !!cfg.darkMode;
    let standDown = false;
    if (wantDark && !forced && (skipped || ncSiteAlreadyDark() || ncSiteNativeDarkCapable())) {
      wantDark = false; standDown = true;
    }
    htmlEl.classList.toggle(DARK_CLASS, wantDark);
    // 让行时提示一次，避免用户以为脚本坏了（自带深色站点本来就没变化）
    if (standDown && host && !_ncStandDownNotified[host]) {
      _ncStandDownNotified[host] = 1;
      try { notify('本站已自带深色模式，脚本已让行（油猴菜单可强制接管）'); } catch (e) {}
    }
    // 暗黑 × 护眼联动：切换暗色后立即刷新护眼蒙版配色，避免两者叠加越叠越暗
    try { if (getScriptCfg().baidueye) applyEyeCare(); } catch (e) {}
    // 运行时残留亮块扫描：静态选择器覆盖不到的未知容器，交给自适应扫描兜底
    if (wantDark) { try { ncInitForceDarkObserver(); ncScheduleForceScan(500); } catch (e) {} }

    prefersDark.addEventListener('change', (e) => {
      if (getScriptCfg().darkMode !== true) return;
      htmlEl.classList.toggle(DARK_CLASS, ncIsFineDarkSite() || (!ncSiteAlreadyDark() && e.matches));
      try { if (getScriptCfg().baidueye) applyEyeCare(); } catch (e) {}
    });
  }

  // 护眼模式（全新护眼蒙版重构，版本号维持 1.0.0 回归基线）：
  //   * 视觉柔和层：position:fixed 全屏 overlay + mix-blend-mode:multiply 暖色乘色 → 降视觉刺激、缓解眼疲劳
  //     （注：multiply 不改变屏幕蓝光发射量，真正降蓝光需 OS 级护眼模式：Windows Night Light / macOS Night Shift / 屏幕硬件护眼；
  //      蒙版的真实作用是减少纯白刺眼 + 降对比度 + 画面柔和）
  //   * 行为护眼层（20-20-20 提醒）：每 20 分钟 zkToast 提醒「远眺 20 英尺外的物体 20 秒」—— 科学共识最有效的护眼手段
  //   * 全站生效（bootCore 阶段3 全局）、覆盖全面、不遮挡脚本面板（z-index 2147483640 < 2147483646）
  // 暗黑模式下的护眼色自适应：把预设暖色按 ratio 向白提亮后再参与 multiply。
  // 数学依据——multiply 结果 = 底色 × 蒙版色。暗底（如 #16213e）再乘强暖色会越叠越暗、糊成一团；
  // 把蒙版色提亮到接近白后，乘法结果接近底色并带上暖色调 —— 即「只染色、不压暗」。
  // 混合方式仍为 multiply（HELP 与 verify_eyecare_overlay 均以此为准），不引入反色。
  function ncLightenForDark(color, ratio) {
    try {
      const m = color.match(/(\d+(?:\.\d+)?)\D+(\d+(?:\.\d+)?)\D+(\d+(?:\.\d+)?)/);
      if (!m) return 'rgba(255,250,240,1)';
      const k = ratio || 0.78;
      const lift = (v) => Math.round(Number(v) + (255 - Number(v)) * k);
      return 'rgba(' + lift(m[1]) + ',' + lift(m[2]) + ',' + lift(m[3]) + ',1)';
    } catch (e) { return 'rgba(255,250,240,1)'; }
  }

  function applyEyeCare() {
    const cfg = getScriptCfg();
    const existingOverlay = document.getElementById('nc-eye-overlay');
    ncEyeRestStop();   // 任何状态变更都先停止旧定时器（幂等）
    if (!cfg.baidueye) { if (existingOverlay) existingOverlay.remove(); return; }
    const color = cfg.baidueyecolor || 'rgba(204,232,207,1)';
    const strength = cfg.baidueyestrength || 'standard';
    const alphaMap = { soft: 0.16, standard: 0.26, strong: 0.38 };
    const alpha = Object.prototype.hasOwnProperty.call(alphaMap, strength) ? alphaMap[strength] : 0.26;
    // 与暗黑模式相辅相成：暗底下把暖色提亮 + 降 alpha，避免乘法叠加导致画面过暗
    const isDarkNow = document.documentElement.classList.contains(DARK_CLASS);
    const overlayBg = isDarkNow
      ? ncColorToRgba(ncLightenForDark(color), Math.min(alpha, 0.14))
      : ncColorToRgba(color, alpha);
    let overlayEl = existingOverlay;
    if (!overlayEl) {
      overlayEl = document.createElement('div');
      overlayEl.id = 'nc-eye-overlay';
      // 挂 documentElement 而非 body：保证跨页面结构（含全屏 video、站点内 shadow-root）仍能盖住
      (document.documentElement || document.body).appendChild(overlayEl);
    }
    overlayEl.style.cssText = 'position:fixed;inset:0;z-index:2147483640;pointer-events:none;mix-blend-mode:multiply;background:' + overlayBg + ';';
    // 启动 20-20-20 休息提醒（行为护眼，真正能起作用的部分）
    if (cfg.baidueyerest) ncEyeRestStart();
  }

  // 20-20-20 法则休息提醒：每 20 分钟 toast 一次。
  //   * 闭包内 module-level 单例 timer（_ncRestTimer），多次 applyEyeCare 调用幂等
  //   * 与护眼蒙版共用同一开关（baidueye）+ 独立静默开关（baidueyerest）
  //   * toast 用 zkToast（非阻塞、不挡操作），dur=8s 够读完
  let _ncRestTimer = null;
  function ncEyeRestStart() {
    if (_ncRestTimer) return;
    const cfg = getScriptCfg();
    if (!cfg.baidueye || !cfg.baidueyerest) return;
    _ncRestTimer = setInterval(function () {
      try {
        zkToast('护眼提醒：远眺 20 英尺（6 米）外的物体 20 秒（20-20-20 法则）', { type: 'ok', dur: 8000 });
      } catch (e) {}
    }, 20 * 60 * 1000);
  }
  function ncEyeRestStop() {
    if (_ncRestTimer) { try { clearInterval(_ncRestTimer); } catch (e) {} _ncRestTimer = null; }
  }
  // （旧版 applyEyeCare 已合并到上方"护眼模式"区块的新版定义，含 ncEyeRestStart/Stop timer；ncColorToRgba 见下方）

  // 将用户色（rgba/rgb/hex/#rrggbb）转成带指定 alpha 的 rgba 字符串（取色器给的是 alpha=1，这里叠加强度档位）
  function ncColorToRgba(color, alpha) {
    const inputStr = String(color || '').trim();
    const matchArr = inputStr.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
    if (matchArr) return 'rgba(' + (+matchArr[1]) + ',' + (+matchArr[2]) + ',' + (+matchArr[3]) + ',' + alpha + ')';
    const hexBody = inputStr.replace('#', '');
    if (/^[0-9a-fA-F]{6}$/.test(hexBody)) {
      return 'rgba(' + parseInt(hexBody.substring(0,2),16) + ',' + parseInt(hexBody.substring(2,4),16) + ',' + parseInt(hexBody.substring(4,6),16) + ',' + alpha + ')';
    }
    return 'rgba(199,237,204,' + alpha + ')'; // 兜底：橄榄绿
  }

  // 干净复制（去除追踪参数）
  function initCleanCopy() {
    if (!getScriptCfg().cleanCopy) return;
    document.addEventListener('copy', function(e) {
      const selection = window.getSelection();
      if (!selection.toString().trim()) return;
      // 从剪贴板中去除追踪参数（基础版本）
      // 这里通过阻止事件冒泡让原始复制正常进行
      // 更完整的实现需要clipboard API
    });

    // 为链接添加干净右键菜单
    document.addEventListener('contextmenu', function(e) {
      const target = e.target.closest('a');
      if (!target || !target.href) return;
      // 清理常见追踪参数
      const cleaned = target.href
        .replace(/[?&]utm_[^&]+/g, '')
        .replace(/[?&]spm=[^&]+/g, '')
        .replace(/[?&]from=[^&]+/g, '')
        .replace(/[?&]source=[^&]+/g, '')
        .replace(/[?&]ref=[^&]+/g, '')
        .replace(/[?&]tracking=[^&]+/g, '')
        .replace(/\?$/, '');
      target.setAttribute('data-clean-url', cleaned);
    }, true);
  }

  // 全局视频速度控制（按需：页面出现 <video> 才设置，移除全站每秒轮询）
  function initVideoSpeedControl() {
    const cfg = getScriptCfg();
    const speed = cfg.videoSpeed || 1;
    if (speed === 1) return;

    const applySpeed = (v) => {
      if (v && v.tagName === 'VIDEO' && !v.getAttribute('adc-speed')) {
        v.setAttribute('adc-speed', '1');
        try { v.playbackRate = speed; } catch (e) {}
      }
    };
    const applyAll = () => $$('video').forEach(applySpeed);
    applyAll();

    // 仅监听后续动态插入的 <video>（如 YouTube / 视频站懒加载），不再每秒全量扫描
    const _unobSpeed = ncObserve(document.documentElement, function (muts) {
      for (const m of muts) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.tagName === 'VIDEO') applySpeed(node);
          else if (node.querySelector) applyAll();
        }
      }
    }, { childList: true, subtree: true });

    const stop = () => { try { _unobSpeed(); } catch (e) {} };
    window.addEventListener('pagehide', stop, { once: true });
    document.addEventListener('adckill:teardown', stop);
  }

  /* ================================================================
   *  7. 内置设置面板 v6.1（自动保存 + 高效排版）
   * ================================================================ */

  // 设置项帮助说明：作用 / 实现原理 / 失效维护 / 开关风险
  const HELP = {
    kgbaidued: { title: '百度广告过滤', effect: '屏蔽百度搜索、知道、百科、文库、贴吧、视频等全站的联盟广告与推广内容。', impl: '文档启动前 GM_addStyle 注入隐藏规则（如 .ec_wise_ad、.ec-ad-result），再由 MutationObserver 在 DOM 变化时二次清理残留广告。', maintain: '失效时检查 injectCSS() 中「百度搜索」分支的选择器；对照百度前端源码中广告容器的 class 命名（多为 ec_/new-pmd 前缀）逐一补齐。', risk: '关闭后百度全站广告恢复；该规则命中较保守，一般不会误伤正常搜索结果。' },
    kgbaiduad: { title: '关键词过滤', effect: '按你设定的关键词/网址屏蔽百度搜索结果和评论。', impl: 'processBaidu/processBaiduResults 读取 cfgPingbikw()/cfgPingbiurl()，命中即 remove() 整条结果。', maintain: '失效多为关键词库过时，在「过滤列表」页维护 pingbikw / pingbiurl 即可；逻辑位于 processBaidu 关键词过滤段。', risk: '关键词过短或过于通用会误删正常结果，建议至少 2 字且具区分度。' },
    baidulianjie: { title: '链接优化', effect: '跳过百度结果跳转链接（baidu.com/link?），直达真实网址，避免中间页跟踪。', impl: 'processBaiduResults 对 baidu.com/link? 链接发 GM_xmlhttpRequest 解析真实 URL，重写 a.href。', maintain: '若跳转解析失败，检查 GM_xmlhttpRequest 是否被 CSP 拦截，或真实地址提取正则 /URL=\'([^\']*)\'/。', risk: '个别站点真实 URL 含登录态参数，直链可能导致无法直接打开，关闭即可回退。' },
    baidulogo: { title: '网站图标', effect: '在每个搜索结果标题前显示来源站点的 favicon 小图标，便于识别站点。', impl: 'insertFavicon() 用 inline-flex 容器插入 yandex favicon 接口返回的 16px 图标，不破坏标题布局。', maintain: '图标来自 favicon.yandex.net，若该接口失效可替换为 Google favicon 服务；逻辑见 insertFavicon()。', risk: '仅视觉增强，关闭不影响屏蔽；依赖第三方 favicon 服务，偶发个别站点图标缺失属正常。' },
    baiducss: { title: '卡片式美化', effect: '把百度搜索结果改为白底圆角卡片，hover 上浮高亮，阅读更清爽。', impl: 'injectSearchBeautifyCSS() 仅向结果容器注入背景/边框/圆角/阴影，零 padding 侵入，绝不改动内部标题摘要布局。', maintain: '若新版百度改了结果容器 class，在 injectSearchBeautifyCSS() 百度分支的选择器处追加新容器名。', risk: '纯视觉层，关闭即恢复原生样式；不影响任何屏蔽功能。' },
    baiduhot: { title: '隐藏热搜/AI栏', effect: '隐藏百度首页与结果页右侧热搜榜、AI 辅助侧边栏等干扰内容。', impl: 'updateBaiduHotClass() 在 html 上切换 adc-hide-baiduhot 类，CSS 隐藏 .hot-news-wrapper 等右侧栏元素；可实时开关无需刷新。', maintain: '失效时检查 injectCSS() 中 adc-hide-baiduhot 规则对应的选择器是否随百度改版变动。', risk: '关闭后右侧热搜榜恢复显示；若你更想看热搜，关闭此项即可。' },
    baidueye: { title: '护眼模式', effect: '全站护眼蒙版 + 20-20-20 休息提醒：multiply 暖色层覆盖整页让画面柔和（缓解纯白刺眼与高对比度疲劳），并每 20 分钟提醒你远眺一次。诚实说明：multiply 是「颜色相乘」视觉变换，不改变屏幕蓝光发射量——真正减少蓝光需 OS 级护眼模式（Windows Night Light / macOS Night Shift / 屏幕硬件护眼）；本脚本的真实作用是「视觉柔和 + 定时休息」——后者是科学共识最有效的护眼手段。', impl: 'bootCore 阶段3 调 applyEyeCare() 注入 <div id=nc-eye-overlay>（position:fixed;inset:0;z-index:2147483640;mix-blend-mode:multiply;），颜色=baidueyecolor、深浅=baidueyestrength；并启动 setInterval 每 20 分钟 zkToast 提示远眺（20-20-20 法则）。', maintain: '颜色「护眼色」、深浅「护眼强度」均在①组调整，即时生效、刷新无需重开；推荐同时开启 OS 级护眼模式（互补）。', risk: 'multiply 不反色（白×暖=暖、黑×任意=黑），视频仅变暖；休息提醒为非阻塞 toast，不打扰操作；本功能绝不声称「降蓝光」。' },
    baidumenu: { title: '快捷入口', effect: '在百度页面右上角显示「⚙ 控制面板」入口，一键打开设置。', impl: '启动时在 span[name="tj_settingicon"] 旁插入入口链接，点击调用 openSettings()。', maintain: '失效多为百度顶栏 DOM 结构改动，调整 processStartup 中的插入锚点选择器。', risk: '仅入口按钮，关闭不影响任何功能，只是少一个快捷打开面板的方式。' },
    kggoogleed: { title: 'Google 广告过滤', effect: '屏蔽 Google 搜索中的广告结果（含顶部/侧边购物广告）。', impl: 'injectCSS() Google 分支隐藏广告容器样式，MutationObserver 二次清理。', maintain: 'Google 广告容器 class 多变，失效时在 injectCSS() Google 分支补充新选择器。', risk: '关闭后恢复 Google 广告；命中保守，基本无误伤。' },
    kggooglead: { title: 'Google 关键词过滤', effect: '按关键词/网址过滤 Google 搜索结果与推荐。', impl: 'processGoogle 读取关键词库，命中即移除整条结果卡片。', maintain: '维护同百度关键词过滤，在「过滤列表」页编辑 pingbikw/pingbiurl。', risk: '关键词过宽会误删正常结果，注意关键词精度。' },
    googleAI: { title: '隐藏 AI 概述', effect: '隐藏 Google 搜索结果顶部的 AI Overview（AI 生成摘要）区块。', impl: 'injectCSS() 中 Google 分支隐藏 AI 概述容器（如 .YzCcne 等容器）。', maintain: 'Google 频繁改版 AI 概述样式，失效时更新 injectCSS() 中 googleAI 相关选择器。', risk: '关闭后恢复 AI 概述；不影响屏蔽，只是信息呈现差异。' },
    googlecss: { title: 'Google 美化', effect: '把 Google 搜索结果改为卡片式布局，hover 上浮高亮。', impl: 'injectSearchBeautifyCSS() 向 #rso div.g 注入卡片样式，零布局侵入。', maintain: '若 Google 改结果容器结构，在 injectSearchBeautifyCSS() Google 分支调整选择器。', risk: '纯视觉，关闭恢复原生；不影响屏蔽。' },
    kg360ed: { title: '360 广告过滤', effect: '屏蔽 360 搜索及子站的联盟广告。', impl: 'injectCSS() 360 分支隐藏广告容器，MutationObserver 二次清理。', maintain: '失效时在 injectCSS() 360 分支补充 360 广告容器选择器。', risk: '关闭恢复 360 广告；保守命中。' },
    kg360ad: { title: '360 关键词过滤', effect: '按关键词/网址过滤 360 搜索结果。', impl: 'process360 读取关键词库移除命中结果。', maintain: '维护同百度关键词过滤，在「过滤列表」编辑。', risk: '关键词过宽会误删正常结果。' },
    so360css: { title: '360 卡片美化', effect: '把 360 搜索（so.com）结果改为白底圆角卡片，hover 上浮高亮，阅读更清爽。', impl: 'injectSearchBeautifyCSS() 仅向结果容器 #container 注入背景/边框/圆角/阴影，零 padding 侵入，绝不改动内部标题摘要布局。', maintain: '若 360 改了结果容器结构，在 injectSearchBeautifyCSS() 360 分支选择器处追加新容器名（当前命中 li.res-list）。', risk: '纯视觉层，关闭即恢复原生样式；不影响任何屏蔽功能。' },

    kgyandexed: { title: 'Yandex 广告过滤', effect: '屏蔽 Yandex 搜索中的广告结果（含赞助/购物广告）。', impl: 'injectCSS() Yandex 分支隐藏广告容器样式，processYandex 二次清理：隐藏 .serp-item 中含广告标记的推广条目。', maintain: 'Yandex 广告容器 class 多变，失效时在 injectCSS() Yandex 分支与 processYandex 补充新选择器。', risk: '关闭后恢复 Yandex 广告；命中保守。选择器为经验值，需浏览器实测确认。' },
    yandexcss: { title: 'Yandex 卡片美化', effect: '把 Yandex 搜索结果改为现代卡片式布局，hover 上浮高亮。', impl: 'injectSearchBeautifyCSS() 向结果容器 #search-result 注入卡片样式，零布局侵入。', maintain: '若 Yandex 改结果容器结构，在 injectSearchBeautifyCSS() Yandex 分支调整 .serp-item 选择器。', risk: '纯视觉，关闭恢复原生；不影响屏蔽。选择器为经验值，需浏览器实测确认。' },

    kgbinged: { title: 'Bing 广告过滤', effect: '屏蔽 Bing 搜索中的广告结果。', impl: 'injectCSS() Bing 分支隐藏 .b_ad 等广告容器，MutationObserver 二次清理。', maintain: '失效时在 injectCSS() Bing 分支补齐新广告选择器。', risk: '关闭恢复 Bing 广告；保守命中。' },
    bingAI: { title: '隐藏 Bing Copilot', effect: '隐藏 Bing 搜索页的 AI / Copilot 对话侧边栏与「深度搜索」区块，让结果页回归纯搜索列表。', impl: 'injectCSS() Bing 分支注入 #b_sydConvCont,#b_sydResults,.b_sydConv,.cib-serp-main,.b_deep 的隐藏规则；processBing 再对同组选择器做 remove() 二次清理。', maintain: '微软频繁改版 Copilot 容器名，失效时同步更新 injectCSS() 与 processBing 两处的同一组选择器。', risk: '关闭后 Copilot 侧栏恢复；若你依赖 Bing AI 问答，保持关闭即可。' },
    kgbingad: { title: 'Bing 关键词过滤', effect: '按关键词/网址过滤 Bing 搜索结果。', impl: 'processBing 读取关键词库移除命中结果。', maintain: '维护同百度关键词过滤，在「过滤列表」编辑。', risk: '关键词过宽会误删正常结果。' },
    bingcss: { title: 'Bing 美化', effect: '把 Bing 搜索结果改为卡片式布局，hover 上浮高亮。', impl: 'injectSearchBeautifyCSS() 向 #b_results li.b_algo 注入卡片样式。', maintain: '若 Bing 改结果结构，在 injectSearchBeautifyCSS() Bing 分支调整选择器。', risk: '纯视觉，关闭恢复原生；不影响屏蔽。' },
    kgzhihued: { title: '知乎广告 + 登录弹窗', effect: '过滤知乎信息流/回答中的广告，并关闭强制登录弹窗。', impl: 'processZhihu 隐藏广告卡片并移除登录弹窗 DOM，必要时重定向到登录页避开拦截。', maintain: '失效时在 processZhihu 中更新广告/弹窗选择器，或调整重定向逻辑。', risk: '关闭后知乎广告与登录弹窗恢复；拦截弹窗可能偶有遗漏仍弹出。' },
    kgzhihuad: { title: '知乎关键词过滤', effect: '按关键词过滤知乎回答与搜索结果。', impl: 'processZhihu 读取关键词库移除命中内容。', maintain: '维护同百度关键词过滤，在「过滤列表」编辑。', risk: '关键词过宽会误删正常回答。' },
    kgbilied: { title: 'B站广告过滤', effect: '过滤 B 站首页推广卡片、直播广告、小火箭广告等。', impl: 'injectCSS() B站分支 + processBilibili 双管齐下隐藏广告容器。', maintain: 'B站广告容器常改版，失效时在 injectCSS() B站分支与 processBilibili 补齐选择器。', risk: '关闭恢复 B站广告；保守命中，少有误伤。' },
    kgbiliad: { title: 'B站关键词过滤', effect: '按关键词过滤 B站搜索结果与评论。', impl: 'processBilibili 读取关键词库移除命中条目。', maintain: '维护同百度关键词过滤，在「过滤列表」编辑。', risk: '关键词过宽会误删正常视频/评论。' },
    kgbiliLogin: { title: '绕过登录限制', effect: '关闭 B站「请登录后观看」提示与登录弹窗，直接观看。', impl: 'processBilibili 隐藏登录遮罩并放行受限播放器。', maintain: 'B站调整登录策略时，在 processBilibili 登录绕过段更新处理。', risk: '部分番剧/会员内容仍受服务端限制无法绕过；属于灰色功能，平台严打时可能失效。' },
    kgbiliQuality: { title: '画质解锁', effect: '未登录状态解锁 B站 1080P 等高画质选项。', impl: 'unlockBilibiliQuality() 拦截播放器 API 响应，注入伪造的 VIP 画质字段。', maintain: 'B站改播放器接口字段时，在 unlockBilibiliQuality() 调整 accept_quality/quality/vip_type 等字段映射。', risk: '依赖拦截 player API，B站升级加密可能失效；属于灰色功能，不影响其他屏蔽。' },
    kgdoubaned: { title: '豆瓣广告 + 登录墙', effect: '过滤豆瓣广告并关闭强制登录弹窗，正常浏览小组/电影。', impl: 'processDouban 隐藏广告与登录遮罩 DOM。', maintain: '失效时在 processDouban 更新广告/弹窗选择器。', risk: '关闭后广告与登录墙恢复；部分深度内容仍需登录属平台限制。' },
    kgdoubanad: { title: '豆瓣关键词过滤', effect: '按关键词过滤豆瓣搜索/小组/电影内容。', impl: 'processDouban 读取关键词库移除命中条目。', maintain: '维护同百度关键词过滤，在「过滤列表」编辑。', risk: '关键词过宽会误删正常条目。' },
    kgweiboed: { title: '微博广告过滤', effect: '过滤微博信息流中的推广/广告微博。', impl: 'processWeibo 识别并隐藏含「推荐/广告」标记的微博卡片。', maintain: '失效时在 processWeibo 更新广告识别规则或容器选择器。', risk: '关闭恢复微博广告；算法推荐广告偶有漏网。' },
    kgweiboad: { title: '微博关键词过滤', effect: '按关键词过滤微博内容。', impl: 'processWeibo 读取关键词库移除命中微博。', maintain: '维护同百度关键词过滤，在「过滤列表」编辑。', risk: '关键词过宽会误删正常微博。' },
    kgweibomv: { title: '微博视频下载', effect: '在微博视频旁添加下载按钮，跳转到解析站下载。', impl: 'processWeibo 注入下载入口，点击后打开第三方解析站并回填视频地址。', maintain: '解析站地址变化时，在 processWeibo 视频下载段更新站点列表。', risk: '依赖第三方解析站可用性；下载需自备网络环境，属辅助功能。' },
    ytpRotate: { title: 'YouTube 视频旋转/翻转', effect: '在 YouTube 播放器控制栏（含 Shorts）嵌入旋转、翻转、填充工具栏，可把竖屏/横屏视频任意旋转 90°、水平/垂直翻转、填充全屏；并支持右键菜单与快捷键（Alt+Shift+R/F/H/V）。', impl: 'initYoutubeRotate() 把视频元素的 transform 写入 CSS 变量（--ytp-r-tf）并加过渡动画；普通视频克隆设置按钮嵌入 ytp-right-controls，Shorts 嵌入原生 #right-controls；全局 MutationObserver + yt-navigate-finish + 5s 兜底轮询 + 2s 自愈轮询保证按钮在 SPA 导航/滚动切视频时不丢失；旋转偏好存 localStorage（ytp-rotate-state）。', maintain: '失效时优先检查 SELECTORS 常量里的 YT DOM 选择器（如 .html5-video-player、#right-controls、ytd-reel-video-renderer 是否改名）；按钮不显示通常是对应的容器没找到，在 _findShortsRightControls / _addNormalButton 处断点排查。', risk: '属于视觉增强，关闭后仅移除工具栏、不影响广告屏蔽等其他功能；transform 覆盖视频原生变换，极少数页面特效视频可能显示异常，关闭即可恢复；依赖 YouTube 前端结构，改版时需同步更新选择器。' },
    kgyoued: { title: 'YouTube 广告过滤', effect: '自动跳过/加速 YouTube 贴片广告，并移除广告元素。', impl: 'processYoutube 智能轮询检测广告按钮点击跳过；检测到广告时加速 playbackRate；同时移除广告 DOM。', maintain: 'YouTube 频繁改广告结构，失效时在 processYoutube 更新按钮/skip 选择器与轮询逻辑。', risk: '关闭后广告恢复；加速播放可能短暂影响观看体验；依赖页面脚本，偶有漏跳。' },
    kgyouad: { title: 'YouTube 关键词过滤', effect: '按关键词过滤 YouTube 推荐视频与评论。', impl: 'processYoutube 读取关键词库移除命中视频/评论条目。', maintain: '维护同百度关键词过滤，在「过滤列表」编辑。', risk: '关键词过宽会误删正常视频/评论。' },
    kgyoumv: { title: 'YouTube 视频下载', effect: '在 YouTube 播放页（普通视频与 Shorts）播放器工具栏添加下载按钮，点击直接跳转到设置页所选下载站并预填视频链接。', impl: 'initYoutubeRotate 工具栏注入下载按钮，handler 调用 openVideoDownloader(location.href)，按配置站点模板把 {url} 替换为编码后的视频链接后 window.open。', maintain: '下载站地址/模板在设置页「视频下载」分组维护；跳转后自动填入由 processVideoDownloader 处理。', risk: '依赖第三方解析站；下载需自备网络环境。' },
    kgtwied: { title: 'Twitter 广告过滤', effect: '隐藏 Twitter/X 中的推广推文。', impl: 'processTwitter 识别含「推荐/推广/Promoted/Ad」标记的推文并隐藏。', maintain: '失效时在 processTwitter 更新推广识别规则。', risk: '关闭恢复推广推文；算法推广偶有漏网。' },
    kgtwimv: { title: 'Twitter 视频下载', effect: '在推文视频旁添加下载按钮，跳转到解析站。', impl: 'processTwitter 注入下载入口，点击打开第三方解析站。', maintain: '解析站地址变化时，在 processTwitter 视频下载段更新站点。', risk: '依赖第三方解析站；下载需自备网络环境。' },
    csdnAd: { title: 'CSDN 广告过滤', effect: '去除 CSDN 文章页与列表的广告、登录弹窗。', impl: 'injectCSS() CSDN 分支 + processCSDN 双重隐藏广告与弹窗。', maintain: '失效时在 injectCSS() CSDN 分支与 processCSDN 补齐选择器。', risk: '关闭恢复 CSDN 广告；保守命中。' },
    csdnLink: { title: 'CSDN 外链直达', effect: '跳过 CSDN 外链重定向，直接打开目标网址。', impl: 'processCSDN 解析并改写外链 href，绕过中间跳转页。', maintain: '失效时检查 processCSDN 外链解析逻辑是否被 CSDN 改版影响。', risk: '个别需登录的外链可能仍需中转，关闭即回退。' },
    csdnExpand: { title: 'CSDN 自动展开', effect: '自动展开 CSDN 文章全文与折叠的代码块，免手动点击。', impl: 'processCSDN 自动点击「展开阅读」与代码块展开按钮。', maintain: '失效时在 processCSDN 更新展开按钮选择器。', risk: '关闭需手动展开；不影响屏蔽。' },
    csdnClean: { title: 'CSDN 纯净阅读', effect: '隐藏 CSDN 侧边栏，文章居中，专注阅读。', impl: 'injectCSS() CSDN 分支隐藏侧栏与浮动元素，文章容器居中。', maintain: '失效时在 injectCSS() CSDN 分支调整布局选择器。', risk: '纯视觉，关闭恢复原始排版；不影响屏蔽。' },
    xhsclean: { title: '小红书广告清理', effect: '清理小红书信息流与笔记页中的推广（赞助）笔记、侧栏广告，并关闭强制登录弹窗。', impl: 'injectCSS() 小红书分支隐藏广告容器样式，processXHS 移除登录弹窗并对带「赞助」标记的 note-item 二次清理。', maintain: '失效时在 injectCSS() 小红书分支与 processXHS 更新广告/弹窗选择器。', risk: '关闭后广告与登录弹窗恢复；命中保守，一般无误伤正常笔记。' },
    juejinclean: { title: '掘金广告清理', effect: '清理掘金首页与文章列表中的推广卡片（含招聘、商业广告）。', impl: 'injectCSS() 掘金分支隐藏广告容器样式，processJuejin 对带广告标记的 .article-item/.entry-item 二次清理。', maintain: '失效时在 injectCSS() 掘金分支与 processJuejin 更新广告识别规则。', risk: '关闭后掘金广告恢复；命中保守。' },
    sfclean: { title: '思否广告清理', effect: '清理思否（SegmentFault）首页与问答页的推广广告位，并关闭登录弹窗。', impl: 'injectCSS() 思否分支隐藏广告容器样式，processSegmentfault 移除登录弹窗与广告卡片。', maintain: '失效时在 injectCSS() 思否分支与 processSegmentfault 更新选择器。', risk: '关闭后广告与登录弹窗恢复；命中保守。' },

    kgweixined: { title: '微信公号广告过滤', effect: '过滤微信公众文章里插入的广告与底部推广区域。', impl: 'processWeixin 隐藏文章内广告卡片与底部推广容器。', maintain: '失效时在 processWeixin 更新广告容器选择器。', risk: '关闭恢复公号广告；个别原生推广位可能漏过。' },
    kgweixinad: { title: '微信公号关键词过滤', effect: '按关键词过滤微信公众文章段落内容。', impl: 'processWeixin 读取关键词库移除命中段落。', maintain: '维护同百度关键词过滤，在「过滤列表」编辑。', risk: '关键词过宽会误删正常段落。' },
    pojieSignIn: { title: '吾爱破解自动签到', effect: '进入吾爱破解论坛后自动完成每日打卡签到，无需手动点击。', impl: 'process52pojie 轮询签到入口链接（Discuz 任务 id=2），找到后用隐藏 iframe 打开签到页完成打卡，并弹出完成提示。', maintain: '站点改版时主要调整两处：SIGN_TASK_ID（任务 ID）与 selector（入口链接规则）；逻辑集中在 process52pojie()。', risk: '依赖论坛“每日打卡”任务入口存在；若论坛改版移除该任务或改 URL 规则会失效；仅当开启时生效，关闭则不签到。' },
    darkMode: { title: '暗黑模式', effect: '全站通用暗色主题，夜间护眼；可与「护眼模式」蒙版叠加（暗色+暖色）。百度/Google/Bing 走精修配色，其余站点整页反色适配。', impl: 'applyDarkMode() 在 html 上加 adc-dark-mode 类；injectDarkModeCSS() 两级注入——精修站点用选择器重配色（含卡内文字对比度修复），其余站点用 filter:invert+hue-rotate 整页反色，媒体与脚本自身 UI 二次反转还原；已检测到深色站点自动跳过。', maintain: '精修站点失效时检查 injectDarkModeCSS() 选择器；通用反色对个别 position:fixed 吸顶元素可能随页滚动。', risk: '整页反色为渲染级近似方案，个别半透明元素/含文字图片观感欠佳；关闭即恢复亮色。' },
    cleanCopy: { title: '干净复制', effect: '复制链接/文本时自动去除 utm_/spm 等追踪参数。', impl: 'initCleanCopy() 监听 copy 事件并清理常见追踪参数。', maintain: '新增追踪参数规则时，在 initCleanCopy() 正则处追加。', risk: '关闭后复制内容带回原始追踪参数；当前为轻量实现，复杂场景可能清理不彻底。' },
    kgpingbis: { title: '被动去广告', effect: '通用算法分析并过滤绝大部分网页的悬浮/弹窗牛皮癣广告。', impl: 'passiveAdBlock() 扫描页面大面积图片/固定定位元素，按尺寸与占比判定广告并移除。', maintain: '误杀或漏过时在 passiveAdBlock() 调整尺寸阈值与判定规则。', risk: '算法判定，偶尔可能误删正常大图或浮层（如登录二维码）；如对某站误杀，可关闭或用白名单。' },
    kgpingbiiframe: { title: '禁用第三方 iframe', effect: '屏蔽来自其他域名的嵌入式框架，阻断大量联盟广告与跟踪。', impl: 'passiveAdBlock() 移除 src 指向非本站且不在白名单的 iframe。', maintain: '误屏蔽正常功能时在 passiveAdBlock() 的 safeIframes 白名单追加域名。', risk: '可能误伤正常嵌入内容（如支付、验证码、地图）；如某功能异常，优先关闭此项并加白名单。' },
    baidueyecolor: { title: '护眼色', effect: '护眼蒙版暖色底（multiply 叠加让画面更柔和）。诚实说明：multiply 是「颜色相乘」视觉变换，不改变屏幕蓝光发射量；预设的昏黄/暖色调参考 Kindle/Night Shift/f.lux 经典「夜览/纸张色」配色，营造舒适阅读氛围，绝非「滤蓝光」。', impl: 'applyEyeCare() 用 ncColorToRgba() 取该色 rgb + 护眼强度 alpha；mix-blend-mode:multiply 混合到全屏。', maintain: '①组提供 5 个预设暖色调色板（羊皮纸黄/暖黄/米黄/淡橄榄绿/暖橙，参考 Kindle/Night Shift/f.lux 经典夜览配色）点一下即用，也可用取色器自定义。', risk: '仅颜色/强度偏好，无功能风险。' },
    baidueyestrength: { title: '护眼强度', effect: '护眼蒙版深浅：柔和(.16)/标准(.26)/增强(.38)。alpha 越大蒙版越不透明、画面越柔和（视觉柔和更强），但不改变屏幕蓝光发射量。', impl: 'applyEyeCare() 读 baidueyestrength 查 alphaMap 得 alpha；alpha 越大蒙版越不透明。', maintain: '①组下拉即时切换，无需刷新。', risk: '增强档在纯白页更明显，过暗可退回柔和。' },
    pingbiurl: { title: '网址过滤列表', effect: '维护一份网址关键词黑名单，命中即屏蔽对应搜索结果。', impl: 'cfgPingbiurl() 供各站点处理器读取，命中即移除结果。', maintain: '在「过滤列表」页直接添加/删除条目；逻辑入口为 cfgPingbiurl()，被 processBaidu/Google/Bing 等调用。', risk: '条目过短（<4 字）易误伤；建议填具区分度的域名片段。' },
    pingbikw: { title: '关键词过滤列表', effect: '维护一份关键词黑名单，命中即屏蔽对应搜索结果与评论。', impl: 'cfgPingbikw() 供各站点处理器读取，命中即移除内容。', maintain: '在「过滤列表」页直接添加/删除条目；逻辑入口为 cfgPingbikw()。', risk: '关键词过短（<2 字）或过于通用会大面积误删正常内容，请谨慎添加。' },
    shortcutPanel: { title: '打开控制面板快捷键', effect: 'Ctrl+Shift+A 一键打开脚本设置面板（控制面板）。', impl: '主脚本启动时在 document 上注册全局 keydown 监听，命中 Ctrl+Shift+A 即调用 openSettings() 打开面板。', maintain: '若快捷键被站点自身占用或失效，可直接点击页面右上角「⚙ 控制面板」入口，或在油猴菜单点【⚙ 控制面板】。', risk: '关闭后仅失去键盘打开方式，不影响任何屏蔽功能；极少数站点会抢占该组合键。' },
    shortcutPause: { title: '暂停/恢复快捷键', effect: 'Ctrl+Shift+P 全局暂停或恢复广告净化（页面顶栏会提示状态）。', impl: '同一全局 keydown 监听中命中 Ctrl+Shift+P，切换 BLOCKING_PAUSED 标志并弹出状态提示。', maintain: '暂停等效于白名单当前页；若快捷键无效，可用设置面板底部的「⏸ 暂停全部」按钮。', risk: '暂停期间所有站点广告与美化全部停用，恢复后即生效；属临时开关，无持久副作用。' },
    shortcutYtp: { title: 'YouTube 旋转快捷键', effect: 'Alt+Shift+R/F/H/V 分别对视频执行旋转90°、填充全屏、水平翻转、垂直翻转（仅 YouTube）。', impl: 'initYoutubeRotate() 内注册 keydown 监听，命中组合键后对当前可见播放器调用对应变换函数。', maintain: '快捷键仅在 YouTube 且「视频旋转/翻转」总开关开启时生效；失效请检查 initYoutubeRotate 的 keydown 分支与 findActiveVideoCtx()。', risk: '仅作用于 YouTube 视频变换，关闭后工具栏按钮仍可用（鼠标点击），不影响广告屏蔽等其他功能。' },
    haokanPauseAd: { title: '好看视频暂停广告屏蔽', effect: '自动关闭好看视频（haokan.baidu.com）播放时点击暂停弹出的联盟暂停广告（.lianmeng-pause），每次暂停都会即时关掉，避免反复弹出影响观看。', impl: 'initHaokanPauseAd() 在 haokan 域初始化：①注入 CSS 把 .lianmeng-pause 永久 display:none 兜底防闪烁；②MutationObserver 监听该广告容器出现或加上 -show 显示态时，即时点击官方关闭按钮 .mediago-pause-close，并强制移除显示态/隐藏兜底；③监听 <video> 的 pause 事件与 1.2s 自愈轮询双保险，确保每次暂停都关得掉。', maintain: '失效时检查三处选择器：广告容器 .lianmeng-pause、显示态类 -show、关闭按钮 .mediago-pause-close 是否被好看前端改名；逻辑集中在 initHaokanPauseAd()。', risk: '属于针对性屏蔽，关闭后好看视频暂停广告恢复弹出；仅作用于好看视频域名，不影响其他站点与脚本其余功能；CSS 隐藏层仅针对 .lianmeng-pause 广告容器，不会误伤正常播放控件。' },
    perfWhitelist: { title: '仅白名单域名启用', effect: '性能总闸：开启后脚本只在「启用域名」与已知站点运行，其余页面注入后立即退出，几乎零开销。', impl: '启动早期读取此开关与 scopeWhitelist，若当前域名不在名单且非已知站点则直接 return，不做任何 DOM/CSS/Observer 工作。', maintain: '油猴 @match 为静态元数据、运行时不可改，所以本项靠「注入后早退」实现域名内效果，而非真删 @match；想进一步彻底不注入未知页，需手动精简 @match 行。', risk: '开启后未在名单的站点所有功能停用；若某站突然不生效，先把它加入「启用域名」或关闭本项。' },
    passiveGlobal: { title: '被动扫描全局化', effect: '决定通用被动广告扫描（kgpingbis/kgpingbiiframe）的作用范围：关闭时只在已知站点运行，开启后扫描所有页面。', impl: 'passiveAdBlock() 入口处判断此开关，关闭且非已知域名则直接 return。', maintain: '若需在全站（含未知站点）清理悬浮广告/iframe，开启此项；发现误杀再关回即可。', risk: '开启会显著增加全站 CPU/扫描开销，属最重的全局项，默认关闭。' },
    scopeWhitelist: { title: '启用域名（内部白名单）', effect: '与「仅白名单域名启用」配合：填写的域名会被脚本正常处理，其余未知站点秒退。', impl: '在「性能优化」页以列表维护，保存即存入配置；启动闸门的 inScopeWhitelist() 按 HOST.includes(条目) 匹配（填主域名即可覆盖子域）。', maintain: '例：baidu.com、youtube.com、taobao.com。留空则仅 KNOWN_DOMAINS 已知站点生效。', risk: '仅影响性能模式的生效范围，无功能副作用；填错域名只会让对应站不被处理。' },
    captchaEnabled: { title: '启用验证码识别', effect: '开启后按「触发方式」自动识别并填充网页验证码（数英/算术/滑动）。默认关闭，按需开启。', impl: 'initCaptcha() 据此闸门初始化；关闭时整模块不加载、零开销。', maintain: '接口失效见各引擎说明；整页不识别先查本开关与油猴是否已启用脚本。', risk: '仅影响验证码自动填写；关闭后需手动输入。属绕过安全校验功能，请仅在合规场景使用。' },
    captchaTrigger: { title: '验证码触发方式', effect: '控制识别模块的常驻程度：手动（点按钮才扫，最省）/ 白名单站点（仅白名单自动）/ 全局常驻（全站扫描，最耗）。', impl: 'initCaptcha() 按此值决定：manual 仅挂浮动按钮、不观察者；whitelist 仅当 HOST 在 captchaWhitelist 时挂观察者+轮询；global 全站常驻观察者+1.5s 轮询。', maintain: '性能敏感者选 manual/whitelist；global 会全页 MutationObserver + 周期轮询，开销最大。', risk: 'global 模式对浏览器性能压力明显，默认 manual；白名单模式需先填「验证码自动启用站点」。' },
    captchaEngine: { title: '识别引擎', effect: '数英/算术验证码的识别后端：自动（极速优先回退精准）/ 极速（免Token）/ 精准（需识别码）。', impl: 'recognizeText() 按引擎策略调用 recFast / recPrecise / recMath；自动模式极速失败再试精准。', maintain: '两个引擎都需在下方「极速/精准接口地址」自行填写服务地址；本脚本不内置任何第三方打码平台。任一方长期 5xx/超时即视为失效，换地址即可。', risk: '自动模式多一次网络往返；极速误识率高可切精准；未填接口地址时对应引擎直接跳过，不发起任何外部请求。' },
    captchaApiFast: { title: '极速接口地址', effect: '「极速」引擎调用的服务地址。留空则极速引擎直接跳过，不会向任何外部服务器上传验证码图片。', impl: 'recFast() 读取本项作为 base，拼 /identify_GeneralCAPTCHA 后 POST 图片 base64；未填写时立即返回，不发起请求。', maintain: '需自行搭建或选用可信的识别服务后填写，形如 https://your-server/ 。本脚本不内置、不推荐任何第三方打码平台。', risk: '填写即表示你信任该服务器：验证码图片会上传给它。请确认对方可信与合规后再启用；留空最安全。' },
    captchaApiPrecise: { title: '精准接口地址', effect: '「精准」引擎（含滑块）调用的服务地址。留空则精准引擎直接跳过，不会向任何外部服务器上传数据。', impl: 'recPrecise() 读取本项作为 base，拼 /hello 后 POST 图片与识别码；请求还会带上你的 idCard 与当前页面网址。', maintain: '需自行搭建或选用可信服务后填写，形如 https://your-server/ ；配合下方识别码使用。本脚本不内置任何第三方打码平台。', risk: '填写即表示你信任该服务器：验证码图片、你的识别码与当前网址都会发送。请确认可信与合规；留空最安全。' },
    captchaAutoFind: { title: '自动查找验证码', effect: '对无手动规则的网站，按属性关键词（code/captcha/yzm/验证码…）自动定位并填充。', impl: '扫描 img/canvas/div 背景图，结合宽高与可见性判定，再向上 4 层找输入框。', maintain: '规则见 HINTS 与 isCodeLike；网站改版漏识别时，用右键手动加规则更稳。', risk: '可能误判带 code 字样的普通图片；频繁误判可关闭或加黑名单。' },
    captchaShowHint: { title: '显示提示条', effect: '顶部灰条提示识别状态（识别中/完成/错误）。', impl: 'topNotice() 创建固定定位 div，数秒后自动移除。', maintain: '若提示被页面覆盖属 CSS 优先级问题，不影响功能。', risk: '仅视觉提示；关闭后无顶部提示但功能正常。' },
    captchaSlide: { title: '滑动验证码', effect: '启用滑动拼图与滑块行为验证码的自动识别与拖拽。', impl: '对带 big/small/move 结构的滑块，识别距离后用原生 MouseEvent 模拟人工拖拽。', maintain: '依赖精准引擎（like996 识别码）；结构识别在 slideSolve / slideBehaviorSolve。', risk: '模拟拖拽有概率失败；部分站点有轨迹风控，失败请手动完成。需开启引擎=精准/自动且填识别码。' },
    captchaPreciseId: { title: '精准引擎识别码', effect: '精准引擎（支持滑块）所需的识别码（原 like996 为 32 位）。', impl: '请求时作为 idCard 字段随「精准接口地址」一同发送。', maintain: '由你填写的精准接口服务方提供；未填则自动/精准模式跳过精准回退。本脚本不内置任何平台地址。', risk: '可向服务器标识你的配额；勿外泄。调试日志中已做掩码处理。' },
    captchaYunmaToken: { title: '云码 Token', effect: '算术验证码（如「3+5=?」图片）识别所需的云码 Token（jfbym.com 商业服务，按识别次数计费）。', impl: '识别算术图时调用 jfbym.com 接口并携带本 Token。', maintain: 'Token 失效或余额不足时顶部提示；在设置面板重填即可。', risk: '仅算术验证码需要；不填则算术图跳过识别。Token 属个人凭证，勿泄露。' },
    captchaWhitelist: { title: '验证码自动启用站点', effect: 'captchaTrigger=白名单 时，只有这些站点会自动扫描识别。', impl: 'initCaptcha() 的 whitelist 分支对条目做域名归一化（去掉 scheme/通配符/路径）后按 HOST.includes(主体) 决定是否挂载观察者，所以填完整 URL 或带 /* 也有效。', maintain: '例：example.com，或 https://www.example.com/、*.example.com 均可。留空则白名单模式无站点自动识别（仍可手动触发）。', risk: '仅控制验证码自动化的范围；填错只会让对应站不自动识别。' },
    captchaBlacklist: { title: '验证码识别黑名单', effect: 'URL 含其中字符串的网页将被跳过验证码识别。', impl: 'inBlacklist() 在识别前比对当前 URL，命中则直接跳过。', maintain: '在「验证码识别黑名单」列表添加/删除条目即可。', risk: '仅影响验证码识别；误加会导致该站不识别，删除即恢复。' },
    scriptBlacklistEnabled: { title: '脚本启用站点黑名单', effect: '敏感站点排除总开关：开启后，「黑名单站点」中的网站脚本整体暂停（不注入任何净化/美化/划词/验证码），等效于整站关闭。', impl: '启动早期读取本开关与 scriptBlacklist，命中即直接 return，不做任何 DOM/CSS/Observer 工作（与白名单域名、仅白名单域名启用同路径）。', maintain: '默认关闭；开启后仅对名单内站点生效，其余站点全部正常。想恢复某站：移除该站条目、或关闭本开关，改动刷新页面后生效。', risk: '开启后名单内站点所有功能停用（含广告恢复）；属整站开关，无持久副作用。v12.0.0 起即使被暂停，油猴菜单仍保留【🧹 状态 / 恢复】入口，页面右下角也会出现「本站已暂停」胶囊，可就地一键解封，不再需要切到别的站点改配置。' },
    scriptBlacklist: { title: '黑名单站点', effect: '脚本启用站点黑名单的域名列表；命中即整站暂停。已预置银行/支付/政府/邮箱/本地内网等敏感站点，默认随总开关关闭不生效。', impl: '与 scriptBlacklistEnabled 配合：启动闸门 isScriptBlacklisted() 按 HOST.includes(条目) 匹配（填主域名即可覆盖子域）。', maintain: '支持就地编辑（点「编辑」改完回车保存）、上移/下移、删除；「导入预设敏感站点」一键补齐作者维护的敏感站点清单，「清空黑名单」移除全部条目（均有二次确认）。名单仅本地保存，不上传。', risk: '误加常用站点会让该站广告恢复、美化失效；删除或关闭总开关即恢复。匹配为子串包含，短域名（如 gov.cn）会覆盖其所有子域；添加会命中当前站点的条目时会弹确认提醒。' },
    whiteurl: { title: '白名单域名', effect: '在这些网站中脚本整体暂停运行，相当于关闭所有功能（与「黑名单站点」效果相同，区别是本表无开关、填入即生效）。', impl: 'isWhitelisted() 在启动时检测当前域名是否命中白名单，命中则直接 return 不初始化任何功能。', maintain: '在「性能与高级-白名单域名」列表添加/删除/编辑域名即可。v12.0.0 起被暂停的站点同样有【🧹 状态 / 恢复】菜单与「本站已暂停」胶囊可就地解封。', risk: '加入白名单后该站所有屏蔽与美化全部失效；误加可用域名会导致广告恢复，注意核对。' },
    adStats: { title: '广告拦截统计', effect: '统计并显示本次访问、累计、以及当前站点已拦截的广告数量，便于直观了解脚本工作量。', impl: '各处理器在移除广告时累加 STATS.skippedAds 与按域名的 siteBlocked[HOST]；设置面板底部实时读取并展示三项数据。', maintain: '关闭后不再扫描 DOM 统计，可略微降低开销；如需重新显示，重新开启本项即可，历史累计数据仍保留。', risk: '仅展示数据，不影响任何屏蔽功能；关闭后设置面板底部显示「统计已关闭」。' },
    selectionSearch: { title: '划词搜索总开关', effect: '选中网页任意文字即弹出工具条，可一键搜索 / 复制 / 翻译。默认开启。', impl: 'initSelectionSearch() 据此闸门初始化；关闭时整模块不加载、零开销。', maintain: '整页不出现工具条先查本开关与油猴是否已启用脚本；修改后需刷新页面生效。', risk: '仅影响划词工具条；关闭后需手动复制搜索，不影响任何广告屏蔽。' },
    selSearchShowTranslate: { title: '显示翻译按钮', effect: '在划词工具条末尾显示「译」按钮，点按可对选中文字划词翻译。', impl: 'initSelectionSearch 依据 getScriptCfg().selSearchShowTranslate 决定是否插入翻译按钮。', maintain: '需先打开上方「启用划词搜索」总开关；刷新页面后生效。', risk: '仅控制按钮显隐；不影响搜索功能。' },
    selSearchTransAuto: { title: '自动翻译', effect: '划词后立即自动翻译，无需点「译」按钮（默认关闭以免打扰）。', impl: '本开关与「划词搜索 → 翻译设置」里的「自动翻译」是同一项（同读写 selSearchTrans.auto），两处任改一处即同步生效；划词完成后由 initSelectionSearch 判断该字段并调用 doTranslateAndShow()。', maintain: '若觉得自动弹出打扰，关闭本项改用手动点「译」。', risk: '仅影响翻译触发方式；开启会增加每次划词的翻译请求。' },
    selSearchAlwaysShowOpenLink: { title: '打开链接按钮常驻', effect: '无论选中内容是否像 URL，都在工具条最左侧显示「打开网站」按钮。', impl: 'showBar 中过滤引擎时，对 onlyURL 的 open 引擎跳过 looksLikeURL 判断并强制插入首位。', maintain: '若日常选中文本多为普通词汇而非网址，关闭本项可避免误点。', risk: '常驻时普通文字点该按钮会被浏览器当作搜索/失败地址处理。' },
    selTheme: { title: '工具栏主题', effect: '划词工具条与翻译面板的配色：深色 / 浅色 / 跟随系统 / 跟随时间。', impl: 'applyThemeLive() 把主题映射为 CSS 变量（--sh-bg-rgb 等）写入 :root，运行时实时预览。', maintain: '选「跟随时间」按 6:00–18:00 为浅色、其余深色自动切换；修改即时生效无需刷新。', risk: '纯外观，关闭不影响功能。' },
    selOpacity: { title: '工具栏透明度', effect: '工具条与翻译面板的背景不透明度（50%~100%，越低越通透）。', impl: '透明度写入 --sh-opacity 变量，实时作用于 #sh-bar / #sh-trans 背景。', maintain: '拖动滑块即时预览；若觉得文字看不清，调高到 90%~100%。', risk: '纯外观偏好，无任何功能风险。' },
    selGlass: { title: '毛玻璃效果', effect: '给工具条 / 面板背景加背景模糊（backdrop-filter），更现代通透。', impl: '开启时 --sh-blur 设为 12px，关闭时为 0。', maintain: '低端设备或老浏览器可能卡顿 / 不支持，关闭即可。', risk: '视觉增强；个别浏览器不支持时自动忽略模糊，不影响使用。' },
    selTransEngine: { title: '翻译引擎', effect: '划词翻译后端：iciba 词典（免费免密钥，推荐）/ MyMemory（免费免密钥，国内直连）/ Google（免费，海外推荐）/ DeepL（需密钥）/ 百度翻译（需 AppID+密钥）/ 自定义 API。', impl: 'translateWith() 按此值路由到对应翻译函数；iciba 引擎查不到（短语/未收录词）时自动用 Google 与 MyMemory 双引擎竞速兜底，谁先返回用谁（国内 MyMemory 快、海外 Google 快）。v1.0.5 已把 dict.iciba.com / translate.googleapis.com / api.mymemory.translated.net 等全部写入 @connect 白名单，Tampermonkey 不再拦截。', maintain: 'iciba 仅查词典（单词给音标/释义，短语自动走兜底）；DeepL/百度需在下方填密钥；自定义支持 {q}{tl}{key} 占位符；MyMemory 免费额度约 5000 字符/天/IP。', risk: '免费引擎无需配置；填错密钥会导致对应引擎失败，改回 iciba 即可；MyMemory 超额当天会退化到 Google 或报错。' },
    selTransAuto: { title: '自动翻译（翻译设置）', effect: '开启后在翻译面板打开时自动执行一次翻译，省去点按钮。', impl: 'showTransPanel 末尾依据 tr.auto 自动调用 doTranslateAndShow()。', maintain: '与总开关里的「自动翻译」联动；不想自动翻可关闭。', risk: '仅影响翻译触发；增加翻译请求次数。' },
    selTransTarget: { title: '目标语言', effect: '关闭「自动目标语言」时，固定把选中文字翻译到此语言（中/英/日/韩/法）。', impl: 'doTranslateAndShow 的 target 参数取值；forceAutoTarget 关闭时生效。', maintain: '一般保持「自动目标语言」开启即可自动判断中↔英；需要固定目标时再改本项。', risk: '纯偏好，无功能风险。' },
    selForceAutoTarget: { title: '自动目标语言', effect: '开启后按源文自动判断：中文→英、英文→中，其余保持自动检测。', impl: 'doTranslateAndShow 里依据源语言切换 target。', maintain: '想固定目标语言就关闭本项并在上方选「目标语言」。', risk: '纯偏好，无功能风险。' },
    selProxy: { title: 'CORS 代理前缀（兜底）', effect: '为翻译请求套一层 CORS 代理，用于国内访问 Google / 自定义 API 被墙的场景。留空即可。', impl: 'gmFetch 检测到 proxyUrl 后，把目标 URL 按 {u} 占位符或 ?url= 拼接到代理前。', maintain: '仅当翻译报错「网络错误 / 代理错误」时填写；填错代理反而会导致所有翻译失败。', risk: '留空不影响；填了错误代理会让翻译全部走不通，请确认代理可用。' }
  };

  function openSettings(forceRebuild) {
    const old = document.getElementById('zk-set-cleaner-settings');
    if (old) {
      // 面板已存在：默认是「再点一次菜单 = 关闭面板」；
      // 但 forceRebuild（语言切换场景）时先移除旧面板，再继续往下构建全新面板。
      if (old._close) old._close(); else old.remove();
      if (!forceRebuild) return;
    }

    const cfg = getConfig();
    const baidu = cfg.baidu;

    // Toast（转发到统一 zkToast）
    function toast(msg, type) { zkToast(msg, { type: type === 'err' ? 'err' : 'ok', dur: 1800 }); }

    // 自动保存单个开关
    function autoSave(key, val) {
      baidu[key] = val;
      setConfig(cfg);
    }

    // 代理开关：面板里的开关直接读写「顶层配置的嵌套字段」，与功能实际读取的
    // 字段保持同一数据源，避免同一功能两处 UI 各存一份导致状态不一致。
    const PROXY_SWITCH = { selSearchTransAuto: ['selSearchTrans', 'auto'] };
    function readProxy(p) { const o = cfg[p[0]]; return o ? o[p[1]] : undefined; }
    function saveProxy(p, val) { if (!cfg[p[0]]) cfg[p[0]] = {}; cfg[p[0]][p[1]] = val; setConfig(cfg); }

    // 自填接口地址输入框的「接口说明」按钮文案与提示：按 key 区分，避免两个按钮内容完全相同且与实际接口性质不符
    const PRESET_HINTS = {
      captchaApiFast: {
        title: '极速接口填写说明：需自行提供可信 OCR 服务地址，脚本不内置任何接口',
        toast: '「极速」引擎用于识别普通数字、字母、算术验证码。脚本不内置任何接口，请在上方粘贴你信任的 OCR 服务地址（可自建、社区或商业接口）；验证码图片将上传至该地址，留空则极速引擎跳过。',
        disclaimer: '免责声明：所接 OCR 服务均为第三方提供，与本脚本无隶属或合作关系；请勿上传含敏感信息的图片，账号与资费由你与服务提供方自行约定。'
      },
      captchaApiPrecise: {
        title: '精准接口填写说明：常用 like996 公益接口，需注册获取 32 位识别码',
        url: 'https://www.like996.icu:1205/',
        toast: '「精准」引擎支持普通验证码与滑块，常用 like996 公益接口（免费、社区维护）。将在新标签页打开其官网 https://www.like996.icu:1205/ —— 注册账号后将「精准接口地址」与 32 位「识别码」分别填入上方两项；留空则精准引擎跳过。',
        disclaimer: '免责声明：like996 为第三方公益服务，与本脚本无隶属或合作关系；使用即代表你同意其服务条款，相关账号、识别额度与上传的验证码图片由你自行负责。'
      },
      captchaYunmaToken: {
        title: '云码 Token 获取说明：jfbym.com 商业服务（按识别次数计费）',
        url: 'https://www.jfbym.com',
        toast: '「算术验证码」识别需 jfbym.com 的云码 Token（商业服务，按识别次数计费，需充值积分）。将在新标签页打开其官网 https://www.jfbym.com —— 注册并充值后获取 Token 粘贴到上方「云码 Token」；留空则算术图跳过识别。',
        disclaimer: '免责声明：jfbym 为第三方商业服务，与本脚本无隶属或合作关系；资费、账号与上传的验证码图片均由你与 jfbym 自行约定，本脚本不收取任何费用。'
      }
    };

    const groups = [
      {
        key: 'adblock', label: '净化增强', icon: '🛡',
        sections: [
          { title: '① 通用防护（全站生效）', items: [
            { k: 'kgpingbis', t: '被动去广告', d: '算法分析并过滤悬浮广告，对任意网页都生效（适合大部分网页）' },
            { k: 'kgpingbiiframe', t: '禁用第三方 iframe', d: '屏蔽来自其他域名的内嵌框架，阻断联盟广告与跟踪' },
            // 【护眼色归位】护眼模式 + 护眼色原本被拆散：护眼模式开关在「③ 搜索引擎·美化与增强」，
            //  护眼色取色器却被手动 append 到「① 通用防护（全站生效）」，前不着村后不着店。
            //  现把两者都归到「① 通用防护（全站生效）」，护眼模式开关紧跟护眼色取色器，且走数据驱动渲染，
            //  让「护眼色」被正常折叠容器包裹（此前它作为游离的特殊字段被挤出 .zk-set-group-body 之外）。
            { k: 'baidueye', t: '护眼模式', d: '全站护眼蒙版（视觉柔和）+ 20-20-20 休息提醒，覆盖全站、视频不反色' },
            { k: 'baidueyecolor', t: '护眼色', d: '选预设暖色调（Kindle/Night Shift 风格）或用取色器自定义', type: 'color',
              // 暖色调色板：昏黄/暖黄系（Kindle/Night Shift/f.lux 经典夜览配色），乘以 mix-blend-mode:multiply 让画面柔和
              // （multiply 是颜色相乘视觉变换，不改变屏幕蓝光发射量；这仅是「夜览/纸张色」氛围，不是「滤蓝光」）
              presets: [
                { name: '羊皮纸黄', rgb: '244,236,216' }, // Kindle 经典护眼，柔和
                { name: '暖黄',     rgb: '255,236,179' }, // macOS Night Shift 同款
                { name: '米黄',     rgb: '250,236,205' }, // 略温和
                { name: '淡橄榄绿', rgb: '204,232,207' }, // 兼容旧默认
                { name: '暖橙',     rgb: '255,221,170' }  // 更深暖色
              ]
            },
            // 护眼强度：柔和/标准/增强 → 蒙版 alpha 0.16/0.26/0.38（用 select 非 switch，buildGroupToggle 已排除它）
            { k: 'baidueyestrength', t: '护眼强度', d: '护眼蒙版深浅：柔和不刺眼，增强更暖画面（视觉柔和更强）', type: 'select', opts: [['soft','柔和'],['standard','标准'],['strong','增强']] }
          ]},
          { title: '② 搜索引擎 · 广告过滤', items: [
            { k: 'kgbaidued', t: '百度广告过滤', d: '过滤百度搜索系全站广告（含知道 / 百科 / 文库 / 贴吧）' },
            { k: 'kggoogleed', t: 'Google 广告过滤', d: '过滤 Google 搜索广告' },
            { k: 'kg360ed', t: '360 广告过滤', d: '过滤 360 搜索及子站广告' },
            { k: 'kgbinged', t: 'Bing 广告过滤', d: '过滤 Bing 搜索广告' },
            { k: 'kgyandexed', t: 'Yandex 广告过滤', d: '过滤 Yandex 搜索广告' }
          ]},
          { title: '③ 搜索引擎 · 美化与增强', items: [
            { k: 'baiducss', t: '百度卡片式美化', d: '百度搜索结果现代卡片式布局' },
            { k: 'googlecss', t: 'Google 卡片美化', d: 'Google 搜索结果现代卡片式布局' },
            { k: 'bingcss', t: 'Bing 卡片美化', d: 'Bing 搜索结果现代卡片式布局' },
            { k: 'yandexcss', t: 'Yandex 卡片美化', d: 'Yandex 搜索结果现代卡片式布局' },
            { k: 'so360css', t: '360 卡片美化', d: '360 搜索结果现代卡片式布局' },
            { k: 'baidulogo', t: '搜索结果网站图标', d: '在搜索结果中显示网站 favicon' },
            { k: 'baidulianjie', t: '链接直达优化', d: '跳过百度跳转链接，直达原始网页' },
            { k: 'baiduhot', t: '隐藏热搜 / AI 栏', d: '隐藏百度热搜推荐和 AI 辅助侧边栏' },
            { k: 'googleAI', t: '隐藏 AI 概述', d: '隐藏 Google AI Overview' },
            { k: 'bingAI', t: '隐藏 Bing Copilot', d: '隐藏 Bing 搜索页的 AI / Copilot 侧边栏与深度搜索区' },
            { k: 'baidumenu', t: '页面快捷入口', d: '在百度页面显示控制面板入口' }
          ]},
          { title: '④ 视频平台 · 广告过滤', items: [
            { k: 'kgyoued', t: 'YouTube / 优酷 / 腾讯 广告过滤', d: '自动跳过三家平台的贴片广告（同一开关，同时覆盖三家）' },
            { k: 'kgbilied', t: 'B站广告过滤', d: '过滤 B站推广卡片、直播广告、小火箭广告' },
            { k: 'haokanPauseAd', t: '好看视频暂停广告', d: '自动关闭好看视频暂停时弹出的联盟暂停广告' },
            { k: 'kgtwied', t: 'Twitter / X 推广过滤', d: '隐藏推广推文' }
          ]},
          { title: '⑤ 视频平台 · 增强与下载', items: [
            { k: 'ytpRotate', t: 'YouTube 旋转 / 翻转', d: '嵌入旋转 / 翻转 / 填充工具栏（普通视频 + Shorts）' },
            { k: 'kgbiliQuality', t: 'B站画质解锁', d: '未登录状态解锁 1080P 画质选项' },
            { k: 'kgbiliLogin', t: 'B站绕过登录', d: '关闭登录弹窗和"请登录后观看"提示' },
            { k: 'kgyoumv', t: 'YouTube 视频下载', d: '播放器工具栏添加下载按钮，跳转设置页所选站点并预填链接' },
            { k: 'kgtwimv', t: 'Twitter / X 视频下载', d: '在推文视频旁添加下载按钮' }
          ]},
          { title: '⑥ 社区内容 · 广告与登录墙', items: [
            { k: 'kgzhihued', t: '知乎广告 + 登录弹窗', d: '过滤知乎广告、关闭登录弹窗并重定向登录页' },
            { k: 'kgdoubaned', t: '豆瓣广告 + 登录墙', d: '过滤广告并关闭登录弹窗' },
            { k: 'kgweiboed', t: '微博广告过滤', d: '过滤微博信息流广告' },
            { k: 'kgweixined', t: '微信公号广告过滤', d: '过滤微信公众文章里插入的广告和推广' },
            { k: 'csdnAd', t: 'CSDN 广告过滤', d: '去除 CSDN 广告和登录弹窗' },
            { k: 'xhsclean', t: '小红书广告清理', d: '清理信息流推广、侧栏广告与登录墙' },
            { k: 'juejinclean', t: '掘金广告清理', d: '清理掘金信息流与侧栏广告' },
            { k: 'sfclean', t: '思否广告清理', d: '清理思否广告位与登录墙' }
          ]},
          { title: '⑦ 社区内容 · 增强', items: [
            { k: 'csdnLink', t: 'CSDN 外链直达', d: '跳过 CSDN 外链重定向' },
            { k: 'csdnExpand', t: 'CSDN 自动展开', d: '自动展开全文和代码块' },
            { k: 'csdnClean', t: 'CSDN 纯净阅读', d: '隐藏侧边栏，文章居中显示' },
            { k: 'kgweibomv', t: '微博视频下载', d: '在微博视频旁添加下载按钮' },
            { k: 'pojieSignIn', t: '吾爱破解自动签到', d: '进入吾爱破解论坛后自动完成每日签到' }
          ]},
          { title: '⑧ 关键词过滤（各站统一）', items: [
            { k: 'kgbaiduad', t: '百度关键词过滤', d: '按关键词 / 网址过滤搜索结果' },
            { k: 'kggooglead', t: 'Google 关键词过滤', d: '按关键词 / 网址过滤搜索结果' },
            { k: 'kg360ad', t: '360 关键词过滤', d: '按关键词 / 网址过滤搜索结果' },
            { k: 'kgbingad', t: 'Bing 关键词过滤', d: '按关键词 / 网址过滤搜索结果' },
            { k: 'kgzhihuad', t: '知乎关键词过滤', d: '按关键词过滤回答与搜索结果' },
            { k: 'kgbiliad', t: 'B站关键词过滤', d: '按关键词过滤搜索与评论' },
            { k: 'kgweiboad', t: '微博关键词过滤', d: '按关键词过滤微博内容' },
            { k: 'kgweixinad', t: '微信公号关键词过滤', d: '按关键词过滤文章段落内容' },
            { k: 'kgdoubanad', t: '豆瓣关键词过滤', d: '按关键词过滤搜索 / 小组 / 电影' },
            { k: 'kgyouad', t: 'YouTube 关键词过滤', d: '按关键词过滤推荐与评论' }
          ]}
        ],
        listSections: [
          { key: 'pingbiurl', title: '网址过滤', desc: '阻止来自这些网址的搜索结果', placeholder: '输入网址关键词' },
          { key: 'pingbikw', title: '关键词过滤', desc: '屏蔽包含这些关键词的搜索结果和评论', placeholder: '输入关键词（至少2个字）' }
        ]
      },
      {
        key: 'captcha', label: '验证码识别', icon: '🔑',
        note: '⚠ 免责声明：本分组所接 OCR/验证码识别服务（含极速/精准/云码）均为第三方提供，与本脚本无隶属或合作关系。填写接口后，验证码图片与识别码会发送至你所填写的服务器；请仅使用你信任的服务并自行保管账号凭证。脚本不内置任何接口、不收取任何费用，亦不对第三方服务做任何担保。',
        sections: [
          { title: '① 基础开关', items: [
            { k: 'captchaEnabled', t: '启用验证码识别', d: '总开关。默认关闭，按需开启；关闭后本页所有设置均不生效。' },
            { k: 'captchaTrigger', t: '触发方式', d: '手动：点悬浮「识」按钮才扫描（零常驻开销，推荐）；白名单：仅下方名单站点自动扫描；全局：全站常驻扫描（最耗性能，不推荐）。', type: 'select', opts: [['manual','手动（推荐·最省）'],['whitelist','白名单站点'],['global','全局常驻（最耗）']] }
          ]},
          { title: '② 识别引擎与凭证', items: [
            { k: 'captchaEngine', t: '识别引擎', d: '自动：极速接口优先，失败后回退精准；极速：免识别码，但需填写下方接口地址（数英/算术）；精准：需下方识别码（支持滑块）。', type: 'select', opts: [['auto','自动（极速优先）'],['fast','极速（免识别码·需接口地址）'],['precise','精准（需识别码·含滑块）']] },
            { k: 'captchaApiFast', t: '极速接口地址', d: '「极速」引擎调用的服务地址。留空 = 极速引擎直接跳过，不向任何外部服务器发送数据。请自行搭建或选用可信 OCR 服务后填写；验证码图片将上传至该地址。点击右侧「接口说明」查看填写方式。', type: 'text', tip: '粘贴你信任的 OCR 服务地址（可自建/社区/商业接口）', preset: 'captchaApiFast' },
            { k: 'captchaApiPrecise', t: '精准接口地址', d: '「精准」引擎（含滑块）调用的服务地址。留空 = 精准引擎直接跳过。填写后验证码图片、识别码与当前网页网址会发送给该服务器；常用 like996 公益接口（官网 https://www.like996.icu:1205/，第三方服务，与本脚本无关），点击右侧「接口说明」可直达注册页。', type: 'text', tip: '粘贴精准接口地址（如 like996）', preset: 'captchaApiPrecise' },
            { k: 'captchaPreciseId', t: '精准引擎识别码', d: '仅「精准 / 自动」模式需要，由你所填写的精准接口服务方提供（原 like996 为 32 位）。留空则精准模式跳过识别。', type: 'text', tip: '精准引擎识别码' },
            { k: 'captchaYunmaToken', t: '云码 Token', d: '仅「算术验证码」需要（如「3+5=?」图片）。在 jfbym.com 获取 Token（商业服务，按识别次数计费，需充值积分，官网 https://www.jfbym.com，第三方服务，与本脚本无关）；留空则算术图跳过识别。点击右侧「接口说明」可直达注册页。', type: 'text', tip: '算术验证码用', preset: 'captchaYunmaToken' }
          ]},
          { title: '③ 智能与防护', items: [
            { k: 'captchaAutoFind', t: '自动查找验证码', d: '无手动规则时，按属性关键词（code/captcha/yzm…）自动定位验证码与输入框并填充。' },
            { k: 'captchaShowHint', t: '显示提示条', d: '顶部灰条显示识别状态（识别中 / 完成 / 错误）。' },
            { k: 'captchaSlide', t: '滑动验证码', d: '启用滑动拼图 / 滑块行为验证码的自动识别与拖拽。需「精准引擎 + 识别码」。' }
          ]}
        ],
        listSections: [
          { key: 'captchaWhitelist', title: '白名单（自动扫描站点）', desc: '触发方式=白名单时，仅这些站点会自动扫描。填域名即可，系统会自动提取域名主体（如填 https://www.baidu.com/ 、www.baidu.com/* 均按 baidu.com 匹配，本站所有路径都生效）；留空则白名单模式不自动识别（仍可手动触发）。', placeholder: '如 example.com' },
          { key: 'captchaBlacklist', title: '黑名单（跳过识别站点）', desc: 'URL 含其中字符串的网页将跳过验证码识别（避免反复出错打扰）。', placeholder: '输入网址片段' }
        ]
      },
      {
        key: 'selsearch', label: '划词搜索', icon: '✏️',
        sections: [
          { title: '总开关', items: [
            { k: 'selectionSearch', t: '启用划词搜索', d: '选中网页文字弹出搜索工具条（默认开启，修改后刷新页面生效）' },
            { k: 'selSearchShowTranslate', t: '显示翻译按钮', d: '工具条末尾显示「译」按钮，点按划词翻译' },
            { k: 'selSearchTransAuto', t: '自动翻译', d: '划词后立即自动翻译（默认关闭，避免打扰）' },
            { k: 'selSearchAlwaysShowOpenLink', t: '打开链接按钮常驻', d: '无论选中内容是否像地址，都显示「打开网站」按钮（默认关闭）' }
          ]}
        ],
        custom: 'selsearch'
      },
      {
        key: 'videodl', label: '视频下载', icon: '📥',
        custom: 'videodl'
      },
      {
        key: 'perf', label: '性能与高级', icon: '⚡',
        sections: [
          { title: '性能模式', items: [
            { k: 'perfWhitelist', t: '仅白名单域名启用', d: '开启后仅在「启用域名」与已知站点运行，其余页面注入后秒退（近零开销）。油猴 @match 为静态元数据无法运行时切换，此项以注入后早退实现「域名内」' },
            { k: 'passiveGlobal', t: '被动扫描全局化', d: '关闭时通用被动广告扫描只在已知站点运行；开启后扫描所有页面（更重，慎开）' }
          ]},
          { title: '全局增强', items: [
            { k: 'darkMode', t: '暗黑模式', d: '跟随系统自动切换暗黑模式' },
            { k: 'cleanCopy', t: '干净复制', d: '复制链接时自动去除追踪参数' }
            // 界面语言 uiLang 已移至左栏（藏在"性能与高级"太难找，用户需求）
          ]},
          { title: '统计与显示', items: [
            { k: 'adStats', t: '广告拦截统计', d: '统计并显示本次/累计/当前站点拦截数量。关闭后不再扫描 DOM，可略微降低开销，设置面板仍显示「统计已关闭」' }
          ]}
        ],
        listSections: [
          { key: 'whiteurl', title: '白名单域名（脚本暂停 · 常驻生效）', desc: '在这些网站中脚本将整体暂停（不注入任何净化/美化/划词/验证码）。此项无需开关、填入即生效。', placeholder: '输入域名' },
          { key: 'scopeWhitelist', title: '启用域名（内部白名单）', desc: '开启上方「仅白名单域名启用」后，只有这些域名会被处理。例：baidu.com、youtube.com、taobao.com（填主域名即可覆盖其子域）。留空则仅已知站点生效。', placeholder: '如 baidu.com' },
          { key: 'scriptBlacklist', title: '黑名单站点（脚本暂停 · 可一键开关）',
            desc: '与上表「白名单域名」效果相同（命中的站点脚本整体暂停），区别是这一份带总开关、可一键导入预设敏感站点，适合银行/支付/政务这类需要临时整体退避的站点。默认关闭，由你手动启用。',
            placeholder: '如 icbc.com.cn',
            switch: { k: 'scriptBlacklistEnabled', t: '启用脚本站点黑名单', d: '开启后，本表内的站点脚本整体暂停（不注入任何净化/美化/划词/验证码）。改动需刷新页面生效。' },
            actions: [ { id: 'import-preset', label: '导入预设敏感站点' }, { id: 'clear', label: '清空黑名单' } ] }
        ]
      },
      {
        key: 'shortcuts', label: '快捷键', icon: '⌨️',
        sections: [
          { title: '全局快捷键', items: [
            { k: 'shortcutPanel', t: '打开控制面板', d: 'Ctrl+Shift+A 一键打开设置面板' },
            { k: 'shortcutPause', t: '暂停/恢复净化', d: 'Ctrl+Shift+P 全局暂停或恢复广告净化' }
          ]},
          { title: 'YouTube 视频旋转', items: [
            { k: 'shortcutYtp', t: '旋转快捷键', d: 'Alt+Shift+R/F/H/V 旋转/填充/翻转视频' }
          ]}
        ]
      },
      {
        key: 'cloud', label: '配置同步', icon: '⚙️',
        custom: 'cloud'
      },
      {
        key: 'about', label: '关于', icon: 'ℹ️',
        custom: 'about'
      }
    ];

    // 应用已保存的自定义分类顺序（用户拖拽重排后持久化在 cfg.ui.catOrder）
    (function applyCatOrder() {
      const saved = (getConfig().ui && Array.isArray(getConfig().ui.catOrder) && getConfig().ui.catOrder.length) ? getConfig().ui.catOrder : [];
      if (!saved.length) return;
      const keys = groups.map(g => g.key);
      const order = saved.filter(k => keys.indexOf(k) >= 0);
      keys.forEach(k => { if (order.indexOf(k) < 0) order.push(k); });
      groups.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
    })();

    // 生成切换开关 / 下拉 / 文本 HTML
    function buildSwitch(item, val) {
      const help = HELP[item.k] ? `<span class="zk-set-help" data-help="${item.k}" title="${t('panel.helpTip')}">?</span>` : '';
      let ctrl = '';
      if (item.type === 'select') {
        ctrl = `<select class="zk-set-select" data-key="${item.k}">` +
          (item.opts || []).map(o => `<option value="${o[0]}" ${(val === o[0]) ? 'selected' : ''}>${o[1]}</option>`).join('') +
          `</select>`;
      } else if (item.type === 'text') {
        ctrl = `<input type="text" class="zk-set-text" data-key="${item.k}" placeholder="${tp('ph.' + item.k, item.tip || '')}" value="${val || ''}">`;
        // 自填接口地址的输入框：附一个「接口说明」引导按钮（不内置任何第三方地址，仅展示填写引导）。
        if (item.preset) {
          const ph = PRESET_HINTS[item.k];
          const phTitle = ph ? ph.title : tp('panel.apiGuide', '接口填写说明');
          // 按钮**显示文本**固定为「接口说明」（避免把超长 ph.title 当按钮文本撑爆布局），
          // 完整说明放进 title tooltip。
          const phLabel = t('panel.apiGuide') || '接口说明';
          if (ph && ph.url) {
            ctrl += `<a class="zk-set-preset-btn" href="${ph.url}" target="_blank" rel="noopener noreferrer" data-preset="${item.k}" title="${phTitle}">${phLabel}</a>`;
          } else {
            ctrl += `<button type="button" class="zk-set-preset-btn" data-preset="${item.k}" title="${phTitle}">${phLabel}</button>`;
          }
        }
      } else if (item.type === 'color') {
        // 护眼色取色器 + 预设色卡：数据驱动渲染，被折叠容器正常包裹
        //   item.presets 可选：[{name, rgb}, ...]（rgb 格式 'r,g,b'），点击 chip 即用预设色
        const rgba = val || 'rgba(204,232,207,1)';
        const _m = String(rgba).match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
        const _cur = _m ? [+_m[1], +_m[2], +_m[3]] : null;
        let _presets = '';
        if (item.presets && item.presets.length) {
          _presets = '<div class="zk-set-presets">' + item.presets.map(function (p) {
            const pr = String(p.rgb).split(',').map(function (x) { return +x; });
            const hit = _cur && pr[0]===_cur[0] && pr[1]===_cur[1] && pr[2]===_cur[2];
            return '<button type="button" class="zk-set-preset-chip' + (hit ? ' active' : '') +
              '" data-rgb="' + p.rgb + '" title="' + (p.name||'') + '" aria-label="' + (p.name||'') +
              '" style="background:rgb(' + p.rgb + ')"></button>';
          }).join('') + '</div>';
        }
        ctrl = '<div class="zk-set-color-wrap">' + _presets +
          '<div class="zk-set-color"><input type="color" value="' + ncRgbToHex(rgba) + '"><span>' + rgba + '</span></div></div>';
      } else {
        ctrl = `<label class="zk-set-switch"><input type="checkbox" ${val ? 'checked' : ''}><span class="zk-set-slider"></span></label>`;
      }
      // 【i18n】item.t / item.d 走 t('item.t.<k>') || item.t 自动 fallback 简中。
      //   字典命中 en 值则显示英文，否则 fallback 简中；繁中也走相同 fallback 路径（简体 tTree 不触发），
      //   若希望繁体也对 t/d 转繁，单独加 s2t 处理（当前 t() 已对字典缺失 zh-TW 键自动 s2t 回退），
      //   但 t() 只对 I18N 字典生效，这里 item.t 是 data 字符串，需手动调 tTree 才能覆盖。
      const tLabel = tp('item.t.' + item.k, item.t);
      const tDesc = tp('item.d.' + item.k, item.d);
      return `<div class="zk-set-row" data-key="${item.k}">
        <div class="zk-set-row-info"><div class="zk-set-row-label">${tLabel}${help}</div><div class="zk-set-row-desc">${tDesc}</div></div>
        ${ctrl}
      </div>`;
    }

    // 分组标题右侧的「全部开启」：只有 ≥2 个开关时才有意义（单开关时等于开关本身，纯噪音）
    function buildGroupToggle(sec) {
      const n = (sec.items || []).filter(it => it.type !== 'select' && it.type !== 'text' && it.type !== 'color').length;
      if (n < 2) return '';
      return `<button class="zk-set-group-toggle" data-group="${sec.title}">${t('panel.allOn')}</button>`;
    }

    // 生成 section 内所有内容
    function buildSectionsHtml(sections) {
      let h = '';
      for (const sec of sections) {
        // 【i18n】sec.title 走 t('sec.<title>') 自动 fallback 简中
        //   sec 没稳定的 k 字段，直接用 title 作 key 后缀（中文字符串作 object key 合法）
        const secKey = 'sec.' + sec.title;
        const secTitle = tp(secKey, sec.title);
        h += `<div class="zk-set-group" data-group="${sec.title}"><div class="zk-set-group-title"><span class="zk-set-group-title-text">${secTitle}</span>${buildGroupToggle(sec)}</div>`;
        for (const item of sec.items) {
          h += buildSwitch(item, PROXY_SWITCH[item.k] ? readProxy(PROXY_SWITCH[item.k]) : baidu[item.k]);
        }
        h += '</div>';
      }
      return h;
    }

    // 生成列表 section 的 HTML（v12.0.0：支持在卡片内挂载归属开关，开关与名单同框）
    function buildListSectionsHtml(listSections) {
      let h = '';
      for (const ls of listSections) {
        const help = HELP[ls.key] ? `<span class="zk-set-help" data-help="${ls.key}" title="${t('panel.helpTip')}">?</span>` : '';
        const actions = ls.actions ? `<div class="zk-set-list-actions">` + ls.actions.map(a => `<button type="button" class="zk-set-list-action-btn" data-action="${a.id}">${a.label}</button>`).join('') + `</div>` : '';
        const swRow = ls.switch ? buildSwitch(ls.switch, PROXY_SWITCH[ls.switch.k] ? readProxy(PROXY_SWITCH[ls.switch.k]) : baidu[ls.switch.k]) : '';
        // 【i18n】listSection 的 title/desc/placeholder 也走 tp() 自动 fallback 原值
        const lsTitle = tp('ls.title.' + ls.key, ls.title);
        const lsDesc = tp('ls.desc.' + ls.key, ls.desc);
        const lsPh = tp('ls.ph.' + ls.key, ls.placeholder);
        h += `<div class="zk-set-group"><div class="zk-set-group-title">${lsTitle}${help}</div><div class="zk-set-row-desc" style="margin-bottom:10px">${lsDesc}</div>
          ${swRow}
          <div class="zk-set-list" data-list="${ls.key}"><div class="zk-set-items"></div>
          <div class="zk-set-add"><input type="text" placeholder="${lsPh}"><button>${t('panel.add') || '添加'}</button></div>${actions}</div></div>`;
      }
      return h;
    }

    // 构建完整面板 HTML
    let sectionsHtml = '';
    for (const g of groups) {
      sectionsHtml += `<div class="zk-set-section" data-section="${g.key}">`;
      // 分组级常驻说明（如免责声明）
      if (g.note) sectionsHtml += `<div class="zk-set-section-note">${g.note}</div>`;
      // 标准 sections 与 custom 自定义面板必须能并存：划词组既有「总开关」又有专属面板。
      // 旧写法是 if(custom){...}else{...}，导致 custom 组的 sections 被整体跳过 ——
      // 划词的 4 个总开关（含「启用划词搜索」）在面板里根本不渲染，用户想关都关不掉。
      // 顺序：总开关在上，自定义详细面板在下。
      if (g.sections) sectionsHtml += buildSectionsHtml(g.sections);
      if (g.listSections) sectionsHtml += buildListSectionsHtml(g.listSections);
      if (g.custom) sectionsHtml += `<div class="zkss-root" data-zkss="${g.custom}"></div>`;
      sectionsHtml += '</div>';
    }

    const PANEL_CSS = `
      @keyframes zkSetFadeIn{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes zkSetBackdrop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
      :host{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:auto;height:auto;background:transparent;animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;z-index:2147483646;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;display:block;pointer-events:none}
      :host *{box-sizing:border-box}
      @media (prefers-reduced-motion: reduce){ :host, :host *{animation:none!important;transition:none!important} }
      #zk-set-settings-box{width:980px;max-width:96vw;height:720px;max-height:94vh;pointer-events:auto;background:rgba(255,255,255,.98);border-radius:20px;box-shadow:0 32px 100px rgba(0,0,0,.42),0 0 0 1px rgba(255,255,255,.12) inset,0 0 80px rgba(22,119,255,.06);display:flex;overflow:hidden;color:#1f2937;border:1px solid rgba(255,255,255,.15)}
      #zk-set-settings-sidebar{width:200px;background:linear-gradient(180deg,#0f172a 0%,#1e293b 50%,#0f172a 100%);color:#94a3b8;flex-shrink:0;overflow-y:auto;display:flex;flex-direction:column;position:relative}
      #zk-set-settings-sidebar:before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(22,119,255,.08),transparent);pointer-events:none}
      #zk-set-settings-sidebar .zk-set-logo{padding:26px 20px 18px;font-size:16px;font-weight:700;color:#fff;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:10px;position:relative;z-index:1}
      #zk-set-settings-sidebar .zk-set-logo .zk-set-ver{margin-left:auto;font-size:10px;color:#7dd3fc;font-weight:500;background:rgba(22,119,255,.18);padding:3px 10px;border-radius:12px;border:1px solid rgba(125,211,252,.2)}
      #zk-set-settings-sidebar .zk-set-cat{padding:14px 20px;cursor:pointer;border-left:3px solid transparent;transition:all .22s cubic-bezier(.4,0,.2,1);font-size:13px;display:flex;align-items:center;gap:12px;position:relative;z-index:1;margin:2px 8px;border-radius:0 10px 10px 0}
      #zk-set-settings-sidebar .zk-set-cat:hover{background:rgba(255,255,255,.06);color:#e2e8f0;transform:translateX(2px)}
      #zk-set-settings-sidebar .zk-set-cat.active{background:linear-gradient(90deg,rgba(22,119,255,.22),rgba(22,119,255,.08));color:#fff;border-left-color:#38bdf8;font-weight:600;box-shadow:0 4px 20px rgba(22,119,255,.15)}
      #zk-set-settings-sidebar .zk-set-cat .zk-set-cat-icon{font-size:16px;width:26px;text-align:center;filter:drop-shadow(0 0 6px rgba(56,189,248,.35))}
      /* 【i18n】左栏底部语言选择器：与深色侧栏配色协调（青蓝高亮提示是功能入口） */
      #zk-set-settings-sidebar .zk-set-lang{margin:12px 14px 16px;padding:14px 12px 12px;border-top:1px solid rgba(125,211,252,.12);background:rgba(22,119,255,.06);border-radius:10px;position:relative;z-index:1;margin-top:auto}
      #zk-set-settings-sidebar .zk-set-lang-label{display:block;font-size:11px;color:#7dd3fc;font-weight:600;margin-bottom:6px;letter-spacing:.3px}
      #zk-set-settings-sidebar .zk-set-lang-sel{width:100%;padding:7px 10px;border:1px solid rgba(125,211,252,.25);border-radius:8px;font-size:12px;outline:none;background:rgba(15,23,42,.6);color:#e2e8f0;cursor:pointer;transition:all .2s}
      #zk-set-settings-sidebar .zk-set-lang-sel:hover{border-color:rgba(125,211,252,.5);background:rgba(15,23,42,.85)}
      #zk-set-settings-sidebar .zk-set-lang-sel:focus{border-color:#1677ff;box-shadow:0 0 0 3px rgba(22,119,255,.15)}
      #zk-set-settings-sidebar .zk-set-lang-sel option{background:#0f172a;color:#e2e8f0}
      @media(max-width:720px){
        #zk-set-settings-sidebar .zk-set-lang{margin:8px 12px}
      }
      #zk-set-settings-main{flex:1;display:flex;flex-direction:column;min-width:0;background:linear-gradient(180deg,#f8fafc 0%,#f1f5f9 100%)}
      #zk-set-settings-header{padding:18px 26px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);position:relative;z-index:2}
      #zk-set-settings-header h2{margin:0;font-size:18px;color:#0f172a;font-weight:700;letter-spacing:-.3px}
      #zk-set-settings-close{width:36px;height:36px;border:none;background:#f1f5f9;font-size:22px;line-height:36px;cursor:pointer;color:#64748b;border-radius:50%;transition:all .2s;display:flex;align-items:center;justify-content:center}
      #zk-set-settings-close:hover{background:#e2e8f0;color:#0f172a;transform:rotate(90deg)}
      .zk-set-search{flex:1;display:flex;align-items:center;gap:4px;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:10px;padding:5px 10px;max-width:340px;margin:0 14px}
      .zk-set-search input{flex:1;border:none;background:transparent;outline:none;font-size:13px;color:#1e293b;min-width:0}
      .zk-set-search input::-webkit-search-cancel-button{display:none}
      #zk-set-search-clear{display:none;border:none;background:transparent;color:#94a3b8;font-size:18px;cursor:pointer;line-height:1;padding:0 2px}
      #zk-set-search-clear.show{display:block}
      .zk-set-search-note{padding:12px 26px;color:#64748b;font-size:13px;background:rgba(22,119,255,.05);border-bottom:1px solid #e2e8f0}
      #zk-set-settings-body{flex:1;overflow-y:auto;padding:26px;position:relative}
      #zk-set-settings-body::-webkit-scrollbar{width:6px}
      #zk-set-settings-body::-webkit-scrollbar-track{background:transparent}
      #zk-set-settings-body::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:3px}
      #zk-set-settings-footer{padding:16px 26px;border-top:1px solid #e2e8f0;display:flex;gap:10px;justify-content:space-between;align-items:center;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);white-space:nowrap}
      #zk-set-settings-footer .zk-set-status{font-size:12px;color:#64748b;display:flex;align-items:center;gap:6px}
      #zk-set-settings-footer .zk-set-status .zk-set-auto{margin-left:4px;padding:3px 10px;border-radius:12px;background:#dcfce7;color:#16a34a;font-weight:500;border:1px solid rgba(22,163,74,.12)}
      .zk-set-group{margin-bottom:26px;background:rgba(255,255,255,.95);border:1px solid rgba(226,232,240,.8);border-radius:16px;padding:22px 26px;box-shadow:0 4px 20px rgba(15,23,42,.04),0 1px 3px rgba(15,23,42,.03);transition:box-shadow .25s ease,transform .25s ease}
      .zk-set-group:hover{box-shadow:0 8px 30px rgba(15,23,42,.07);transform:translateY(-1px)}
      .zk-set-section-note{margin-bottom:18px;padding:12px 16px;background:linear-gradient(90deg,rgba(255,247,230,.92),rgba(254,243,199,.7));border:1px solid rgba(245,158,11,.28);border-left:3px solid #f59e0b;border-radius:10px;color:#92400e;font-size:12px;line-height:1.75}
      .zk-set-group-title{font-size:14px;font-weight:700;color:#0f172a;margin-bottom:16px;display:flex;align-items:center;gap:10px}
      .zk-set-group-title-text{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .zk-set-group-title:before{content:'';display:inline-block;width:5px;height:18px;background:linear-gradient(180deg,#1677ff,#38bdf8);border-radius:3px}
      .zk-set-group-title .zk-set-group-toggle{margin-left:auto;font-weight:500;font-size:11px;color:#1677ff;background:rgba(22,119,255,.06);border:1px solid rgba(22,119,255,.2);border-radius:6px;padding:4px 12px;cursor:pointer;transition:all .2s}
      .zk-set-group-title .zk-set-group-toggle:hover{background:#1677ff;color:#fff;box-shadow:0 2px 8px rgba(22,119,255,.25)}
      /* —— 可见精修：分组折叠动画 + SVG 图标 + 焦点环 —— */
      .zk-set-group-body{display:grid;grid-template-rows:1fr;transition:grid-template-rows .3s cubic-bezier(.4,0,.2,1);min-height:0}
      .zk-set-group.collapsed .zk-set-group-body{grid-template-rows:0fr}
      .zk-set-group-inner{overflow:hidden;min-height:0}
      .zk-set-group-title{cursor:pointer;user-select:none}
      .zk-set-chevron{width:16px;height:16px;flex:0 0 auto;margin-right:2px;color:#94a3b8;transition:transform .3s cubic-bezier(.4,0,.2,1)}
      .zk-set-group.collapsed .zk-set-chevron{transform:rotate(-90deg)}
      .zk-set-gicon{width:17px;height:17px;flex:0 0 auto;margin-right:3px;stroke:#0f172a;stroke-width:1.7;fill:none;stroke-linecap:round;stroke-linejoin:round;opacity:.72}
      #zk-set-settings-box :focus-visible{outline:2px solid rgba(22,119,255,.55);outline-offset:2px;border-radius:6px}
      #zk-set-settings-box .zk-set-switch input:focus-visible + .zk-set-slider{box-shadow:inset 0 1px 3px rgba(0,0,0,.1),0 0 0 3px rgba(22,119,255,.35)}
      #zk-set-settings-sidebar .zk-set-cat:focus-visible{outline:2px solid rgba(56,189,248,.6);outline-offset:-2px}
      .zk-set-row{display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid #f1f5f9;transition:background .15s ease}
      .zk-set-row:last-child{border-bottom:none}
      .zk-set-row:hover{background:rgba(241,245,249,.5)}
      .zk-set-row-info{flex:1;min-width:0;margin-right:24px}
      .zk-set-row-label{font-size:14px;color:#1e293b;margin-bottom:4px;font-weight:600;display:flex;align-items:center;gap:6px}
      .zk-set-row-desc{font-size:12px;color:#64748b;line-height:1.5}
      .zk-set-switch{position:relative;display:inline-block;width:48px;height:26px;flex-shrink:0}
      .zk-set-switch input{opacity:0;width:0;height:0}
      .zk-set-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#cbd5e1;transition:.25s cubic-bezier(.34,1.56,.64,1);border-radius:26px;box-shadow:inset 0 1px 3px rgba(0,0,0,.1)}
      .zk-set-slider:before{position:absolute;content:"";height:20px;width:20px;left:3px;bottom:3px;background:linear-gradient(180deg,#fff,#f1f5f9);transition:.25s cubic-bezier(.34,1.56,.64,1);border-radius:50%;box-shadow:0 2px 5px rgba(0,0,0,.2)}
      .zk-set-switch input:checked+.zk-set-slider{background:linear-gradient(90deg,#1677ff,#38bdf8)}
      .zk-set-switch input:checked+.zk-set-slider:before{transform:translateX(22px)}
      .zk-set-switch input:focus+.zk-set-slider{box-shadow:inset 0 1px 3px rgba(0,0,0,.1),0 0 0 3px rgba(22,119,255,.15)}
      .zk-set-list{border:1px solid #e2e8f0;border-radius:12px;padding:12px;background:#f8fafc;min-height:52px}
      .zk-set-items:empty:after{content:'暂无条目';color:#94a3b8;font-size:12px;display:block;text-align:center;padding:16px 0}
      .zk-set-list-item{display:flex;justify-content:space-between;align-items:center;padding:9px 12px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:8px;font-size:12px;transition:all .2s;box-shadow:0 1px 2px rgba(15,23,42,.03)}
      .zk-set-list-item:last-child{margin-bottom:0}
      .zk-set-list-item:hover{border-color:#1677ff;box-shadow:0 2px 8px rgba(22,119,255,.08)}
      .zk-set-list-item span.zk-set-list-val{flex:1;min-width:0;word-break:break-all;line-height:1.5;color:#334155}
      .zk-set-list-item .zk-set-list-ops{display:flex;gap:5px;flex:0 0 auto;align-items:center;margin-left:8px}
      .zk-set-list-item .zk-set-list-btn{border:1px solid #e2e8f0;background:#f8fafc;color:#64748b;padding:3px 9px;border-radius:6px;cursor:pointer;font-size:11px;flex-shrink:0;margin-left:0;transition:all .18s;font-weight:500;line-height:1.5}
      .zk-set-list-item .zk-set-list-btn:hover{background:#1677ff;color:#fff;border-color:#1677ff}
      .zk-set-list-item .zk-set-list-btn.danger:hover{background:#ef4444;border-color:#ef4444;color:#fff}
      .zk-set-list-item .zk-set-list-btn.ok{background:#1677ff;border-color:#1677ff;color:#fff}
      .zk-set-list-item.editing{background:#f0f7ff;border-color:#93c5fd}
      .zk-set-list-item .zk-set-list-edit{flex:1;min-width:0;font-size:12px;color:#0f172a;border:1px solid #93c5fd;border-radius:6px;padding:4px 8px;outline:none;background:#fff;font-family:inherit}
      .zk-set-list-item .zk-set-list-edit:focus{box-shadow:0 0 0 3px rgba(22,119,255,.12)}
      .zk-set-list-empty{font-size:12px;color:#94a3b8;padding:4px 2px}
      .zk-set-add{display:flex;gap:10px;margin-top:10px}
      .zk-set-add input{flex:1;padding:9px 14px;border:1px solid #cbd5e1;border-radius:8px;font-size:13px;outline:none;transition:all .2s;background:#fff}
      .zk-set-add input:focus{border-color:#1677ff;box-shadow:0 0 0 3px rgba(22,119,255,.1)}
      .zk-set-add button{background:linear-gradient(90deg,#1677ff,#38bdf8);color:#fff;border:none;padding:9px 18px;border-radius:8px;cursor:pointer;font-size:13px;font-weight:500;transition:all .2s;box-shadow:0 2px 8px rgba(22,119,255,.2)}
      .zk-set-add button:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(22,119,255,.3)}
      .zk-set-list-actions{display:flex;gap:10px;margin-top:10px}
      .zk-set-list-action-btn{border:1px solid #cbd5e1;background:#fff;color:#475569;padding:8px 14px;border-radius:8px;cursor:pointer;font-size:12px;font-weight:500;transition:all .2s}
      .zk-set-list-action-btn:hover{border-color:#1677ff;color:#1677ff}
      .zk-set-btn{background:linear-gradient(90deg,#1677ff,#38bdf8);color:#fff;border:none;padding:9px 18px;border-radius:8px;cursor:pointer;font-size:13px;font-weight:500;transition:all .2s;box-shadow:0 2px 8px rgba(22,119,255,.18)}
      .zk-set-btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(22,119,255,.28)}
      .zk-set-btn.secondary{background:#fff;color:#475569;border:1px solid #cbd5e1;box-shadow:0 1px 2px rgba(15,23,42,.04)}
      .zk-set-btn.secondary:hover{background:#f8fafc;color:#0f172a;border-color:#94a3b8}
      .zk-set-btn.danger{background:transparent;color:#94a3b8;border:1px solid #e2e8f0;box-shadow:none}
      .zk-set-btn.danger:hover{background:#fef2f2;color:#ef4444;border-color:#fecaca}
      .zk-set-color{display:flex;align-items:center;gap:10px;flex-shrink:0}
      .zk-set-select,.zk-set-text{padding:8px 12px;border:1px solid #cbd5e1;border-radius:8px;font-size:13px;outline:none;max-width:240px;background:#fff;color:#1e293b;transition:all .2s}
      .zk-set-select:focus,.zk-set-text:focus{border-color:#1677ff;box-shadow:0 0 0 3px rgba(22,119,255,.1)}
      .zk-set-preset-btn{flex-shrink:0;margin-left:8px;padding:0 12px;height:34px;border:1px solid #1677ff;background:rgba(22,119,255,.06);color:#1677ff;border-radius:8px;font-size:12px;cursor:pointer;white-space:nowrap;transition:background .2s,color .2s;text-decoration:none;display:inline-flex;align-items:center;justify-content:center}
      .zk-set-preset-btn:hover{background:#1677ff;color:#fff}
      .zk-set-color input[type="color"]{width:42px;height:34px;border:2px solid #e2e8f0;border-radius:8px;padding:0;cursor:pointer;background:transparent;transition:border .2s}
      .zk-set-color input[type="color"]:hover{border-color:#1677ff}
      .zk-set-color-wrap{display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0}
      .zk-set-presets{display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-end;max-width:360px}
      .zk-set-preset-chip{width:26px;height:26px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #cbd5e1;cursor:pointer;padding:0;transition:transform .15s,box-shadow .15s;outline:none}
      .zk-set-preset-chip:hover{transform:scale(1.18);box-shadow:0 0 0 1px #94a3b8,0 3px 8px rgba(0,0,0,.18)}
      .zk-set-preset-chip:focus-visible{box-shadow:0 0 0 2px #1677ff}
      .zk-set-preset-chip.active{box-shadow:0 0 0 2px #1677ff,0 0 0 4px rgba(22,119,255,.18)}
      .zk-set-section{display:none;animation:zkSetSectionIn .25s ease}
      .zk-set-section.active{display:block}
      @keyframes zkSetSectionIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      .zk-set-help{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background:linear-gradient(135deg,#1677ff,#38bdf8);color:#fff;font-size:10px;font-weight:700;font-family:Georgia,serif;cursor:pointer;margin-left:6px;flex-shrink:0;vertical-align:middle;transition:all .2s;box-shadow:0 2px 5px rgba(22,119,255,.2)}
      .zk-set-help:hover{transform:scale(1.1);box-shadow:0 3px 8px rgba(22,119,255,.3)}
      #zk-set-help-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:${NC_Z_TOP};display:none;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px);pointer-events:auto}
      #zk-set-help-backdrop.show{display:flex}
      #zk-set-help-pop{position:relative;width:460px;max-width:92vw;max-height:74vh;overflow-y:auto;background:rgba(255,255,255,.98);border-radius:16px;box-shadow:0 24px 80px rgba(0,0,0,.35),0 0 0 1px rgba(255,255,255,.2) inset;border:1px solid rgba(255,255,255,.15);animation:zkSetFadeIn .25s ease}
      #zk-set-help-pop .zk-set-help-head{padding:16px 20px;background:linear-gradient(90deg,#1677ff,#38bdf8);color:#fff;font-weight:700;font-size:15px;display:flex;justify-content:space-between;align-items:center;border-radius:16px 16px 0 0;position:sticky;top:0;box-shadow:0 2px 10px rgba(22,119,255,.2)}
      #zk-set-help-pop .zk-set-help-head button{background:rgba(255,255,255,.2);border:none;color:#fff;width:26px;height:26px;border-radius:50%;cursor:pointer;font-size:18px;line-height:26px;flex-shrink:0;transition:all .2s}
      #zk-set-help-pop .zk-set-help-head button:hover{background:rgba(255,255,255,.35);transform:rotate(90deg)}
      #zk-set-help-pop .zk-set-help-body{padding:18px 20px 22px}
      #zk-set-help-pop .zk-set-help-sec{margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid #f1f5f9}
      #zk-set-help-pop .zk-set-help-sec:last-child{margin-bottom:0;padding-bottom:0;border-bottom:none}
      #zk-set-help-pop .zk-set-help-sec h4{margin:0 0 8px;font-size:13px;color:#1677ff;display:flex;align-items:center;gap:8px;font-weight:700}
      #zk-set-help-pop .zk-set-help-sec h4:before{content:'';display:inline-block;width:6px;height:6px;border-radius:50%;background:#38bdf8}
      #zk-set-help-pop .zk-set-help-sec p{margin:0;font-size:13px;color:#475569;line-height:1.75}
      /* —— 划词搜索自定义面板样式（安东蓝主题 #1677ff）—— */
      .zkss-root{font-size:13px}
      .zkss-hint-inline{margin-left:auto;font-size:11px;font-weight:400;color:#1677ff;opacity:.75}
      .zkss-actions{display:flex;gap:8px;margin-bottom:12px}
      .zkss-btn{border:none;background:linear-gradient(135deg,#1677ff,#3b8dff);color:#fff;padding:8px 16px;border-radius:10px;cursor:pointer;font-size:13px;font-weight:500;box-shadow:0 2px 8px rgba(22,119,255,.22);transition:transform .18s cubic-bezier(.25,.8,.25,1),box-shadow .18s,filter .18s}
      .zkss-btn:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(22,119,255,.32);filter:brightness(1.06)}
      .zkss-btn:active{transform:translateY(0);box-shadow:0 2px 6px rgba(22,119,255,.22)}
      .zkss-etable{border:1px solid #e6e8eb;border-radius:8px;overflow:hidden;background:#fff}
      .zkss-ehead,.zkss-erow{display:grid;grid-template-columns:54px 1.1fr 2fr 1.5fr 124px;align-items:center;gap:8px;padding:8px 10px}
      .zkss-ehead{background:#f5f7fa;font-size:12px;font-weight:600;color:#555;border-bottom:1px solid #e6e8eb}
      .zkss-erow{border-bottom:1px solid #f0f0f0}
      .zkss-erow:last-child{border-bottom:none}
      .zkss-erow input{width:100%;padding:6px 8px;border:1px solid #ddd;border-radius:6px;font-size:12px;box-sizing:border-box;outline:none}
      .zkss-erow input:focus{border-color:#1677ff}
      /* —— 移动端响应式（≤640px）：侧边栏折叠为顶部横向 tab —— */
      @media (max-width:640px){
        #zk-set-settings-box{flex-direction:column;width:100%;height:100%;max-width:100vw;max-height:100vh;border-radius:0}
        #zk-set-settings-sidebar{width:100%!important;flex-direction:row!important;overflow-x:auto;overflow-y:hidden;flex-shrink:0;padding:0;border-bottom:1px solid rgba(255,255,255,.08);background:linear-gradient(180deg,#16273f,#0f1d31)}
        #zk-set-settings-sidebar .zk-set-logo{display:none}
        #zk-set-settings-sidebar .zk-set-cat{padding:13px 14px;white-space:nowrap;border-left:none;border-bottom:3px solid transparent}
        #zk-set-settings-sidebar .zk-set-cat.active{border-left:none;border-bottom-color:#1677ff;background:rgba(22,119,255,.2)}
        #zk-set-settings-sidebar .zk-set-cat .zk-set-cat-icon{width:auto;margin-right:2px}
        #zk-set-settings-main{min-width:0}
        #zk-set-settings-body{padding:16px 14px}
        #zk-set-settings-header{padding:14px 16px}
        #zk-set-settings-header h2{font-size:16px}
        .zk-set-group{padding:14px 14px;margin-bottom:14px}
        .zk-set-row{padding:13px 0}
        .zk-set-row-label{font-size:14px}
        .zk-set-select,.zk-set-text{font-size:16px}
        .zk-set-switch{width:52px;height:30px}
        .zk-set-slider:before{height:24px;width:24px}
        .zk-set-switch input:checked+.zk-set-slider:before{transform:translateX(22px)}
        .zk-set-select,.zk-set-text{max-width:none;width:100%}
        .zk-set-list-item{font-size:13px;padding:9px 10px}
        .zk-set-color input[type="color"]{width:46px;height:34px}
        .zkss-etable{grid-template-columns:40px 1fr 1.3fr 1.3fr 104px}
        .zkss-field label{font-size:14px}
        .zkss-field{flex-wrap:wrap}
        .zkss-field > label{min-width:auto}
        .zkss-field select,.zkss-field input[type=text]{font-size:16px;max-width:none}
        .zkss-btn{padding:9px 16px;font-size:14px}
        #zk-set-help-pop .zk-set-help-body{padding:14px}
      }
      @media (hover:none){
        .zk-set-group-title .zk-set-group-toggle:hover{background:transparent}
        .zk-set-list-item:hover{border-color:#eee}
        .zk-set-help:hover{background:#1677ff}
        .zk-set-cat:hover{background:transparent;color:#b8c7ce}
        .zkss-btn:hover{transform:none;filter:none}
      }
      .zkss-eicon{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
      .zkss-eicon .zkss-ico{flex:1;min-width:70px;min-width:0;padding:6px 8px;border:1px solid #ddd;border-radius:6px;font-size:12px;outline:none;transition:border .2s}
      .zkss-eicon .zkss-ico:focus{border-color:#1677ff}
      .zkss-ico-prev{width:26px;height:26px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f2f3f5;border-radius:6px;overflow:hidden}
      .zkss-ico-prev svg,.zkss-ico-prev img{width:20px;height:20px}
      .zkss-ico-acts{display:flex;flex-direction:column;gap:3px;margin-left:2px}
      .zkss-ico-acts button{border:1px solid #d7e3f4;background:#f4f9ff;color:#1677ff;border-radius:5px;padding:3px 7px;cursor:pointer;font-size:11px;white-space:nowrap;transition:all .15s}
      .zkss-ico-acts button:hover:not(:disabled){background:#1677ff;color:#fff}
      .zkss-ico-acts button:disabled{opacity:.4;cursor:wait}
      .zkss-eops{display:flex;gap:4px;align-items:center}
      .zkss-eops button{border:1px solid #e0e0e0;background:#fff;color:#555;border-radius:5px;padding:3px 8px;cursor:pointer;font-size:12px;transition:all .15s}
      .zkss-eops button:hover{border-color:#1677ff;color:#1677ff}
      .zkss-eops button:disabled{opacity:.35;cursor:not-allowed}
      .zkss-eops .zkss-del{color:#ff5252;border-color:#ffd5d5}
      .zkss-eops .zkss-del:hover{background:#fff5f5;color:#ff5252;border-color:#ff5252}
      .zkss-empty{padding:24px;text-align:center;color:#999;font-size:12px}
      .zkss-sw{width:42px;height:22px;background:#ccc;border-radius:20px;position:relative;cursor:pointer;transition:background .2s;flex-shrink:0}
      .zkss-sw i{position:absolute;width:18px;height:18px;background:#fff;border-radius:50%;top:2px;left:2px;transition:left .2s}
      .zkss-sw.on{background:#1677ff}
      .zkss-sw.on i{left:22px}
      .zkss-field{display:flex;align-items:center;gap:10px;margin-bottom:12px}
      .zkss-field > label{font-weight:600;font-size:13px;min-width:120px}
      .zkss-field select,.zkss-field input[type=text]{padding:6px 10px;border:1px solid #ddd;border-radius:6px;font-size:13px;outline:none;background:#fff;color:#333;flex:1;max-width:320px}
      .zkss-field select:focus,.zkss-field input:focus{border-color:#1677ff}
      .zkss-field.zkss-inline > label{min-width:auto}
      .zkss-field input[type=range]{flex:1;max-width:320px;-webkit-appearance:none;height:6px;background:#e6e8eb;border-radius:3px;outline:none}
      .zkss-field input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;background:#1677ff;border-radius:50%;cursor:pointer}
      .zkss-val{color:#1677ff;font-weight:600;min-width:auto!important}
      .zkss-tip{font-size:11px;color:#999}
      .zkss-note{margin-top:10px;color:#666;font-size:12px;line-height:1.7;background:#f7f9fc;border-radius:8px;padding:12px}
      .zkss-note code{background:#eef2f7;padding:2px 6px;border-radius:4px;font-family:Consolas,monospace;color:#c7254e}
      .zkcs-field{display:flex;align-items:center;gap:10px;margin-bottom:12px}
      .zkcs-field > label{font-weight:600;font-size:13px;min-width:120px}
      .zkcs-field input[type=text],.zkcs-field input[type=password]{padding:6px 10px;border:1px solid #ddd;border-radius:6px;font-size:13px;outline:none;background:#fff;color:#333;flex:1;max-width:320px}
      .zkcs-field input:focus{border-color:#1677ff}
      .zkcs-field.zkcs-inline > label{min-width:auto}
      .zkcs-type{width:100%;padding:9px 12px;border:1px solid #e2e8f0;border-radius:8px;background:#fff;font-size:13px;color:#1f2937}
.zkcs-notice{margin:6px 0 10px;padding:10px 12px;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;color:#9a3412;font-size:12px;line-height:1.6}
.zkcs-notice code{background:#fff;border:1px solid #fed7aa;border-radius:4px;padding:1px 4px;font-family:monospace}
.zkcs-field .zkcs-tip{font-size:11px;color:#94a3b8;margin-top:4px;line-height:1.5}
.zkcs-field input[type="password"].zkcs-inp{font-family:monospace}
.zkcs-actions{display:flex;flex-wrap:wrap;gap:10px;margin:16px 0 8px}
      .zkss-btn.danger{background:linear-gradient(135deg,#ff4d4f,#ff7875);box-shadow:0 2px 8px rgba(255,77,79,.22)}
      .zkss-btn.danger:hover{box-shadow:0 6px 18px rgba(255,77,79,.32);filter:brightness(1.06)}
      .zkcs-status{margin-top:8px;font-size:12px;color:#888}
      .zkcs-tip{font-size:11px;color:#999}
      .zkcs-note{margin-bottom:14px;color:#666;font-size:12px;line-height:1.7;background:#f7f9fc;border-radius:8px;padding:12px}
      /* —— 关于面板 —— */
      .zk-about{font-size:13px}
      .zk-about-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:12px}
      .zk-about-logo{font-size:16px;font-weight:700;color:#0f172a}
      .zk-about-ver{font-size:11px;color:#1677ff;background:rgba(22,119,255,.12);padding:4px 12px;border-radius:12px;border:1px solid rgba(22,119,255,.25);font-weight:600;flex-shrink:0}
      .zk-about-desc{font-size:13px;color:#475569;line-height:1.7;background:#eef4ff;border:1px solid #dbeafe;border-radius:10px;padding:12px 14px;margin:0 0 14px}
      .zk-about-desc b{color:#1677ff}
      .zk-about-search{width:100%;padding:10px 14px;border:1px solid #cbd5e1;border-radius:10px;font-size:13px;outline:none;margin-bottom:12px;box-sizing:border-box;background:#fff}
      .zk-about-search:focus{border-color:#1677ff;box-shadow:0 0 0 3px rgba(22,119,255,.1)}
      .zk-about-list{max-height:430px;overflow-y:auto;padding-right:4px}
      .zk-about-item{border:1px solid #e2e8f0;border-radius:10px;margin-bottom:8px;overflow:hidden;background:#fff}
      .zk-about-q{display:flex;justify-content:space-between;align-items:center;padding:11px 14px;cursor:pointer;font-size:13px;font-weight:600;color:#1e293b;transition:background .15s}
      .zk-about-q:hover{background:#f1f5f9}
      .zk-about-arrow{color:#94a3b8;font-size:12px}
      .zk-about-a{display:none;padding:4px 14px 14px;border-top:1px solid #f1f5f9}
      .zk-about-a.open{display:block;animation:zkSetSectionIn .2s ease}
      .zk-about-a .zk-help-sec{margin-bottom:10px}
      .zk-about-a .zk-help-sec:last-child{margin-bottom:0}
      .zk-about-a h4{margin:0 0 4px;font-size:12px;color:#1677ff}
      .zk-about-a p{margin:0;font-size:12px;color:#475569;line-height:1.65}
      /* —— 侧栏分类拖拽态 —— */
      #zk-set-settings-sidebar .zk-set-cat{cursor:grab}
      #zk-set-settings-sidebar .zk-set-cat:active{cursor:grabbing}
      #zk-set-settings-sidebar .zk-set-cat.dragging{opacity:.45;background:rgba(22,119,255,.18);border-left-color:#38bdf8;box-shadow:0 4px 20px rgba(22,119,255,.25)}
    `;

    const box = document.createElement('div');
    box.id = 'zk-set-cleaner-settings';
    const sr = box.attachShadow({ mode: 'open' });
    // 无障碍：对话框语义 + Tab 焦点陷阱 + 焦点还原
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', '脚本设置');
    const _prevFocus = document.activeElement;
    sr.addEventListener('keydown', function(e) {
      if (e.key !== 'Tab') return;
      const f = sr.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && sr.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && sr.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    setTimeout(() => { const c = sr.querySelector('#zk-set-settings-close'); if (c) c.focus(); }, 30);
    sr.innerHTML = '<style>' + PANEL_CSS + '</style>' + `
      <div id="zk-set-settings-box">
        <div id="zk-set-settings-sidebar">
          <div class="zk-set-logo">${t('panel.title')}<span class="zk-set-ver">v${VERSION}</span></div>
          ${groups.map(g => `<div class="zk-set-cat" data-cat="${g.key}"><span class="zk-set-cat-icon">${g.icon}</span>${tp('cat.' + g.key, g.label)}</div>`).join('')}
          <!-- 【i18n】界面语言选择器：放左栏底部明显位置（之前藏在"性能与高级→全局增强"里太难找） -->
          <div class="zk-set-lang" title="${t('panel.langTip')}">
            <label class="zk-set-lang-label">${t('panel.lang')}</label>
            <select class="zk-set-select zk-set-lang-sel" data-key="uiLang">
              ${UI_LANGS.map(([v, lbl]) => `<option value="${v}" ${(uiLang() === v) ? 'selected' : ''}>${lbl}</option>`).join('')}
            </select>
          </div>
        </div>
        <div id="zk-set-settings-main">
          <div id="zk-set-settings-header">
            <h2>${t('panel.search')}</h2>
            <div class="zk-set-search"><input id="zk-set-search" type="text" placeholder="${t('panel.searchPh')}" aria-label="${t('panel.search')}"><button id="zk-set-search-clear" type="button" title="${t('panel.clear')}" aria-label="${t('panel.clearAria')}">&times;</button></div>
            <button id="zk-set-settings-close">&times;</button>
          </div>
          <div id="zk-set-settings-body">${sectionsHtml}</div>
          <div id="zk-set-settings-footer">
            <div class="zk-set-status">
              <span class="zk-set-auto" title="${t('panel.autoSaveTip')}">${t('panel.autoSave')}</span>
              <span class="zk-set-stats" id="zk-set-stats" style="margin-left:12px;color:#888;font-size:11px"></span>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(box);

    // 划词搜索 / 云端同步 / 视频下载 自定义面板
    sr.querySelectorAll('.zkss-root').forEach(root => {
      if (root.dataset.zkss === 'selsearch') buildSelSearchUI(root);
      else if (root.dataset.zkss === 'cloud') buildCloudSyncUI(root);
      else if (root.dataset.zkss === 'videodl') buildVideoDlUI(root);
      else if (root.dataset.zkss === 'about') buildAboutUI(root);
    });

    // 可见精修：把每个分组的内容包进可折叠 body，并绑定标题点击折叠（手风琴）
    (function wrapGroupBodies(root) {
      root.querySelectorAll('.zk-set-group').forEach(g => {
        const title = g.querySelector(':scope > .zk-set-group-title');
        if (!title) return;
        const body = document.createElement('div'); body.className = 'zk-set-group-body';
        const inner = document.createElement('div'); inner.className = 'zk-set-group-inner';
        g.querySelectorAll(':scope > *:not(.zk-set-group-title)').forEach(el => inner.appendChild(el));
        body.appendChild(inner); g.appendChild(body);
        const chev = document.createElement('span'); chev.className = 'zk-set-chevron';
        chev.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
        title.insertBefore(chev, title.firstChild);
        title.addEventListener('click', e => {
          if (e.target.closest('.zk-set-group-toggle')) return;   // 不拦截「全部开启」按钮
          g.classList.toggle('collapsed');
        });
      });
    })(sr);

    // 【护眼色已改为数据驱动渲染】护眼色（baidueyecolor）作为①组 items 里的 type:'color' 分支，
    //   由 buildSwitch() 渲染并被折叠容器正常包裹 —— 不再需要此处手动 append。
    //   先前该特殊字段被 append 到「adblock 分组下第一个 .zk-set-group」之后，脱离了 .zk-set-group-body
    //   折叠容器，导致护眼色前不着村后不着店（既在①组、又游离于正常行布局之外）。
    //   事件绑定见下方「.zk-set-color input」color 输入框绑定器。

    function ncRgbToHex(rgb) {
      const matchArr = String(rgb).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!matchArr) return '#c8e8cf';
      return '#' + [matchArr[1], matchArr[2], matchArr[3]].map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
    }
    function ncHexToRgba(hex, alpha) {
      const hexBody = hex.replace('#', '');
      return `rgba(${parseInt(hexBody.substring(0, 2), 16)},${parseInt(hexBody.substring(2, 4), 16)},${parseInt(hexBody.substring(4, 6), 16)},${alpha})`;
    }

    // 自动保存：所有 checkbox toggle 即时写入
    sr.querySelectorAll('.zk-set-switch input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', function() {
        const row = this.closest('.zk-set-row');
        const key = row.getAttribute('data-key');
        if (key) {
          if (PROXY_SWITCH[key]) saveProxy(PROXY_SWITCH[key], this.checked);
          else autoSave(key, this.checked);
          if (key === 'baidueye') {
            const colorRow = sr.querySelector('[data-key="baidueyecolor"]');
            if (colorRow) colorRow.style.opacity = this.checked ? '1' : '0.4';
            // 开/关护眼模式：立即注入/移除全局护眼蒙版（无需刷新）
            try { applyEyeCare(); } catch (e) {}
          }
          if (key === 'baiduhot') {
            updateBaiduHotClass();
          }
          if (['baiducss','googlecss','bingcss','yandexcss','so360css'].includes(key)) {
            toast('搜索美化设置已保存，刷新页面后生效');
          }
          // 启动闸类开关：改动只在下次加载生效，且可能把「当前站点」直接关进小黑屋 —— 必须提前说清楚
          if (key === 'scriptBlacklistEnabled') {
            if (!this.checked) { toast('已关闭：黑名单不再生效（刷新页面后确认）'); }
            else {
              const hit = (getConfig().scriptBlacklist || []).find(u => u && HOST.includes(u));
              if (hit) toast('注意：当前站点命中黑名单条目「' + hit + '」，刷新后脚本将在本站暂停（油猴菜单「状态 / 恢复」可一键解封）', 'err');
              else toast('已开启：黑名单将在刷新页面后生效');
            }
          } else if (key === 'perfWhitelist' && this.checked) {
            const wl = getConfig().scopeWhitelist || [];
            const inWl = wl.some(u => u && HOST.indexOf(u) !== -1);
            if (!inWl && !inKnownDomain()) toast('注意：当前站点不在「启用域名」内，刷新后脚本将在本站暂停（油猴菜单「状态 / 恢复」可一键解封）', 'err');
            else toast('已开启：仅白名单域名启用将在刷新页面后生效');
          }
        }
      });
    });

    // 「接口说明」引导按钮：仅展示填写引导，不会自动写入任何第三方地址（脚本不内置任何接口）。
    sr.querySelectorAll('.zk-set-preset-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const key = this.getAttribute('data-preset');
        const ph = PRESET_HINTS[key];
        if (!ph) { toast('本脚本不内置任何第三方接口。请在上方粘贴你信任的接口地址；留空则对应引擎跳过。'); return; }
        const msg = ph.url
          ? '已在新标签页打开官网：' + ph.url + '。' + (ph.disclaimer || '')
          : ((ph.toast || '') + ' ' + (ph.disclaimer || ''));
        toast(msg, 'ok');
      });
    });

    // 下拉 / 文本 即时保存（性能模式 / 验证码引擎等）
    sr.querySelectorAll('.zk-set-select,.zk-set-text').forEach(el => {
      const ev = el.tagName === 'SELECT' ? 'change' : 'input';
      el.addEventListener(ev, function() {
        const key = this.getAttribute('data-key');
        if (key) {
          autoSave(key, this.value);
          // 【i18n 方案 C】切换界面语言：立即重建面板让新语言生效；
          //   油猴菜单项是脚本启动时注册的，只能在刷新后变 → 明确提示用户。
          if (key === 'uiLang') {
            try { toast(t('toast.langSwitched')); } catch (e) {}
            // forceRebuild：语言切换要「重开同一面板」而非关闭，让新语言立即生效
            setTimeout(() => { try { openSettings(true); } catch (e) {} }, 320);
            return;
          }
          // 护眼强度：改后立即重建全局护眼蒙版（applyEyeCare 读取最新 baidueyestrength，无需刷新）
          if (key === 'baidueyestrength') {
            try { applyEyeCare(); } catch (e) {}
            toast('已立即应用护眼强度');
          }
          if (['baiducss','googlecss','bingcss','captchaEngine','captchaTrigger','captchaPreciseId','captchaYunmaToken'].includes(key)) {
            toast('设置已保存，刷新页面后生效');
          }
        }
      });
    });

    // 护眼色取色器：color 输入框是 hex 值，需转 rgba 再写入配置，并同步显示值
    sr.querySelectorAll('.zk-set-color input[type="color"]').forEach(el => {
      el.addEventListener('input', function() {
        const row = this.closest('.zk-set-row');
        const key = row ? row.getAttribute('data-key') : '';
        if (!key) return;
        const rgba = ncHexToRgba(this.value, '1');
        autoSave(key, rgba);
        const span = this.closest('.zk-set-color').querySelector('span');
        if (span) span.textContent = rgba;
        // 护眼色改后立即重建全局护眼蒙版（取色器拖动时实时预览护眼效果）
        if (key === 'baidueyecolor') {
          try { applyEyeCare(); } catch (e) {}
        }
      });
    });

    // 护眼色预设色卡：点击即写入配置 + 同步取色器与显示值 + 重启蒙版（无需刷新）
    sr.querySelectorAll('.zk-set-preset-chip').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const rgb = this.getAttribute('data-rgb');
        const wrap = this.closest('.zk-set-color-wrap');
        const row = this.closest('.zk-set-row');
        const key = row ? row.getAttribute('data-key') : '';
        if (!key || !rgb) return;
        const rgba = 'rgba(' + rgb + ',1)';
        baidu[key] = rgba;
        setConfig(cfg);
        const span = wrap ? wrap.querySelector('.zk-set-color span') : null;
        if (span) span.textContent = rgba;
        const input = wrap ? wrap.querySelector('.zk-set-color input') : null;
        if (input) input.value = ncRgbToHex(rgba);
        if (wrap) wrap.querySelectorAll('.zk-set-preset-chip').forEach(function (c) { c.classList.remove('active'); });
        this.classList.add('active');
        try { applyEyeCare(); } catch (e) {}
      });
    });

    // 分区总开关
    sr.querySelectorAll('.zk-set-group-toggle').forEach(btn => {
      btn.addEventListener('click', function() {
        const group = this.closest('.zk-set-group');
        const cbs = group.querySelectorAll('.zk-set-switch input[type="checkbox"]');
        const allOn = Array.from(cbs).every(cb => cb.checked);
        const newState = !allOn;
        cbs.forEach(cb => { cb.checked = newState; cb.dispatchEvent(new Event('change', { bubbles: true })); });
        this.textContent = newState ? '全部关闭' : '全部开启';
        toast((newState ? '已开启' : '已关闭') + '「' + group.getAttribute('data-group') + '」全部选项');
      });
      // 初始化按钮文字
      const group = btn.closest('.zk-set-group');
      const cbs = group.querySelectorAll('.zk-set-switch input[type="checkbox"]');
      btn.textContent = Array.from(cbs).every(cb => cb.checked) ? '全部关闭' : '全部开启';
    });

    // 初始状态同步（护眼色紧跟护眼模式）
    const eyeSwitch = sr.querySelector('[data-key="baidueye"] input');
    if (eyeSwitch && !eyeSwitch.checked) {
      const colorRow = sr.querySelector('[data-key="baidueyecolor"]');
      if (colorRow) colorRow.style.opacity = '0.4';
    }

    // ===== 云端同步自定义面板（WebDAV）=====
    function buildCloudSyncUI(root) {
      const cfg = getConfig();
      const cs = cfg.cloudSync || { enabled: false, type: 'webdav', server: '', username: '', password: '', path: '/netclean/netclean-config-v6.json', protect: false, gistToken: '', gistDescription: 'NetClean config backup', oauthToken: '', oauthFolder: '/netclean-backups', lastSync: 0 };
      function persist() { setConfig(getConfig()); }
      function escAttr(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
      function escHtml(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
      function fmtTime(ts) {
        if (!ts) return '未同步';
        try { return new Date(ts).toLocaleString('zh-CN', { hour12: false }); } catch(e) { return '未知'; }
      }
      function setStatus(msg, type) {
        const el = root.querySelector('.zkcs-status');
        if (el) { el.textContent = msg; el.style.color = type === 'err' ? '#ff5252' : (type === 'ok' ? '#52c41a' : '#888'); }
      }
      const provider = getCloudProvider(cs.type);
      const typeOptions = Object.keys(CLOUD_PROVIDERS).map(k => '<option value="' + k + '" ' + (cs.type === k ? 'selected' : '') + '>' + escHtml(CLOUD_PROVIDERS[k].label) + '</option>').join('');
      let fieldsHtml = '';
      for (const f of provider.fields) {
        const val = cs[f.key];
        if (f.type === 'switch') {
          fieldsHtml += '<div class="zkcs-field zkcs-inline"><label>' + escHtml(f.label) + '</label><div class="zkss-sw ' + (val ? 'on' : '') + '" data-cskey="' + f.key + '"><i></i></div><span class="zkcs-tip">' + escHtml(f.help || '') + '</span></div>';
        } else {
          const inputType = f.type === 'password' ? 'password' : 'text';
          fieldsHtml += '<div class="zkcs-field"><label>' + escHtml(f.label) + '</label><input type="' + inputType + '" class="zkcs-inp" data-cskey="' + f.key + '" value="' + escAttr(val || '') + '" placeholder="' + escAttr(f.placeholder || '') + '"><div class="zkcs-tip">' + escHtml(f.help || '') + '</div></div>';
        }
      }
      // 提示：OAuth 类 provider 需要 token
      const isOAuth = ['dropbox','onedrive','gdrive','yandex'].indexOf(cs.type) >= 0;
      const oauthNotice = isOAuth
        ? '<div class="zkcs-notice">该类型需要你先自行获取 Access Token：在对应云盘开发者后台创建应用 → 授权 → 把回调 URL 中的 <code>access_token=...</code> 或生成的 Token 粘贴到上方。</div>'
        : '';
      root.innerHTML = ''
        + '<div class="zk-set-group">'
        +   '<div class="zk-set-group-title"><svg class="zk-set-gicon" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg> 云端配置管理</div>'
        +   '<div class="zk-set-row-desc zkcs-note">选择一个云端 provider 后填写对应凭证。开启自动同步后，配置变更会自动上传云端，启动时按「本地修改时间」自动拉取（本地较新则保留本地）。<b>WebDAV（推荐国内）</b>：坚果云/Nextcloud 直接可用；<b>GitHub Gist</b>：只需一个 PAT；<b>Dropbox/OneDrive/Google Drive/Yandex</b>：需自行获取 OAuth Access Token。</div>'
        +   '<div class="zkcs-field"><label>云备份方式</label><select class="zkcs-type">' + typeOptions + '</select></div>'
        +   oauthNotice
        +   fieldsHtml
        +   '<div class="zkcs-field zkcs-inline"><label>自动同步</label><div class="zkss-sw ' + (cs.enabled ? 'on' : '') + '" id="zkcs-enabled"><i></i></div><span class="zkcs-tip">配置变更后自动上传，启动时自动下载</span></div>'
        +   '<div class="zkcs-actions"><button class="zkss-btn zkcs-test">🔌 测试连接</button><button class="zkss-btn zkcs-up">⬆ 上传到云端</button><button class="zkss-btn zkcs-down">⬇ 从云端下载</button></div>'
        +   '<div class="zkcs-actions"><button class="zkss-btn zkcs-backup-now" title="将当前配置另存为一份带时间戳的云备份文件">💾 备份当前配置</button><button class="zkss-btn zkcs-backup-mgr" title="查看云端已备份的文件，支持导入/删除/下载到磁盘">📋 管理云备份</button></div>'
        +   '<div class="zkcs-status">上次同步：' + fmtTime(cs.lastSync) + '</div>'
        + '</div>'
        + '<div class="zk-set-group">'
        +   '<div class="zk-set-group-title"><svg class="zk-set-gicon" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> 本地配置管理</div>'
        +   '<div class="zk-set-row-desc">导入 / 导出配置文件、暂停全部净化，或恢复默认设置与菜单顺序。导入与重置会覆盖当前配置，已加二次确认。</div>'
        +   '<div class="zkcs-actions">'
        +     '<button class="zkss-btn zkcs-pause" title="临时暂停 / 恢复全部净化（刷新页面后生效）">⏸ 暂停全部</button>'
        +     '<button class="zkss-btn zkcs-import" title="从本地 JSON 文件导入配置（将覆盖当前配置，需确认）">📥 导入</button>'
        +     '<button class="zkss-btn zkcs-export" title="把当前配置导出为 JSON 文件以便备份">📤 导出</button>'
        +     '<button class="zkss-btn zkcs-resetorder" title="仅恢复左侧菜单分类的默认顺序，不影响其他设置">↕ 恢复菜单顺序</button>'
        +     '<button class="zkss-btn zkcs-reset danger" title="恢复全部默认设置（自定义列表 / 白名单也会被清空，不可撤销）">🔄 重置</button>'
        +   '</div>'
        + '</div>';

      function readForm() {
        // 读 provider 类型
        const typeSel = root.querySelector('.zkcs-type');
        if (typeSel) cs.type = typeSel.value || 'webdav';
        // 读文本/密码字段
        root.querySelectorAll('.zkcs-inp[data-cskey]').forEach(inp => {
          const key = inp.getAttribute('data-cskey');
          let v = inp.value;
          if (key === 'path') { v = v.trim() || '/netclean/netclean-config-v6.json'; if (!v.startsWith('/')) v = '/' + v; }
          cs[key] = v;
        });
        // 开关字段在各自的 onclick 里维护，这里汇总一下
        root.querySelectorAll('.zkss-sw[data-cskey]').forEach(sw => {
          cs[sw.getAttribute('data-cskey')] = sw.classList.contains('on');
        });
        cfg.cloudSync = cs;
        persist();
      }
      root.querySelectorAll('.zkcs-inp[data-cskey]').forEach(inp => { inp.onchange = readForm; });
      root.querySelectorAll('.zkss-sw[data-cskey]').forEach(sw => {
        sw.onclick = function() {
          const on = !this.classList.contains('on');
          this.classList.toggle('on', on);
          cs[this.getAttribute('data-cskey')] = on;
          persist();
        };
      });
      root.querySelector('.zkcs-type').onchange = function() {
        cs.type = this.value;
        persist();
        buildCloudSyncUI(root); // 切换 provider 后重绘凭证表单
      };
      root.querySelector('#zkcs-enabled').onclick = function() {
        cs.enabled = !cs.enabled;
        this.classList.toggle('on', cs.enabled);
        persist();
        setStatus(cs.enabled ? '已开启自动同步' : '已关闭自动同步', 'ok');
      };
      root.querySelector('.zkcs-up').onclick = async () => {
        readForm();
        setStatus('正在上传…');
        const r = await cloudSyncUp(true);
        setStatus(r.msg, r.ok ? 'ok' : 'err');
        if (r.ok) root.querySelector('.zkcs-status').textContent = '上次同步：' + fmtTime(cs.lastSync);
      };
      root.querySelector('.zkcs-down').onclick = async () => {
        if (!(await zkConfirm('从云端下载会覆盖当前本地配置，确定继续？', { title: '从云端下载', okText: '确定下载' }))) return;
        readForm();
        setStatus('正在下载…');
        const r = await cloudSyncDown(true);
        setStatus(r.msg, r.ok ? 'ok' : 'err');
      };
      root.querySelector('.zkcs-test').onclick = async () => {
        readForm();
        setStatus('正在测试连接…');
        const p = getCloudProvider(cs.type);
        const r = await p.test(getConfig());
        setStatus(r.msg, r.ok ? 'ok' : 'err');
      };
      // 云备份文件管理：带错误兜底，解决用户反馈的按钮无反应
      const lBkNow = root.querySelector('.zkcs-backup-now');
      if (lBkNow) lBkNow.onclick = async () => {
        try {
          readForm();
          setStatus('正在备份…');
          const r = await cloudBackupCreate();
          setStatus(r.msg, r.ok ? 'ok' : 'err');
        } catch(e) { console.error('[cloudBackupCreate]', e); setStatus('备份出错：' + e.message, 'err'); }
      };
      const lBkMgr = root.querySelector('.zkcs-backup-mgr');
      if (lBkMgr) {
        // 只绑一次事件（addEventListener），避免 .click() 既触发 listener 又触发 onclick 造成双开弹窗/闪烁
        let mgrBusy = false;
        lBkMgr.addEventListener('click', (e) => {
          e.preventDefault(); e.stopPropagation();
          if (mgrBusy) return; // 去抖
          mgrBusy = true;
          setTimeout(() => { mgrBusy = false; }, 1200);
          try { readForm(); } catch (err) { console.error('[readForm]', err); }
          openCloudBackupManagerUi();
        });
      }
      const lPause = root.querySelector('.zkcs-pause'); if (lPause) lPause.onclick = () => { doPauseToggle(); };
      const lImp = root.querySelector('.zkcs-import'); if (lImp) lImp.onclick = () => { doImport(); };
      const lExp = root.querySelector('.zkcs-export'); if (lExp) lExp.onclick = () => { doExport(); };
      const lRo = root.querySelector('.zkcs-resetorder'); if (lRo) lRo.onclick = () => { doResetOrder(); };
      const lRst = root.querySelector('.zkcs-reset'); if (lRst) lRst.onclick = () => { doReset(); };
    }

    // ===== 视频下载自定义面板（站点选择 / 添加 / 删除）=====
    function buildVideoDlUI(root) {
      const cfg = getConfig();
      if (!cfg.videoDownload) cfg.videoDownload = JSON.parse(JSON.stringify(DEFAULT_CONFIG.videoDownload));
      const vd = cfg.videoDownload;
      if (!vd.sites || !vd.sites.length) vd.sites = JSON.parse(JSON.stringify(DEFAULT_CONFIG.videoDownload.sites));
      if (!vd.active) vd.active = DEFAULT_CONFIG.videoDownload.active;
      function persist() { setConfig(getConfig()); }
      function escAttr(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

      // 局部样式：直接注入到 Shadow DOM 内部（root 在 shadowRoot 中，挂 document.head 会被隔离、不生效）
      const VD_STYLE =
        '.zkvd-list{display:flex;flex-direction:column;gap:10px;margin:6px 0 16px}'
        + '.zkvd-row{display:flex;align-items:center;gap:10px;background:#f6f8fb;border:1px solid #e6eaf0;border-left:3px solid transparent;border-radius:10px;padding:9px 12px;transition:background .15s,border-color .15s}'
        + '.zkvd-row.active{background:#eaf2ff;border-color:#1677ff}'
        + '.zkvd-radio{display:flex;align-items:center;gap:7px;cursor:pointer;flex-shrink:0;user-select:none}'
        + '.zkvd-radio input{position:absolute;opacity:0;width:0;height:0}'
        + '.zkvd-dot{width:16px;height:16px;border-radius:50%;border:2px solid #b9c2cf;background:#fff;box-sizing:border-box;transition:border-color .15s;position:relative}'
        + '.zkvd-radio input:checked + .zkvd-dot{border-color:#1677ff}'
        + '.zkvd-radio input:checked + .zkvd-dot::after{content:"";position:absolute;inset:3px;border-radius:50%;background:#1677ff}'
        + '.zkvd-radio input:focus-visible + .zkvd-dot{box-shadow:0 0 0 3px rgba(22,119,255,.25)}'
        + '.zkvd-fields{display:flex;flex-wrap:wrap;gap:8px;flex:1;min-width:0}'
        + '.zkvd-fields input{padding:6px 9px;border:1px solid #d6dce5;border-radius:6px;font-size:12px;outline:none;background:#fff}'
        + '.zkvd-fields .zkvd-name{flex:0 0 110px;min-width:80px}'
        + '.zkvd-fields .zkvd-tpl{flex:1;min-width:200px}'
        + '.zkvd-fields .zkvd-tag{flex:0 0 80px;min-width:60px}'
        + '.zkvd-fields input:focus{border-color:#1677ff}'
        + '.zkvd-del{flex-shrink:0;display:inline-flex;align-items:center;gap:4px;background:#fff;border:1px solid #ffc9c9;color:#ff4d4f;border-radius:6px;padding:5px 11px;font-size:12px;cursor:pointer;transition:background .15s}'
        + '.zkvd-del:hover{background:#fff1f0}'
        + '.zkvd-add{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding-top:4px;border-top:1px dashed #e6eaf0}'
        + '.zkvd-add input{padding:6px 9px;border:1px solid #d6dce5;border-radius:6px;font-size:12px;outline:none;background:#fff}'
        + '.zkvd-add-name{flex:0 0 130px;min-width:100px}'
        + '.zkvd-add-tpl{flex:1;min-width:200px}'
        + '.zkvd-add-btn{background:#1677ff;color:#fff;border:none;border-radius:6px;padding:6px 12px;font-size:12px;cursor:pointer;font-weight:500}'
        + '.zkvd-add-btn:hover{background:#0e63d6}'
        + '.zkvd-reset{background:#fff;color:#555;border:1px solid #d6dce5;border-radius:6px;padding:6px 12px;font-size:12px;cursor:pointer}'
        + '.zkvd-reset:hover{background:#f2f5f9}';

      function rowsHtml() {
        if (!vd.sites.length) return '<div class="zk-set-row-desc">暂无站点，点下方「＋ 添加站点」。</div>';
        return vd.sites.map(s => {
          const active = (s.key === vd.active);
          return '<div class="zkvd-row' + (active ? ' active' : '') + '" data-key="' + escAttr(s.key) + '">'
            + '<label class="zkvd-radio" title="设为点击下载时使用的站点"><input type="radio" name="zkvd-active" ' + (active ? 'checked' : '') + ' data-act="active"><span class="zkvd-dot"></span></label>'
            + '<div class="zkvd-fields">'
            +   '<input class="zkvd-name" value="' + escAttr(s.name) + '" placeholder="名称（如 Cobalt）">'
            +   '<input class="zkvd-tpl" value="' + escAttr(s.tpl || s.url || '') + '" placeholder="模板，含 {url} 占位符">'
            +   '<input class="zkvd-tag" value="' + escAttr(s.tag || '') + '" placeholder="高速/稳定/通用">'
            + '</div>'
            + '<button class="zkvd-del" data-act="del">🗑 删除</button>'
            + '</div>';
        }).join('');
      }
      function render() {
        root.innerHTML = '<style>' + VD_STYLE + '</style>'
          + '<div class="zk-set-group">'
          +   '<div class="zk-set-group-title"><svg class="zk-set-gicon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg> 视频下载站点</div>'
          +   '<div class="zk-set-row-desc zkvd-note">点击播放器上的「下载」按钮会<b>直接跳转到这里选中的站点</b>，并把当前视频链接拼入地址（模板里的 <code>{url}</code> 会被替换为编码后的视频链接）。跳转后脚本会自动把链接填入站点输入框并点击解析/下载，无需回原页面复制粘贴。<br>若某站点不支持地址栏预填，脚本仍会记住链接并在站点页面自动填入。可添加自定义站点，模板中保留 <code>{url}</code> 即可。</div>'
          +   '<div class="zkvd-list">' + rowsHtml() + '</div>'
          +   '<div class="zkvd-add">'
          +     '<input class="zkvd-add-name" placeholder="新站点名称">'
          +     '<input class="zkvd-add-tpl" placeholder="模板 https://站点/?url={url}">'
          +     '<button class="zkvd-add-btn">＋ 添加站点</button>'
          +     '<button class="zkvd-reset">恢复默认</button>'
          +   '</div>'
          + '</div>';
        bind();
      }
      function bind() {
        root.querySelectorAll('.zkvd-row').forEach(row => {
          const key = row.getAttribute('data-key');
          const s = vd.sites.find(x => x.key === key); if (!s) return;
          const nameI = row.querySelector('.zkvd-name');
          const tplI = row.querySelector('.zkvd-tpl');
          const tagI = row.querySelector('.zkvd-tag');
          const radio = row.querySelector('input[data-act="active"]');
          const del = row.querySelector('[data-act="del"]');
          const save = () => persist();
          nameI.oninput = () => { s.name = nameI.value; save(); };
          tplI.oninput = () => { s.tpl = tplI.value; save(); };
          tagI.oninput = () => { s.tag = tagI.value; save(); };
          radio.onchange = () => { if (radio.checked) { vd.active = key; persist(); render(); } };
          del.onclick = () => {
            vd.sites = vd.sites.filter(x => x.key !== key);
            if (vd.active === key && vd.sites[0]) vd.active = vd.sites[0].key;
            persist(); render();
          };
        });
        root.querySelector('.zkvd-add-btn').onclick = async () => {
          const name = root.querySelector('.zkvd-add-name').value.trim();
          const tpl = root.querySelector('.zkvd-add-tpl').value.trim();
          if (!name || !tpl) { await zkAlert('请填写站点名称和模板', { title: '无法添加' }); return; }
          vd.sites.push({ key: 'custom_' + Date.now(), name: name, tpl: tpl, tag: '自定义' });
          persist();
          root.querySelector('.zkvd-add-name').value = '';
          root.querySelector('.zkvd-add-tpl').value = '';
          render();
        };
        root.querySelector('.zkvd-reset').onclick = () => {
          vd.sites = JSON.parse(JSON.stringify(DEFAULT_CONFIG.videoDownload.sites));
          vd.active = DEFAULT_CONFIG.videoDownload.active;
          persist(); render();
        };
      }
      render();
    }

    // ===== 关于面板（版本信息 + 全功能说明索引）=====
    function buildAboutUI(root) {
      const helpKeys = Object.keys(HELP);
      const items = helpKeys.map(k => {
        const h = HELP[k];
        const sec = (title, val) => val ? `<div class="zk-help-sec"><h4>${title}</h4><p>${String(val).replace(/</g, '&lt;')}</p></div>` : '';
        return `<div class="zk-about-item">
          <div class="zk-about-q" data-k="${k}"><span>${h.title || k}</span><span class="zk-about-arrow">▸</span></div>
          <div class="zk-about-a" data-a="${k}">
            ${sec('🎯 功能作用', h.effect)}
            ${sec('⚙️ 实现原理', h.impl)}
            ${sec('🔧 失效维护', h.maintain)}
            ${sec('⚠️ 开关风险', h.risk)}
          </div>
        </div>`;
      }).join('');
      root.innerHTML = `
        <div class="zk-about">
          <div class="zk-about-head">
            <div class="zk-about-logo">⚡ 全网净化大师 NetClean</div>
            <div class="zk-about-ver">当前版本 v${VERSION}</div>
          </div>
          <p class="zk-about-desc">广告过滤 · 划词搜索 · 验证码识别 · 视频下载 一体化浏览器增强脚本。下方为<b>全部功能的详细说明</b>，可搜索关键词快速定位，点击展开查看作用 / 原理 / 维护 / 风险。</p>
          <input class="zk-about-search" type="text" placeholder="搜索功能说明（如 广告 / 验证码 / 翻译 / 画质）">
          <div class="zk-about-list">${items}</div>
        </div>`;
      const list = root.querySelector('.zk-about-list');
      list.querySelectorAll('.zk-about-q').forEach(q => {
        q.addEventListener('click', () => {
          const a = q.nextElementSibling;
          const open = a.classList.toggle('open');
          q.querySelector('.zk-about-arrow').textContent = open ? '▾' : '▸';
        });
      });
      const search = root.querySelector('.zk-about-search');
      search.addEventListener('input', () => {
        const v = search.value.trim().toLowerCase();
        list.querySelectorAll('.zk-about-item').forEach(it => {
          const t = it.querySelector('.zk-about-q').textContent.toLowerCase();
          it.style.display = (!v || t.indexOf(v) >= 0) ? '' : 'none';
        });
      });
    }

    // ===== 划词搜索自定义面板（引擎管理 / 外观 / 翻译）=====
    function buildSelSearchUI(root) {
      const cfg = getConfig();
      let engines = cfg.selSearchEngines;
      const theme = cfg.selSearchTheme;
      const tr = cfg.selSearchTrans;
      function persist() { setConfig(getConfig()); }
      let _persistTimer = null;
      function persistLater() { clearTimeout(_persistTimer); _persistTimer = setTimeout(persist, 400); }
      function escAttr(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
      function trKeysHtml(t) {
        if (t.engine === 'deepl') return '<div class="zkss-field"><label>DeepL API 密钥</label><input type="text" class="zkss-deepl" value="' + escAttr(t.deeplKey) + '" placeholder="xxxx-xxxx-xxxx-xxxx:fx"></div>';
        if (t.engine === 'baidu') return '<div class="zkss-field"><label>百度翻译 AppID</label><input type="text" class="zkss-bid" value="' + escAttr(t.baiduId) + '" placeholder="AppID"></div><div class="zkss-field"><label>百度翻译密钥</label><input type="text" class="zkss-bkey" value="' + escAttr(t.baiduKey) + '" placeholder="Secret Key"></div>';
        if (t.engine === 'custom') return '<div class="zkss-field"><label>API 地址（支持 {q} {tl} {key} 占位符）</label><input type="text" class="zkss-curl" value="' + escAttr(t.customUrl) + '" placeholder="https://api.example.com/translate?q={q}&tl={tl}&key={key}"></div><div class="zkss-field"><label>API 密钥（可选）</label><input type="text" class="zkss-ckey" value="' + escAttr(t.customKey) + '" placeholder="Bearer token"></div>';
        return '';
      }
      function applyThemeLive(t) {
        const P = { dark: { bg: '42,42,46', text: '#fff', hover: '255,255,255', hop: '.18', border: 'transparent' }, light: { bg: '255,255,255', text: '#333', hover: '0,0,0', hop: '.06', border: 'rgba(0,0,0,.08)' } };
        let m = t.mode; if (m === 'auto') m = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; else if (m === 'time') { const h = new Date().getHours(); m = (h < 6 || h >= 18) ? 'dark' : 'light'; }
        const p = P[m] || P.dark; const r = document.documentElement;
        r.style.setProperty('--sh-bg-rgb', p.bg); r.style.setProperty('--sh-text', p.text); r.style.setProperty('--sh-hover-rgb', p.hover); r.style.setProperty('--sh-hover-op', p.hop);
        r.style.setProperty('--sh-opacity', t.opacity != null ? t.opacity : 1); r.style.setProperty('--sh-blur', t.glass ? '12px' : '0px'); r.style.setProperty('--sh-border', p.border);
      }
      function engineRowsHtml() {
        const sorted = [...engines].sort((a, b) => (a.order || 0) - (b.order || 0));
        if (!sorted.length) return '<div class="zkss-empty">暂无引擎，点「＋ 添加」或「恢复默认」</div>';
        return sorted.map((e, i, arr) => {
          return '<div class="zkss-erow" data-id="' + e.id + '">'
            + '<div class="zkss-eenable"><div class="zkss-sw ' + (e.enabled ? 'on' : '') + '"><i></i></div></div>'
            + '<div class="zkss-ename"><input class="zkss-n" value="' + escAttr(e.name) + '" placeholder="名称"></div>'
            + '<div class="zkss-eurl"><input class="zkss-u" value="' + escAttr(e.url) + '" placeholder="https://...{keyword}（留空=复制）"></div>'
            + '<div class="zkss-eicon"><input class="zkss-ico" value="' + escAttr(e.icon) + '" placeholder="图标名/SVG/图片"><span class="zkss-ico-prev">' + ssRenderIcon(e.icon) + '</span>'
            + '<div class="zkss-ico-acts"><button class="zkss-fav" title="按搜索地址自动取该站 favicon.ico 并本地化">取favicon</button><button class="zkss-localize" title="把图标图片下载并缩放为 32px PNG 内联，之后不再依赖网络">本地化</button></div></div>'
            + '<div class="zkss-eops"><button class="zkss-up" ' + ((i === 0) ? 'disabled' : '') + '>↑</button><button class="zkss-dn" ' + ((i >= arr.length - 1) ? 'disabled' : '') + '>↓</button><button class="zkss-del">删除</button></div>'
            + '</div>';
        }).join('');
      }

      root.innerHTML = ''
        + '<div class="zk-set-group">'
        +   '<div class="zk-set-group-title"><svg class="zk-set-gicon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg> 搜索引擎管理<span class="zkss-hint-inline">选中文字弹条中显示的引擎</span></div>'
        +   '<div class="zkss-actions"><button class="zkss-btn zkss-add">＋ 添加搜索</button><button class="zkss-btn zkss-reset">恢复默认</button></div>'
        +   '<div class="zkss-etable"><div class="zkss-ehead"><div>启用</div><div>名称</div><div>搜索地址（{keyword}=选中文字）</div><div>图标</div><div>排序/操作</div></div>'
        +     '<div class="zkss-elist">' + engineRowsHtml() + '</div></div>'
        +   '<div class="zk-set-row-desc zkss-note">图标填写：留空=默认复制图标；图标名=内置 link/copy/baidu/google/bing/bilibili/youtube/weibo/wiki/translate/xiaohongshu；或粘贴 &lt;svg&gt; 代码 / 图片网址。<br>大多数网站可直接用根路径 favicon：<code>https://域名/favicon.ico</code>（如 <code>https://zhihu.com/favicon.ico</code>）。点「取favicon」会按搜索地址自动拼接并下载本地化；点「本地化」可把任意图片网址（ico/jpg/png）抓取并缩放为 32px PNG 内联存储，<b>之后完全不依赖网络</b>。<br>URL 中 <code>{keyword}</code> 自动替换为选中文字（已编码）。</div>'
        + '</div>'
        + '<div class="zk-set-group">'
        +   '<div class="zk-set-group-title"><svg class="zk-set-gicon" viewBox="0 0 24 24"><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg> 工具栏外观</div>'
        +   '<div class="zkss-field"><label>主题<span class="zk-set-help" data-help="selTheme">?</span></label><select class="zkss-mode">'
        +     '<option value="dark"' + (theme.mode === 'dark' ? ' selected' : '') + '>深色</option>'
        +     '<option value="light"' + (theme.mode === 'light' ? ' selected' : '') + '>浅色</option>'
        +     '<option value="auto"' + (theme.mode === 'auto' ? ' selected' : '') + '>跟随系统</option>'
        +     '<option value="time"' + (theme.mode === 'time' ? ' selected' : '') + '>跟随时间</option>'
        +   '</select></div>'
        +   '<div class="zkss-field"><label>透明度<span class="zk-set-help" data-help="selOpacity">?</span> <span class="zkss-val">' + Math.round((theme.opacity || 1) * 100) + '%</span></label><input type="range" class="zkss-opacity" min="0.5" max="1" step="0.05" value="' + (theme.opacity || 1) + '"></div>'
        +   '<div class="zkss-field zkss-inline"><label>毛玻璃效果<span class="zk-set-help" data-help="selGlass">?</span></label><div class="zkss-sw ' + (theme.glass ? 'on' : '') + '" id="zkss-glass"><i></i></div><span class="zkss-tip">低端设备可能卡顿</span></div>'
        + '</div>'
        + '<div class="zk-set-group">'
        +   '<div class="zk-set-group-title"><svg class="zk-set-gicon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> 划词翻译设置</div>'
        +   '<div class="zkss-field"><label>翻译引擎<span class="zk-set-help" data-help="selTransEngine">?</span></label><select class="zkss-trengine">'
        +     '<option value="iciba"' + (tr.engine === 'iciba' ? ' selected' : '') + '>iciba 词典（免费免密钥，推荐）</option>'
        +     '<option value="mymemory"' + (tr.engine === 'mymemory' ? ' selected' : '') + '>MyMemory 翻译（免费免密钥，国内可达）</option>'
        +     '<option value="google"' + (tr.engine === 'google' ? ' selected' : '') + '>Google 翻译（免费免密钥，海外推荐）</option>'
        +     '<option value="deepl"' + (tr.engine === 'deepl' ? ' selected' : '') + '>DeepL（需密钥）</option>'
        +     '<option value="baidu"' + (tr.engine === 'baidu' ? ' selected' : '') + '>百度翻译（需 AppID+密钥）</option>'
        +     '<option value="custom"' + (tr.engine === 'custom' ? ' selected' : '') + '>自定义 API</option>'
        +   '</select></div>'
        +   '<div class="zkss-field zkss-inline"><label>自动翻译<span class="zk-set-help" data-help="selTransAuto">?</span></label><div class="zkss-sw ' + (tr.auto ? 'on' : '') + '" id="zkss-auto"><i></i></div></div>'
        +   '<div class="zkss-field"><label>目标语言（关闭自动目标时生效）<span class="zk-set-help" data-help="selTransTarget">?</span></label><select class="zkss-trtarget">'
        +     '<option value="zh"' + (tr.target === 'zh' ? ' selected' : '') + '>中文</option>'
        +     '<option value="en"' + (tr.target === 'en' ? ' selected' : '') + '>英文</option>'
        +     '<option value="ja"' + (tr.target === 'ja' ? ' selected' : '') + '>日文</option>'
        +     '<option value="ko"' + (tr.target === 'ko' ? ' selected' : '') + '>韩文</option>'
        +     '<option value="fr"' + (tr.target === 'fr' ? ' selected' : '') + '>法文</option>'
        +   '</select></div>'
        +   '<div class="zkss-field zkss-inline"><label>自动目标语言<span class="zk-set-help" data-help="selForceAutoTarget">?</span></label><div class="zkss-sw ' + (tr.forceAutoTarget !== false ? 'on' : '') + '" id="zkss-forceauto"><i></i></div><span class="zkss-tip">中→英/英→中 自动判断</span></div>'
        +   '<div class="zkss-keys" id="zkss-keys">' + trKeysHtml(tr) + '</div>'
        +   '<div class="zkss-field"><label>CORS 代理前缀（可选，兜底）<span class="zk-set-help" data-help="selProxy">?</span></label><input type="text" class="zkss-proxy" value="' + escAttr(tr.proxyUrl || '') + '" placeholder="留空即可"></div>'
        +   '<div class="zk-set-row-desc zkss-note">引擎说明：iciba 免费免密钥，单词给音标/发音/释义，句子自动翻译；Google 免费；DeepL 句子质量最高（需密钥）；百度翻译中英互译好（需 AppID+密钥）；自定义支持 <code>{q}</code> <code>{tl}</code> <code>{key}</code> 占位符。</div>'
        + '</div>';

      const elist = root.querySelector('.zkss-elist');
      function rerenderElist() { elist.innerHTML = engineRowsHtml(); }
      function move(id, dir) {
        const sorted = [...engines].sort((a, b) => (a.order || 0) - (b.order || 0));
        const i = sorted.findIndex(x => x.id === id); if (i < 0) return;
        const j = i + dir; if (j < 0 || j >= sorted.length) return;
        const o = sorted[i].order; sorted[i].order = sorted[j].order; sorted[j].order = o;
        persist(); rerenderElist();
      }
      elist.addEventListener('click', e => {
        const row = e.target.closest('.zkss-erow'); if (!row) return;
        const id = row.dataset.id; const engine = engines.find(x => x.id === id); if (!engine) return;
        if (e.target.classList.contains('zkss-sw')) { engine.enabled = !engine.enabled; persist(); rerenderElist(); }
        else if (e.target.classList.contains('zkss-up')) move(id, -1);
        else if (e.target.classList.contains('zkss-dn')) move(id, 1);
        else if (e.target.classList.contains('zkss-del')) { (async () => { if (await zkConfirm('删除「' + engine.name + '」？此操作不可撤销。', { title: '删除搜索引擎', okText: '确定删除', danger: true })) { engines = engines.filter(x => x.id !== id); cfg.selSearchEngines = engines; persist(); rerenderElist(); } })(); }
        else if (e.target.classList.contains('zkss-localize') || e.target.classList.contains('zkss-fav')) doLocalizeIcon(row, engine, e.target.classList.contains('zkss-fav'));
      });
      function doLocalizeIcon(row, engine, fromFav) {
        let url = (engine.icon || '').trim();
        if (fromFav || !/^https?:\/\//i.test(url)) {
          const m = /https?:\/\/([^\/\s?#]+)/i.exec(engine.url || '');
          if (!m) { toast('请先填写搜索地址或图标图片网址'); return; }
          url = 'https://' + m[1] + '/favicon.ico';
        }
        toast('正在获取并本地化图标…');
        const btn = row.querySelector('.zkss-localize');
        if (btn) btn.disabled = true;
        localizeIcon(url).then(res => {
          if (btn) btn.disabled = false;
          const icoInput = row.querySelector('.zkss-ico');
          const prev = row.querySelector('.zkss-ico-prev');
          if (res.ok) {
            engine.icon = res.data;
            if (icoInput) icoInput.value = res.data;
            if (prev) prev.innerHTML = ssRenderIcon(res.data);
            persist();
            toast('图标已本地化（32px PNG 内联）');
          } else {
            // 降级：保留原始网址，不阻断使用
            engine.icon = url;
            if (icoInput) icoInput.value = url;
            if (prev) prev.innerHTML = ssRenderIcon(url);
            persist();
            toast('无法本地化（' + res.reason + '），已保留图片网址');
          }
        });
      }
      elist.addEventListener('input', e => {
        const row = e.target.closest('.zkss-erow'); if (!row) return;
        const id = row.dataset.id; const engine = engines.find(x => x.id === id); if (!engine) return;
        if (e.target.classList.contains('zkss-n')) engine.name = e.target.value;
        else if (e.target.classList.contains('zkss-u')) engine.url = e.target.value;
        else if (e.target.classList.contains('zkss-ico')) { engine.icon = e.target.value; row.querySelector('.zkss-ico-prev').innerHTML = ssRenderIcon(e.target.value); }
        persistLater();
      });
      root.querySelector('.zkss-add').onclick = () => {
        const maxOrder = engines.reduce((m, x) => Math.max(m, Number(x.order) || 0), 0);
        engines.push({ id: 'c' + Date.now(), name: '', icon: '', url: '', enabled: true, order: maxOrder + 1 });
        cfg.selSearchEngines = engines; persist(); rerenderElist();
        const rows = elist.querySelectorAll('.zkss-erow'); const last = rows[rows.length - 1];
        if (last) { last.scrollIntoView({ behavior: 'smooth', block: 'center' }); const inp = last.querySelector('.zkss-n'); if (inp) inp.focus(); }
      };
      root.querySelector('.zkss-reset').onclick = async () => {
        if (await zkConfirm('恢复默认搜索引擎？当前自定义将被覆盖', { title: '恢复默认引擎', okText: '确定恢复', danger: true })) { engines = JSON.parse(JSON.stringify(DEFAULT_SEL_ENGINES)); cfg.selSearchEngines = engines; persist(); rerenderElist(); toast('已恢复默认引擎'); }
      };
      root.querySelector('.zkss-mode').onchange = function () { theme.mode = this.value; persist(); applyThemeLive(theme); };
      root.querySelector('.zkss-opacity').oninput = function () { theme.opacity = parseFloat(this.value); root.querySelector('.zkss-val').textContent = Math.round(theme.opacity * 100) + '%'; persist(); applyThemeLive(theme); };
      root.querySelector('#zkss-glass').onclick = function () { theme.glass = !theme.glass; this.classList.toggle('on', theme.glass); persist(); applyThemeLive(theme); };
      const keysDiv = root.querySelector('#zkss-keys');
      function bindKeys(div) { div.querySelectorAll('input').forEach(inp => { inp.onchange = function () { if (inp.classList.contains('zkss-deepl')) tr.deeplKey = inp.value; else if (inp.classList.contains('zkss-bid')) tr.baiduId = inp.value; else if (inp.classList.contains('zkss-bkey')) tr.baiduKey = inp.value; else if (inp.classList.contains('zkss-curl')) tr.customUrl = inp.value; else if (inp.classList.contains('zkss-ckey')) tr.customKey = inp.value; persist(); }; }); }
      root.querySelector('.zkss-trengine').onchange = function () { tr.engine = this.value; persist(); keysDiv.innerHTML = trKeysHtml(tr); bindKeys(keysDiv); };
      root.querySelector('#zkss-auto').onclick = function () { tr.auto = !tr.auto; this.classList.toggle('on', tr.auto); persist(); };
      root.querySelector('.zkss-trtarget').onchange = function () { tr.target = this.value; persist(); };
      root.querySelector('#zkss-forceauto').onclick = function () { tr.forceAutoTarget = !this.classList.contains('on'); this.classList.toggle('on', tr.forceAutoTarget); persist(); };
      root.querySelector('.zkss-proxy').onchange = function () { tr.proxyUrl = this.value.trim(); persist(); };
      bindKeys(keysDiv);
    }

    // 列表值转义：名单内容来自用户输入，直接拼 innerHTML 会破坏结构（甚至注入标签）
    function escListVal(s) {
      return String(s == null ? '' : s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    // 列表渲染（v12.0.0：支持就地编辑 / 上移 / 下移 / 删除，且全部转义）
    function renderList(listKey) {
      const container = sr.querySelector(`.zk-set-list[data-list="${listKey}"] .zk-set-items`);
      if (!container) return;
      const arr = cfg[listKey] || [];
      if (!arr.length) {
        container.innerHTML = '<div class="zk-set-list-empty">（暂无条目）</div>';
        return;
      }
      container.innerHTML = arr.map((val, idx) =>
        `<div class="zk-set-list-item" data-idx="${idx}">` +
          `<span class="zk-set-list-val">${escListVal(val)}</span>` +
          `<span class="zk-set-list-ops">` +
            `<button type="button" class="zk-set-list-btn" data-act="edit" title="编辑">编辑</button>` +
            `<button type="button" class="zk-set-list-btn" data-act="up" title="上移">\u2191</button>` +
            `<button type="button" class="zk-set-list-btn" data-act="down" title="下移">\u2193</button>` +
            `<button type="button" class="zk-set-list-btn danger" data-act="del" title="删除">删除</button>` +
          `</span>` +
        `</div>`
      ).join('');
      container.querySelectorAll('.zk-set-list-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const item = btn.closest('.zk-set-list-item');
          if (!item) return;
          const idx = parseInt(item.getAttribute('data-idx'));
          const act = btn.getAttribute('data-act');
          const list = cfg[listKey] || [];
          if (act === 'del') {
            if (!(await zkConfirm('确定删除「' + list[idx] + '」？此操作不可撤销。', { title: '删除条目', okText: '确定删除', danger: true }))) return;
            list.splice(idx, 1);
            setConfig(cfg); renderList(listKey); toast('已删除', 'ok');
          } else if (act === 'up' && idx > 0) {
            const t = list[idx]; list[idx] = list[idx - 1]; list[idx - 1] = t;
            setConfig(cfg); renderList(listKey);
          } else if (act === 'down' && idx < list.length - 1) {
            const t = list[idx]; list[idx] = list[idx + 1]; list[idx + 1] = t;
            setConfig(cfg); renderList(listKey);
          } else if (act === 'edit') {
            startListEdit(item, idx, list[idx], listKey);
          }
        });
      });
    }

    // 就地编辑：文本 → 输入框，回车 / 「保存」提交，Esc 取消
    function startListEdit(item, idx, oldVal, listKey) {
      if (!item || item.classList.contains('editing')) return;
      item.classList.add('editing');
      const valEl = item.querySelector('.zk-set-list-val');
      const ops = item.querySelector('.zk-set-list-ops');
      const input = document.createElement('input');
      input.type = 'text'; input.className = 'zk-set-list-edit'; input.value = oldVal;
      valEl.replaceWith(input);
      const saveBtn = document.createElement('button');
      saveBtn.type = 'button'; saveBtn.className = 'zk-set-list-btn ok'; saveBtn.textContent = '保存';
      ops.insertBefore(saveBtn, ops.firstChild);
      input.focus(); input.select();
      let finished = false;
      // 写回配置（不重绘）。blur 时用它静默落盘，避免「点另一个条目编辑」因重绘丢失点击。
      const commit = () => {
        const v = input.value.trim();
        if (!v || v === oldVal) return false;
        const list = cfg[listKey] || [];
        const dup = list.indexOf(v);
        if (dup >= 0 && dup !== idx) { toast('已存在相同条目', 'err'); return false; }
        list[idx] = v; oldVal = v;
        setConfig(cfg);
        return true;
      };
      const finish = (save) => {
        if (finished) return; finished = true;
        const changed = save ? commit() : false;
        renderList(listKey);
        if (changed) toast('已保存', 'ok');
      };
      saveBtn.addEventListener('click', () => finish(true));
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); finish(true); }
        else if (e.key === 'Escape') { e.preventDefault(); finish(false); }
      });
      let blurTimer = null;
      input.addEventListener('blur', () => {
        if (blurTimer) { clearTimeout(blurTimer); }
        blurTimer = setTimeout(() => { blurTimer = null; commit(); }, 150);
      });
    }
    ['pingbiurl', 'pingbikw', 'whiteurl', 'scopeWhitelist', 'captchaWhitelist', 'captchaBlacklist', 'scriptBlacklist'].forEach(renderList);

    // 脚本启用站点黑名单：批量「导入预设敏感站点」/「清空黑名单」
    // v12.0.0：两个批量操作都是破坏性的（清空=整份名单失效），补二次确认与空操作识别。
    function blacklistHint(extra) {
      if (!cfg.baidu.scriptBlacklistEnabled) return extra + '（上方开关当前关闭，名单不会生效）';
      return extra + '（刷新页面后生效）';
    }
    const blBox = sr.querySelector('.zk-set-list[data-list="scriptBlacklist"]');
    if (blBox) {
      blBox.querySelectorAll('.zk-set-list-action-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const act = btn.getAttribute('data-action');
          if (act === 'import-preset') {
            const cur = cfg.scriptBlacklist || [];
            const add = SCRIPT_BLACKLIST_PRESET.filter(d => cur.indexOf(d) === -1);
            if (!add.length) { toast('预设敏感站点已全部在名单中', 'err'); return; }
            if (!(await zkConfirm('将导入 ' + add.length + ' 个预设敏感站点（银行/支付/政务/邮箱等）。\n导入后需开启上方开关才会生效。继续？', { title: '导入预设站点', okText: '确定导入' }))) return;
            const merged = Array.from(new Set([...SCRIPT_BLACKLIST_PRESET, ...cur])).slice(0, 999);
            cfg.scriptBlacklist = merged; setConfig(cfg); renderList('scriptBlacklist');
            toast(blacklistHint('已导入 ' + add.length + ' 个，共 ' + merged.length + ' 个'));
          } else if (act === 'clear') {
            const n = (cfg.scriptBlacklist || []).length;
            if (!n) { toast('黑名单已经是空的', 'err'); return; }
            if (!(await zkConfirm('确定清空黑名单（' + n + ' 个站点）？\n清空后脚本将在这些站点恢复运行。继续？', { title: '清空黑名单', okText: '确定清空', danger: true }))) return;
            cfg.scriptBlacklist = []; setConfig(cfg); renderList('scriptBlacklist');
            toast('已清空黑名单' + (cfg.baidu.scriptBlacklistEnabled ? '（刷新页面后生效）' : ''));
          }
        });
      });
    }

    // 列表添加
    sr.querySelectorAll('.zk-set-add').forEach(addBox => {
      const listKey = addBox.parentElement.getAttribute('data-list');
      const input = addBox.querySelector('input');
      const btn = addBox.querySelector('button');
      const doAdd = async () => {
        const v = input.value.trim();
        if (!v) return;
        if (listKey === 'pingbikw' && v.length < 2) { toast('关键词至少2个字', 'err'); return; }
        // 域名类名单允许短条目（与 scopeWhitelist 等保持一致），但 <4 字符几乎会命中大量站点，需二次确认
        const shortOk = (listKey === 'scopeWhitelist' || listKey === 'captchaWhitelist' || listKey === 'captchaBlacklist' || listKey === 'scriptBlacklist');
        if (listKey !== 'pingbikw' && !shortOk && v.length < 4) { toast('网址太短', 'err'); return; }
        if (shortOk && v.length < 4) {
          if (!(await zkConfirm('「' + v + '」太短：名单按「当前域名包含该字符串」匹配，过短的条目可能命中大量站点。确定添加？', { title: '过短条目确认', okText: '仍然添加', danger: true }))) return;
        }
        // 自杀式条目拦截：这条会命中当前正在配置的站点，且该名单一旦生效脚本即暂停
        if ((listKey === 'scriptBlacklist' || listKey === 'whiteurl') && HOST && HOST.includes(v) &&
            (listKey !== 'scriptBlacklist' || cfg.baidu.scriptBlacklistEnabled)) {
          if (!(await zkConfirm('「' + v + '」会命中当前站点 ' + HOST + '，保存并刷新后脚本将在本站暂停。\n（仍可通过油猴菜单「状态 / 恢复」一键解封）确定添加？', { title: '致命条目确认', okText: '确定添加', danger: true }))) return;
        }
        if (!cfg[listKey]) cfg[listKey] = [];
        cfg[listKey].unshift(v);
        cfg[listKey] = Array.from(new Set(cfg[listKey])).slice(0, 999);
        setConfig(cfg);
        input.value = '';
        renderList(listKey);
        toast('已添加：' + v);
      };
      btn.addEventListener('click', doAdd);
      input.addEventListener('keydown', e => { if (e.key === 'Enter') doAdd(); });
    });

    // 分类切换
    const cats = sr.querySelectorAll('.zk-set-cat');
    const sections = sr.querySelectorAll('.zk-set-section');
    // 设置项全局搜索过滤
    const searchInput = sr.querySelector('#zk-set-search');
    const searchClear = sr.querySelector('#zk-set-search-clear');
    // v12.0.0：列表条目（.zk-set-list-item）也纳入搜索范围 —— 之前搜「icbc」搜不到黑名单里的条目
    const NC_FILTER_ROWS = '.zk-set-row, .zkvd-row, .zk-about-li, .zk-set-list-item';
    function clearFilter() {
      searchInput.value = '';
      searchClear.classList.remove('show');
      sr.querySelectorAll(NC_FILTER_ROWS + ', .zk-set-group').forEach(el => el.style.removeProperty('display'));
      const note = sr.querySelector('#zk-set-search-note'); if (note) note.remove();
    }
    function applyFilter() {
      const q = (searchInput.value || '').trim().toLowerCase();
      searchClear.classList.toggle('show', !!searchInput.value);
      if (!q) { clearFilter(); const act = sr.querySelector('.zk-set-cat.active') || cats[0]; if (act) act.click(); return; }
      let total = 0;
      sections.forEach(s => {
        const rows = s.querySelectorAll(NC_FILTER_ROWS);
        let secVisible = 0;
        rows.forEach(r => {
          const hit = r.textContent.toLowerCase().indexOf(q) >= 0;
          r.style.display = hit ? '' : 'none';
          if (hit) secVisible++;
        });
        s.querySelectorAll('.zk-set-group').forEach(g => {
          const titleEl = g.querySelector('.zk-set-group-title-text') || g.querySelector('.zk-set-group-title');
          const titleHit = !!titleEl && titleEl.textContent.toLowerCase().indexOf(q) >= 0;
          // 列表卡片的说明文字也参与匹配（否则搜「敏感站点」只能靠条目命中，卡片本身被隐藏）
          // 注意：wrapGroupBodies 会把内容搬进 .zk-set-group-inner，不能用 :scope > 取。
          // 仅列表卡片有自带的 .zk-set-row-desc，且它在 DOM 中排在条目之前，querySelector 取到的就是它。
          const descEl = g.querySelector('.zk-set-list') ? g.querySelector('.zk-set-row-desc') : null;
          const descHit = !!descEl && descEl.textContent.toLowerCase().indexOf(q) >= 0;
          let vis = titleHit || descHit;
          g.querySelectorAll(NC_FILTER_ROWS).forEach(r => { if (r.style.display !== 'none') vis = true; });
          g.style.display = vis ? '' : 'none';
          if (titleHit) secVisible++;
        });
        if (secVisible) { s.classList.add('active'); total += secVisible; } else { s.classList.remove('active'); }
      });
      let note = sr.querySelector('#zk-set-search-note');
      if (!note) { note = document.createElement('div'); note.id = 'zk-set-search-note'; note.className = 'zk-set-search-note'; sr.querySelector('#zk-set-settings-body').prepend(note); }
      note.textContent = total ? ('匹配到 ' + total + ' 项，已展开相关分类') : '没有匹配的设置项';
    }
    searchInput.addEventListener('input', applyFilter);
    searchClear.addEventListener('click', () => { searchInput.value = ''; applyFilter(); searchInput.focus(); });
    cats.forEach(cat => {
      cat.addEventListener('click', () => {
        clearFilter();
        cats.forEach(c => c.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        cat.classList.add('active');
        const target = sr.querySelector(`.zk-set-section[data-section="${cat.getAttribute('data-cat')}"]`);
        if (target) target.classList.add('active');
        sr.querySelector('#zk-set-settings-header h2').textContent = cat.textContent.trim();
      });
    });
    cats[0].click();

    // ===== 分类拖拽重排（用户自定义菜单顺序，自动保存）=====
    (function enableCatDrag() {
      const sidebar = sr.querySelector('#zk-set-settings-sidebar');
      const bodyEl = sr.querySelector('#zk-set-settings-body');
      let dragEl = null;
      sr.querySelectorAll('.zk-set-cat').forEach(cat => {
        cat.setAttribute('draggable', 'true');
        cat.addEventListener('dragstart', () => {
          dragEl = cat;
          cat._startOrder = Array.from(sr.querySelectorAll('.zk-set-cat')).map(c => c.dataset.cat).join(',');
          setTimeout(() => cat.classList.add('dragging'), 0);
        });
        cat.addEventListener('dragend', () => {
          if (dragEl) dragEl.classList.remove('dragging');
          dragEl = null;
          const nowOrder = Array.from(sr.querySelectorAll('.zk-set-cat')).map(c => c.dataset.cat).join(',');
          if (cat._startOrder && cat._startOrder === nowOrder) return; // 顺序未变，不保存、不触发云上传
          saveCatOrder();
        });
      });
      sidebar.addEventListener('dragover', e => {
        e.preventDefault();
        if (!dragEl) return;
        const cats = Array.from(sr.querySelectorAll('.zk-set-cat'));
        let after = null;
        for (const c of cats) {
          const r = c.getBoundingClientRect();
          if (e.clientY < r.top + r.height / 2) { after = c; break; }
        }
        if (after === dragEl) return;
        if (after == null) sidebar.appendChild(dragEl);
        else sidebar.insertBefore(dragEl, after);
      });
      function saveCatOrder() {
        const order = Array.from(sr.querySelectorAll('.zk-set-cat')).map(c => c.dataset.cat);
        order.forEach(k => { const s = bodyEl.querySelector('[data-section="' + k + '"]'); if (s) bodyEl.appendChild(s); });
        const c = getConfig(); if (!c.ui) c.ui = {}; c.ui.catOrder = order; setConfig(c);
        toast('已保存菜单顺序');
      }
    })();

    // 帮助图标弹窗（带遮罩，点击外部关闭）
    const helpBackdrop = document.createElement('div');
    helpBackdrop.id = 'zk-set-help-backdrop';
    const helpPop = document.createElement('div');
    helpPop.id = 'zk-set-help-pop';
    helpBackdrop.appendChild(helpPop);
    sr.appendChild(helpBackdrop);

    function openHelp(key) {
      const data = HELP[key];
      if (!data) return;
      helpPop.innerHTML = `
        <div class="zk-set-help-head">${data.title || key}<button id="zk-set-help-close">&times;</button></div>
        <div class="zk-set-help-body">
          <div class="zk-set-help-sec"><h4>🎯 功能作用</h4><p>${data.effect || '-'}</p></div>
          <div class="zk-set-help-sec"><h4>⚙️ 实现原理</h4><p>${data.impl || '-'}</p></div>
          <div class="zk-set-help-sec"><h4>🔧 失效维护</h4><p>${data.maintain || '-'}</p></div>
          <div class="zk-set-help-sec"><h4>⚠️ 开关风险</h4><p>${data.risk || '-'}</p></div>
        </div>`;
      // 【i18n】点击 ? 弹窗是动态创建、在 tTree(sr) 之后渲染的，必须单独转繁
      //   头部的"功能作用/实现原理/失效维护/开关风险"是硬编码简中（保持中文按方案 C 约束），
      //   但用户既然要求"优化好繁体版"，这些标题/正文也一并转。
      try { tTree(helpPop); } catch (e) { dbg('[NetClean] helpPop tTree 失败', e); }
      helpBackdrop.classList.add('show');
      helpPop.querySelector('#zk-set-help-close').addEventListener('click', () => { helpBackdrop.classList.remove('show'); });
    }

    sr.querySelectorAll('.zk-set-help').forEach(icon => {
      icon.addEventListener('click', function(e) {
        e.stopPropagation();
        openHelp(this.getAttribute('data-help'));
      });
    });

    // 点击弹窗内容不关闭，点击遮罩背景关闭
    helpPop.addEventListener('click', e => { e.stopPropagation(); });
    helpBackdrop.addEventListener('click', () => { helpBackdrop.classList.remove('show'); });

    // 状态与通用操作函数（供底部状态栏及配置同步面板复用）
    function updatePauseUI() {
      const pauseBtn = sr.querySelector('.zkcs-pause');
      if (pauseBtn) {
        pauseBtn.textContent = BLOCKING_PAUSED ? '▶ 恢复全部' : '⏸ 暂停全部';
        pauseBtn.style.color = BLOCKING_PAUSED ? '#ff5252' : '';
      }
    }
    function updateStats() {
      const el = sr.querySelector('#zk-set-stats');
      if (el) {
        const site = siteBlocked[HOST] || 0;
        el.textContent = '本次 ' + STATS.skippedAds + ' · 累计 ' + totalBlocked + ' · 当前站点 ' + site;
      }
    }
    updatePauseUI();
    updateStats();
    const statsTimer = setInterval(updateStats, 2000);

    function doPauseToggle() {
      BLOCKING_PAUSED = !BLOCKING_PAUSED;
      updatePauseUI();
      toast(BLOCKING_PAUSED ? '⏸ 广告净化已全局暂停，刷新页面后生效' : '▶ 广告净化已恢复');
    }
    function doExport() {
      const blob = new Blob([JSON.stringify(cfg, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'ad-cleaner-config-v6.json'; a.click();
      URL.revokeObjectURL(url);
      toast('配置已导出');
    }
    async function doImport() {
      if (!(await zkConfirm('从文件导入会覆盖当前本地配置，确定继续？', { title: '导入配置', okText: '确定导入' }))) return;
      const inp = document.createElement('input');
      inp.type = 'file';
      inp.accept = '.json,application/json';
      inp.addEventListener('change', () => {
        const file = inp.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const imported = JSON.parse(reader.result);
            if (!imported.baidu) throw new Error('格式错误');
            setConfig(deepMerge(DEFAULT_CONFIG, imported));
            flushConfig();
            toast('导入成功，面板将刷新');
            setTimeout(() => { close(); openSettings(); }, 800);
          } catch(e) { toast('导入失败：' + e.message, 'err'); }
        };
        reader.readAsText(file);
      });
      inp.click();
    }
    async function doReset() {
      if (!(await zkConfirm('⚠️ 确定恢复全部默认设置？\n\n自定义过滤列表、白名单等也会被清空。此操作不可撤销。', { title: '恢复默认设置', okText: '确定重置', danger: true }))) return;
      setConfig(JSON.parse(JSON.stringify(DEFAULT_CONFIG)));
      flushConfig();
      toast('已恢复默认设置');
      setTimeout(() => { close(); openSettings(); }, 800);
    }
    function doResetOrder() {
      const c = getConfig(); if (c.ui) { delete c.ui.catOrder; setConfig(c); flushConfig(); }
      toast('已恢复默认菜单顺序');
      close(); openSettings();
    }

    // 关闭
    function close() { clearInterval(statsTimer); document.removeEventListener('click', onDocClick, true); box.remove(); if (_prevFocus && _prevFocus.focus) { try { _prevFocus.focus(); } catch (e) {} } }
    box._close = close; // 供全局 Esc 监听复用，避免重复注册 keydown 造成泄漏
    box._doPauseToggle = doPauseToggle;
    box._doExport = doExport;
    box._doImport = doImport;
    box._doReset = doReset;
    box._doResetOrder = doResetOrder;
    box._updatePauseUI = updatePauseUI;
    sr.querySelector('#zk-set-settings-close').addEventListener('click', close);
    // 透明化后宿主不再覆盖全屏，通过 document capture 监听点击面板外部关闭；延迟绑定以避免触发打开面板的当前点击事件立即关闭
    // 注意：云备份弹窗 #zk-bk-mgr、主题对话框 #zk-dlg 都挂在 document.body（本面板 box 的兄弟节点，不在 box 子树内）。
    // 若点这些浮层内部也被判定为"点击外部"→ 会误关刚打开的设置面板。因此命中我们自己的顶层浮层时忽略，不关闭。
    const ZK_KEEP_OPEN_IDS = ['zk-bk-mgr', 'zk-dlg', 'nc-modal'];
    function onDocClick(e) {
      if (!document.body.contains(box)) { document.removeEventListener('click', onDocClick, true); return; }
      const path = (e.composedPath && e.composedPath()) || [];
      for (let i = 0; i < path.length; i++) {
        const n = path[i];
        if (n && n.id && ZK_KEEP_OPEN_IDS.indexOf(n.id) >= 0) return; // 点在我们自己的顶层浮层内 → 不关设置面板
      }
      if (!path.includes(box)) close();
    }
    setTimeout(() => { if (document.body.contains(box)) document.addEventListener('click', onDocClick, true); }, 0);
    // 【i18n 方案 C】繁体模式：面板构建完成后把整棵子树的可见文本（含未进字典的
    //   菜单项标题/说明、分组名）统一转繁 —— 这正是「繁体不建第三份字典」的关键：
    //   新功能即使只写了简体中文，繁体模式下也会自动跟着转，永远不会漏翻。
    try { tTree(sr); } catch (e) { dbg('[NetClean] tTree 转换失败', e); }
  }

  /* ================================================================
   *  8. 注册 & 启动
   * ================================================================ */

  /* ================================================================
   *  验证码自动识别（可选模块，默认关闭）
   *  触发方式：manual=点按钮才扫（最省）/ whitelist=仅白名单站点自动 / global=全站常驻（最耗）
   *  配置读取主脚本 cfg.baidu.captcha*；识别规则/黑名单独立存储，避免污染主配置。
   * ================================================================ */
  function initCaptcha() {
    if (BLOCKING_PAUSED) return;
    const cap = () => getScriptCfg();
    if (!cap().captchaEnabled) return;
    (function () {
      const cGet = (k, d) => { try { const v = GM_getValue(k, null); return v == null ? d : v; } catch (e) { return d; } };
      const cSet = (k, v) => { try { GM_setValue(k, v); } catch (e) {} };
      const RULE_KEY = 'cat_rules';
      const getRules = () => cGet(RULE_KEY, {});
      const saveRules = (r) => cSet(RULE_KEY, r);
      const c$ = (s, r) => (r || document).querySelector(s);
      const c$$ = (s, r) => Array.from((r || document).querySelectorAll(s));
      const getStyle = (el) => (window.getComputedStyle ? window.getComputedStyle(el, null) : el.currentStyle);
      const cGetNum = (s) => { try { return Number(String(s).split('.')[0].replace(/[^0-9]/gi, '')) || 0; } catch (e) { return 0; } };
      const cIsVisible = (el) => { if (!el) return false; const s = getStyle(el); return s.display !== 'none' && s.visibility !== 'hidden' && cGetNum(s.width) > 0 && cGetNum(s.height) > 0; };
      // 识别接口地址由用户在「设置 → 验证码识别」中自行填写。
      // 本脚本【不内置任何第三方打码平台地址】：留空 = 对应引擎直接跳过，
      // 不会向任何外部服务器上传你的验证码图片或当前网址，规避隐私与合规风险。
      const _apiBase = (v) => String(v || '').trim().replace(/\/+$/, '');
      const API_FAST = () => _apiBase(cap().captchaApiFast);
      const API_PRECISE = () => _apiBase(cap().captchaApiPrecise);
      // like996 服务端会根据 postData.version 做版本校验，原 crab 脚本（@version 7.0）固定传 "7.0"，
      // 与本脚本自身版本号（VERSION）解耦，避免服务端误判"版本过低"。
      const LIKE996_API_VERSION = '7.0';
      const API_YUNMA = 'https://www.jfbym.com/api/YmServer/customApi';
      const YUNMA_DEV = '41acabfb0d980a24e6022e89f9c1bfa4';
      const cache = {};
      const cacheGet = (k) => { const v = cache[k]; if (v && v.exp > Date.now()) return v.val; return null; };
      const cacheSet = (k,  v, ttl) => { cache[k] = { val: v, exp: Date.now() + (ttl || 600000) }; };
      // 与原 crab 脚本一致的 DJB 哈希：把图片 base64 压成短串作为去重键，避免同一张图反复请求服务端
      function strHash(input) { let h = 5381; input = String(input || ''); for (let i = 0; i < input.length; i++) { h = ((h << 5) + h) + input.charCodeAt(i); } return (h >>> 0).toString(36); }
      const HINTS = ['code', 'captcha', 'yzm', 'check', 'random', 'veri', 'vcode', 'verify', 'yanzhengma', '验证码', '看不清', '换一张', 'login'];

      function topNotice(msg, dur) {
        dur = dur || 3500;
        const id = 'cat_topNotice';
        let div = document.getElementById(id);
        if (!div) {
          div = document.createElement('div');
          div.id = id;
          div.style.cssText = 'position:fixed;top:14px;left:50%;z-index:' + NC_Z_TOP + ';max-width:min(92vw,520px);padding:10px 20px;border-radius:999px;background:linear-gradient(135deg,rgba(22,119,255,.96),rgba(56,189,248,.96));color:#fff;display:flex;justify-content:center;align-items:center;font-family:-apple-system,"Microsoft YaHei",sans-serif;text-align:center;font-size:13px;font-weight:500;box-shadow:0 8px 28px rgba(22,119,255,.3),0 2px 8px rgba(15,23,42,.16);opacity:0;transform:translateX(-50%) translateY(-12px) scale(.96);transition:opacity .25s ease,transform .3s cubic-bezier(.25,.8,.25,1)';
          requestAnimationFrame(function () {
            div.style.opacity = '1';
            div.style.transform = 'translateX(-50%) translateY(0) scale(1)';
          });
          (document.body || document.documentElement).appendChild(div);
        }
        div.textContent = msg;
        clearTimeout(div._t);
        div._t = setTimeout(() => { if (div && div.parentNode) div.parentNode.removeChild(div); }, dur);
      }
      function attrHit(el) {
        const list = ['id', 'title', 'alt', 'name', 'className', 'src', 'placeholder'];
        for (const a of list) {
          const v = el.getAttribute ? el.getAttribute(a) : (el[a] || '');
          if (!v) continue;
          const s = String(v).toLowerCase();
          for (const h of HINTS) if (s.indexOf(h) !== -1) return true;
        }
        return false;
      }
      function isCodeLike(img) {
        if (!img || !cIsVisible(img)) return false;
        const s = getStyle(img);
        const w = cGetNum(s.width), h = cGetNum(s.height);
        if (h >= 100 || h === w) return false;
        return attrHit(img);
      }
      function isInputLike(inp) { return !!(inp && inp.tagName === 'INPUT' && attrHit(inp)); }

      function preprocessCanvas(srcCanvas) {
        try {
          const w = srcCanvas.width, h = srcCanvas.height;
          if (!w || !h) return srcCanvas;
          const c = document.createElement('canvas'); c.width = w; c.height = h;
          const ctx = c.getContext('2d'); ctx.drawImage(srcCanvas, 0, 0);
          const imgData = ctx.getImageData(0, 0, w, h); const d = imgData.data;
          // 灰度 + 自适应二值化（验证码字符通常比背景深）
          let totalGray = 0;
          const grays = new Float32Array(w * h);
          for (let i = 0, p = 0; i < d.length; i += 4, p++) {
            const gray = 0.299 * d[i] + 0.587 * d[i+1] + 0.114 * d[i+2];
            grays[p] = gray; totalGray += gray;
          }
          const meanGray = totalGray / (w * h);
          // 阈值取均值与 128 的较小值，保证浅色背景上的深色字符被保留
          const threshold = Math.min(128, meanGray * 0.85);
          for (let i = 0, p = 0; i < d.length; i += 4, p++) {
            const val = grays[p] < threshold ? 0 : 255;
            d[i] = d[i+1] = d[i+2] = val;
          }
          // 去孤立噪点：周围少于 3 个黑点的黑点视为噪点
          const get = (x, y) => { if (x < 0 || y < 0 || x >= w || y >= h) return 255; return d[(y*w+x)*4]; };
          let nd = new Uint8ClampedArray(d);
          for (let y = 1; y < h - 1; y++) {
            for (let x = 1; x < w - 1; x++) {
              const idx = (y*w+x)*4;
              if (d[idx] === 0) {
                let cnt = 0;
                for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (get(x+dx, y+dy) === 0) cnt++;
                if (cnt < 3) { nd[idx] = nd[idx+1] = nd[idx+2] = 255; }
              }
            }
          }
          // 第二次：去水平/垂直单像素干扰线（邻域纵向/横向黑像素极少时视为线噪声）
          for (let y = 2; y < h - 2; y++) {
            for (let x = 2; x < w - 2; x++) {
              const idx = (y*w+x)*4;
              if (nd[idx] === 0) {
                const vCnt = (nd[((y-1)*w+x)*4]===0?1:0) + (nd[((y+1)*w+x)*4]===0?1:0);
                const hCnt = (nd[(y*w+x-1)*4]===0?1:0) + (nd[(y*w+x+1)*4]===0?1:0);
                if (vCnt === 0 && hCnt === 0) { nd[idx] = nd[idx+1] = nd[idx+2] = 255; }
              }
            }
          }
          for (let i = 0; i < d.length; i++) d[i] = nd[i];
          ctx.putImageData(imgData, 0, 0);
          return c;
        } catch (e) { dbg('[NetClean] preprocessCanvas 失败：', e); return srcCanvas; }
      }
      function imgToBase64(img, opts) {
        opts = opts || {};
        return new Promise((resolve, reject) => {
          try {
            const tag = img.tagName.toLowerCase();
            if (tag === 'canvas') {
              const c = opts.preprocess ? preprocessCanvas(img) : img;
              dbg('[NetClean:img] imgToBase64 canvas preprocess=' + !!opts.preprocess);
              resolve(c.toDataURL('image/png').split(',')[1]); return;
            }
            const src = img.getAttribute('src');
            dbg('[NetClean:img] imgToBase64 tag=' + tag + ' src=' + (src && src.length > 80 ? src.slice(0, 80) + '...' : src) + ' size=' + (img.naturalWidth || img.width) + 'x' + (img.naturalHeight || img.height));
            if (src && src.indexOf('data:') === 0) { resolve(src.split(',')[1]); return; }
            if (src && (src.indexOf('http') === 0 || src.indexOf('//') === 0) && src.indexOf(window.location.host) === -1) {
              const abs = src.indexOf('//') === 0 ? window.location.protocol + src : src;
              GM_xmlhttpRequest({ url: abs, method: 'GET', responseType: 'blob',
                onload: (r) => { if (r.status !== 200) { reject('跨域拉取失败'); return; } const fr = new FileReader(); fr.onloadend = (e) => resolve(e.target.result.split(',')[1]); fr.readAsDataURL(r.response); },
                onerror: () => reject('跨域拉取异常') });
              return;
            }
            if (!img.width || !img.height) { reject('图片尺寸为 0'); return; }
            const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
            c.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
            const out = opts.preprocess ? preprocessCanvas(c) : c;
            resolve(out.toDataURL('image/png').split(',')[1]);
          } catch (e) { reject('图片转换异常：' + e.message); }
        });
      }
      const sleep = (ms) => new Promise(r => setTimeout(r, ms));
      function isGif(el) {
        if (!el || (el.tagName && el.tagName.toLowerCase() === 'canvas')) return false;
        const src = (el.getAttribute && el.getAttribute('src')) || '';
        if (src.indexOf('image/gif') !== -1) return true;
        if (/\.gif($|\?|#)/i.test(src)) return true;
        // Discuz! 验证码由 misc.php?mod=seccode 动态返回 image/gif，src 没有 .gif 后缀
        if (/misc\.php\?mod=seccode/i.test(src)) return true;
        const id = el.id || '';
        if (/^imgseccode_/i.test(id)) return true;
        return false;
      }
      // GIF 动画验证码（循环：部分帧是杂乱噪声、部分帧是清晰数字/字母）多帧采样 + 多数投票
      async function gifRecognize(img) {
        if (cap().captchaShowHint) topNotice('正在识别 GIF 验证码（多帧采样，请稍候）…', 8000);
        // 51kanong 等 Discuz 弹窗 GIF：前 1.5s 噪声 + 后 2.5s 清晰，共约 4s 循环。
        // 采样 22 帧 × 230ms ≈ 5.1s，确保覆盖一个完整循环并拿到多数清晰帧。
        const votes = {}; const SAMPLE = 22, GAP = 230;
        for (let i = 0; i < SAMPLE; i++) {
          try {
            const w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
            if (!w || !h) { await sleep(GAP); continue; }
            const c = document.createElement('canvas'); c.width = w; c.height = h;
            c.getContext('2d').drawImage(img, 0, 0, w, h);
            const code = c.toDataURL('image/png').split(',')[1];
            if (code) {
              const r = (await recognizeText(code, false) || '').trim();
              if (/^[A-Za-z0-9]{3,6}$/.test(r)) {
                const k = r.toUpperCase();
                votes[k] = (votes[k] || 0) + 1;
              }
            }
          } catch (e) {}
          await sleep(GAP);
        }
        let best = '', max = 0;
        for (const k in votes) if (votes[k] > max) { max = votes[k]; best = k; }
        if (best && cap().captchaShowHint) topNotice('GIF 识别结果：' + best + '（' + max + ' 帧一致）', 5000);
        return best;
      }
      let fast503Warned = false;
      function recFast(code) {
        return new Promise((resolve) => {
          const base = API_FAST();
          // 未填写接口地址：不向任何外部服务器发起请求，静默跳过（仅在调试模式记录）
          if (!base) { dbg('[NetClean:recFast] 未填写极速接口地址，已跳过（脚本不内置第三方打码平台）'); resolve(''); return; }
          GM_xmlhttpRequest({ method: 'POST', url: base + '/identify_GeneralCAPTCHA', data: JSON.stringify({ ImageBase64: String(code) }),
            headers: { 'Content-Type': 'application/json' }, responseType: 'json',
            onload: (r) => {
              dbg('[NetClean:recFast] recFast onload status=' + r.status + ' response=', r.response);
              if (r.status === 200 && r.response && r.response.result) resolve(r.response.result);
              else {
                if (r.status === 503 && !fast503Warned) { fast503Warned = true; topNotice('fast 接口服务暂不可用（503），建议填写 like996 识别码切换到 precise 接口', 6000); }
                else if (r.status !== 200 || (r.response && r.response.msg)) dbg('[NetClean:recFast] 无有效结果：status=' + r.status + ' msg=' + (r.response && r.response.msg ? r.response.msg : '空'));
                resolve('');
              }
            },
            onerror: (e) => {
              const detail = e && typeof e === 'object' ? JSON.stringify({ status: e.status, statusText: e.statusText, error: e.error, response: e.responseText || e.response, readyState: e.readyState, finalUrl: e.finalUrl }) : String(e);
              dbg('[NetClean:recFast] 请求异常：', e, detail);
              resolve('');
            } });
        });
      }
      function recPrecise(postData) {
        return new Promise((resolve) => {
          const base = API_PRECISE();
          // 未填写接口地址：不向任何外部服务器发起请求，静默跳过（仅在调试模式记录）
          if (!base) { dbg('[NetClean:recPrecise] 未填写精准接口地址，已跳过（脚本不内置第三方打码平台）'); resolve(null); return; }
          postData.idCard = cap().captchaPreciseId || '';
          postData.version = LIKE996_API_VERSION;
          // 注意：请求会带上你的识别码 idCard 与当前页面网址（header path）。
          // 该地址由你自行填写，请确认对方可信后再启用。
          GM_xmlhttpRequest({ method: 'POST', url: base + '/hello', data: JSON.stringify(postData),
            headers: { 'Content-Type': 'application/json; charset=UTF-8', 'path': window.location.href }, responseType: 'json',
            onload: (r) => {
              const d = r.response || {};
              // like996 成功时返回 code=200，同时 description 可能附带版本警告/升级链接
              const isSuccess = d.valid === true || d.code === 200 || (d.data && !d.msg);
              if (isSuccess) {
                const desc = String(d.description || '');
                if (desc && /版本过低|停止使用|请升级|请更新|升级地址/.test(desc)) {
                  const linkMatch = desc.match(/href=["']([^"']+)["']/);
                  const link = linkMatch ? linkMatch[1] : '';
                  dbg('[NetClean:recPrecise] 服务端返回版本过低警告：', desc);
                  if (cap().captchaShowHint) topNotice('like996 提示：' + (link ? '当前版本过低，请升级 ' + link : desc), 8000);
                }
                resolve(d); return;
              }
              const err = d.description || d.msg || (r.status !== 200 ? 'HTTP ' + r.status : '接口返回无效');
              // 脱敏后再打印：图片 base64 截断，识别码/令牌一律掩码，避免敏感信息落到控制台
              dbg('[NetClean:recPrecise] 识别失败：', err, 'postData=', JSON.parse(JSON.stringify(postData, (k, v) => (k === 'img' || k === 'big_image' || k === 'small_image') ? (v && v.length > 20 ? v.slice(0, 20) + '...' : v) : (k === 'idCard' || k === 'token' || k === 'id_card') ? (v ? String(v).slice(0, 4) + '****' : v) : v)));
              if (err && cap().captchaShowHint) topNotice('识别错误：' + err, 5000);
              resolve(null);
            },
            onerror: (e) => { dbg('[NetClean:recPrecise] 请求异常：', e); resolve(null); } });
        });
      }
      function recMath(code) {
        return new Promise((resolve) => {
          const token = (cap().captchaYunmaToken || '').replace(/\+/g, '%2B');
          if (!token) { topNotice('算术验证码请先填写云码 Token'); resolve(''); return; }
          GM_xmlhttpRequest({ method: 'POST', url: API_YUNMA, data: JSON.stringify({ image: String(code), type: '50100', token: token, developer_tag: YUNMA_DEV }),
            headers: { 'Content-Type': 'application/json' }, responseType: 'json',
            onload: (r) => { const d = r.response || {}; if (d.msg === '识别成功' && d.data && d.data.data) resolve(String(d.data.data));
              else if (d.msg === '余额不足') { topNotice('云码积分不足，请自行充值'); resolve(''); } else { topNotice('请检查云码 Token 是否正确'); resolve(''); } },
            onerror: () => resolve('') });
        });
      }
      async function recognizeText(code, isMath) {
        const eng = cap().captchaEngine;
        // 与原 crab 脚本一致的「识别结果缓存」：同一张图的 base64 在 TTL 内只请求服务端一次，避免自动查找反复触发 OCR 请求导致识别码被封
        const cacheKey = 'RT_' + strHash((code || '') + '|' + eng + '|' + (isMath ? 1 : 0));
        const cached = cacheGet(cacheKey);
        if (cached !== null) { dbg('[NetClean:ocr] recognizeText 命中本地缓存：', cached); return cached; }
        dbg('[NetClean:ocr] recognizeText isMath=' + isMath + ' engine=' + eng + ' preciseId=' + (cap().captchaPreciseId || '(空)') + ' codeLen=' + (code ? code.length : 0));
        let ans = '';
        if (isMath) { const m = await recMath(code); dbg('[NetClean:recMath] recMath result=', m); if (m) { ans = m; } }
        if (!ans) {
          if (eng === 'fast' || eng === 'auto') { const r = await recFast(code); dbg('[NetClean:recFast] recFast result=', r); if (r) { ans = r; } }
        }
        if (!ans && (eng === 'precise' || eng === 'auto')) {
          if (!cap().captchaPreciseId) {
            if (eng === 'precise') topNotice('未设置 like996 识别码，请到设置填写');
            else if (eng === 'auto') dbg('[NetClean:ocr] auto 模式 fast 未识别，未配置 precise 识别码，跳过 precise');
          } else {
            const d = await recPrecise({ img: code, ocr_type: 1 });
            dbg('[NetClean:recPrecise] recPrecise result=', d);
            if (d && d.data) { ans = d.data; }
          }
        }
        if (ans) cacheSet(cacheKey, ans, 600000);
        return ans;
      }
      function writeCode(ans, input) {
        ans = String(ans).replace(/\s+/g, '');
        if (!input) return;
        input.value = ans;
        if (typeof InputEvent !== 'undefined') {
          input.dispatchEvent(new InputEvent('input', { bubbles: true }));
          ['input', 'change', 'focus', 'keypress', 'keyup', 'keydown', 'select'].forEach(ev => { const e = document.createEvent('HTMLEvents'); e.initEvent(ev, true, true); input.dispatchEvent(e); });
          const names = Object.keys(input);
          for (const n of names) { const o = input[n]; if (o && typeof o === 'object') { for (const f of Object.keys(o)) { if (f.toLowerCase().endsWith('change')) { try { o[f](new Event('change')); } catch (e) {} } } } }
          input.value = ans;
        } else if (typeof KeyboardEvent !== 'undefined') { input.dispatchEvent(new KeyboardEvent('input')); }
      }
      function urlKey() { return window.location.href.split('?')[0]; }
      function findInputNear(img) {
        let p = img.parentNode;
        for (let i = 0; i < 4 && p; i++) {
          const ins = c$$('input', p).filter(x => cGetNum(getStyle(x).width) > 50 && x.getAttribute('type') !== 'password');
          if (ins.length) return ins[ins.length - 1];
          p = p.parentNode;
        }
        return null;
      }
      function autoFind() {
        // Discuz! 弹窗验证码：img[id^="imgseccode_"] + input[name="seccodeverify"]
        // 这类弹窗在点击登录后动态插入，且验证码为 GIF 动画，优先处理
        const discuzImgs = c$$('img[id^="imgseccode_"]').filter(cIsVisible);
        for (const img of discuzImgs) {
          const input = c$('input[name="seccodeverify"]') || findInputNear(img);
          if (input && cIsVisible(input)) return { img, input, type: 'img', discuz: true };
        }
        const imgs = c$$('img, canvas').filter(isCodeLike);
        for (const img of imgs) { const input = findInputNear(img); if (input) return { img, input, type: img.tagName.toLowerCase() === 'canvas' ? 'canvas' : 'img' }; }
        const divs = c$$('div').filter(d => { if (!cIsVisible(d)) return false; const bg = getStyle(d).backgroundImage; return bg && bg !== 'none' && attrHit(d) && cGetNum(getStyle(d).width) > 30 && cGetNum(getStyle(d).width) < 150; });
        for (const d of divs) { const input = findInputNear(d); if (input) return { img: d, input, type: 'div' }; }
        return null;
      }
      const gifCache = {};
      // 图片哈希去重缓存（#118）：同一张验证码图（base64 完全相同）在 TTL 内直接复用识别结果，
      // 避免对同一图片向识别接口高频重复请求导致封禁。跨目标/跨次加载均生效；默认 5 分钟过期。
      const _recCache = Object.create(null);
      const _REC_TTL = 5 * 60 * 1000;
      function recCacheGet(code) {
        const e = _recCache[code];
        if (e && Date.now() - e.t < _REC_TTL) return e.ans;
        if (e) delete _recCache[code];
        return null;
      }
      function recCacheSet(code, ans) { if (ans != null) _recCache[code] = { ans: ans, t: Date.now() }; }
      async function recognizeCached(code, isMath) {
        const cached = recCacheGet(code);
        if (cached != null) { if (cap().captchaShowHint) topNotice('复用已识别结果（防重复请求）', 1500); return cached; }
        const ans = await recognizeText(code, isMath);
        recCacheSet(code, ans);
        return ans;
      }
      async function processOne(target) {
        try {
          const isMath = !!target.math;
          let ans;
          const maybeGif = (isGif(target.img) || target.discuz) && !isMath;
          if (maybeGif) {
            // 很多 Discuz 弹窗实际返回的是静态图（或单帧），先尝试静态识别一次；失败再走 GIF 多帧采样兜底
            try {
              const code = await imgToBase64(target.img);
              if (code) {
                const prev = target._last; if (prev && prev === code) { if (cap().captchaShowHint) topNotice('验证码未变化，跳过重复识别', 2000); return; }
                target._last = code;
                ans = await recognizeCached(code, isMath);
                if (ans && cap().captchaShowHint) topNotice('已静态识别：' + ans, 2000);
              }
            } catch (e) { dbg('[NetClean] 静态识别尝试失败：', e); }
            if (!ans) {
              const key = target.img.src || genSelector(target.img) || 'g';
              const now = Date.now();
              if (gifCache[key] && now - gifCache[key].t < 30000 && gifCache[key].ans) {
                ans = gifCache[key].ans;
              } else {
                ans = await gifRecognize(target.img);
                if (ans) gifCache[key] = { ans, t: now };
              }
            }
          } else {
            // canvas 标签大概率是程序生成的干扰验证码，优先使用预处理后的图片识别
            const isCanvas = target.img.tagName.toLowerCase() === 'canvas';
            let code = '';
            try {
              code = await imgToBase64(target.img, { preprocess: true });
            } catch (e) { dbg('[NetClean] imgToBase64 失败：', e); }
            if (!code) { dbg('[NetClean] imgToBase64 返回空'); return; }
            const prev = target._last; if (prev && prev === code) return;
            target._last = code;
            ans = await recognizeCached(code, isMath);
            // 预处理失败（canvas 或 img）时，回退原图再试一次
            if (!ans) {
              try {
                const code2 = await imgToBase64(target.img);
                if (code2 && code2 !== code) {
                  dbg('[NetClean:ocr] 预处理识别失败，尝试原图识别');
                  ans = await recognizeText(code2, isMath);
                }
              } catch (e) { dbg('[NetClean] 原图重试失败：', e); }
            }
          }
          if (ans) writeCode(ans, target.input);
          else dbg('[NetClean] 未识别出结果：img=', target.img, 'input=', target.input, 'target=', target);
        } catch (e) { dbg('[NetClean] processOne 异常：', e); }
      }
      async function slideSolve(rule) {
        const { big_image, small_image, move_item } = rule;
        const big = c$(big_image), small = c$(small_image), move = c$(move_item);
        if (!big || !small || !move || !cIsVisible(big) || !cIsVisible(small) || !cIsVisible(move)) return;
        const bigB64 = await imgToBase64(big), smallB64 = await imgToBase64(small);
        if (!bigB64 || !smallB64) return;
        const hash = 'slide_' + (bigB64.length + '_' + smallB64.length);
        if (cacheGet(hash)) return; cacheSet(hash, 1, 3600000);
        const d = await recPrecise({ big_image: bigB64, small_image: smallB64, big_image_width: cGetNum(getStyle(big).width), small_image_width: cGetNum(getStyle(small).width), ocr_type: 4 });
        if (d && d.data) moveSlider(move, cGetNum(d.data) + 5);
      }
      function moveSlider(btn, distance) {
        if (!distance) return;
        const rect = btn.getBoundingClientRect();
        const clientX = rect.x + rect.width / 2 - 2, clientY = rect.y + rect.height / 2 - 2;
        btn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window, clientX, clientY, screenX: clientX, screenY: clientY }));
        let dx = 0, side = 0;
        (function step() {
          if (side++ > 60) { finishSlide(btn, clientX + dx, clientY); return; }
          const temp = 5 + Math.random();
          const residue = distance - dx;
          const run = residue > distance / 2 ? 30 : residue > distance / 4 ? 120 : 220;
          dx += temp; const _x = clientX + dx, _y = clientY - 1;
          if (residue <= 0) { finishSlide(btn, _x, _y); return; }
          btn.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, cancelable: true, view: window, clientX: _x, clientY: _y, screenX: _x, screenY: _y }));
          setTimeout(step, run);
        })();
      }
      function finishSlide(btn, x, y) { setTimeout(() => btn.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window, clientX: x, clientY: y, screenX: x, screenY: y })), 200 + Math.random() * 400); }
      function slideBehaviorSolve(rule) {
        const move = c$(rule.move_item);
        if (!move || !cIsVisible(move)) return;
        const w = cGetNum(getStyle(move.parentNode).width);
        if (!w) return;
        const hash = 'sb_' + w; if (cacheGet(hash)) return; cacheSet(hash, 1, 60000);
        recPrecise({ ocr_type: 5, small_image_width: w, salt: Date.now() }).then(d => { if (d && d.data) moveSlider(move, cGetNum(d.data) + 5); });
      }
      // 兼容旧版保存的 Discuz 动态 id 规则（如 #imgseccode_SaL5j）
      function resolveImg(rule) {
        if (!rule) return null;
        if (rule.type === 'canvas') return document.querySelectorAll('canvas')[rule.imgIndex] || null;
        let img = c$(rule.img);
        if (!img && rule.img && /^#imgseccode_[A-Za-z0-9]+$/i.test(rule.img)) {
          img = c$('[id^="imgseccode_"]');
        }
        return img;
      }
      let lastRun = 0;
      function tick() {
        if (!cap().captchaEnabled) return;
        const now = Date.now(); if (now - lastRun < 400) return; lastRun = now;
        try {
          const rules = getRules(); const key = urlKey();
          if (rules[key]) {
            const r = rules[key];
            if (r.type === 'img' || r.type === 'canvas' || r.type === 'div') {
              const img = resolveImg(r);
              const input = c$(r.input) || document.querySelectorAll('input')[r.inputIndex];
              if (img && input) processOne({ img, input, math: r.math, discuz: r.discuz || /^imgseccode_/i.test(img.id || '') });
            } else if (r.type === 'slide') { if (cap().captchaSlide) slideSolve(r); }
            else if (r.type === 'slideBehavior') { if (cap().captchaSlide) slideBehaviorSolve(r); }
          } else if (cap().captchaAutoFind) {
            const found = autoFind(); if (found) processOne(found);
          }
        } catch (e) {}
      }
      // 手动强识别：优先用当前页规则，其次 Discuz 弹窗特征，再次自动查找；带结果反馈
      async function forceRecognize() {
        if (!cap().captchaEnabled) { topNotice('验证码识别未开启（请先在设置开启）', 4000); return; }
        topNotice('正在识别当前页验证码…', 4000);
        let target = null;
        const rules = getRules(); const key = urlKey();
        if (rules[key]) {
          const r = rules[key];
          if (r.type === 'slide') { if (cap().captchaSlide) { await slideSolve(r); topNotice('已尝试滑动识别'); } return; }
          if (r.type === 'slideBehavior') { if (cap().captchaSlide) { await slideBehaviorSolve(r); topNotice('已尝试滑块识别'); } return; }
          const img = resolveImg(r);
          const input = c$(r.input) || document.querySelectorAll('input')[r.inputIndex];
          if (img && input) target = { img, input, math: r.math, discuz: r.discuz || /^imgseccode_/i.test(img.id || '') };
        }
        if (!target) {
          const dImg = c$('[id^="imgseccode_"]');
          if (dImg) {
            const modal = dImg.closest('.ivu-modal') || dImg.closest('[class*="modal"]');
            const dInput = modal ? modal.querySelector('input') : (c$('input[name="seccodeverify"]') || c$('input'));
            if (dInput) target = { img: dImg, input: dInput, discuz: true };
          }
        }
        if (!target && cap().captchaAutoFind) {
          const found = autoFind(); if (found) target = found;
        }
        if (!target) { topNotice('未找到验证码图片：请先打开验证码弹窗，或「手动加规则」', 5000); return; }
        try {
          await processOne(target);
          const v = target.input && target.input.value ? target.input.value : '';
          dbg('[NetClean:ocr] 识别结束 input.value=', v);
          if (v) topNotice('已识别并填入：' + v, 5000);
          else {
            const isFile = window.location.protocol === 'file:';
            const msg = isFile
              ? '未识别出结果：当前是 file:// 本地文件，浏览器安全策略可能阻止了向识别接口发请求。建议把测试页放到本地 http 服务器（python -m http.server）或用 https 站点测试。'
              : '未识别出结果：fast 接口返回空或服务不可用（503）/ precise 识别码未设置。请在设置填写 like996 识别码切换到 precise 接口，或检查 identify_GeneralCAPTCHA 的 Network 返回。';
            topNotice(msg, 7000);
          }
        } catch (err) {
          dbg('[NetClean] forceRecognize 识别异常：', err);
          topNotice('识别过程异常：' + (err && err.message ? err.message : String(err)), 5000);
        }
      }
      let moTimer = null;
      function observe() {
        // 复用统一管理器：与 startObserver / 优酷 / 腾讯视频共享同一 body observer
        ncObserve(document.body || document.documentElement, function () { if (moTimer) return; moTimer = setTimeout(() => { moTimer = null; tick(); }, 300); }, { childList: true, subtree: true });
      }
      function inBlacklist() { const url = window.location.href; return (getConfig().captchaBlacklist || []).some(s => s && url.indexOf(s) !== -1); }
      function indexOfEl(tag, el) { return Array.from(document.querySelectorAll(tag)).indexOf(el); }
      // 判断 id 是否为动态 token（如 imgseccode_SaL5j、verifyImg_7a3B），避免保存会失效的精确 id
      function looksDynamicId(id) {
        if (!id) return false;
        const m = String(id).match(/^(.+_)([A-Za-z0-9]+)$/);
        if (!m) return false;
        const suffix = m[2];
        return suffix.length >= 4 && /[A-Za-z]/.test(suffix) && /[0-9]/.test(suffix);
      }
      function genSelector(el) {
        if (el.id) {
          if (looksDynamicId(el.id)) {
            const prefix = el.id.replace(/^(.+_)[A-Za-z0-9]+$/, '$1');
            return '[id^="' + prefix + '"]'; // 如 [id^="imgseccode_"]
          }
          return '#' + el.id;
        }
        if (el.name) { const s = el.tagName.toLowerCase() + "[name='" + el.name + "']"; if (c$(s)) return s; }
        let path = [], node = el;
        while (node && node.nodeType === 1 && path.length < 6) {
          let sel = node.nodeName.toLowerCase();
          if (node.id) { sel += '#' + node.id; path.unshift(sel); break; }
          const cls = node.className && typeof node.className === 'string' ? node.className.trim().split(/\s+/)[0] : '';
          if (cls) sel += '.' + cls;
          path.unshift(sel); node = node.parentNode;
        }
        return path.join(' > ');
      }
      function addRuleManually() {
        topNotice('请右键点击验证码图片（或滑块大图）', 20000);
        const onCtx = async (e) => {
          if (e.button !== 2) return; e.preventDefault(); document.removeEventListener('contextmenu', onCtx, true);
          const img = e.target;
          // 用 zkConfirm 替代原生 confirm。正文用「文字类/滑动类」与按钮 oktText/cancelText 对齐
          const isText = await zkConfirm('请选择该验证码的类型：\n【文字类】数字 / 字母 / 算术验证码（需要填字）\n【滑动类】滑动拼图 / 滑块行为验证码', { title: '验证码类型', okText: '文字类', cancelText: '滑动类' });
          if (!isText) { setupSlideRule(img); return; }
          topNotice('请左键点击验证码输入框', 20000);
          const onClick = async (ev) => {
            ev.preventDefault(); document.removeEventListener('click', onClick, true);
            const input = ev.target;
            if (input.tagName !== 'INPUT') { topNotice('请点击 INPUT 输入框'); addRuleManually(); return; }
            // 用 zkConfirm 替代原生 confirm。正文用「算术/数英」与按钮 oktText/cancelText 对齐
            const isMath = await zkConfirm('请选择该验证码的子类：\n【算术】算术题（需云码 Token 识别）\n【数英】纯数字 / 字母（本地识别）', { title: '验证码子类', okText: '算术', cancelText: '数英' });
            const rules = getRules();
            const isDiscuz = /^imgseccode_/i.test(img.id || '');
            rules[urlKey()] = { type: img.tagName.toLowerCase() === 'canvas' ? 'canvas' : 'img', img: genSelector(img), input: genSelector(input), imgIndex: indexOfEl('canvas', img), inputIndex: indexOfEl('input', input), math: isMath, discuz: isDiscuz };
            saveRules(rules); topNotice('规则已保存，刷新后生效'); tick();
          };
          document.addEventListener('click', onClick, true);
        };
        document.addEventListener('contextmenu', onCtx, true);
      }
      function setupSlideRule(bigImg) {
        topNotice('滑动类：请右键点击小图', 15000);
        const onCtx = (e) => {
          if (e.button !== 2) return; e.preventDefault(); document.removeEventListener('contextmenu', onCtx, true);
          const small = e.target;
          topNotice('滑动类：请右键点击滑块', 15000);
          const onCtx2 = (e2) => {
            if (e2.button !== 2) return; e2.preventDefault(); document.removeEventListener('contextmenu', onCtx2, true);
            const move = e2.target; const rules = getRules();
            const behavior = small.tagName === 'DIV' || cGetNum(getStyle(small).width) < 60;
            rules[urlKey()] = behavior ? { type: 'slideBehavior', move_item: genSelector(move) } : { type: 'slide', big_image: genSelector(bigImg), small_image: genSelector(small), move_item: genSelector(move) };
            saveRules(rules); topNotice('滑动规则已保存');
            if (cap().captchaSlide) (behavior ? slideBehaviorSolve(rules[urlKey()]) : slideSolve(rules[urlKey()]));
          };
          document.addEventListener('contextmenu', onCtx2, true);
        };
        document.addEventListener('contextmenu', onCtx, true);
      }
      function delRule() {
        const rules = getRules(); const k = urlKey();
        if (rules[k]) { delete rules[k]; saveRules(rules); topNotice('当前页面规则已删除，刷新后生效'); } else topNotice('当前页面无规则');
      }
      function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
      }
      function createThemedModal(title, bodyHtml, width) {
        // 防御性去重：防止重复创建导致同一 id DOMException；同时避免旧 host 被遗弃导致 listener 难回收
        const existing = document.getElementById('nc-modal');
        if (existing) { try { existing.remove(); } catch (e) {} }
        const host = document.createElement('div');
        host.id = 'nc-modal';
        host.style.cssText = 'position:fixed;inset:0;z-index:' + NC_Z_TOP + ';display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.45);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;';
        const sr = host.attachShadow({ mode: 'open' });
        sr.innerHTML = `
          <style>
            *{box-sizing:border-box}
            .nc-modal-wrap{width:${width || '520px'};max-width:94vw;max-height:86vh;display:flex;flex-direction:column;background:rgba(255,255,255,.98);border-radius:16px;box-shadow:0 24px 80px rgba(0,0,0,.35),0 0 0 1px rgba(255,255,255,.2) inset;border:1px solid rgba(255,255,255,.15);animation:ncModalIn .25s ease;pointer-events:auto}
            .nc-modal-head{padding:14px 18px;background:linear-gradient(90deg,#0f172a,#1e293b);color:#fff;font-weight:700;font-size:15px;display:flex;justify-content:space-between;align-items:center;border-radius:16px 16px 0 0}
            .nc-modal-head span{letter-spacing:-.2px}
            .nc-modal-close{width:28px;height:28px;border:none;background:rgba(255,255,255,.15);color:#fff;border-radius:50%;cursor:pointer;font-size:18px;line-height:28px;display:flex;align-items:center;justify-content:center;transition:all .2s}
            .nc-modal-close:hover{background:rgba(255,255,255,.28);transform:rotate(90deg)}
            .nc-modal-body{padding:18px;overflow-y:auto;color:#1e293b}
            .nc-modal-foot{padding:14px 18px;border-top:1px solid #e2e8f0;display:flex;justify-content:flex-end;gap:10px;background:#f8fafc;border-radius:0 0 16px 16px}
            .nc-btn{border:none;padding:8px 16px;border-radius:8px;cursor:pointer;font-size:13px;font-weight:500;transition:all .2s}
            .nc-btn.primary{background:linear-gradient(90deg,#1677ff,#38bdf8);color:#fff;box-shadow:0 2px 8px rgba(22,119,255,.25)}
            .nc-btn.primary:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(22,119,255,.35)}
            .nc-btn.secondary{background:#fff;color:#475569;border:1px solid #cbd5e1}
            .nc-btn.secondary:hover{background:#f8fafc;border-color:#94a3b8}
            .nc-btn.danger{background:transparent;color:#ef4444;border:1px solid #fecaca}
            .nc-btn.danger:hover{background:#fef2f2}
            @keyframes ncModalIn{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
            @media (prefers-reduced-motion: reduce){.nc-modal-wrap{animation:none!important;transition:none!important}}
            .nc-empty{text-align:center;color:#94a3b8;font-size:13px;padding:22px 0}
          </style>
          <div class="nc-modal-wrap" role="dialog" aria-modal="true">
            <div class="nc-modal-head"><span>${escapeHtml(title)}</span><button class="nc-modal-close" title="关闭" aria-label="关闭">&times;</button></div>
            <div class="nc-modal-body">${bodyHtml}</div>
          </div>
        `;
        document.body.appendChild(host);
        function close() { document.removeEventListener('keydown', onKey); host.remove(); }
        sr.querySelector('.nc-modal-close').onclick = close;
        host.addEventListener('click', e => { if (e.target === host) close(); });
        function onKey(e) { if (e.key === 'Escape') close(); }
        document.addEventListener('keydown', onKey);
        return { host, sr, close };
      }
      function showPromptModal(message, defaultValue) {
        return new Promise(resolve => {
          let resolved = false;
          const { sr, host, close } = createThemedModal('添加黑名单', '', '420px');
          const body = sr.querySelector('.nc-modal-body');
          body.innerHTML = `<p style="margin:0 0 12px;font-size:13px;color:#475569;line-height:1.6">${escapeHtml(message)}</p>
            <input type="text" class="nc-prompt-inp" value="${escapeHtml(defaultValue || '')}" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:8px;font-size:13px;outline:none;color:#1e293b;transition:all .2s" placeholder="输入网址片段">`;
          const foot = document.createElement('div'); foot.className = 'nc-modal-foot';
          foot.innerHTML = '<button class="nc-btn primary" data-act="ok">添加规则</button><button class="nc-btn secondary" data-act="cancel">放弃</button>';
          sr.querySelector('.nc-modal-wrap').appendChild(foot);
          const inp = sr.querySelector('.nc-prompt-inp');
          inp.focus(); inp.select();
          inp.addEventListener('focus', () => { inp.style.borderColor = '#1677ff'; inp.style.boxShadow = '0 0 0 3px rgba(22,119,255,.1)'; });
          inp.addEventListener('blur', () => { inp.style.borderColor = '#cbd5e1'; inp.style.boxShadow = 'none'; });
          function done(v) { if (resolved) return; resolved = true; close(); resolve(v); }
          sr.querySelector('[data-act="ok"]').onclick = () => done(inp.value.trim() || null);
          sr.querySelector('[data-act="cancel"]').onclick = () => done(null);
          inp.addEventListener('keydown', e => { if (e.key === 'Enter') sr.querySelector('[data-act="ok"]').click(); if (e.key === 'Escape') sr.querySelector('[data-act="cancel"]').click(); });
          host.addEventListener('click', e => { if (e.target === host) done(null); });
        });
      }
      function manageBlacklist() {
        const list = (getConfig().captchaBlacklist || []).slice();
        const { sr, host, close } = createThemedModal('验证码识别黑名单', '', '620px');
        const wrap = sr.querySelector('.nc-modal-body');
        const foot = document.createElement('div'); foot.className = 'nc-modal-foot';
        foot.innerHTML = '<button class="nc-btn primary" id="nc-bl-add" title="添加新的跳过规则">➕ 添加</button>';
        sr.querySelector('.nc-modal-wrap').appendChild(foot);
        const CSS = `<style>
          .nc-bl-table{width:100%;border-collapse:separate;border-spacing:0;font-size:13px}
          .nc-bl-table th{padding:10px 12px;background:#f1f5f9;color:#475569;font-weight:600;text-align:left;border-bottom:1px solid #e2e8f0}
          .nc-bl-table th:last-child{width:90px;text-align:center}
          .nc-bl-table td{padding:10px 12px;border-bottom:1px solid #f1f5f9;color:#1e293b;word-break:break-all}
          .nc-bl-table tr:last-child td{border-bottom:none}
          .nc-bl-table tr:hover td{background:#f8fafc}
          .nc-bl-remove{border:none;background:transparent;color:#ef4444;padding:5px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:500;transition:all .2s}
          .nc-bl-remove:hover{background:#fef2f2}
        </style>`;
        function render() {
          const has = list.length;
          wrap.innerHTML = CSS + (has ? `<table class="nc-bl-table"><thead><tr><th>URL 包含字符串</th><th>操作</th></tr></thead><tbody>${list.map((s, i) => `<tr><td>${escapeHtml(s)}</td><td style="text-align:center"><button class="nc-bl-remove" data-i="${i}" title="移除此项">移除</button></td></tr>`).join('')}</tbody></table>` : '<div class="nc-empty">暂无黑名单，点击「添加」可跳过指定网址的验证码识别</div>');
          wrap.querySelectorAll('.nc-bl-remove').forEach(b => b.onclick = () => {
            const idx = Number(b.dataset.i);
            list.splice(idx, 1);
            const cfg = getConfig(); cfg.captchaBlacklist = list; setConfig(cfg);
            render();
          });
        }
        render();
        sr.querySelector('#nc-bl-add').onclick = async () => {
          const z = await showPromptModal('输入字符串，任何 URL 包含该字符串的网页都将被跳过验证码识别。', '');
          if (!z) return;
          if (list.indexOf(z) === -1) { list.push(z); const cfg = getConfig(); cfg.captchaBlacklist = list; setConfig(cfg); render(); topNotice('已添加，刷新页面生效'); } else topNotice('已在黑名单中');
        };
      }
      function makeDraggable(el) {
        let startX, startY, startR, startB, dragging = false;
        el.addEventListener('mousedown', (e) => {
          if (e.button !== 0) return;
          dragging = false;
          startX = e.clientX; startY = e.clientY;
          const rect = el.getBoundingClientRect();
          const winW = window.innerWidth, winH = window.innerHeight;
          startR = winW - rect.right; startB = winH - rect.bottom;
          const onMove = (ev) => {
            const dx = ev.clientX - startX, dy = ev.clientY - startY;
            if (Math.abs(dx) + Math.abs(dy) > 3) dragging = true;
            el.style.right = Math.max(0, Math.min(winW - 44, startR - dx)) + 'px';
            el.style.bottom = Math.max(0, Math.min(winH - 44, startB - dy)) + 'px';
          };
          const onUp = () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
            if (dragging) {
              el._dragged = true;
              try { GM_setValue('cat_gear_pos', { right: parseInt(el.style.right, 10), bottom: parseInt(el.style.bottom, 10) }); } catch(e) {}
            }
          };
          window.addEventListener('mousemove', onMove);
          window.addEventListener('mouseup', onUp);
        });
      }
      function mountButton() {
        if (typeof sessionStorage !== 'undefined') {
          try { if (sessionStorage.getItem('cat_gear_hidden') === '1') return; } catch(e) {}
        }
        const gear = document.createElement('div');
        gear.id = 'cat_gear';
        gear.textContent = '识';
        gear.title = '拖动调整位置｜左键打开菜单｜右键隐藏（刷新恢复）';
        gear.style.cssText = 'position:fixed;right:calc(12px + env(safe-area-inset-right));bottom:calc(120px + env(safe-area-inset-bottom));width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#1677ff,#38bdf8);color:#fff;font-size:18px;font-weight:700;line-height:44px;text-align:center;cursor:pointer;z-index:2147483646;box-shadow:0 6px 20px rgba(22,119,255,.35);transition:box-shadow .2s,filter .2s;user-select:none;touch-action:none;';
        // 恢复上次拖拽位置
        try {
          const pos = GM_getValue('cat_gear_pos');
          if (pos && typeof pos === 'object' && pos.right != null && pos.bottom != null) {
            gear.style.right = pos.right + 'px';
            gear.style.bottom = pos.bottom + 'px';
          }
        } catch(e) {}
        makeDraggable(gear);
        gear.onclick = (e) => {
          if (gear._dragged) { gear._dragged = false; return; }
          let menu = document.getElementById('cat_menu');
          if (menu) { menu.remove(); return; }
          const rect = gear.getBoundingClientRect();
          menu = document.createElement('div');
          menu.id = 'cat_menu';
          menu.style.cssText = 'position:fixed;right:' + Math.max(8, window.innerWidth - rect.left - 8) + 'px;bottom:' + Math.max(8, window.innerHeight - rect.top - 8) + 'px;width:168px;background:#fff;border:1px solid rgba(15,23,42,.06);border-radius:14px;z-index:' + NC_Z_TOP + ';box-shadow:0 12px 36px rgba(15,23,42,.16),0 2px 8px rgba(15,23,42,.08);font-family:"Microsoft YaHei";font-size:13px;overflow:hidden;';
          menu.innerHTML = '<div style="padding:8px 12px;font-weight:700;border-bottom:1px solid #eee;">验证码识别</div>'
            + '<div data-act="fill" style="padding:9px 12px;cursor:pointer;border-bottom:1px solid #eee;font-weight:700;color:#1677ff;">🤖 识别并填入</div>'
            + '<div data-act="add" style="padding:9px 12px;cursor:pointer;border-bottom:1px solid #eee;">➕ 手动加规则</div>'
            + '<div data-act="del" style="padding:9px 12px;cursor:pointer;border-bottom:1px solid #eee;">🗑 删当前页规则</div>'
            + '<div data-act="bl" style="padding:9px 12px;cursor:pointer;border-bottom:1px solid #eee;">🚫 管理黑名单</div>'
            + '<div data-act="hide" style="padding:9px 12px;cursor:pointer;color:#c33;">🙈 隐藏按钮（刷新恢复）</div>';
          if (!document.getElementById('nc-cat-menu-css')) {
            const st = document.createElement('style');
            st.id = 'nc-cat-menu-css';
            st.textContent = '#cat_menu [data-act]{transition:background .15s,padding-left .15s}' +
              '#cat_menu [data-act]:hover{background:rgba(22,119,255,.08);padding-left:16px}' +
              '#cat_gear:hover{box-shadow:0 10px 28px rgba(22,119,255,.5);filter:brightness(1.08)}';
            (document.head || document.documentElement).appendChild(st);
          }
          (document.body || document.documentElement).appendChild(menu);
          // 统一关闭函数：先解除 capture 监听器再移除节点，防止内部选项点击后遗留监听器
          let _catBd = null;
          const closeMenuNow = () => {
            if (_catBd) { try { document.removeEventListener('click', _catBd, true); } catch (e) {} _catBd = null; }
            if (menu.parentNode) menu.remove();
          };
          menu.querySelector('[data-act="fill"]').onclick = () => { closeMenuNow(); forceRecognize(); };
          menu.querySelector('[data-act="add"]').onclick = () => { closeMenuNow(); addRuleManually(); };
          menu.querySelector('[data-act="del"]').onclick = () => { closeMenuNow(); delRule(); };
          menu.querySelector('[data-act="bl"]').onclick = () => { closeMenuNow(); manageBlacklist(); };
          menu.querySelector('[data-act="hide"]').onclick = () => { closeMenuNow(); gear.remove(); topNotice('验证码按钮已隐藏，刷新页面后恢复', 3000); try { sessionStorage.setItem('cat_gear_hidden', '1'); } catch(e) {} };
          setTimeout(() => {
            if (!document.body.contains(menu)) return; // 已被关闭则无需再绑监听器
            _catBd = (e2) => {
              const p = e2.composedPath && e2.composedPath();
              if (!p || p.indexOf(menu) < 0) closeMenuNow();
            };
            document.addEventListener('click', _catBd, true);
          }, 0);
        };
        // 右键隐藏（刷新恢复）
        gear.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          gear.remove();
          const m = document.getElementById('cat_menu'); if (m) m.remove();
          topNotice('验证码按钮已隐藏，刷新页面后恢复', 3000);
          try { sessionStorage.setItem('cat_gear_hidden', '1'); } catch(e) {}
        });
        (document.body || document.documentElement).appendChild(gear);
      }

      // 启动
      if (inBlacklist()) { return; }
      // 刷新页面后重置隐藏状态：sessionStorage 在刷新后仍存活，需显式清理，让按钮重新出现
      try {
        const navEntry = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType('navigation')[0];
        if (navEntry && navEntry.type === 'reload' && typeof sessionStorage !== 'undefined') {
          sessionStorage.removeItem('cat_gear_hidden');
        }
      } catch(e) {}
      const trigger = cap().captchaTrigger || 'manual';
      // 白名单域名归一化：兼容用户填成 https://www.baidu.com/、www.baidu.com/*、*.baidu.com 等形式，只取域名主体做子串匹配
      const wlToken = (u) => {
        if (!u) return '';
        let s = String(u).trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^[*]+\.?/, '').replace(/^www\./, '');
        s = s.replace(/[*]/g, '').split('/')[0].split('?')[0];
        const m = s.match(/[a-z0-9-]+(\.[a-z0-9-]+)+/i);
        return m ? m[0] : s;
      };
      const inCapWl = (getConfig().captchaWhitelist || []).some(u => { const t = wlToken(u); return t && HOST.toLowerCase().indexOf(t) !== -1; });
      // 按钮显示策略：手动/全局始终显示；白名单模式下只有命中白名单的站点才显示
      const shouldShowButton = trigger === 'manual' || trigger === 'global' || (trigger === 'whitelist' && inCapWl);
      if (shouldShowButton) mountButton();
      let bootLast = window.location.href;
      if (trigger === 'global' || (trigger === 'whitelist' && inCapWl)) {
        observe(); tick();
        /* 【v1.0.5 P3】带 id 注册：ncInterval 对同 id 先清旧再建新，脚本意外重复初始化时不会叠加多个轮询 */
        setInterval(() => { if (window.location.href !== bootLast) { bootLast = window.location.href; tick(); } }, 1500, 'captcha-boot-poll');
      }
      // manual 模式：仅浮动按钮，不观察者、不轮询（零常驻开销）
    })();
  }

  /* ================================================================
   *  首次安装图形化引导页
   *  仅在首次运行（无 adc_onboarded 标记）弹出；介绍核心功能并给一键开启推荐。
   * ================================================================ */
  /* ================================================================
   *  划词搜索模块（移植自 [BIGOceana]划词搜索助手 Pro）
   *  - 选中网页文字弹出工具条，多引擎搜索 + 划词翻译
   *  - 配置统一读写 allconfig.selSearch*，便于设置页联动
   *  - selectionSearch 为 false 时整体不初始化
   * ================================================================ */
  function initSelectionSearch() {
    if (!getScriptCfg().selectionSearch) {
      dbg('[NetClean] 划词搜索配置关闭（getScriptCfg().selectionSearch=false），跳过初始化');
      return;
    }
    dbg('[NetClean] 划词搜索开始初始化（host=' + HOST + ', url=' + HREF() + '）');

    /* —— 配置读写（统一走 allconfig）—— */
    function ssEngines() {
      const e = getConfig().selSearchEngines;
      return (Array.isArray(e) && e.length) ? e : JSON.parse(JSON.stringify(DEFAULT_SEL_ENGINES));
    }
    function ssSaveEngines(arr) { const c = getConfig(); c.selSearchEngines = arr; setConfig(c); }
    function ssTheme() {
      const c = getConfig().selSearchTheme;
      return (c && typeof c === 'object') ? c : { mode: 'dark', opacity: 1, glass: false };
    }
    function ssSaveTheme(t) { const c = getConfig(); c.selSearchTheme = t; setConfig(c); }
    function ssTrans() {
      const c = getConfig().selSearchTrans;
      return (c && typeof c === 'object') ? c : { engine: 'iciba', auto: false, target: 'zh', deeplKey: '', baiduId: '', baiduKey: '', customUrl: '', customKey: '', proxyUrl: '', forceAutoTarget: true, autoSave: true };
    }
    function ssSaveTrans(t) { const c = getConfig(); c.selSearchTrans = t; setConfig(c); }

    // 引擎条目校验（导入/自定义时过滤损坏数据）
    function sanitizeEngine(e) {
      if (!e || typeof e !== 'object') return null;
      if (!e.id || !e.name) return null;
      const o = {
        id: String(e.id), name: String(e.name),
        icon: e.icon != null ? String(e.icon) : '',
        url: e.url ? String(e.url) : '',
        enabled: e.enabled !== false,
        order: Number(e.order) || 999
      };
      if (e.onlyURL) o.onlyURL = true;
      if (e.action) o.action = String(e.action);
      return o;
    }
    function active() {
      return ssEngines().filter(e => e && e.enabled).sort((a, b) => (a.order || 0) - (b.order || 0));
    }

    /* —— 图标（内置 SVG / 自定义 SVG / 图片网址）—— */
    const ICONS = {
      link:        '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M10.6 13.4a1 1 0 0 1 0-1.4l3-3a3 3 0 1 1 4.2 4.2l-1.5 1.5a1 1 0 1 1-1.4-1.4l1.5-1.5a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 1-1.4 0Zm2.8-2.8a1 1 0 0 1 0 1.4l-3 3a3 3 0 0 0 4.2 4.2l1.5-1.5a1 1 0 1 1 1.4 1.4l-1.5 1.5a5 5 0 1 1-7.1-7.1l3-3a1 1 0 0 1 1.4 0Z"/></svg>',
      copy:        '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4v2h12V1Zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h11v14Z"/></svg>',
      baidu:       '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#2932e1"/><text x="12" y="17" text-anchor="middle" font-size="14" fill="#fff" font-family="sans-serif" font-weight="bold">百</text></svg>',
      google:      '<svg viewBox="0 0 24 24"><text x="12" y="18" text-anchor="middle" font-size="18" font-weight="bold" fill="#4285F4" font-family="sans-serif">G</text></svg>',
      bing:        '<svg viewBox="0 0 24 24"><path fill="#008373" d="M6 2v14l8 5 5-3-7-4V8L9 6v8l4 2-5 3V2z"/></svg>',
      bilibili:    '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="15" rx="4" fill="#00aeec"/><text x="12" y="16" text-anchor="middle" font-size="9" fill="#fff" font-family="sans-serif" font-weight="bold">B</text></svg>',
      youtube:     '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="4" fill="#ff0000"/><polygon points="10,9 16,12 10,15" fill="#fff"/></svg>',
      weibo:       '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#e6162d"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="#fff" font-family="sans-serif" font-weight="bold">微</text></svg>',
      wiki:        '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#666" stroke-width="1"/><text x="12" y="17" text-anchor="middle" font-size="13" fill="#000" font-family="serif" font-weight="bold">W</text></svg>',
      translate:   '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#1677ff"/><text x="12" y="17" text-anchor="middle" font-size="12" fill="#fff" font-family="sans-serif">译</text></svg>',
      xiaohongshu: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#ff2442"/><text x="12" y="16" text-anchor="middle" font-size="9" fill="#fff" font-family="sans-serif" font-weight="bold">红</text></svg>'
    };
    const SVG_SAFE_TAGS = new Set(['svg','path','rect','circle','ellipse','line','polyline','polygon','text','g','defs','use','linearGradient','radialGradient','stop','title','desc']);
    const SVG_SAFE_ATTRS = new Set(['viewBox','d','cx','cy','r','rx','ry','x','y','x1','y1','x2','y2','width','height','fill','stroke','stroke-width','stroke-linecap','stroke-linejoin','stroke-dasharray','opacity','transform','points','text-anchor','font-size','font-family','font-weight','fill-opacity','stroke-opacity','gradientUnits','offset','stop-color','stop-opacity','xmlns','href','xlink:href']);
    function sanitizeSvg(html) {
      return html.replace(/<\/?(\w+)([^>]*)>/g, (match, tag, attrs) => {
        if (!SVG_SAFE_TAGS.has(tag.toLowerCase())) return '';
        const cleanAttrs = attrs.replace(/\s([\w:-]+)\s*=\s*"[^"]*"/g, (m, name) => {
          const n = name.toLowerCase();
          if (n.startsWith('on')) return '';
          if (n === 'href' || n === 'xlink:href') {
            const v = m.match(/=\s*"([^"]*)"/);
            if (v && /^\s*javascript:/i.test(v[1])) return '';
          }
          if (!SVG_SAFE_ATTRS.has(n)) return '';
          return m;
        }).replace(/\s([\w:-]+)\s*=\s*'[^']*'/g, (m, name) => {
          const n = name.toLowerCase();
          if (n.startsWith('on')) return '';
          if (!SVG_SAFE_ATTRS.has(n)) return '';
          return m;
        }).replace(/\s([\w:-]+)\s*=\s*[^\s>]+/g, (m, name) => {
          const n = name.toLowerCase();
          if (n.startsWith('on')) return '';
          if (!SVG_SAFE_ATTRS.has(n)) return '';
          return m;
        });
        return '<' + tag + cleanAttrs + (match.endsWith('/>') ? '/>' : '>');
      });
    }
    function renderIcon(val) {
      if (!val) return ICONS.copy;
      if (ICONS[val]) return ICONS[val];
      if (/<svg[\s>]/i.test(val)) return sanitizeSvg(val);
      if (/^https?:\/\//i.test(val) || /^data:image\//i.test(val)) return '<img src="' + val.replace(/"/g, '&quot;') + '" style="width:22px;height:22px;border-radius:6px;object-fit:cover"/>';
      return ICONS.copy;
    }

    /* —— URL 智能识别 —— */
    const looksLikeURL = s => {
      if (typeof s !== 'string') return false;
      s = s.trim();
      if (!s) return false;
      // 已带 scheme
      if (/^[a-z][a-z0-9+.\-]*:\/\//i.test(s)) return true;
      // IPv6 [addr] 或 [addr]:port
      if (/^\[[0-9a-f:]+\](?::\d{2,5})?$/i.test(s)) return true;
      // 域名（含中文）+ 可选端口 + / 或行尾，例 example.com:1205
      if (/^(?:[a-z0-9\u4e00-\u9fa5](?:[a-z0-9\u4e00-\u9fa5\-]*[a-z0-9\u4e00-\u9fa5])?\.)+[a-z]{2,}(?::\d{2,5})?(?:\/|$)/i.test(s)) return true;
      // IPv4 + 可选端口
      if (/^\d{1,3}(?:\.\d{1,3}){3}(?::\d{2,5})?(?:\/|$)/.test(s)) return true;
      return false;
    };
    const normalizeURL = s => /^[a-z][a-z0-9+.\-]*:\/\//i.test(s.trim()) ? s.trim() : 'https://' + s.trim();

    /* —— 主题系统 —— */
    const THEME_PRESETS = {
      dark:  { bg: '42,42,46',    text: '#fff', hover: '255,255,255', hop: '.18', border: 'transparent' },
      light: { bg: '255,255,255', text: '#333', hover: '0,0,0',      hop: '.06', border: 'rgba(0,0,0,.08)' }
    };
    function resolveTheme(mode) {
      if (mode === 'auto') return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      if (mode === 'time') { const h = new Date().getHours(); return (h < 6 || h >= 18) ? 'dark' : 'light'; }
      return THEME_PRESETS[mode] ? mode : 'dark';
    }
    function applyTheme() {
      const t = ssTheme();
      const p = THEME_PRESETS[resolveTheme(t.mode || 'dark')] || THEME_PRESETS.dark;
      const r = document.documentElement;
      r.style.setProperty('--sh-bg-rgb', p.bg);
      r.style.setProperty('--sh-text', p.text);
      r.style.setProperty('--sh-hover-rgb', p.hover);
      r.style.setProperty('--sh-hover-op', p.hop);
      r.style.setProperty('--sh-opacity', t.opacity != null ? t.opacity : 1);
      r.style.setProperty('--sh-blur', t.glass ? '12px' : '0px');
      r.style.setProperty('--sh-border', p.border);
    }

    /* —— 工具 —— */
    let bar = null, lastText = '', lastRAF = 0, barShownAt = 0;
    const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const removeBar = () => {
      if (!bar) return;
      // 【B-划词-08 SPA 后竖向排列修复】百度 SPA 会移除我们注入到 <head> 的 <style>，
      //   类规则 #sh-bar.sh-hide{opacity:0;transform:translateY(4px) scale(.98)} 失效。
      // 改用 inline style 驱动 hide 动画（单属性赋值，保留其它 inline 不被冲掉）。
      bar.classList.remove('sh-show'); bar.classList.add('sh-hide');
      bar.style.opacity = '0';
      bar.style.transform = 'translateX(-50%) translateY(4px) scale(.98)';
      const dead = bar; bar = null; lastText = '';
      setTimeout(() => dead.remove(), 180);
    };
    const toast = t => {
      const old = document.querySelector('.sh-toast'); if (old) old.remove();
      const d = document.createElement('div');
      d.className = 'sh-toast'; d.textContent = t;
      // 【B-划词-08】自包含 inline 布局：初始 opacity:0 transform:translateX(-50%) translateY(8px) +
      //   transition —— 避免在 SPA 后的页面调用 toast 时 head <style> 被清空导致按钮"瞬间"出现。
      d.style.cssText =
        'position:fixed;left:50%;bottom:80px;' +
        'background:rgba(0,0,0,.78);color:#fff;' +
        'padding:8px 18px;border-radius:20px;' +
        'z-index:2147483647;font-size:14px;' +
        'opacity:0;transform:translateX(-50%) translateY(8px);' +
        'transition:opacity .2s,transform .25s';
      document.body.appendChild(d);
      requestAnimationFrame(() => {
        d.classList.add('sh-show');
        d.style.opacity = '1';
        d.style.transform = 'translateX(-50%) translateY(0)';
      });
      setTimeout(() => {
        d.classList.remove('sh-show');
        d.style.opacity = '0';
        d.style.transform = 'translateX(-50%) translateY(8px)';
        setTimeout(() => d.remove(), 250);
      }, 1400);
    };
    const copy = t => {
      try { GM_setClipboard(t); } catch (e) { try { navigator.clipboard.writeText(t).catch(() => {}); } catch (_) {} }
      toast('已复制');
    };
    const exec = (e, t) => {
      if (e.action === 'copy') return copy(t);
      const url = e.onlyURL ? normalizeURL(t) : (e.url || '').replace('{keyword}', encodeURIComponent(t));
      if (!url) return;
      try { window.open(url, '_blank'); } catch (_) { location.href = url; }
    };

    /* —— 选中监听 —— */
    const SKIP_INPUT_TYPES = /^(?:password|hidden|button|submit|reset|file|image|color|range|checkbox|radio)$/i;
    function toRectObj(r) {
      return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
    }
    function eventPointRect(e) {
      // 取鼠标/触摸释放位置作为兜底定位点
      let x, y;
      if (e && e.changedTouches && e.changedTouches.length) {
        x = e.changedTouches[0].clientX; y = e.changedTouches[0].clientY;
      } else if (e && e.clientX != null) {
        x = e.clientX; y = e.clientY;
      }
      if (x == null || y == null) return null;
      return { left: x, top: y, right: x, bottom: y, width: 0, height: 0, fromEvent: true };
    }
    function readSelection(e) {
      const sel = window.getSelection();
      let text = '';
      if (sel && sel.rangeCount) text = sel.toString().trim();

      // 输入框选中文本优先走独立分支
      const ae = document.activeElement;
      if ((!text || text.length === 0) && ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA') && ae.isConnected && !ae.disabled && ae.readOnly !== true) {
        const t = (ae.type || 'text').toLowerCase();
        if (!SKIP_INPUT_TYPES.test(t) && ae.selectionStart != null && ae.selectionEnd != null) {
          const s = ae.selectionStart, en = ae.selectionEnd;
          if (s !== en) {
            const v = ae.value.substring(s, en).trim();
            if (v) {
              const r = ae.getBoundingClientRect();
              return { text: v, rect: { left: r.left, top: r.bottom, right: r.right, bottom: r.bottom, width: r.width, height: 0 } };
            } else {
              dbg('[NetClean] readSelection: INPUT/TEXTAREA 内 selectionStart===selectionEnd, ae=' + ae.tagName + (ae.id ? '#' + ae.id : ''));
            }
          }
        }
      }

      if (!text) {
        dbg('[NetClean] readSelection: sel 为空 (rangeCount=' + (sel ? sel.rangeCount : 'null') +
            ', ae=' + (ae && ae.tagName) + (ae && ae.id ? '#' + ae.id : '') + ')，返回 null');
        return null;
      }
      if (text.length > 2000) {
        dbg('[NetClean] readSelection: text 超过 2000 字符上限 (' + text.length + ')，返回 null');
        return null;
      }

      if (sel && sel.rangeCount) {
        const range = sel.getRangeAt(0);

        // 1. 首选 range 包围盒
        const br = range.getBoundingClientRect();
        if (br && (br.width > 0 || br.height > 0)) return { text, rect: toRectObj(br) };

        // 2. B站/动态站点中 range 包围盒可能为 0，但 getClientRects 仍有精确行盒
        try {
          const rects = range.getClientRects();
          if (rects && rects.length) {
            // 取面积最大的行盒，避免取到零宽光标盒
            let best = null;
            for (let i = 0; i < rects.length; i++) {
              const cr = rects[i];
              if (!cr || (!cr.width && !cr.height)) continue;
              if (!best || cr.width * cr.height > best.width * best.height) best = cr;
            }
            if (best) return { text, rect: toRectObj(best) };
          }
        } catch (_) {}

        // 3. 从选区起点向上找包含该段文字的最小元素（限制在 6 层内，且不能是 body/html）
        try {
          const sample = text.slice(0, 30);
          let node = range.startContainer;
          let eln = node && node.nodeType === 1 ? node : (node && node.parentElement);
          let guard = 0;
          while (eln && guard < 6 && eln !== document.body && eln !== document.documentElement) {
            const er = eln.getBoundingClientRect();
            if (er && (er.width > 0 || er.height > 0) && eln.textContent && eln.textContent.includes(sample)) {
              return { text, rect: toRectObj(er) };
            }
            eln = eln.parentElement;
            guard++;
          }
        } catch (_) {}
      }

      // 4. 兜底：用鼠标/触摸释放位置定位，避免弹框飞到页面顶部
      const evRect = eventPointRect(e);
      if (evRect) return { text, rect: evRect };

      // 【B-划词-04 失效诊断】文本有但 4 级定位全部失败（range 无可见矩形 + 祖先无包含 + 兜底无事件坐标）：
      // 多半是选区落在隐藏/display:none 的克隆节点或不可见容器中。
      dbg('[NetClean] readSelection: text 拿到但所有定位失败 (text="' + text.slice(0, 24) + (text.length > 24 ? '…' : '') +
          '", hasEventRect=' + !!evRect + ')，返回 null');
      return null;
    }
    function readCurrentSelection() { return readSelection(null); }
    function placeBar(rect) {
      if (!bar || !rect) return;
      const h = bar.offsetHeight;
      const vh = window.innerHeight;
      // 【B-划词-07 修复】bar 现在是 position:fixed（脱锚 documentElement 顶层，免疫 React Portal 覆盖），
      //   getBoundingClientRect 返回的 rect 是 viewport 坐标——bar.style.top/left 必须也是 viewport 坐标，
      //   不能再加 window.scrollY。原 absolute 算法 `sy + rect.bottom + 8` 会让 T 永远落在视口外（页面
      //   中段选文字时 panel 看不见，仅在第一屏生效）。
      let T = rect.bottom + 8;
      if (T + h > vh - 10) T = rect.top - h - 8;
      T = Math.max(10, T);
      // 来自事件坐标时 width=0，以该点为中心水平对齐
      const centerX = rect.width > 0 ? rect.left + rect.width / 2 : rect.left;
      bar.style.left = centerX + 'px';
      bar.style.top  = T + 'px';
      bar.style.transform = 'translateX(-50%)';
    }
    function showBar(text, rect) {
      removeBar();
      if (!text) return;
      const alwaysOpen = getScriptCfg().selSearchAlwaysShowOpenLink;
      const nodes = active().filter(e => {
        if (e.onlyURL && e.id === 'open' && alwaysOpen) return true;
        return !(e.onlyURL && !looksLikeURL(text));
      });
      if (!nodes.length) return;
      bar = document.createElement('div');
      bar.id = 'sh-bar';
      const _bsr = shMount(bar, '');
      const frag = document.createDocumentFragment();
      // 常驻模式下若 open 引擎未出现，强制插到最前
      if (getScriptCfg().selSearchAlwaysShowOpenLink && !nodes.some(e => e.id === 'open')) {
        const openEng = ssEngines().find(e => e.id === 'open');
        if (openEng) nodes.unshift(Object.assign({}, openEng, { enabled: true }));
      }
      nodes.forEach(e => {
        const b = document.createElement('div');
        b.className = 'sh-btn'; b.title = e.name;
        b.innerHTML = renderIcon(e.icon);
        b.onclick = ev => { ev.stopPropagation(); exec(e, text); removeBar(); };
        frag.appendChild(b);
      });
      if (getScriptCfg().selSearchShowTranslate) {
        const tb = document.createElement('div');
        tb.className = 'sh-btn'; tb.title = '翻译';
        tb.innerHTML = ICONS.translate;
        tb.onclick = ev => { ev.stopPropagation(); doTranslateAndShow(text, rect); };
        frag.appendChild(tb);
      }
      _bsr.appendChild(frag);
      // 【B-划词-08 SPA 后竖向排列真正修复】百度 SPA 会移除我们注入到 <head> 的 <style>，
      //   导致 #sh-bar{display:flex;gap:6px;padding:8px;background:rgba(...);border:...;
      //   border-radius:14px;box-shadow:...;font-size:13px;color:#fff;opacity:0;transform:...
      //   ...;transition:...;will-change:...;backdrop-filter:...} 全部丢失 —— div 默认回退到
      //   block 布局，菜单塌成竖向排列，连背景/圆角/阴影都丢了。
      // 自包含 inline 布局（bar.style.cssText 全量重置）：display:flex + 全部布局值，
      //   与 head CSS 选择器无关 —— 即使 head <style> 被 wipe，bar 仍保持横排+正确外观。
      // 注意：cssText 是赋值而非 +=，因为 bar 是新建元素，无任何 inline 属性需要保留。
      // 布局值里的 var(--sh-*) 仍可解析：applyTheme() 已经把这些变量写到 <html>.style 上
      //   （inline style，不在 <style> 标签里，不受 head 清空影响）。
      bar.style.cssText =
        'position:fixed;' +
        'z-index:2147483647;' +
        'pointer-events:auto;' +
        'top:0;left:0;' +
        'display:flex;align-items:center;' +
        'gap:6px;' +
        'padding:8px;' +
        'background:rgba(var(--sh-bg-rgb),var(--sh-opacity));' +
        'border:1px solid var(--sh-border);' +
        'border-radius:14px;' +
        'box-shadow:0 6px 22px rgba(0,0,0,.22);' +
        'font-size:13px;' +
        'color:var(--sh-text);' +
        'opacity:0;' +
        'transform:translateY(6px) scale(.96);' +
        'transition:opacity .12s ease,transform .16s cubic-bezier(.25,.8,.25,1);' +
        'will-change:opacity,transform;' +
        '-webkit-backdrop-filter:blur(var(--sh-blur));' +
        'backdrop-filter:blur(var(--sh-blur))';
      (document.documentElement || document.body).appendChild(bar);
      placeBar(rect);
      // 驱动 show 动画：inline opacity/transform 覆盖初始 translateY(6px) scale(.96)，
      //   与 placeBar 设置的 translateX(-50%) 合并。
      requestAnimationFrame(() => {
        bar.classList.add('sh-show');
        bar.style.opacity = '1';
        bar.style.transform = 'translateX(-50%) translateY(0) scale(1)';
      });
    }

    /* —— 翻译与词典模块 —— */
    const ICON_SPK = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
    let transPanel = null;
    function removeTransPanel() {
      if (!transPanel) return;
      // 【B-划词-08】inline 驱动 hide 动画（与 removeBar 同因；head CSS 被清空后类规则失效）
      transPanel.classList.remove('sh-show');
      transPanel.style.opacity = '0';
      transPanel.style.transform = 'translateX(-50%) translateY(6px)';
      const dead = transPanel; transPanel = null;
      setTimeout(() => dead.remove(), 200);
    }
    function showTransPanel(rect, html) {
      removeTransPanel();
      transPanel = document.createElement('div');
      transPanel.id = 'sh-trans';
      const _tsr = shMount(transPanel, html);
      // 【B-划词-08】同 showBar：自包含 inline 布局，免疫 head <style> 被 SPA 清空。
      //   #sh-trans{} 里 min-width/max-width/background/border/border-radius/box-shadow/
      //   color/opacity/transform/transition/backdrop-filter/overflow 全打包进 cssText。
      transPanel.style.cssText =
        'position:fixed;' +
        'z-index:2147483646;' +
        'pointer-events:auto;' +
        'top:0;left:0;' +
        'min-width:280px;max-width:420px;' +
        'background:rgba(var(--sh-bg-rgb),var(--sh-opacity));' +
        'border:1px solid var(--sh-border);' +
        'border-radius:14px;' +
        'box-shadow:0 8px 28px rgba(0,0,0,.25);' +
        'color:var(--sh-text);' +
        'opacity:0;' +
        'transform:translateX(-50%) translateY(6px);' +
        'transition:opacity .15s,transform .2s cubic-bezier(.25,.8,.25,1);' +
        '-webkit-backdrop-filter:blur(var(--sh-blur));' +
        'backdrop-filter:blur(var(--sh-blur));' +
        'overflow:hidden';
      (document.documentElement || document.body).appendChild(transPanel);
      const h = transPanel.offsetHeight;
      // 【B-划词-07】transPanel 现在是 position:fixed，用 viewport 坐标不再加 scrollY
      let T = rect.bottom + 4;
      if (T + h > window.innerHeight - 10) T = rect.top - h - 4;
      T = Math.max(10, T);
      transPanel.style.left = (rect.left + rect.width / 2) + 'px';
      transPanel.style.top = T + 'px';
      // 【B-划词-08】inline 驱动 show 动画（与 removeTransPanel 配对；类规则依赖 head CSS）
      requestAnimationFrame(() => {
        transPanel.classList.add('sh-show');
        transPanel.style.opacity = '1';
        transPanel.style.transform = 'translateX(-50%) translateY(0)';
      });
      _tsr.querySelectorAll('.sh-tr-speak').forEach(el => {
        el.onclick = ev => { ev.stopPropagation(); playAudio(el.dataset.audio, el.dataset.word, el.dataset.lang); };
      });
      _tsr.querySelectorAll('.sh-tr-suggest').forEach(el => {
        el.onclick = ev => { ev.stopPropagation(); removeTransPanel(); doTranslateAndShow(el.textContent, rect); };
      });
    }
    function repositionTransPanel(rect) {
      if (!transPanel) return;
      const h = transPanel.offsetHeight;
      // 【B-划词-07】position:fixed → viewport 坐标，不再加 scrollY
      let T = rect.bottom + 4;
      if (T + h > window.innerHeight - 10) T = rect.top - h - 4;
      T = Math.max(10, T);
      transPanel.style.top = T + 'px';
    }
    function detectLang(text) {
      if (/[\u3400-\u9fff]/.test(text)) return 'zh';
      if (/[a-zA-Z]/.test(text)) return 'en';
      return 'other';
    }
    function gmFetch(url, opts = {}) {
      const TR = ssTrans();
      if (TR.proxyUrl) {
        if (/\{url\}|\{u\}/.test(TR.proxyUrl)) {
          url = TR.proxyUrl.replace(/\{u\}/g, encodeURIComponent(url));
        } else if (/[?&]url=($|&)/.test(TR.proxyUrl)) {
          url = TR.proxyUrl + encodeURIComponent(url);
        } else {
          url = TR.proxyUrl + (TR.proxyUrl.includes('?') ? '&' : '?') + 'url=' + encodeURIComponent(url);
        }
      }
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: opts.method || 'GET', url,
          headers: opts.headers || {}, data: opts.data, timeout: 15000,
          onload: r => {
            try { resolve(JSON.parse(r.responseText)); }
            catch (_) { reject(new Error(TR.proxyUrl ? '代理返回非 JSON' : '返回非 JSON')); }
          },
          onerror: () => reject(new Error(TR.proxyUrl ? '代理/网络错误' : '网络错误')),
          ontimeout: () => reject(new Error('超时'))
        });
      });
    }
    async function googleDict(word) {
      const url = 'https://content-dictionaryextension-pa.googleapis.com/v1/dictionaryExtensionData?'
        + new URLSearchParams({ term: word, language: 'en', corpus: 'en', country: 'UK', key: 'AIzaSyA6EEtrDCfBkHV8uU2lgGY-N383ZgAOo7Y' });
      const data = await gmFetch(url, { headers: { 'x-origin': 'chrome-extension://mgijmajocgfcbeboacabfgobmjgjcoja' } });
      if (!data || !data.dictionaryData || !data.dictionaryData[0]) return null;
      const dd = data.dictionaryData[0], entries = dd.entries || [];
      if (!entries.length) return null;
      const e = entries[0];
      const result = { word: e.headword || word, phonetics: [], families: [] };
      (e.phonetics || []).forEach(p => { if (p.text) result.phonetics.push({ text: p.text, audio: p.oxfordAudio || '' }); });
      const sfs = e.senseFamilies || (e.senseFamily ? [e.senseFamily] : []);
      sfs.forEach(sf => {
        if (!sf) return;
        const pos = (sf.partsOfSpeech || sf.partsOfSpeechs || []).map(p => p.value).filter(Boolean).join(', ');
        const defs = (sf.senses || []).map(s => {
          const d = s.definition; return d ? (d.text || (d.fragments || []).map(f => f.text).join('')) : '';
        }).filter(Boolean);
        if (pos || defs.length) result.families.push({ pos, defs });
      });
      return result.families.length ? result : null;
    }
    /* 【v1.0.5 增强】dt=bd 追加词典块（词性 + 词条 + 反向翻译），兜底卡不再是干巴巴一行；
       data[0] 仍是逐段译文，data[1] 是 [ [词性, [词条...], [反向...], 分数], ... ] */
    async function googleTranslate(text, target) {
      const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + target + '&dt=t&dt=bd&q=' + encodeURIComponent(text);
      const data = await gmFetch(url);
      const families = [];
      (data[1] || []).forEach(g => {
        if (!Array.isArray(g)) return;
        const pos = g[0] || '';
        const terms = (g[1] || []).filter(Boolean);
        const rev = (g[2] || []).map(r => Array.isArray(r) ? r[0] : r).filter(Boolean);
        if (pos || terms.length) families.push({ pos, terms, rev });
      });
      return { text: (data[0] || []).map(s => s[0] || '').join(''), from: data[2] || '', families };
    }
    /* 【v1.0.5 新增】MyMemory 免费翻译兜底（api.mymemory.translated.net）
       为什么需要它：translate.googleapis.com 在国内被墙，GM_xmlhttpRequest 也翻不过 GFW，
       导致「iciba 不收录 + Google 不可达」双失败。MyMemory 国内直连可达、免密钥（实测「售价」→ Selling price）。
       注意免费额度：匿名约 5000 字符/天/IP，超限会返回 MYMEMORY WARNING 文本，须识别为失败 */
    async function myMemoryTranslate(text, target) {
      const from = detectLang(text) === 'zh' ? 'zh' : 'en';
      const to = target || (from === 'zh' ? 'en' : 'zh');
      if (from === to) throw new Error('源语言与目标语言相同');
      const data = await gmFetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=' + from + '|' + to);
      const txt = (data && data.responseData && data.responseData.translatedText) || '';
      if (!txt || /MYMEMORY WARNING/i.test(txt)) throw new Error('MyMemory 无结果（额度或语言对不支持）');
      /* 全量适配：matches 是多译者候选（translation / match 置信度 / subject / created-by），
         面板按候选列表渲染，不只甩一行 */
      const candidates = (data.matches || [])
        .filter(m => m && m.translation && m.translation !== txt)
        .slice(0, 4)
        .map(m => ({ t: m.translation, q: m.match, by: m['created-by'] || m.createdBy || m.subject || '' }));
      return { text: txt, from: from, candidates };
    }
    /* 兜底竞速：Google 与 MyMemory 同时发起，谁先成功用谁 ——
       国内 MyMemory 秒回（Google 要等 15s 超时才放弃），海外 Google 更快，两端体验都不劣化 */
    function firstFulfilled(promises) {
      return new Promise((resolve, reject) => {
        const errs = []; let pending = promises.length;
        if (!pending) { reject(new Error('无可用兜底引擎')); return; }
        promises.forEach((p, i) => Promise.resolve(p).then(resolve, e => {
          errs[i] = e || new Error('网络错误');
          if (--pending === 0) reject(errs.find(Boolean));
        }));
      });
    }
    function translateRace(text, target) {
      return firstFulfilled([googleTranslate(text, target), myMemoryTranslate(text, target)]);
    }
    async function icibaLookup(word) {
      if (!word || !word.trim()) return null;
      const w = word.trim();
      const now = Date.now();
      const hashKey = '7ece94d9f9c202b0d2ec557dg4r9bc';
      const hashMessage = '/dictionary/word/query/web61000006' + now + w + hashKey;
      const signature = md5hex(hashMessage);
      const query = 'client=6&key=1000006&timestamp=' + now + '&word=' + encodeURIComponent(w) + '&signature=' + signature;
      const apiUrl = 'https://dict.iciba.com/dictionary/word/query/web?' + query;
      let data;
      /* 【v1.0.5 修复】请求失败必须向上抛，不能吞成 null：
         吞掉后 icibaErr 为空，面板会误报「词典未收录」，用户被引去怀疑词库而不是网络/TM授权。
         真正的「未收录」走函数末尾的 result 空守卫返回 null，两种情况从此可区分 */
      try { data = await gmFetch(apiUrl); } catch (e) { throw (e || new Error('网络错误')); }
      if (!data || data.status !== 1 || !data.message) return null;
      const msg = data.message;
      if ('baesInfo' in msg) { msg.baseInfo = msg.baesInfo; delete msg.baesInfo; }
      if ('bidce' in msg) { msg.bidec = msg.bidce; delete msg.bidce; }
      const result = { word: w, isZh: false, phonetics: [], families: [], chineseDefs: [], pinyin: '', suggest: [], translateResult: '', translateMsg: '' };
      const bi = msg.baseInfo;
      if (bi) {
        if (bi.translate_result) { result.translateResult = bi.translate_result; result.translateMsg = (bi.translate_msg || '').replace(/。$/, ''); }
        if (Array.isArray(bi.suggest)) result.suggest = bi.suggest.map(s => s.key || s).filter(Boolean);
        const symbols = bi.symbols || [];
        symbols.forEach(sym => {
          const isCN = 'word_symbol' in sym;
          if (isCN) {
            result.isZh = true;
            result.pinyin = String(sym.word_symbol || '').replace(/[\[\]]/g, '').trim();
            if (sym.symbol_mp3) result.phonetics.push({ text: result.pinyin, audio: sym.symbol_mp3, label: '拼' });
          } else {
            if (sym.ph_en) result.phonetics.push({ text: sym.ph_en, audio: sym.ph_en_mp3 || '', label: '英' });
            if (sym.ph_am) result.phonetics.push({ text: sym.ph_am, audio: sym.ph_am_mp3 || '', label: '美' });
            if (!sym.ph_en && !sym.ph_am && sym.ph_tts_mp3) result.phonetics.push({ text: sym.ph_other || '', audio: sym.ph_tts_mp3, label: 'TTS' });
          }
          (sym.parts || []).forEach(part => {
            const pos = part.part || '';
            const means = (part.means || []).map(m => typeof m === 'string' ? m : (m.word_mean || m.text || '')).filter(Boolean);
            if (pos || means.length) result.families.push({ pos, means });
          });
        });
      }
      if (msg.chinese) {
        result.isZh = true;
        if (msg.chinese.zi && msg.chinese.zi.length) {
          msg.chinese.zi.forEach(z => { const def = (z.hanzi || '') + (z.pinyin ? ' ' + z.pinyin : '') + (z.jieshi ? ' ' + z.jieshi : ''); if (z.jieshi) result.chineseDefs.push(def.trim()); });
        }
        if (msg.chinese.ci && msg.chinese.ci.ciyi) {
          const ciyi = typeof msg.chinese.ci.ciyi === 'string' ? [msg.chinese.ci.ciyi] : msg.chinese.ci.ciyi;
          ciyi.forEach(c => { if (typeof c === 'string' && c.trim()) result.chineseDefs.push(c.trim()); });
        }
      }
      if (result.phonetics.length || result.families.length || result.chineseDefs.length || result.translateResult) return result;
      return null;
    }
    async function freeDictLookup(word) {
      if (!word || !/^[a-zA-Z\s'-]+$/.test(word)) return null;
      const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word.trim());
      const data = await gmFetch(url);
      if (!Array.isArray(data) || !data[0]) return null;
      const entry = data[0];
      const result = { word: entry.word || word, phonetics: [], families: [], audio: '' };
      (entry.phonetics || []).forEach(p => {
        const text = (p.text || '').replace(/^\/|\/$/g, '');
        if (text) result.phonetics.push({ text, audio: p.audio || '' });
        if (p.audio && !result.audio) result.audio = p.audio;
      });
      (entry.meanings || []).forEach(m => {
        const pos = m.partOfSpeech || '';
        const defs = (m.definitions || []).map(d => ({ text: d.definition || '', example: d.example || '' })).filter(d => d.text);
        if (pos || defs.length) result.families.push({ pos, defs });
      });
      return result.families.length ? result : null;
    }
    async function deepLTranslate(text, target, key) {
      if (!key) throw new Error('请在设置中填写 DeepL API 密钥');
      const data = await gmFetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: { 'Authorization': 'DeepL-Auth-Key ' + key, 'Content-Type': 'application/json' },
        data: JSON.stringify({ text: [text], target_lang: (target || 'zh').toUpperCase() })
      });
      return { text: (data && data.translations && data.translations[0] && data.translations[0].text) || '', from: (data && data.translations && data.translations[0] && data.translations[0].detected_source_language) || '' };
    }
    async function baiduTranslate(text, target, appId, key) {
      if (!appId || !key) throw new Error('请在设置中填写百度翻译 AppID 和密钥');
      const salt = Date.now().toString();
      const sign = md5hex(appId + text + salt + key);
      const url = 'https://fanyi-api.baidu.com/api/trans/vip/translate?q=' + encodeURIComponent(text)
        + '&from=auto&to=' + target + '&appid=' + appId + '&salt=' + salt + '&sign=' + sign;
      const data = await gmFetch(url);
      if (data.error_code) throw new Error('百度翻译错误 ' + data.error_code);
      return { text: (data.trans_result || []).map(r => r.dst).join('\n'), from: '' };
    }
    async function baiduDictLookup(word, appId, key) {
      if (!appId || !key) return null;
      try {
        const salt = Date.now().toString();
        const sign = md5hex(appId + word + salt + key);
        const url = 'https://fanyi-api.baidu.com/api/trans/vip/translate?q=' + encodeURIComponent(word)
          + '&from=zh&to=en&appid=' + appId + '&salt=' + salt + '&sign=' + sign + '&action=1';
        const data = await gmFetch(url);
        /* 【v1.0.5 P0 修复】不再把「密钥错/网络挂」吞成 null：
           吞掉后用户配了百度密钥却查不到词，永远不知道是密钥错了。
           error_code 带上 error_msg（如 54001 签名错误）向上抛，由调用方 dbg 记录并按需展示 */
        if (!data) throw new Error('百度词典请求失败（网络）');
        if (data.error_code) throw new Error('百度词典错误 ' + data.error_code + (data.error_msg ? '：' + data.error_msg : ''));
        const result = { pinyin: '', en: [], zh: [] };
        const dr = data.dict_result || {};
        try {
          const sym = (dr.simple_means && (dr.simple_means.word_symbol || dr.simple_means.symbols && dr.simple_means.symbols[0] && dr.simple_means.symbols[0].word_symbol)) || '';
          result.pinyin = String(sym).replace(/[\[\]]/g, '').trim();
          result.pinyin = (result.pinyin.match(/[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF'\u0301\u0300\u0303]+/g) || []).join(' ').trim() || result.pinyin;
        } catch (e) {}
        if (Array.isArray(data.trans_result)) {
          data.trans_result.forEach(r => { String(r.dst || '').split(/[;,；，]/).forEach(s => { s = s.trim(); if (s) result.en.push(s); }); });
        }
        if (!result.en.length) {
          try {
            const means = (dr.simple_means && dr.simple_means.means) || [];
            means.forEach(m => { const t = (m.word_mean || m.text || m.word_cont || m.word_third || '').trim(); if (t) result.en.push(t); });
          } catch (e) {}
        }
        const pushZh = (v, depth) => {
          if (!v || depth > 5) return;
          if (Array.isArray(v)) v.forEach(item => pushZh(item, depth + 1));
          else if (typeof v === 'object') {
            if (v.mean_mean) result.zh.push(String(v.mean_mean).trim());
            else if (v.word_mean && !result.zh.includes(String(v.word_mean).trim())) result.zh.push(String(v.word_mean).trim());
            else if (v.text && !v.word_symbol) result.zh.push(String(v.text).trim());
            else if (v.cont) result.zh.push(String(v.cont).trim());
            else if (v.value && typeof v.value === 'string') result.zh.push(v.value.trim());
            for (const k of Object.keys(v)) {
              if (k === 'word_symbol' || k === 'ph_en' || k === 'ph_am' || k === 'parts') continue;
              const sub = v[k];
              if (Array.isArray(sub) || (typeof sub === 'object' && sub !== null)) pushZh(sub, depth + 1);
            }
          } else if (typeof v === 'string') {
            const s = v.trim();
            if (s.length > 1 && !/^[a-zA-Z\s'\u00C0-\u024F\u1E00-\u1EFF]+$/.test(s)) result.zh.push(s);
          }
        };
        try { pushZh(dr.edict, 0); } catch (e) {}
        try { pushZh(dr.zh_means, 0); } catch (e) {}
        try { pushZh(dr.means, 0); } catch (e) {}
        try { pushZh(dr.simple_means && dr.simple_means.means, 0); } catch (e) {}
        result.en = Array.from(new Set(result.en.map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean)));
        result.zh = Array.from(new Set(result.zh.map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean))).slice(0, 5);
        return (result.pinyin || result.en.length || result.zh.length) ? result : null;
      } catch (e) { throw (e || new Error('百度词典请求失败')); }
    }
    async function customTranslate(text, target, url, key) {
      if (!url) throw new Error('请在设置中填写自定义 API 地址');
      if (!/^https:\/\//i.test(url)) throw new Error('自定义 API 地址必须以 https:// 开头');
      const fullUrl = url.replace(/\{q\}/g, encodeURIComponent(text)).replace(/\{tl\}/g, target).replace(/\{key\}/g, encodeURIComponent(key || ''));
      const data = await gmFetch(fullUrl, { headers: key ? { 'Authorization': 'Bearer ' + key } : {} });
      return { text: data.translation || data.text || data.translated || (typeof data.data === 'string' ? data.data : JSON.stringify(data).slice(0, 500)), from: '' };
    }
    function md5hex(str) {
      function ad(x,y){var l=(x&0xffff)+(y&0xffff),m=(x>>16)+(y>>16)+(l>>16);return(m<<16)|(l&0xffff);}
      function rl(n,c){return(n<<c)|(n>>>(32-c));}
      function cm(q,a,b,x,s,t){return ad(rl(ad(ad(a,q),ad(x,t)),s),b);}
      function ff(a,b,c,d,x,s,t){return cm((b&c)|(~b&d),a,b,x,s,t);}
      function gg(a,b,c,d,x,s,t){return cm((b&d)|(c&~d),a,b,x,s,t);}
      function hh(a,b,c,d,x,s,t){return cm(b^c^d,a,b,x,s,t);}
      function ii(a,b,c,d,x,s,t){return cm(c^(b|~d),a,b,x,s,t);}
      var s=unescape(encodeURIComponent(str)),x=[],i;
      x[(s.length>>2)-1]=undefined;for(i=0;i<x.length;i++)x[i]=0;
      for(i=0;i<s.length*8;i+=8)x[i>>5]|=(s.charCodeAt(i/8)&0xff)<<i%32;
      var len=s.length*8;x[len>>5]|=0x80<<len%32;x[(((len+64)>>>9)<<4)+14]=len;
      var a=1732584193,b=-271733879,c=-1732584194,d=271733878;
      for(i=0;i<x.length;i+=16){var oa=a,ob=b,oc=c,od=d;
        a=ff(a,b,c,d,x[i],7,-680876936);d=ff(d,a,b,c,x[i+1],12,-389564586);c=ff(c,d,a,b,x[i+2],17,606105819);b=ff(b,c,d,a,x[i+3],22,-1044525330);
        a=ff(a,b,c,d,x[i+4],7,-176418897);d=ff(d,a,b,c,x[i+5],12,1200080426);c=ff(c,d,a,b,x[i+6],17,-1473231341);b=ff(b,c,d,a,x[i+7],22,-45705983);
        a=ff(a,b,c,d,x[i+8],7,1770035416);d=ff(d,a,b,c,x[i+9],12,-1958414417);c=ff(c,d,a,b,x[i+10],17,-42063);b=ff(b,c,d,a,x[i+11],22,-1990404162);
        a=ff(a,b,c,d,x[i+12],7,1804603682);d=ff(d,a,b,c,x[i+13],12,-40341101);c=ff(c,d,a,b,x[i+14],17,-1502002290);b=ff(b,c,d,a,x[i+15],22,1236535329);
        a=gg(a,b,c,d,x[i+1],5,-165796510);d=gg(d,a,b,c,x[i+6],9,-1069501632);c=gg(c,d,a,b,x[i+11],14,643717713);b=gg(b,c,d,a,x[i],20,-373897302);
        a=gg(a,b,c,d,x[i+5],5,-701558691);d=gg(d,a,b,c,x[i+10],9,38016083);c=gg(c,d,a,b,x[i+15],14,-660478335);b=gg(b,c,d,a,x[i+4],20,-405537848);
        a=gg(a,b,c,d,x[i+9],5,568446438);d=gg(d,a,b,c,x[i+14],9,-1019803690);c=gg(c,d,a,b,x[i+3],14,-187363961);b=gg(b,c,d,a,x[i+8],20,1163531501);
        a=gg(a,b,c,d,x[i+13],5,-1444681467);d=gg(d,a,b,c,x[i+2],9,-51403784);c=gg(c,d,a,b,x[i+7],14,1735328473);b=gg(b,c,d,a,x[i+12],20,-1926607734);
        a=hh(a,b,c,d,x[i+5],4,-378558);d=hh(d,a,b,c,x[i+8],11,-2022574463);c=hh(c,d,a,b,x[i+11],16,1839030562);b=hh(b,c,d,a,x[i+14],23,-35309556);
        a=hh(a,b,c,d,x[i+1],4,-1530992060);d=hh(d,a,b,c,x[i+4],11,1272893353);c=hh(c,d,a,b,x[i+7],16,-155497632);b=hh(b,c,d,a,x[i+10],23,-1094730640);
        a=hh(a,b,c,d,x[i+13],4,681279174);d=hh(d,a,b,c,x[i],11,-358537222);c=hh(c,d,a,b,x[i+3],16,-722521979);b=hh(b,c,d,a,x[i+6],23,76029189);
        a=hh(a,b,c,d,x[i+9],4,-640364487);d=hh(d,a,b,c,x[i+12],11,-421815835);c=hh(c,d,a,b,x[i+15],16,530742520);b=hh(b,c,d,a,x[i+2],23,-995338651);
        a=ii(a,b,c,d,x[i],6,-198630844);d=ii(d,a,b,c,x[i+7],10,1126891415);c=ii(c,d,a,b,x[i+14],15,-1416354905);b=ii(b,c,d,a,x[i+5],21,-57434055);
        a=ii(a,b,c,d,x[i+12],6,1700485571);d=ii(d,a,b,c,x[i+3],10,-1894986606);c=ii(c,d,a,b,x[i+10],15,-1051523);b=ii(b,c,d,a,x[i+1],21,-2054922799);
        a=ii(a,b,c,d,x[i+8],6,1873313359);d=ii(d,a,b,c,x[i+15],10,-30611744);c=ii(c,d,a,b,x[i+6],15,-1560198380);b=ii(b,c,d,a,x[i+13],21,1309151649);
        a=ii(a,b,c,d,x[i+4],6,-145523070);d=ii(d,a,b,c,x[i+11],10,-1120210379);c=ii(c,d,a,b,x[i+2],15,718787259);b=ii(b,c,d,a,x[i+9],21,-343485551);
        a=ad(a,oa);b=ad(b,ob);c=ad(c,oc);d=ad(d,od);
      }
      var h='',t='0123456789abcdef';
      [a,b,c,d].forEach(function(v){for(var j=0;j<4;j++){var by=(v>>>(j*8))&0xff;h+=t.charAt((by>>>4)&0xf)+t.charAt(by&0xf);}});
      return h;
    }
    function speak(text, lang) {
      try { if (window.speechSynthesis) { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = lang || 'en-US'; u.rate = 0.9; speechSynthesis.speak(u); return true; } } catch (_) {}
      return false;
    }
    function playAudio(url, word, lang) {
      if (url) { try { const a = new Audio(url); a.play().catch(() => speak(word, lang)); return; } catch (_) {} }
      if (word) speak(word, lang);
    }
    function renderDict(d) {
      let html = '<div class="sh-tr-head"><span class="sh-tr-word">' + esc(d.word) + '</span>';
      if (d.phonetics.length) {
        d.phonetics.forEach((p, i) => {
          html += '<span class="sh-tr-speak" data-audio="' + esc(p.audio) + '" data-word="' + esc(d.word) + '" data-lang="en-US">' + ICON_SPK + '</span>'
            + '<span class="sh-tr-ph"><span class="sh-tr-spk">' + (i === 0 ? '英' : '美') + '</span>/' + esc(p.text) + '/</span>';
        });
      } else {
        html += '<span class="sh-tr-speak" data-word="' + esc(d.word) + '" data-lang="en-US">' + ICON_SPK + '</span>';
      }
      html += '</div><div class="sh-tr-body">';
      d.families.forEach(f => {
        if (f.pos) html += '<div class="sh-tr-pos">' + esc(f.pos) + '</div>';
        f.defs.slice(0, 3).forEach(def => {
          const text = typeof def === 'string' ? def : (def.text || '');
          const example = typeof def === 'object' ? (def.example || '') : '';
          html += '<div class="sh-tr-def">' + esc(text) + (example ? '<div class="sh-tr-ex">"' + esc(example) + '"</div>' : '') + '</div>';
        });
      });
      html += '</div><div class="sh-tr-engine">词典</div>';
      return html;
    }
    function renderTranslate(text, from, engine) {
      const src = text.length > 40 ? text.slice(0, 40) + '…' : text;
      return '<div class="sh-tr-head"><span class="sh-tr-word">' + esc(src) + '</span>'
        + '<span class="sh-tr-speak" data-word="' + esc(text) + '"></span></div>'
        + '<div class="sh-tr-body"><div class="sh-tr-trans">' + esc(text) + '</div></div>'
        + '<div class="sh-tr-engine">' + esc(engine) + '</div>';
    }
    /* 【v1.0.5 新增】兜底翻译富卡片：对齐 iciba 卡的信息密度 ——
       主译文 + 词性/词条/反向翻译（Google dt=bd）+ 多译者候选（MyMemory matches），
       不再是干巴巴一行字。所有块可选，缺就跳过 */
    function renderTransRich(o) {
      let html = '<div class="sh-tr-head"><span class="sh-tr-word">' + esc(o.src.length > 40 ? o.src.slice(0, 40) + '…' : o.src) + '</span>'
        + '<span class="sh-tr-speak" data-word="' + esc(o.src) + '" data-lang="' + (o.from === 'zh' || detectLang(o.src) === 'zh' ? 'zh-CN' : 'en-US') + '">' + ICON_SPK + '</span>'
        + (o.from ? '<span class="sh-tr-ph"><span class="sh-tr-spk">检测</span>' + esc(o.from) + '</span>' : '')
        + '</div><div class="sh-tr-body">';
      html += '<div class="sh-tr-trans">' + esc(o.text) + '</div>';
      (o.families || []).forEach(f => {
        html += '<div class="sh-tr-def">';
        if (f.pos) html += '<span class="sh-tr-pos" style="display:inline-block;margin-right:6px">' + esc(f.pos) + '</span>';
        if (f.terms && f.terms.length) html += f.terms.map(t => esc(t)).join('; ');
        if (f.rev && f.rev.length) html += '<span style="opacity:.55;font-size:12px;margin-left:6px">⇄ ' + f.rev.slice(0, 4).map(r => esc(r)).join(' / ') + '</span>';
        html += '</div>';
      });
      if (o.candidates && o.candidates.length) {
        html += '<div style="opacity:.55;font-size:12px;margin-top:6px">其他候选</div>';
        o.candidates.forEach(c => {
          html += '<div class="sh-tr-def">' + esc(c.t)
            + (c.q ? '<span style="opacity:.5;font-size:11px;margin-left:6px">匹配 ' + Math.round(c.q * 100) + '%</span>' : '')
            + (c.by ? '<span style="opacity:.4;font-size:11px;margin-left:6px">' + esc(String(c.by).slice(0, 20)) + '</span>' : '')
            + '</div>';
        });
      }
      html += '</div><div class="sh-tr-engine">' + esc(o.engine || '兜底翻译') + '</div>';
      return html;
    }
    function renderIciba(d, transText, engineName) {
      const lang = d.isZh ? 'zh-CN' : 'en-US';
      let html = '<div class="sh-tr-head"><span class="sh-tr-word">' + esc(d.word) + '</span>'
        + '<span class="sh-tr-speak" data-word="' + esc(d.word) + '" data-lang="' + lang + '">' + ICON_SPK + '</span>';
      d.phonetics.forEach(p => {
        if (p.text) html += '<span class="sh-tr-ph"><span class="sh-tr-spk">' + esc(p.label) + '</span>/' + esc(p.text) + '/</span>';
        if (p.audio) html += '<span class="sh-tr-speak" data-audio="' + esc(p.audio) + '" data-word="' + esc(d.word) + '" data-lang="' + lang + '">' + ICON_SPK + '</span>';
      });
      html += '</div><div class="sh-tr-body">';
      if (d.families.length) {
        d.families.forEach(f => {
          if (f.pos) html += '<div class="sh-tr-pos">' + esc(f.pos) + '</div>';
          if (f.means.length) html += '<div class="sh-tr-def">' + f.means.map(m => esc(m)).join('; ') + '</div>';
        });
      }
      if (d.chineseDefs.length) {
        html += '<div class="sh-tr-defs">';
        d.chineseDefs.forEach((def, i) => { html += '<div class="sh-tr-def"><span class="sh-tr-def-num">' + (i + 1) + '.</span>' + esc(def) + '</div>'; });
        html += '</div>';
      }
      if (d.translateResult && !d.families.length && !d.chineseDefs.length) {
        html += '<div class="sh-tr-trans">' + esc(d.translateResult) + '</div>';
        if (d.translateMsg) html += '<div style="font-size:12px;opacity:.5;text-align:right;margin-top:4px">' + esc(d.translateMsg) + '</div>';
      }
      if (transText && transText.trim() && d.families.length) {
        const icibaMeans = d.families.flatMap(f => f.means).join(' ').toLowerCase();
        if (!icibaMeans.includes(transText.trim().toLowerCase())) html += '<div class="sh-tr-trans-extra">' + esc(transText) + '</div>';
      }
      if (d.suggest.length) {
        html += '<div style="opacity:.6;font-size:12px;margin-top:8px">do you mean?</div>';
        d.suggest.forEach(s => { html += '<span style="color:#1677ff;cursor:pointer;margin-right:8px;font-size:13px" class="sh-tr-suggest">' + esc(s) + '</span>'; });
      }
      html += '</div><div class="sh-tr-engine">iciba 词典' + (transText ? ' · ' + esc(engineName || '') : '') + '</div>';
      return html;
    }
    function renderFull(o) {
      const src = o.src || '';
      const isZh = o.srcLang === 'zh';
      const lang = isZh ? 'zh-CN' : 'en-US';
      let html = '<div class="sh-tr-head"><span class="sh-tr-word">' + esc(src) + '</span>'
        + '<span class="sh-tr-speak" data-word="' + esc(src) + '" data-lang="' + lang + '">' + ICON_SPK + '</span>';
      if (isZh && o.baiduDict && o.baiduDict.pinyin) html += '<span class="sh-tr-pinyin">' + esc(o.baiduDict.pinyin) + '</span>';
      html += '</div>';
      if (!isZh && o.dict && o.dict.word) html += '<span class="sh-tr-speak" data-word="' + esc(o.dict.word) + '" data-lang="en-US">' + ICON_SPK + '</span>';
      html += '<div class="sh-tr-body">';
      if (o.dict && o.dict.phonetics && o.dict.phonetics.length) {
        html += '<div class="sh-tr-phs">';
        o.dict.phonetics.forEach((p, i) => { html += '<span class="sh-tr-ph"><span class="sh-tr-spk">' + (i === 0 ? '英' : '美') + '</span>/' + esc(p.text) + '/</span>'; });
        html += '</div>';
      }
      if (o.trans) html += '<div class="sh-tr-trans">' + esc(o.trans) + '</div>';
      if (isZh && o.baiduDict && o.baiduDict.en && o.baiduDict.en.length) html += '<div class="sh-tr-en-list">' + o.baiduDict.en.map(t => esc(t)).join('; ') + '</div>';
      if (o.dict && o.dict.families && o.dict.families.length) {
        o.dict.families.forEach(f => {
          if (f.pos) html += '<div class="sh-tr-pos">' + esc(f.pos) + '</div>';
          f.defs.slice(0, 3).forEach(def => {
            const text = typeof def === 'string' ? def : (def.text || '');
            const example = typeof def === 'object' ? (def.example || '') : '';
            html += '<div class="sh-tr-def">' + esc(text) + (example ? '<div class="sh-tr-ex">"' + esc(example) + '"</div>' : '') + '</div>';
          });
        });
      }
      if (isZh && o.baiduDict && o.baiduDict.zh && o.baiduDict.zh.length) {
        html += '<div class="sh-tr-defs">';
        o.baiduDict.zh.forEach((def, i) => { html += '<div class="sh-tr-def"><span class="sh-tr-def-num">' + (i + 1) + '.</span>' + esc(def) + '</div>'; });
        html += '</div>';
      }
      html += '</div><div class="sh-tr-engine">' + esc(o.engineName || '') + ' · 词典</div>';
      return html;
    }
    const ENGINE_NAMES = { iciba: 'iciba 词典', mymemory: 'MyMemory', google: 'Google Translate', deepl: 'DeepL', baidu: '百度翻译', custom: '自定义 API' };
    async function translateWith(text, target) {
      const TR = ssTrans();
      /* 【v1.0.5 P2 修复】未知引擎显式报错，不再静默当 Google 跑——
         否则配置串损坏/未来新增引擎 id 时，用户看到的是 Google 超时，排查方向全错 */
      const KNOWN_ENGINES = ['iciba', 'google', 'mymemory', 'deepl', 'baidu', 'custom'];
      if (TR.engine && !KNOWN_ENGINES.includes(TR.engine)) throw new Error('未知翻译引擎：' + TR.engine + '（请到「划词搜索 → 翻译设置」重新选择）');
      if (TR.engine === 'deepl') return await deepLTranslate(text, target, TR.deeplKey);
      if (TR.engine === 'baidu') return await baiduTranslate(text, target, TR.baiduId, TR.baiduKey);
      if (TR.engine === 'custom') return await customTranslate(text, target, TR.customUrl, TR.customKey);
      /* 【v1.0.5】显式选择了 google / mymemory 就直连该引擎（用户明确指定，不代做主）；
         只有 iciba 词典引擎（仅能查词）的兜底才走 Google / MyMemory 竞速 */
      if (TR.engine === 'mymemory') return await myMemoryTranslate(text, target);
      if (TR.engine === 'google') return await googleTranslate(text, target);
      /* 默认（含 iciba）：竞速兜底 —— 国内 MyMemory 快，海外 Google 快 */
      return await translateRace(text, target);
    }
    function pickMainEngWord(text) {
      if (!text) return '';
      const m = String(text).trim().match(/[a-zA-Z]+(?:['-][a-zA-Z]+)*/);
      return m ? m[0] : '';
    }
    const transCache = new Map();
    function cacheGet(key) { if (!transCache.has(key)) return undefined; const v = transCache.get(key); transCache.delete(key); transCache.set(key, v); return v; }
    function cacheSet(key, val) { if (transCache.has(key)) transCache.delete(key); transCache.set(key, val); if (transCache.size > 80) transCache.delete(transCache.keys().next().value); }
    let transSeq = 0;
    async function doTranslateAndShow(text, rect) {
      const seq = ++transSeq;
      const TR = ssTrans();
      const cacheKey = TR.engine + '|' + text.trim();
      const cached = cacheGet(cacheKey);
      if (cached !== undefined) { showTransPanel(rect, cached); return; }
      showTransPanel(rect, '<div class="sh-tr-loading"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="31 16"/></svg></div>');
      const trimmed = text.trim();
      const srcLang = detectLang(trimmed);
      const isEnWord = /^[a-zA-Z]+(?:['-][a-zA-Z]+)*$/.test(trimmed) && trimmed.length <= 40;
      const isZhWord = srcLang === 'zh' && /^[\u4e00-\u9fff]+$/.test(trimmed) && trimmed.length <= 4;
      const isWord = isEnWord || isZhWord;
      const engineName = ENGINE_NAMES[TR.engine] || TR.engine;
      const isIcibaEngine = TR.engine === 'iciba';
      try {
        const showResult = (html) => { if (seq !== transSeq) return; cacheSet(cacheKey, html); showTransPanel(rect, html); };
      if (isIcibaEngine) {
        let icibaErr = null;
        const icibaRes = await icibaLookup(trimmed).catch(e => { icibaErr = (e && e.message) || '网络错误'; return null; });
        if (icibaRes) { showResult(renderIciba(icibaRes, '', engineName)); return; }
        if (isEnWord) { const dict = await freeDictLookup(trimmed).catch(() => null); if (dict) { showResult(renderDict(dict)); return; } }
        let tgt = 'zh';
        if (TR.forceAutoTarget !== false) { if (srcLang === 'zh') tgt = 'en'; else if (srcLang === 'en') tgt = 'zh'; }
        const r = await translateRace(trimmed, tgt).catch(e => ({ _err: e.message }));
        if (r && !r._err) { showResult(renderTransRich({ src: trimmed, text: r.text, from: r.from, families: r.families || [], candidates: r.candidates || [], engine: '兜底 · Google / MyMemory' })); return; }
        // iciba 仅查词典；句子/中文需走兜底竞速，Google 在国内常被拦截、MyMemory 免费额度有限
        const reason = icibaErr ? ('iciba 请求失败：' + icibaErr) : 'iciba 词典未收录该内容（仅支持单词释义，句子请走翻译引擎）';
        const tip = (!TR.proxyUrl)
          ? '。两条兜底都失败：可在「划词搜索 → 翻译设置」填 CORS 代理前缀，或把引擎改为 DeepL / 百度翻译并填密钥'
          : '';
        showResult('<div class="sh-tr-err">' + esc(reason) + '，兜底翻译也失败：' + esc(r ? r._err : '请检查网络') + esc(tip) + '</div>');
        return;
      }
        if (isWord) {
          const tgt = isZhWord ? 'en' : 'zh';
          let baiduDictErr = null;
          const [icibaRes, transRes] = await Promise.all([
            icibaLookup(trimmed).catch(e => { dbg('[NetClean] 辅助 iciba 查询失败：' + ((e && e.message) || e)); return null; }),
            translateWith(trimmed, tgt).catch(e => ({ _err: e.message }))
          ]);
          const trans = (transRes && !transRes._err) ? transRes : null;
          if (icibaRes) { showResult(renderIciba(icibaRes, trans ? trans.text : '', engineName)); return; }
          if (isEnWord) {
            const dict = trans ? await freeDictLookup(trimmed).catch(() => null) : null;
            if (dict && trans) { showResult(renderFull({ src: trimmed, srcLang: 'en', trans: trans.text, dict, engineName })); return; }
            if (dict) { showResult(renderDict(dict)); return; }
          } else {
            const engWord = trans ? pickMainEngWord(trans.text) : '';
            const dict = engWord ? await freeDictLookup(engWord).catch(() => null) : null;
            /* 【v1.0.5】百度词典错误不再与「无词条」混同：记录错误，全失败时如实展示 */
            const baiduDict = (TR.baiduId && TR.baiduKey) ? await baiduDictLookup(trimmed, TR.baiduId, TR.baiduKey).catch(e => { baiduDictErr = (e && e.message) || '请求失败'; dbg('[NetClean] 百度词典查询失败：' + baiduDictErr); return null; }) : null;
            if (baiduDict || dict) { showResult(renderFull({ src: trimmed, srcLang: 'zh', trans: trans ? trans.text : null, dict: dict, baiduDict: baiduDict, engineName })); return; }
          }
          if (trans) { showResult(renderTranslate(trans.text, trans.from || '', engineName)); return; }
          showResult('<div class="sh-tr-err">翻译失败：' + esc(transRes ? transRes._err : '未知错误') + (baiduDictErr ? '（百度词典：' + esc(baiduDictErr) + '）' : '') + '</div>');
          return;
        }
        let tgt = TR.target || 'zh';
        if (TR.forceAutoTarget !== false) { if (srcLang === 'zh') tgt = 'en'; else if (srcLang === 'en') tgt = 'zh'; }
        const r = await translateWith(text, tgt);
        /* 【v1.0.5】短语结果也走富卡片：带出 Google 词典块 / MyMemory 候选列表，与 iciba 卡同信息密度 */
        showResult(renderTransRich({ src: String(text).trim(), text: r.text, from: r.from, families: r.families || [], candidates: r.candidates || [], engine: engineName }));
      } catch (e) {
        if (seq === transSeq) showTransPanel(rect, '<div class="sh-tr-err">翻译失败：' + esc(e.message) + '</div>');
      }
    }

    /* —— 注入样式（弹条 / 翻译面板 / toast）—— */
    GM_addStyle(`
:root{--sh-bg-rgb:42,42,46;--sh-text:#fff;--sh-opacity:1;--sh-blur:0px;--sh-hover-rgb:255,255,255;--sh-hover-op:.18;--sh-border:transparent}
#sh-bar{position:absolute;z-index:${NC_Z_TOP};display:flex;gap:6px;padding:8px;background:rgba(var(--sh-bg-rgb),var(--sh-opacity));border:1px solid var(--sh-border);border-radius:14px;box-shadow:0 6px 22px rgba(0,0,0,.22);font-size:13px;opacity:0;transform:translateY(6px) scale(.96);transition:opacity .12s ease,transform .16s cubic-bezier(.25,.8,.25,1);will-change:opacity,transform;-webkit-backdrop-filter:blur(var(--sh-blur));backdrop-filter:blur(var(--sh-blur));color:var(--sh-text)}
#sh-bar.sh-show{opacity:1;transform:translateY(0) scale(1)}
#sh-bar.sh-hide{opacity:0;transform:translateY(4px) scale(.98)}
#sh-trans{position:absolute;z-index:2147483646;min-width:280px;max-width:420px;background:rgba(var(--sh-bg-rgb),var(--sh-opacity));border:1px solid var(--sh-border);border-radius:14px;box-shadow:0 8px 28px rgba(0,0,0,.25);color:var(--sh-text);opacity:0;transform:translateY(6px);transition:opacity .15s,transform .2s cubic-bezier(.25,.8,.25,1);-webkit-backdrop-filter:blur(var(--sh-blur));backdrop-filter:blur(var(--sh-blur));overflow:hidden}
#sh-trans.sh-show{opacity:1;transform:translateY(0)}
.sh-toast{position:fixed;left:50%;bottom:80px;background:rgba(0,0,0,.78);color:#fff;padding:8px 18px;border-radius:20px;z-index:${NC_Z_TOP};font-size:14px;opacity:0;transform:translateX(-50%) translateY(8px);transition:opacity .2s,transform .25s}
.sh-toast.sh-show{opacity:1;transform:translateX(-50%) translateY(0)}
@media (prefers-reduced-motion: reduce){#sh-bar,#sh-trans,.sh-toast{transition:none!important}}
`);

    // 弹条/翻译面板内部样式：注入到各自的 Shadow DOM，隔离站点 CSS 污染
    const SH_INNER_CSS = `
.sh-btn{width:36px;height:36px;display:flex;align-items:center;justify-content:center;color:var(--sh-text);border-radius:10px;cursor:pointer;transition:background .15s,transform .15s}
.sh-btn:hover{background:rgba(var(--sh-hover-rgb),var(--sh-hover-op));transform:translateY(-2px)}
.sh-btn:active{transform:scale(.92)}
.sh-btn svg,.sh-btn img{width:22px;height:22px;pointer-events:none}
.sh-tr-head{display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:12px 14px 8px}
.sh-tr-word{font-size:18px;font-weight:700}
.sh-tr-speak{cursor:pointer;opacity:.7;transition:opacity .15s;display:flex;align-items:center}.sh-tr-speak:hover{opacity:1}
.sh-tr-speak svg{width:18px;height:18px}
.sh-tr-ph{font-size:14px;opacity:.7;font-family:Consolas,monospace}
.sh-tr-ph .sh-tr-spk{font-size:11px;opacity:.6;margin-right:2px}
.sh-tr-phs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:6px}
.sh-tr-body{padding:0 14px 12px;max-height:320px;overflow-y:auto}
.sh-tr-pos{font-size:12px;font-style:italic;opacity:.6;margin:8px 0 2px;font-weight:600}
.sh-tr-def{font-size:13px;line-height:1.6;padding:2px 0 2px 12px;position:relative}
.sh-tr-def::before{content:'';position:absolute;left:2px;top:9px;width:4px;height:4px;border-radius:50%;background:currentColor;opacity:.4}
.sh-tr-trans-extra{margin-top:8px;padding-top:8px;border-top:1px dashed rgba(128,128,128,.3);font-size:13px;opacity:.85}
.sh-tr-pinyin{font-size:14px;opacity:.75;font-style:italic;font-family:Consolas,monospace}
.sh-tr-en-list{font-size:14px;font-weight:600;line-height:1.5;margin:6px 0 10px;padding:6px 10px;background:rgba(22,119,255,.08);border-radius:6px;border-left:3px solid #1677ff}
.sh-tr-defs{margin-top:6px}
.sh-tr-ex{margin:4px 0 4px 24px;font-size:12px;font-style:italic;opacity:.7;padding-left:8px;border-left:2px solid currentColor}
.sh-tr-def-num{display:inline-block;min-width:18px;height:18px;line-height:18px;text-align:center;font-size:11px;font-weight:600;background:#1677ff;color:#fff;border-radius:9px;margin-right:6px;vertical-align:middle}
.sh-tr-trans{font-size:14px;font-weight:600;margin-top:4px}
.sh-tr-engine{font-size:11px;opacity:.4;text-align:right;padding:4px 14px}
.sh-tr-loading{padding:20px;text-align:center;opacity:.5;font-size:13px}
.sh-tr-loading svg{width:20px;height:20px;animation:sh-spin 1s linear infinite}
@keyframes sh-spin{to{transform:rotate(360deg)}}
.sh-tr-err{padding:16px 14px;color:#ff6b6b;font-size:13px}`;

    // 安全挂载：优先 Shadow DOM 隔离站点 CSS；不支持时降级为直接挂宿主（旧行为）
    function shMount(host, html) {
      try { const sr = host.attachShadow({ mode: 'open' }); sr.innerHTML = '<style>' + SH_INNER_CSS + '</style>' + html; return sr; }
      catch (e) { host.innerHTML = html; return host; }
    }

    /* —— 启动 —— */
    applyTheme();
    try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (ssTheme().mode === 'auto') applyTheme(); }); } catch (_) {}
    setInterval(() => { if (ssTheme().mode === 'time') applyTheme(); }, 60000);

    /* —— 划词监听（捕获模式，不受页面 stopPropagation 影响）—— */
    function isInTextInput(el) {
      if (!el) return false;
      if (el.tagName === 'TEXTAREA') return true;
      if (el.tagName === 'INPUT' && !SKIP_INPUT_TYPES.test((el.type || 'text').toLowerCase())) return true;
      if (el.isContentEditable) return true;
      return false;
    }
    function showBarSafe(text, rect) {
      lastText = text;
      showBar(text, rect);
      barShownAt = Date.now();
      if (ssTrans().auto) doTranslateAndShow(text, rect);
    }
    document.addEventListener('mousedown', e => {
      if (bar && !(e.target.closest && e.target.closest('#sh-bar'))) removeBar();
      if (transPanel && !(e.target.closest && e.target.closest('#sh-trans'))) removeTransPanel();
    }, true);
    document.addEventListener('selectionchange', () => {
      // 展示后短暂宽限：避免页面自身选区 UI（如 B站复制条）误清选区而误删弹条。
      // 注意：早期版本会在 activeElement 是文本输入框时清空 lastText，
      // 但同一次 selectionchange 紧接着比较 info.text !== lastText 必然成立（info 来自外部页面 selection），
      // 导致刚显示的 bar 在 300ms 后被误删（B-划词-01：百度 #kw 里 Ctrl+A+粘贴后划词失效）。
      // mouseup/keyup 里的 isInTextInput(ae) && info.text === lastText 短路已经处理了"重复显示同一文本"，不需要此处清空。
      if (bar && Date.now() - barShownAt > 300) {
        const info = readSelection(null);
        if (!info || info.text !== lastText) { removeBar(); removeTransPanel(); }
      }
    });
    document.addEventListener('mouseup', e => {
      if (e.target.closest && e.target.closest('#sh-bar')) return;
      if (e.target.closest && e.target.closest('#sh-trans')) return;
      if (lastRAF) cancelAnimationFrame(lastRAF);
      lastRAF = requestAnimationFrame(() => {
        lastRAF = 0;
        const info = readSelection(e);
        if (!info) {
          // 【B-划词-04 失效诊断】mouseup 命中但 readSelection 拿不到选区：
          // 可能 ① window.getSelection() 范围为空（百度 SPA 后偶发 selection 被自家脚本重置）；
          //     ② activeElement 是 INPUT/TEXTAREA 但内部 selectionStart===selectionEnd；
          //     ③ 选中范围超过 2000 字符被主动拒绝。
          dbg('[NetClean] mouseup: readSelection=null, target=' + (e.target && e.target.tagName) +
              ', ae=' + (document.activeElement && document.activeElement.tagName) +
              ', href=' + (typeof HREF === 'function' ? HREF() : HREF));
          removeBar(); removeTransPanel();
          return;
        }
        const ae = document.activeElement;
        if (isInTextInput(ae) && info.text === lastText) return;
        dbg('[NetClean] mouseup: 显示弹条, text="' + info.text.slice(0, 24) + (info.text.length > 24 ? '…' : '') +
            '" (' + info.text.length + ' chars), ae=' + (ae && ae.tagName));
        showBarSafe(info.text, info.rect);
      });
    }, true);
    document.addEventListener('pointerup', e => {
      if (e.pointerType === 'mouse') {
        const barEl = document.getElementById('sh-bar');
        if (barEl && barEl.contains(e.target)) return;
        const trans = document.getElementById('sh-trans');
        if (trans && trans.contains(e.target)) return;
        const info = readSelection(e);
        if (!info || info.text === lastText) return;
        if (!barEl) showBarSafe(info.text, info.rect);
      } else {
        if (e.target.closest && (e.target.closest('#sh-bar') || e.target.closest('#sh-trans'))) return;
        setTimeout(() => {
          const info = readSelection(e);
          if (!info) return;
          if (info.text === lastText && bar) return;
          showBarSafe(info.text, info.rect);
        }, 100);
      }
    }, true);
    // 移动端触摸选择（兼容 Kiwi/Yandex 等手机油猴浏览器）
    document.addEventListener('touchend', e => {
      if (e.target.closest && (e.target.closest('#sh-bar') || e.target.closest('#sh-trans'))) return;
      setTimeout(() => {
        const info = readSelection(e);
        if (!info) return;
        if (info.text === lastText && bar) return;
        showBarSafe(info.text, info.rect);
      }, 120);
    }, true);
    document.addEventListener('keyup', e => {
      if (!(e.shiftKey || e.key === 'Control' || e.key === 'Meta' || e.key === 'A' || e.key.startsWith('Arrow'))) return;
      const info = readSelection(e);
      if (!info) return removeBar();
      const ae = document.activeElement;
      if (isInTextInput(ae) && info.text === lastText) return;
      showBarSafe(info.text, info.rect);
    }, { passive: true });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { removeBar(); removeTransPanel(); } });
    let scrollTimer = 0;
    window.addEventListener('scroll', () => {
      if (!bar && !transPanel) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const info = readCurrentSelection();
        if (!info) { removeBar(); removeTransPanel(); }
        else { placeBar(info.rect); if (transPanel) repositionTransPanel(info.rect); }
      }, 60);
    }, { passive: true });
    dbg('[NetClean] 划词搜索初始化完成，已挂载 document 全局监听器（mousedown/selectionchange/mouseup/pointerup/touchend/keyup/keydown/scroll）');
    // 【B-划词-05 真正修复】暴露闭包重置函数，让 SPA hook 在百度 React 重写切换结果页后
    //   主动 removeBar + 清空 lastText/lastRAF/barShownAt/transPanel 等所有内部状态，
    //   等价于"重新 init"——用户视角即"刷新就恢复"。scheduleProcess() 只跑 getActiveHandlers()
    //   （processBaidu 等 DOM 处理器），不重跑 initSelectionSearch，所以必须显式 reset 内部状态。
    try {
      window.__NC_RESET_SELECTION = function() {
        try { removeBar(); } catch (e) { dbg('[NetClean] reset removeBar 异常', e); }
        try { removeTransPanel(); } catch (e) { dbg('[NetClean] reset removeTransPanel 异常', e); }
        try { lastText = ''; } catch (e) { dbg('[NetClean] reset lastText 异常', e); }
        try { barShownAt = 0; } catch (e) { dbg('[NetClean] reset barShownAt 异常', e); }
        try { if (lastRAF) { cancelAnimationFrame(lastRAF); lastRAF = 0; } } catch (e) { dbg('[NetClean] reset lastRAF 异常', e); }
        dbg('[NetClean] 已重置划词闭包状态（removeBar + removeTransPanel + 清空 lastText/lastRAF/barShownAt）');
        return true;
      };
      dbg('[NetClean] 已暴露 window.__NC_RESET_SELECTION() —— SPA hook 会在 URL 变化时自动调');
    } catch (e) { dbg('[NetClean] 暴露 __NC_RESET_SELECTION 失败', e); }
    // 【B-划词-04 手动诊断】失效页面无需自动 dbg，直接在 Console 调 window.__NC_SEL_DEBUG() 查看 selection / activeElement / readSelection 实时状态
    try {
      window.__NC_SEL_DEBUG = function() {
        try {
          const sel = window.getSelection ? window.getSelection() : null;
          const ae = document.activeElement;
          const info = readSelection(null);
          const out = {
            ts: new Date().toISOString(),
            href: typeof HREF === 'function' ? HREF() : HREF,
            bar: !!bar,
            lastText: lastText ? lastText.slice(0, 60) : '',
            barShownAtDeltaMs: barShownAt ? (Date.now() - barShownAt) : null,
            // 当前 selection 状态
            sel_rangeCount: sel ? sel.rangeCount : null,
            sel_anchorNode: sel && sel.anchorNode ? (sel.anchorNode.nodeType === 1 ? ('<' + sel.anchorNode.tagName + (sel.anchorNode.id ? '#' + sel.anchorNode.id : '') + '>') : '#text') : null,
            sel_focusNode: sel && sel.focusNode ? (sel.focusNode.nodeType === 1 ? ('<' + sel.focusNode.tagName + (sel.focusNode.id ? '#' + sel.focusNode.id : '') + '>') : '#text') : null,
            sel_collapsed: sel ? sel.isCollapsed : null,
            sel_textLen: sel ? sel.toString().length : 0,
            sel_textPreview: sel ? sel.toString().slice(0, 80) : null,
            // activeElement 状态
            ae_tag: ae ? ae.tagName : null,
            ae_id: ae ? ae.id : null,
            ae_class: ae ? (typeof ae.className === 'string' ? ae.className.slice(0, 60) : '') : null,
            ae_isTextInput: ae ? isInTextInput(ae) : null,
            // readSelection 输出
            readSelection_result: info,
            // DOM 状态
            bodyHasBar: !!document.getElementById('sh-bar'),
            bodyHasTransPanel: !!document.getElementById('sh-trans'),
            hideRules: document.documentElement.className,
            // 模块健康
            shMounts: window.__NC_DEBUG ? '?ncdebug 已开启' : '?ncdebug 未开启，建议加 ?ncdebug=1 重测'
          };
          try { console.log('%c[NetClean __NC_SEL_DEBUG]', 'color:#3b82f6;font-weight:bold'); } catch (_) {}
          console.log(JSON.stringify(out, null, 2));
          console.log('[NetClean __NC_SEL_DEBUG] 原始对象:', out);
          return out;
        } catch (err) {
          try { console.error('[NetClean __NC_SEL_DEBUG] 失败:', err && err.message || err); } catch (_) {}
          return null;
        }
      };
      dbg('[NetClean] 已暴露 window.__NC_SEL_DEBUG() —— 在失效的新搜索结果页 Console 直接调用可查看 selection/activeElement/readSelection 实时状态');
    } catch (e) { dbg('[NetClean] 暴露 __NC_SEL_DEBUG 失败', e); }
  }

  function maybeShowOnboarding() {
    const card = document.createElement('div');
    card.id = 'adc-onboard';
    card.className = 'adc-onboard-backdrop';
    card.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,.55);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);z-index:' + NC_Z_TOP + ';display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Microsoft YaHei",sans-serif;padding:20px;';
    const features = [
      { icon: '🔍', t: '搜索结果美化', badge: '已开启', d: '百度 / Google / Bing 结果改为卡片式布局，安装即生效。' },
      { icon: '🛡', t: '广告过滤', badge: '按需开启', d: '覆盖百度、Google、B站、YouTube、知乎等 20+ 站点广告与推广。' },
      { icon: '🎬', t: '视频与社区工具', badge: '按需开启', d: 'B站画质解锁、YouTube 旋转/翻转、好看视频暂停广告屏蔽等。' },
      { icon: '🔑', t: '验证码识别', badge: '可选', d: '独立可选模块，默认关闭；可在「验证码识别」页开启并按站点触发。' },
      { icon: '⚡', t: '性能优化', badge: '按需开启', d: '默认仅美化开启；其余功能默认关闭，可在「性能优化」页按域名精细控制。' }
    ];
    card.innerHTML = `
      <div class="adc-onboard-card" role="dialog" aria-modal="true">
        <div class="adc-onboard-header">
          <div class="adc-onboard-brand">
            <div class="adc-onboard-logo">🛡</div>
            <div>
              <div class="adc-onboard-title">欢迎使用 广告净化</div>
              <div class="adc-onboard-subtitle">智能过滤 · 搜索美化 · 安全省流</div>
            </div>
          </div>
          <span class="adc-onboard-ver">v${VERSION}</span>
        </div>
        <div class="adc-onboard-body">
          <p class="adc-onboard-intro">为兼顾性能与隐私，安装后仅「搜索结果美化」默认开启，其余功能请按需打开。下面是核心能力一览：</p>
          <div class="adc-onboard-features">
            ${features.map(f => `
              <div class="adc-onboard-feature">
                <div class="adc-onboard-feature-icon">${f.icon}</div>
                <div class="adc-onboard-feature-main">
                  <div class="adc-onboard-feature-title">${f.t}<span class="adc-onboard-feature-badge ${f.badge === '已开启' ? 'on' : ''}">${f.badge}</span></div>
                  <div class="adc-onboard-feature-desc">${f.d}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="adc-onboard-disclaimer">
            <div class="adc-onboard-disclaimer-title">⚠ 使用条款与免责声明（请先阅读约 5 秒）</div>
            <ul class="adc-onboard-disclaimer-list">
              <li>本脚本是<strong>在你本地浏览器内运行的浏览增强工具</strong>，所有功能均在你的设备上执行，不收集你的浏览内容。</li>
              <li><strong>广告 / 弹窗过滤</strong>会改变部分网站的展示与营收模式，请知悉并自行评估对网站的影响。</li>
              <li><strong>视频下载</strong>通过跳转至你选择的第三方站点实现，相关下载行为须遵守该站点与内容方的服务条款与版权规定。</li>
              <li><strong>验证码识别</strong>为独立可选模块、默认关闭；开启后自动识别可能<strong>违反部分网站的服务条款</strong>，由此产生的账号限制等后果由你自行承担。</li>
              <li><strong>配置同步（WebDAV）</strong>的服务器与密码仅保存在你本地，上传前以 XOR 方式加密，不会回传作者服务器。</li>
              <li>使用本脚本即表示你已了解上述风险，并承诺遵守所在地法律法规与目标网站规定；作者不对任何使用后果承担责任。</li>
            </ul>
          </div>
        </div>
        <div class="adc-onboard-footer">
          <button id="adc-ob-cancel" class="adc-onboard-btn adc-onboard-btn-text" type="button">取消</button>
          <button id="adc-ob-min" class="adc-onboard-btn adc-onboard-btn-secondary" type="button" data-label="同意并仅保持极简" disabled>同意并仅保持极简（5s）</button>
          <button id="adc-ob-rec" class="adc-onboard-btn adc-onboard-btn-primary" type="button" data-label="同意并开始常用过滤" disabled>同意并开始常用过滤（5s）</button>
        </div>
      </div>
      <style>
        .adc-onboard-backdrop * { box-sizing:border-box; }
        .adc-onboard-card { width:600px; max-width:100%; max-height:calc(100vh - 40px); background:#fff; border-radius:24px; box-shadow:0 32px 100px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.1); overflow:hidden; display:flex; flex-direction:column; animation:adcOnboardIn .35s cubic-bezier(.34,1.56,.64,1); }
        @keyframes adcOnboardIn { from { opacity:0; transform:translateY(20px) scale(.96); } to { opacity:1; transform:translateY(0) scale(1); } }
        .adc-onboard-header { padding:26px 30px 18px; background:linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 100%); border-bottom:1px solid #e0f2fe; display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .adc-onboard-brand { display:flex; align-items:center; gap:14px; }
        .adc-onboard-logo { width:48px; height:48px; border-radius:14px; background:linear-gradient(135deg,#1677ff,#38bdf8); display:flex; align-items:center; justify-content:center; font-size:26px; box-shadow:0 8px 20px rgba(22,119,255,.25); }
        .adc-onboard-title { font-size:22px; font-weight:800; color:#0f172a; letter-spacing:-.3px; line-height:1.2; }
        .adc-onboard-subtitle { font-size:12px; color:#64748b; margin-top:4px; }
        .adc-onboard-ver { font-size:12px; font-weight:600; color:#0d9488; background:#ccfbf1; padding:5px 12px; border-radius:20px; border:1px solid #99f6e4; flex-shrink:0; }
        .adc-onboard-body { padding:22px 30px; overflow-y:auto; flex:1; }
        .adc-onboard-intro { font-size:14px; color:#64748b; line-height:1.7; margin-bottom:20px; padding:12px 16px; background:#f8fafc; border-radius:12px; border:1px solid #f1f5f9; }
        .adc-onboard-features { display:grid; grid-template-columns:repeat(2, 1fr); gap:14px; }
        .adc-onboard-feature { display:flex; gap:12px; padding:16px; background:#f8fafc; border-radius:16px; border:1px solid #f1f5f9; transition:transform .2s, box-shadow .2s, border-color .2s, background .2s; }
        .adc-onboard-feature:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(15,23,42,.08); border-color:#bfdbfe; background:#fff; }
        .adc-onboard-feature-icon { width:38px; height:38px; flex-shrink:0; border-radius:10px; background:#fff; display:flex; align-items:center; justify-content:center; font-size:20px; box-shadow:0 2px 8px rgba(0,0,0,.06); }
        .adc-onboard-feature-main { min-width:0; flex:1; }
        .adc-onboard-feature-title { font-size:14px; font-weight:700; color:#0f172a; line-height:1.3; display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
        .adc-onboard-feature-badge { font-size:11px; font-weight:600; padding:2px 8px; border-radius:10px; background:#e2e8f0; color:#64748b; }
        .adc-onboard-feature-badge.on { background:#dcfce7; color:#16a34a; }
        .adc-onboard-feature-desc { font-size:12px; color:#64748b; line-height:1.6; margin-top:5px; }
        .adc-onboard-disclaimer { margin-top:20px; padding:16px 18px; background:#fffbeb; border:1px solid #fde68a; border-radius:14px; }
        .adc-onboard-disclaimer-title { font-size:13px; font-weight:700; color:#b45309; margin-bottom:10px; }
        .adc-onboard-disclaimer-list { margin:0; padding-left:18px; }
        .adc-onboard-disclaimer-list li { font-size:12px; color:#78350f; line-height:1.7; margin-bottom:6px; }
        .adc-onboard-disclaimer-list li:last-child { margin-bottom:0; }
        .adc-onboard-disclaimer-list strong { color:#92400e; }
        .adc-onboard-btn-text { background:transparent; color:#94a3b8; border-color:transparent; }
        .adc-onboard-btn-text:hover { color:#64748b; background:transparent; }
        .adc-onboard-btn:disabled { opacity:.6; cursor:not-allowed; transform:none !important; box-shadow:none; }
        .adc-onboard-footer { padding:18px 30px 24px; border-top:1px solid #f1f5f9; display:flex; justify-content:flex-end; gap:12px; background:#fff; }
        .adc-onboard-btn { padding:11px 22px; border-radius:10px; font-size:14px; font-weight:600; cursor:pointer; transition:all .2s; border:1px solid transparent; outline:none; }
        .adc-onboard-btn-secondary { background:#fff; color:#475569; border-color:#e2e8f0; }
        .adc-onboard-btn-secondary:hover { background:#f8fafc; border-color:#cbd5e1; color:#0f172a; }
        .adc-onboard-btn-primary { background:linear-gradient(135deg,#1677ff,#0ea5e9); color:#fff; box-shadow:0 4px 16px rgba(22,119,255,.25); }
        .adc-onboard-btn-primary:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(22,119,255,.35); }
        @media (max-width:560px) {
          .adc-onboard-card { border-radius:18px; }
          .adc-onboard-header { padding:20px 22px 16px; }
          .adc-onboard-body { padding:18px 22px; }
          .adc-onboard-footer { padding:16px 22px 20px; flex-direction:column; }
          .adc-onboard-btn { width:100%; }
          .adc-onboard-features { grid-template-columns:1fr; }
          .adc-onboard-title { font-size:20px; }
          @media (prefers-reduced-motion: reduce){ .adc-onboard-feature, .adc-onboard-btn, .adc-onboard-card, .adc-onboard-backdrop{transition:none!important;animation:none!important} .adc-onboard-feature:hover{transform:none} }
        }
      </style>
    `;
    (document.body || document.documentElement).appendChild(card);
    const enableRecommended = () => {
      const cfg = getConfig(); const b = cfg.baidu;
      ['kgbaidued','kgbaiduad','kggoogleed','kggooglead','kgbinged','kgbingad','kgyoued','kgbilied','kgbiliad','kgzhihued','kgzhihuad','kgdoubaned','kgdoubanad','kgweiboed','kgweiboad','kgweixined','kgweixinad','csdnAd','csdnLink'].forEach(k => { if (k in b) b[k] = true; });
      setConfig(cfg);
    };
    // 同意并启动核心功能（门控放行的唯一入口）
    const acceptAndBoot = () => {
      GM_setValue('adc_legal_accepted', '1');
      card.remove();
      bootCore();
    };
    const cancelBtn = card.querySelector('#adc-ob-cancel');
    const minBtn = card.querySelector('#adc-ob-min');
    const recBtn = card.querySelector('#adc-ob-rec');
    cancelBtn.onclick = () => {
      clearInterval(legalTimer);
      card.remove();
      zkToast(t('toast.notAccepted'), { type: 'warn', dur: 4200 });
    };
    minBtn.onclick = () => { clearInterval(legalTimer); acceptAndBoot(); };
    recBtn.onclick = () => { clearInterval(legalTimer); enableRecommended(); acceptAndBoot(); };
    card.addEventListener('click', e => { if (e.target === card) { clearInterval(legalTimer); card.remove(); } });
    // 强制阅读 5 秒后才能点「同意」
    let legalRemain = 5;
    const legalTimer = setInterval(() => {
      legalRemain--;
      if (legalRemain <= 0) {
        clearInterval(legalTimer);
        [minBtn, recBtn].forEach(b => { b.disabled = false; b.textContent = b.dataset.label; });
      } else {
        [minBtn, recBtn].forEach(b => { b.textContent = b.dataset.label + '（' + legalRemain + 's）'; });
      }
    }, 1000);
  }

  // ===== 核心启动逻辑（仅在用户接受使用条款后执行）=====
  function bootCore() {
    if (window.__NC_DEBUG) try { console.log('[NetClean] bootCore 启动，版本 v' + VERSION + '，host=' + HOST); } catch (e) {}
    // 阶段 1：CSS 注入（document-start，最高优先级）
    try {
      injectCSS();
      updateBaiduHotClass();
    } catch (e) { console.error('[NetClean] 阶段 1 CSS 注入失败', e); }

    // 阶段 2：网络层拦截
    try { initRequestInterceptor(); } catch(e) { console.error('[NetClean] 阶段 2 网络拦截初始化失败', e); }

    // 阶段 3：通用功能初始化（逐个模块 try/catch 隔离，任一模块异常只跳过该模块，不影响其余功能）
    // 【B-划词-03 调试增强】开启 __NC_DEBUG 时输出每个模块的初始化结果，便于诊断"SPA 后划词失效"
    onDomReady(() => {
      [['深色模式', applyDarkMode], ['护眼模式', applyEyeCare], ['纯净复制', initCleanCopy], ['倍速控制', initVideoSpeedControl], ['验证码识别', initCaptcha], ['划词搜索', initSelectionSearch]].forEach(function(pair) {
        try {
          const r = pair[1]();
          dbg('[NetClean] 模块初始化成功：' + pair[0]);
        } catch (e) {
          console.error('[NetClean] 初始化失败：' + pair[0], e);
          // 划词初始化失败时输出更详细的栈 + 当前 URL/host，便于排查
          if (pair[0] === '划词搜索') {
            try { console.error('[NetClean] 划词初始化失败时的 URL:', HREF(), 'host:', HOST, 'selectionSearch 配置:', getScriptCfg().selectionSearch); } catch (x) {}
          }
        }
      });

      // 【B-划词-03/05 修复说明】百度/360 SPA submit 后用 history.replaceState 推 URL（不刷新页面），
      // 百度 React 重写搜索结果区，划词搜索闭包状态残留（bar/transPanel 指向旧 DOM、lastText
      // 不为空会让 mouseup 时 info.text === lastText 短路不创建新 panel 等），用户视角即"刷新
      // 就恢复、不刷就不行"。scheduleProcess() 仅重跑 getActiveHandlers()（processBaidu 等
      // DOM 处理器），不动划词闭包变量。修复方案：监听 popstate + 拦截 pushState/replaceState，
      // 每次 SPA URL 变化后主动：
      //   1) 调 window.__NC_RESET_SELECTION() 重置划词闭包状态（等价于"重新 init 内部状态"）
      //   2) 调 scheduleProcess() 让 processBaidu 跑一遍新结果（卡片美化/广告/关键词过滤/favicon）
      // 监听器仍然只在 initSelectionSearch 阶段挂一次到 document 上（document 在 SPA 后不变），
      // 所以不需要重新挂监听器；只要 reset 闭包状态就够。
      try {
        const onSpaUrlChange = () => {
          dbg('[NetClean] SPA URL 变化检测：', HREF(), '（host=' + HOST + '）');
          // 【B-划词-05 真正修复】SPA 切换后百度 React 会重写搜索结果区，划词搜索的闭包状态
          // 残留（bar/transPanel 引用旧 DOM、lastText 不为空会导致下次操作短路）→ 表现为"刷新
          // 就恢复、不刷就不行"。scheduleProcess() 只重跑 processBaidu 处理器，不动划词闭包变量，
          // 所以这里必须显式 reset 划词的内部状态（等价于"重新 init 内部状态"）。
          try {
            if (typeof window.__NC_RESET_SELECTION === 'function') {
              window.__NC_RESET_SELECTION();
            } else {
              dbg('[NetClean] SPA 切到失效搜索结果页：window.__NC_RESET_SELECTION 未暴露（划词模块未启用或初始化失败）');
            }
          } catch (e) { dbg('[NetClean] SPA 后 resetSelection 失败', e); }
          try { scheduleProcess(); } catch (e) { dbg('[NetClean] SPA 后 scheduleProcess 失败', e); }
        };
        window.addEventListener('popstate', onSpaUrlChange);
        // 拦截 pushState/replaceState（Baidu SPA submit 用 replaceState）
        // 【v1.0.5 P3 修复】幂等守卫：脚本因故重复执行时不再把包装函数再包一层（否则每次 SPA
        // 跳转会触发 N 次 onSpaUrlChange，处理量随重载次数线性膨胀）
        if (!history.replaceState._ncPatched) {
          const origReplace = history.replaceState;
          history.replaceState = function() {
            const r = origReplace.apply(this, arguments);
            try { onSpaUrlChange(); } catch (e) { dbg('[NetClean] replaceState 后 SPA 处理失败', e); }
            return r;
          };
          history.replaceState._ncPatched = true;
        }
        if (!history.pushState._ncPatched) {
          const origPush = history.pushState;
          history.pushState = function() {
            const r = origPush.apply(this, arguments);
            try { onSpaUrlChange(); } catch (e) { dbg('[NetClean] pushState 后 SPA 处理失败', e); }
            return r;
          };
          history.pushState._ncPatched = true;
        }
      } catch (e) { console.error('[NetClean] 阶段 3 SPA 监听注册失败', e); }
    });

    // 阶段 4：注册动态处理器（声明式站点表 → 按域名分派，避免无关 handler 空转）
    // 新增站点只需在此表追加一行，无需再写 registerHandler 调用；顺序保持与原注册一致。
    try {
      const SITE_HANDLERS = [
        { fn: processBaidu,            hosts: ['baidu.com'] },
        { fn: processGoogle,           hosts: ['google.com'] },
        { fn: processBing,             hosts: ['bing.com'] },
        { fn: process360,              hosts: ['so.com'] },
        { fn: processZhihu,            hosts: ['zhihu.com'] },
        { fn: processBilibili,         hosts: ['bilibili.com'] },
        { fn: processDouban,           hosts: ['douban.com'] },
        { fn: processWeibo,            hosts: ['weibo.com'] },
        { fn: processYoutube,          hosts: ['youtube.com'] },
        { fn: initYoutubeRotate,       hosts: ['youtube.com'] },
        { fn: processTwitter,          hosts: ['twitter.com', 'x.com'] },
        { fn: processCSDN,             hosts: ['csdn.net'] },
        { fn: processWeixin,           hosts: ['weixin.qq.com'] },
        { fn: processYouku,            hosts: ['youku.com'] },
        { fn: processTencentVideo,     hosts: ['v.qq.com'] },
        { fn: processOther },            // 全局兜底（无 hosts）
        { fn: processVideoDownloader },
        { fn: process52pojie },
        { fn: initHaokanPauseAd,       hosts: ['haokan.baidu.com'] },
        { fn: processYandex,           hosts: ['yandex.com'] },
        { fn: processXHS,              hosts: ['xiaohongshu.com'] },
        { fn: processJuejin,           hosts: ['juejin.cn'] },
        { fn: processSegmentfault,     hosts: ['segmentfault.com'] },
        { fn: passiveAdBlock }
      ];
      SITE_HANDLERS.forEach(function (h) { registerHandler(h.fn, h.hosts || null); });
    } catch (e) { console.error('[NetClean] 阶段 4 处理器注册失败', e); }

    // 阶段 5：启动 DOM 监听引擎
    try { startObserver(); } catch (e) { console.error('[NetClean] 阶段 5 DOM 监听引擎启动失败', e); }

    // 阶段 6：菜单注册
    try { GM_registerMenuCommand(t('menu.panel'), () => openSettings()); } catch (e) { console.error('[NetClean] 阶段 6 菜单注册失败', e); }
    try { GM_registerMenuCommand(t('menu.darkOwner'), ncToggleDarkHostOwnership); } catch (e) {}

    // 阶段 6b：全局 Esc 关闭已打开的设置面板 / 欢迎页（单次注册，无 keydown 泄漏）
    try {
      document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        // 有我们自己的顶层浮层（主题对话框 / 云备份弹窗）打开时，Esc 交给浮层自己处理，
        // 不关闭底下的设置面板 —— 否则按 Esc 会在"引起用户重视"的确认框外把设置面板也关掉。
        if (document.getElementById('zk-dlg') || document.getElementById('zk-bk-mgr')) return;
        const p = document.getElementById('zk-set-cleaner-settings');
        if (p) { if (typeof p._close === 'function') p._close(); else p.remove(); return; }
        const ob = document.getElementById('adc-onboard');
        if (ob) ob.remove();
      });
    } catch (e) { console.error('[NetClean] 阶段 6b Esc 监听注册失败', e); }

    // 阶段 6c：离开页面前强制落盘（与 writeConfig 的 400ms 防抖配合，避免快速关闭丢失最近改动）
    try {
      function _flushBeforeHide() { flushConfig(); }
      window.addEventListener('pagehide', _flushBeforeHide);
      document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') _flushBeforeHide(); });
    } catch (e) { console.error('[NetClean] 阶段 6c 页面隐藏落盘监听失败', e); }

    // 阶段 6d：全局未捕获错误兜底（仅调试模式输出，避免静默死掉又污染控制台）
    try {
      window.addEventListener('error', e => { if (window.__NC_DEBUG) try { console.error('[NetClean] 未捕获错误：', e.error || e.message, e.filename + ':' + e.lineno); } catch (x) {} });
      window.addEventListener('unhandledrejection', e => { if (window.__NC_DEBUG) try { console.error('[NetClean] 未处理的 Promise 拒绝：', e.reason); } catch (x) {} });
    } catch (e) { console.error('[NetClean] 阶段 6d 全局错误监听失败', e); }

    // 百度页面控制面板入口
    try {
      setTimeout(() => {
        if (inHost('baidu.com') && !IS_MOBILE && getScriptCfg().baidumenu) {
          const settingIcon = document.querySelector('span[name="tj_settingicon"]');
          if (settingIcon && !document.getElementById('zk-top-gobtn')) {
            const a = document.createElement('a');
            a.className = 's-top-right-text c-font-normal c-color-t s-top-right-new';
            a.id = 'zk-top-gobtn';
            a.style.cssText = 'position:relative;overflow:visible;cursor:pointer';
            a.textContent = '⚙ 控制面板';
            a.addEventListener('click', () => openSettings());
            settingIcon.insertAdjacentElement('afterend', a);
          }
        }
      }, 1000);
    } catch (e) { console.error('[NetClean] 百度顶部入口注册失败', e); }

    // 首次更新提示
    try {
      if (GM_getValue('adc_version') !== VERSION) {
        GM_setValue('adc_version', VERSION);
        setTimeout(() => {
          zkToast(t('toast.updated', { ver: VERSION }), { type: 'ok', dur: 3800 });
        }, 2000);
      }
    } catch (e) { console.error('[NetClean] 更新提示失败', e); }
  } // bootCore 结束

  // ===== 使用条款门控 =====
  // 老用户（已看过旧版引导页 adc_onboarded）视为已同意；新用户或未同意者，
  // 必须先在阅读免责声明后点击「同意」才会执行 bootCore()，否则本次脚本不激活。
  const LEGAL_ACCEPTED = GM_getValue('adc_legal_accepted', false) || GM_getValue('adc_onboarded', false);
  if (LEGAL_ACCEPTED) {
    try { bootCore(); } catch (e) { console.error('[NetClean] bootCore 启动失败，脚本可能部分失效', e); }
  } else {
    onDomReady(maybeShowOnboarding);
  }

})();
