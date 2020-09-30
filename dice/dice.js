function roll() {

    document.getElementById('result').innerHTML = '......'
    
    var num = [0,0,0,0,0,0]
    // determine prize
    prize = Math.floor(Math.random() * 6)
    switch (prize){
    	case 0:
    	    var l = [1,1,1,2,2,2,3,3,3,5,5,5,6,6,6]
    	    for(i=0;i<6;i++){
    	    	index = Math.floor(Math.random() * (l.length-1))
    	    	num[i] = l[index]
    	    	l.splice(index,1)
    	    }
    	    break
		case 1:
		    var fixed = Math.floor(Math.random() * 6)
		    num[fixed] = 4
		    var l = [1,1,1,2,2,2,3,3,3,5,5,5,6,6,6]
		    for(i=0;i<6;i++){
		    	if(i!=fixed){
		    		index = Math.floor(Math.random() * (l.length-1))
    	    	    num[i] = l[index]
    	    	    l.splice(index,1)
		    	}
    	    }
    	    break
		case 2:
		    var fixed1 = Math.floor(Math.random() * 6)
		    var fixed2 = Math.floor(Math.random() * 6)
		    num[fixed1] = 4
		    num[fixed2] = 4
		    var l = [1,1,1,2,2,2,3,3,3,5,5,5,6,6,6]
		    for(i=0;i<6;i++){
		    	if(i!=fixed1&&i!=fixed2){
		    		index = Math.floor(Math.random() * (l.length-1))
    	    	    num[i] = l[index]
    	    	    l.splice(index,1)
		    	}
    	    }
    	    break
		case 3:
		    var fixed1 = Math.floor(Math.random() * 6)
		    var fixed2 = Math.floor(Math.random() * 6)
		    var fixed3 = Math.floor(Math.random() * 6)
		    for(i=0;i<6;i++){
		    	if(i==fixed1&&i==fixed2&&i==fixed3){
		    		num[i] = 4
		    	} else {
		    		num[i] = Math.floor(Math.random() * 6) + 1
		    	}
		    }
		case 4:
		    var rep = Math.floor(Math.random() * 6) + 1
		    var fixed1 = Math.floor(Math.random() * 6)
		    var fixed2 = Math.floor(Math.random() * 6)
		    for(i=0;i<6;i++){
		    	if(i!=fixed1&&i!=fixed2){
		    		num[i] = rep
		    	} else {
		    		num[i] = Math.floor(Math.random() * 6) + 1
		    	}
		    }
		    break
		case 5:
		    var l = [1,2,3,4,5,6]
		    for(i=0;i<6;i++){
    	    	index = Math.floor(Math.random() * (l.length-1))
    	    	num[i] = l[index]
    	    	l.splice(index,1)
    	    }
    	    break
		case 6:
		    level = Math.floor(Math.random() * 2)
		    switch(level){
		    	case 0:
					var fixed = Math.floor(Math.random() * 6)
					var rep = Math.floor(Math.random() * 6) + 1
					var distinct = Math.floor(Math.random() * 6)
					num[fixed] = distinct
					for(i=0;i<6;i++){
						if(i!=fixed){
							num[i] = rep
						}
					}    
    	            break
				case 1:
					var r = Math.floor(Math.random() * 6) + 1
					num = [r,r,r,r,r,r]
					break
		    }
		    break
		    
    }


	// update 6 imgs into gifs with final settle down
    for(i=0;i<6;i++) {
    	n = num[i]
    	var img_n = 'd' + (i+1)
    	var src_n = 'd_' + n + '.gif'
    	document.getElementById(img_n).src = src_n
    }

    // frequency aggregate
    var num_temp = [0,0,0,0,0,0]
    for(i=0;i<6;i++){
    	num_temp[num[i]-1] += 1
    }
    num = num_temp

	// calculate result
	var rt_t = '恭喜你博得'
	var result = ''
	for(i=0;i<6;i++){
	    if (num[i] == 6) {
	    	result = rt_t+'六子状元'
	    	break
	    } else if (num[i] == 5) {
	    	result = rt_t + '五子状元'
	    	if (n[3] == 1) {
	    		result += '加一秀'
	    	}
	    	break
	    } else if (num[i] == 4){
	    	if (i==3) {
	    		result = rt_t + '状元'
	    		if (n[0] == 2) {
	    			result += '插金花'
	    		}
	    	} else {
	    		result = rt_t + '四进'
	    		if (n[3]==2){
	    			result += '加二举'
	    		} else if (n[3]==1){
	    			result += '加一秀'
	    		}
	    	}
	    	break
	    }
	}
	if(!result){
		var temp = new Set(num)
		if (temp.size == 1){
			result = rt_t + '对堂'
		}
	}
    if(!result){
    	switch(num[3]) {
			case 0:
				result = '啥也没有 XD'
				break
			case 1:
				result = rt_t + '一秀'
				break
			case 2:
				result = rt_t + '二举'
				break
			case 3:
				result = rt_t + '三红'
				break
		}    
    }
    

	// update result
	var x = setInterval(anim,1700);
	var flag = false
	function anim(){
		if (flag) {
			clearInterval(x)
		} else {
			document.getElementById('result').innerHTML = result
			flag = true
		}
	}
	
}
