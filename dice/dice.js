function roll() {

    document.getElementById('result').innerHTML = '......'
    
	// generate 6 random numbers
	// update 6 pics into gifs with final settle down
    var num = [0,0,0,0,0,0]
    for(i=0;i<6;i++) {
    	var n = Math.floor(Math.random() * 6) + 1
    	num[n-1] += 1
    	var img_n = 'd' + (i+1)
    	var src_n = 'd_' + n + '.gif'
    	document.getElementById(img_n).src = src_n
    }

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
