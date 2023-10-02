

var yfName = document.getElementById('yfName');
var yMonth = document.getElementById('yMonth');
var yDay = document.getElementById('yDay');
var yYear = document.getElementById('yYear');

var pfName = document.getElementById('pfName');
var pMonth = document.getElementById('pMonth');
var pDay = document.getElementById('pDay');
var pYear = document.getElementById('pYear');

var ytName = document.getElementById('ytName');
var ptName = document.getElementById('ptName');

var ytLPNum = document.getElementById('ytLPNum');
var ptLPNum = document.getElementById('ptLPNum');

var ytBDNum = document.getElementById('ytBDNum');
var ptBDNum = document.getElementById('ptBDNum');

var ytEPNum = document.getElementById('ytEPNum');
var ptEPNum = document.getElementById('ptEPNum');

var ytHDNum = document.getElementById('ytHDNum');
var ptHDNum = document.getElementById('ptHDNum');

var ytPNum = document.getElementById('ytPNum');
var ptPNum = document.getElementById('ptPNum');

var lpText = document.getElementById('lpText');
var percent = document.getElementById('percent');





document.getElementById('match').addEventListener('click', ()=> {

    if (yfName.value === '' || yYear.value === '' || pfName.value === '' || pYear.value === '') {
        document.getElementById('hide').style.display = 'none';
        document.getElementById('show').style.display = 'none';
    } else {
        document.getElementById('hide').style.display = 'block';
        document.getElementById('show').style.display = 'block';
    }
    

    // Y date of birth 
    var yourMonth = Number(yMonth.value);
    var yourMonthHold = yourMonth;
    var yourDayHold = yDay.value;
    var yourYearHold = yYear.value;
    switch (yourMonth) {
        case 1:
            yourMonth = 'January'
            break;
        case 2:
            yourMonth = 'February'
            break;

        case 3:
            yourMonth = 'March'
            break;

        case 4:
            yourMonth = 'April'
            break;
        
        case 5:
            yourMonth = 'May'
            break;
        
        case 6:
            yourMonth = 'June'
            break;
        
        case 7:
            yourMonth = 'July'
            break;

        case 8:
            yourMonth = 'August'
            break;
        
        case 9:
            yourMonth = 'September'
            break;

        case 10:
            yourMonth = 'October'
            break;

        case 11:
            yourMonth = 'November'
            break;
        
        case 1:
            yourMonth = 'December'
            break;

    
        default:
            break;
    };


    ytName.innerHTML = yfName.value + '<br>'+ yourMonth + '-' + yourDayHold + '-' + yourYearHold;

    var dayString = String(yDay.value);
    var monthString = String(yMonth.value);
    var yearString = String(yYear.value);


    var daySplit = dayString.split('');
    var monthSplit = monthString.split('');
    var yearSplit = yearString.split('');
    
    var dayNumArray = daySplit.map(str => parseInt(str));
    var monthNumArray = monthSplit.map(str => parseInt(str));
    var yearNumArray = yearSplit.map(str => parseInt(str));
       
    var sumDayArray = dayNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var sumMonthArray = monthNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var sumYearArray = yearNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    // Your life path number 
    var sum = 0;
    mSplit = String(yearString).split('');
    var xsum = eval(mSplit.join('+'));
    sumYearArray = xsum;

    if (Number(dayString) < 10) {
        sumDayArray = Number(dayString);
    } else if (Number(dayString) === 10) {
        sumDayArray = 1;
    } else if (Number(dayString) === 20) {
        sumDayArray = 2;
    } else if (Number(dayString) === 30) {
        sumDayArray = 3;
    } else if (Number(dayString) === 11 || Number(dayString) === 22) {
        sumDayArray = Number(dayString);
    } else if (Number(dayString) > 10) {
        mSplit = String(dayString).split('');
        xsum = eval(mSplit.join('+'));
        sumDayArray = xsum
    };
    
    if (Number(monthString) < 10) {
        sumMonthArray = Number(monthString);
    } else if (Number(dayString) === 10) {
        sumMonthArray = 1;
    } else if (Number(monthString) === 11 ) {
        sumMonthArray = 11;
    } else if (Number(monthString) === 12){
        sumMonthArray = 3;
    }

    if (Number(sumYearArray) < 10) {
        sumYearArray = Number(sumYearArray);
    } else if (Number(sumYearArray) === 10) {
        sumYearArray = 1;
    } else if (Number(sumYearArray) === 11 ) {
        sumYearArray = 11;
    } else if (Number(sumYearArray) === 22){
        sumYearArray = 22;
    } else if (Number(sumYearArray) === 33){
        sumYearArray = 33;
    } else if (Number(sumYearArray) > 10) {
        mSplit = String(sumYearArray).split('');
        xsum = eval(mSplit.join('+'));
        if (xsum < 10) {
            xsum
        } else if (xsum === 10) {
            xsum = 1
        } else if (xsum === 11 || xsum === 22 || xsum === 33) {
            xsum
        } else if (xsum > 10) {
            mSplit = String(xsum).split('');
            xsum = eval(mSplit.join('+'));
        }
        sumYearArray = xsum;
    }

    // console.log(sumDayArray, sumMonthArray, sumYearArray)
    
    sum = sumDayArray + sumMonthArray + sumYearArray;
    var ddayHold = sumDayArray;
    var mmonthHold = sumMonthArray;
    var yyearHold = sumYearArray;
    var keepDay = sumDayArray;

    var lsum = sum;
    var lpHold, edHold, suHold, pnHold, nSum, dbTotalSum;
    if (sum < 10) {
        ytLPNum.innerHTML = '<b>' +sum+ '</b>';
    } else if (sum === 10) {
        ytLPNum.innerHTML = '<b> 1 </b>'
    }
    while (sum > 10) {
        if (sum === 11) {
            ytLPNum.innerHTML = '11/2';
            sum = 2;
            break
        } else if(sum === 22) {
            ytLPNum.innerHTML = '22/4';
            sum = 4;
            break;
        } else if (sum === 33) {
            ytLPNum.innerHTML = '33/6';
            sum = 6;
            break;
        } else {
            var numberString = sum.toString(); 
            var digitArray = numberString.split('').map(Number);
            numbers = digitArray.map(str => parseInt(str));     
            sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            lpHold = sum;
            if (Number(numberString) === 19){
                ytLPNum.innerHTML =  '1';
            } else if (sum === 10) {
                ytLPNum.innerHTML = '1';
            } else {
                ytLPNum.innerHTML = sum ;
            }
        }
    };

    // Birthday Number 
    var xSum;
    mSplit = String(dayString).split('');
    xSum = Number(dayString);

    if (xSum < 10) {
        sumDayArray = xSum;
    } else if (xSum === 10) {
        sumDayArray = 1;
    } else if (xSum === 22) {
        sumDayArray = '22/4';
    } else if (xSum === 33) {
        sumDayArray = '33/6';
    }else if (xSum === 16) {
        sumDayArray = '7';
    } else if (xSum === 19) {
        sumDayArray = '1';
    } else if (xSum === 11) {
        sumDayArray = '11/2';
        xSum = '11/2'
    } else if (xSum > 10) {
        mSplit = String(xSum).split('');
        xSum = eval(mSplit.join('+'));

        if (xSum < 10) {
            xSum
        } else if (xSum === 10) {
            xSum = 1
        } else if (xSum === 22) {
            xSum = '22/4';
        } else if (xSum === 33) {
            xSum = '33/6';
        }else if (xSum === 16) {
            xSum = '7';
        } else if (xSum === 19) {
            xSum = '1';
        } else if (xSum === 11) {
            xSum = '11/2';
        } else if (xSum > 10) {
            mSplit = String(xSum).split('');
            xSum = eval(mSplit.join('+'));
        };
        sumDayArray = xSum;
    };
    sumDayArray = Number(sumDayArray);
    console.log(sumDayArray)
    if (sumDayArray === 1) {
        ytBDNum.innerHTML = '<b>1</b>';
    } else if (sumDayArray === 2) {
        ytBDNum.innerHTML = '<b>2</b>';
    } else if (sumDayArray === 3) {
        ytBDNum.innerHTML = '<b>3</b>';
    } else if (sumDayArray === 4) {
        ytBDNum.innerHTML = '<b>4</b>';
    } else if (sumDayArray === 5) {
        ytBDNum.innerHTML = '<b>5</b>';
    } else if (sumDayArray === 6) {
        ytBDNum.innerHTML = '<b>6</b>';
    } else if (sumDayArray === 7) {
        ytBDNum.innerHTML = '<b>7</b>';
    } else if (sumDayArray === 8) {
        ytBDNum.innerHTML = '<b>8</b>';
    } else if (sumDayArray === 9) {
        ytBDNum.innerHTML = '<b>9</b>';
    } else if (xSum === '11/2')  {
        ytBDNum.innerHTML =  '<b>11/2</b>';
    } else if (xSum === '22/4')  {
        ytBDNum.innerHTML =  '<b>22/4</b>';
    } else if (xSum === '33/6')  {
        ytBDNum.innerHTML =  '<b>33/6</b>';
    } 

    // expression / destiny number 
    var ednfName = yfName.value.split(' ');
    var count = 0;
    var countList = [];
    var countHold = 0;
    ednfName = Array.from(ednfName);
    for (let iterate  = 0; iterate < ednfName.length; iterate++) {
        for ( let i = 0; i <= ednfName[iterate].length; i++) {
            if (String(ednfName[iterate][i]).toLowerCase() === 'a' ||  String(ednfName[iterate][i]).toLowerCase() === 'j' || String(ednfName[iterate][i]).toLowerCase() === 's' ) {
                count += 1;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'b' || String(ednfName[iterate][i]).toLowerCase() === 'k' || String(ednfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'c' || String(ednfName[iterate][i]).toLowerCase() === 'l' || String(ednfName[iterate][i]).toLowerCase() === 'u') {
                count += 3;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'd' || String(ednfName[iterate][i]).toLowerCase() === 'm' || String(ednfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'e' || String(ednfName[iterate][i]).toLowerCase() === 'n' || String(ednfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'f' || String(ednfName[iterate][i]).toLowerCase() === 'o' || String(ednfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'g' || String(ednfName[iterate][i]).toLowerCase() === 'p' || String(ednfName[iterate][i]).toLowerCase() === 'y') {
                count += 7;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'h' || String(ednfName[iterate][i]).toLowerCase() === 'q' || String(ednfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'i' || String(ednfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            }
        };

        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        count = 0;
    };

    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
    } else if (countHold === 11) {
        dbTotalSum = '11/2';
        nSum = 2
    } else if (countHold === 22) {
        dbTotalSum = '22/4';
        nSum = 4
    } else if (countHold === 33) {
        dbTotalSum = '33/6';
        nSum = 6;
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
        } else if (nSum === 11) {
            dbTotalSum = '11/2';
            nSum = 2;
        } else if (nSum === 22) {
            dbTotalSum = '22/4';
            nSum = 4;
        } else if (nSum === 33) {
            dbTotalSum = '33/6';
            nSum = 6;
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                dbTotalSum;
                nSum;
            } else if (nSum === 10) {
                dbTotalSum = 10;
                nSum = 1;
            } else if (nSum === 11) {
                dbTotalSum = '11/2';
                nSum = 2;
            } else if (nSum === 22) {
                dbTotalSum = '22/4';
                nSum = 4;
            } else if (nSum === 33) {
                dbTotalSum = '33/6';
                nSum = 6;
            } else if (nSum > 10) {
                dbTotalSum = nSum;
                dbSplit = String(dbTotalSum).split('');
                nSum = eval(dbSplit.join('+'));
            }
        }
    }
    if (dbTotalSum === 10) {
        ytEPNum.innerHTML = '<b>1</b>' ;
    } else if (dbTotalSum === '11/2') {
        ytEPNum.innerHTML = '<b>11/2</b>';
    } else if (dbTotalSum === 28) {
        ytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 37) {
        ytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 46) {
        ytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 55) {
        ytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 64) {
        ytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 73) {
        ytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === '22/4') {
        ytEPNum.innerHTML = '<b>22/4</b>';
    } else if (dbTotalSum === '33/6') {
        ytEPNum.innerHTML = '<b>33/6</b>';
    }
    else {
        ytEPNum.innerHTML = '<b>' + nSum + '</b>';
    };


    // Your Soul Urge / Heart Desire Number 
    var suhdfName = yfName.value.split(' ');
    count = 0;
    countList = [];
    suhdfName = Array.from(suhdfName);
    countHold = 0;
    for (let iterate  = 0; iterate < suhdfName.length; iterate++) {
        for ( let i = 0; i <= suhdfName[iterate].length; i++) {
            if ( String(suhdfName[iterate][i]).toLowerCase() === 'a' ) {
                count += 1;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'u' ) {
                count += 3;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'e' ) {
                count += 5;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'o' ) {
                count += 6;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'i' ) {
                count += 9;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'y' ) {
                count += 7;
            }
            else {
                count+=0;
            }
        };
        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        count = 0;
    };
    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
        ytHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
        ytHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold === 11) {
        dbTotalSum = 11;
        nSum = 2
        ytHDNum.innerHTML = '<b>11/2</b>';
    } else if (countHold === 22) {
        dbTotalSum = 22;
        nSum = 4
        ytHDNum.innerHTML = '<b>22/4</b>';
    } else if (countHold === 33) {
        dbTotalSum = 33;
        nSum = 6;
        ytHDNum.innerHTML = '<b>33/6</b>';
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
            ytHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
            ytHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum === 11) {
            dbTotalSum = 11;
            nSum = 2;
            ytHDNum.innerHTML = '<b>11/2</b>';
        } else if (nSum === 22) {
            dbTotalSum = 22;
            nSum = 4;
            ytHDNum.innerHTML = '<b>22/4</b>';
        } else if (nSum === 33) {
            dbTotalSum = 33;
            nSum = 6;
            ytHDNum.innerHTML = '<b>33/6</b>';
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
            ytHDNum.innerHTML = '<b>' + nSum + '</b>';

            if (nSum < 10) {
                dbTotalSum;
                nSum;
                ytHDNum.innerHTML = '<b>' + nSum + '</b>';
            } else if (nSum === 10) {
                dbTotalSum = 10;
                nSum = 1;
                ytHDNum.innerHTML = '<b>' + nSum + '</b>';
            } else if (nSum === 11) {
                dbTotalSum = 11;
                nSum = 2;
                ytHDNum.innerHTML = '<b>11/2</b>';
            } else if (nSum === 22) {
                dbTotalSum = 22;
                nSum = 4;
                ytHDNum.innerHTML = '<b>22/4</b>';
            } else if (nSum === 33) {
                dbTotalSum = 33;
                nSum = 6;
                ytHDNum.innerHTML = '<b>33/6</b>';
            } else if (nSum > 10) {
                dbTotalSum = nSum;
                dbSplit = String(dbTotalSum).split('');
                nSum = eval(dbSplit.join('+'));
                ytHDNum.innerHTML = '<b>' + nSum + ' </b>';
            }
        }
    };

    // Your personality number 
    pnfName = yfName.value.split(' ');
    count = 0;
    countList = [], countHold = 0;
    pnfName = Array.from(pnfName);
    
    for (let iterate  = 0; iterate < pnfName.length; iterate++) {
        var L = pnfName[iterate].length
        if (pnfName[iterate][L - 1] === 'y' || pnfName[iterate][L - 1] === 'Y') {
            pnfName[iterate]=(pnfName[iterate]).slice(0, -1);
        }
        for ( let i = 0; i <= pnfName[iterate].length; i++) {
            if (String(pnfName[iterate][i]).toLowerCase() === 'j' ||  String(pnfName[iterate][i]).toLowerCase() === 's'  ) {
                count += 1;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'b' || String(pnfName[iterate][i]).toLowerCase() === 'k' || String(pnfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'c' || String(pnfName[iterate][i]).toLowerCase() === 'l' ) {
                count += 3;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'd' || String(pnfName[iterate][i]).toLowerCase() === 'm' || String(pnfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'n' || String(pnfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'f' || String(pnfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'g' || String(pnfName[iterate][i]).toLowerCase() === 'p' || String(pnfName[iterate][i]).toLowerCase() === 'y'  ) {
                count += 7;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'h' || String(pnfName[iterate][i]).toLowerCase() === 'q' || String(pnfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if ( String(pnfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            } else {
                count += 0;
            }
            
        };
        // console.log(count);


        if (count < 10) {
            count;
        } else if (count === 10) {
            count = 1; 
        } else if (count === 11 || count === 22 || count === 33) {
            count;
        } else if (count > 10) {
            pnSplit = String(count).split('');
            count = eval(pnSplit.join('+'));

        }
        countHold += count;
        count = 0;
    };
    // console.log(countHold)

    if (countHold < 10) {
        countHold;
    } else if (countHold === 10) {
        countHold = 1;
    } else if (countHold === 11 || countHold === 22 || countHold === 33 || countHold === 13 || countHold === 14 || countHold === 16 || countHold === 19) {
        countHold;
    } else if (countHold > 10) {
        countHold;
        
        
    }

    // console.log(countHold)
    count = countHold;
    if (count < 10) {
        count;
        ytPNum.innerHTML = '<b>' + count + '</b>' ;
    } else if (count == 10) {
        count = 1;
        ytPNum.innerHTML = '<b>1</b>' ;
    } else if ( count === 11) {
        count = 13;
        sum = 4;
        ytPNum.innerHTML = '<b>11/2</b>' ;
    } else if ( count === 22) {
        count = 13;
        sum = 4;
        ytPNum.innerHTML = '<b>22/4</b>' ;
    } else if (  count === 33) {
        count;
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        ytPNum.innerHTML = '<b>33/6</b>' ;
    } else if ( count === 13) {
        count = 13;
        sum = 4;
        ytPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 14) {
        count = 14;
        sum = 5;
        ytPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 16) {
        count = 16;
        sum = 7;
        ytPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 19) {
        count = 19;
        sum = 1;
        ytPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if (count > 10) {
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        ytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        count = sum

        if (count < 10) {
            count;
            ytPNum.innerHTML = '<b>' + count + '</b>' ;
        } else if (count == 10) {
            count = 1;
            ytPNum.innerHTML = '<b>1</b>' ;
        } else if ( count === 11) {
            count = 13;
            sum = 4;
            ytPNum.innerHTML = '<b>11/2</b>' ;
        } else if ( count === 22) {
            count = 13;
            sum = 4;
            ytPNum.innerHTML = '<b>22/4</b>' ;
        } else if (count === 33) {
            count;
            pnSplit = String(count).split('');
            sum = eval(pnSplit.join('+'));
            ytPNum.innerHTML = '<b>33/6</b>' ;
        } else if ( count === 13) {
            count = 13;
            sum = 4;
            ytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 14) {
            count = 14;
            sum = 5;
            ytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 16) {
            count = 16;
            sum = 7;
            ytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 19) {
            count = 19;
            sum = 1;
            ytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if (count > 10) {
            pnSplit = String(count).split('');
            sum = eval(pnSplit.join('+'));
            ytPNum.innerHTML = '<b>' +sum+ '</b>' ;
            count = sum
        }
    };

    










    

    // Partner date of birth 
    var partnerMonth = Number(pMonth.value);
    var partnerMonthHold = partnerMonth;
    var partnerDayHold = pDay.value;
    var partnerYearHold = pYear.value;
    switch (partnerMonth) {
        case 1:
            partnerMonth = 'January'
            break;
        case 2:
            partnerMonth = 'February'
            break;

        case 3:
            partnerMonth = 'March'
            break;

        case 4:
            partnerMonth = 'April'
            break;
        
        case 5:
            partnerMonth = 'May'
            break;
        
        case 6:
            partnerMonth = 'June'
            break;
        
        case 7:
            partnerMonth = 'July'
            break;

        case 8:
            partnerMonth = 'August'
            break;
        
        case 9:
            partnerMonth = 'September'
            break;

        case 10:
            partnerMonth = 'October'
            break;

        case 11:
            partnerMonth = 'November'
            break;
        
        case 1:
            partnerMonth = 'December'
            break;

    
        default:
            break;
    };


    ptName.innerHTML = pfName.value + '<br>'+ partnerMonth + '-' + partnerDayHold + '-' + partnerYearHold;
    
    var dayString = String(pDay.value);
    var monthString = String(pMonth.value);
    var yearString = String(pYear.value);


    var daySplit = dayString.split('');
    var monthSplit = monthString.split('');
    var yearSplit = yearString.split('');
    
    var dayNumArray = daySplit.map(str => parseInt(str));
    var monthNumArray = monthSplit.map(str => parseInt(str));
    var yearNumArray = yearSplit.map(str => parseInt(str));
       
    var sumDayArray = dayNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var sumMonthArray = monthNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var sumYearArray = yearNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    // Partner life path number 
    var sum = 0;
    mSplit = String(yearString).split('');
    var xsum = eval(mSplit.join('+'));
    sumYearArray = xsum;

    if (Number(dayString) < 10) {
        sumDayArray = Number(dayString);
    } else if (Number(dayString) === 10) {
        sumDayArray = 1;
    } else if (Number(dayString) === 20) {
        sumDayArray = 2;
    } else if (Number(dayString) === 30) {
        sumDayArray = 3;
    } else if (Number(dayString) === 11 || Number(dayString) === 22) {
        sumDayArray = Number(dayString);
    } else if (Number(dayString) > 10) {
        mSplit = String(dayString).split('');
        xsum = eval(mSplit.join('+'));
        sumDayArray = xsum
    };
    
    if (Number(monthString) < 10) {
        sumMonthArray = Number(monthString);
    } else if (Number(dayString) === 10) {
        sumMonthArray = 1;
    } else if (Number(monthString) === 11 ) {
        sumMonthArray = 11;
    } else if (Number(monthString) === 12){
        sumMonthArray = 3;
    }

    if (Number(sumYearArray) < 10) {
        sumYearArray = Number(sumYearArray);
    } else if (Number(sumYearArray) === 10) {
        sumYearArray = 1;
    } else if (Number(sumYearArray) === 11 ) {
        sumYearArray = 11;
    } else if (Number(sumYearArray) === 22){
        sumYearArray = 22;
    } else if (Number(sumYearArray) === 33){
        sumYearArray = 33;
    } else if (Number(sumYearArray) > 10) {
        mSplit = String(sumYearArray).split('');
        xsum = eval(mSplit.join('+'));
        if (xsum < 10) {
            xsum
        } else if (xsum === 10) {
            xsum = 1
        } else if (xsum === 11 || xsum === 22 || xsum === 33) {
            xsum
        } else if (xsum > 10) {
            mSplit = String(xsum).split('');
            xsum = eval(mSplit.join('+'));
        }
        sumYearArray = xsum;
    }

    // console.log(sumDayArray, sumMonthArray, sumYearArray)
    
    sum = sumDayArray + sumMonthArray + sumYearArray;
    var ddayHold = sumDayArray;
    var mmonthHold = sumMonthArray;
    var yyearHold = sumYearArray;
    var keepDay = sumDayArray;

    var lsum = sum;
    var lpHold, edHold, suHold, pnHold, nSum, dbTotalSum;
    if (sum < 10) {
        ptLPNum.innerHTML = '<b>' +sum+ '</b>';
    } else if (sum === 10) {
     ptLPNum.innerHTML = '<b> 1 </b>'
    }
    while (sum > 10) {
        if (sum === 11) {
         ptLPNum.innerHTML = '11/2';
            sum = 2;
            break
        } else if(sum === 22) {
         ptLPNum.innerHTML = '22/4';
            sum = 4;
            break;
        } else if (sum === 33) {
         ptLPNum.innerHTML = '33/6';
            sum = 6;
            break;
        } else {
            var numberString = sum.toString(); 
            var digitArray = numberString.split('').map(Number);
            numbers = digitArray.map(str => parseInt(str));     
            sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            lpHold = sum;
            if (Number(numberString) === 19){
             ptLPNum.innerHTML =  '1';
            } else if (sum === 10) {
             ptLPNum.innerHTML = '1';
            } else {
             ptLPNum.innerHTML = sum ;
            }
        }
    };

    // Birthday Number 
    var xSum;
    mSplit = String(dayString).split('');
    xSum = Number(dayString);

    if (xSum < 10) {
        sumDayArray = xSum;
    } else if (xSum === 10) {
        sumDayArray = 1;
    } else if (xSum === 13) {
        sumDayArray = '4';
    } else if (xSum === 14) {
        sumDayArray = '5';
    }else if (xSum === 16) {
        sumDayArray = '7';
    } else if (xSum === 11) {
        sumDayArray = '11/2';
    } else if (xSum === 19) {
        sumDayArray = '1';
    } else if (xSum === 22) {
        sumDayArray = '22/4';
    }else if (xSum === 33) {
        sumDayArray = '33/6';
    } else if (xSum > 10) {
        mSplit = String(xSum).split('');
        xSum = eval(mSplit.join('+'));

        if (xSum < 10) {
            xSum
        } else if (xSum === 10) {
            xSum = 1
        } else if (xSum === 11) {
            xSum = '11/2'
        } else if (xSum === 13) {
            xSum = '4';
        } else if (xSum === 14) {
            xSum = '5';
        }else if (xSum === 16) {
            xSum = '7';
        } else if (xSum === 19) {
            xSum = '1';
        } else if (xSum === 22) {
            xSum = '22/4';
        } else if (xSum === 33) {
            xSum = '33/6';
        } else if (xSum > 10) {
            mSplit = String(xSum).split('');
            xSum = eval(mSplit.join('+'));
        };
        sumDayArray = xSum;
    }

    // console.log(sumDayArray)
    if (sumDayArray === 1) {
        ptBDNum.innerHTML = '<b>1</b>';
    } else if (sumDayArray === 2) {
        ptBDNum.innerHTML = '<b>2</b>';
    } else if (sumDayArray === 3) {
        ptBDNum.innerHTML = '<b>3</b>';
    } else if (sumDayArray === 4) {
        ptBDNum.innerHTML = '<b>4</b>';
    } else if (sumDayArray === 5) {
        ptBDNum.innerHTML = '<b>5</b>';
    } else if (sumDayArray === 6) {
        ptBDNum.innerHTML = '<b>6</b>';
    } else if (sumDayArray === 7) {
        ptBDNum.innerHTML = '<b>7</b>';
    } else if (sumDayArray === 8) {
        ptBDNum.innerHTML = '<b>8</b>';
    } else if (sumDayArray === 9) {
        ptBDNum.innerHTML = '<b>9</b>';
    } else if (sumDayArray === '11/2') {
        ptBDNum.innerHTML =  '<b>11/2</b>';
    } else if (sumDayArray === '22/4') {
        ptBDNum.innerHTML = '<b>22/4</b>';
    } else if (sumDayArray === '33/6') {
        ptBDNum.innerHTML = '<b>33/6</b>';
    } else if (sumDayArray === '14/5') {
        ptBDNum.innerHTML = '<b>5</b>';
    } else if (sumDayArray === '16/7') {
        ptBDNum.innerHTML = '<b>7</b>';
    } else if (sumDayArray === '19/1') {
        ptBDNum.innerHTML = '<b>1</b>';
    };


    // Partner expression / destiny number 
    var ednfName = pfName.value.split(' ');
    var count = 0;
    var countList = [];
    var countHold = 0;
    ednfName = Array.from(ednfName);
    for (let iterate  = 0; iterate < ednfName.length; iterate++) {
        for ( let i = 0; i <= ednfName[iterate].length; i++) {
            if (String(ednfName[iterate][i]).toLowerCase() === 'a' ||  String(ednfName[iterate][i]).toLowerCase() === 'j' || String(ednfName[iterate][i]).toLowerCase() === 's' ) {
                count += 1;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'b' || String(ednfName[iterate][i]).toLowerCase() === 'k' || String(ednfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'c' || String(ednfName[iterate][i]).toLowerCase() === 'l' || String(ednfName[iterate][i]).toLowerCase() === 'u') {
                count += 3;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'd' || String(ednfName[iterate][i]).toLowerCase() === 'm' || String(ednfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'e' || String(ednfName[iterate][i]).toLowerCase() === 'n' || String(ednfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'f' || String(ednfName[iterate][i]).toLowerCase() === 'o' || String(ednfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'g' || String(ednfName[iterate][i]).toLowerCase() === 'p' || String(ednfName[iterate][i]).toLowerCase() === 'y') {
                count += 7;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'h' || String(ednfName[iterate][i]).toLowerCase() === 'q' || String(ednfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'i' || String(ednfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            }
        };

        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        count = 0;
    };

    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
    } else if (countHold === 11) {
        dbTotalSum = '11/2';
        nSum = 2
    } else if (countHold === 22) {
        dbTotalSum = '22/4';
        nSum = 4
    } else if (countHold === 33) {
        dbTotalSum = '33/6';
        nSum = 6;
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
        } else if (nSum === 11) {
            dbTotalSum = '11/2';
            nSum = 2;
        } else if (nSum === 22) {
            dbTotalSum = '22/4';
            nSum = 4;
        } else if (nSum === 33) {
            dbTotalSum = '33/6';
            nSum = 6;
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                dbTotalSum;
                nSum;
            } else if (nSum === 10) {
                dbTotalSum = 10;
                nSum = 1;
            } else if (nSum === 11) {
                dbTotalSum = '11/2';
                nSum = 2;
            } else if (nSum === 22) {
                dbTotalSum = '22/4';
                nSum = 4;
            } else if (nSum === 33) {
                dbTotalSum = '33/6';
                nSum = 6;
            } else if (nSum > 10) {
                dbTotalSum = nSum;
                dbSplit = String(dbTotalSum).split('');
                nSum = eval(dbSplit.join('+'));
            }
        }
    }
    if (dbTotalSum === 10) {
        ptEPNum.innerHTML = '<b>1</b>' ;
    } else if (dbTotalSum === 19) {
        ptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 28) {
        ptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 37) {
        ptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 46) {
        ptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 55) {
        ptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 64) {
        ptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 73) {
        ptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 82) {
        ptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === '11/2') {
        ptEPNum.innerHTML = '<b>11/2</b>';
    } else if (dbTotalSum === '22/4') {
        ptEPNum.innerHTML = '<b>22/4</b>';
    } else if (dbTotalSum === '33/6') {
        ptEPNum.innerHTML = '<b>33/6</b>';
    } else {
        ptEPNum.innerHTML = '<b>' + nSum + '</b>';
    };


    // Partner Soul Urge / Heart Desire Number 
    var suhdfName = pfName.value.split(' ');
    count = 0;
    countList = [];
    suhdfName = Array.from(suhdfName);
    countHold = 0;
    for (let iterate  = 0; iterate < suhdfName.length; iterate++) {
        for ( let i = 0; i <= suhdfName[iterate].length; i++) {
            if ( String(suhdfName[iterate][i]).toLowerCase() === 'a' ) {
                count += 1;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'u' ) {
                count += 3;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'e' ) {
                count += 5;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'o' ) {
                count += 6;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'i' ) {
                count += 9;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'y' ) {
                count += 7;
            }
            else {
                count+=0;
            }
        };
        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        count = 0;
    };
    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
        ptHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
        ptHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold === 11) {
        dbTotalSum = '11/2';
        nSum = 2
        ptHDNum.innerHTML = '<b>11/2</b>';
    } else if (countHold === 22) {
        dbTotalSum = 22;
        nSum = 4
        ptHDNum.innerHTML = '<b>22/4</b>';
    } else if (countHold === 33) {
        dbTotalSum = 33;
        nSum = 6;
        ptHDNum.innerHTML = '<b>33/6</b>';
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
            ptHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
            ptHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum === 11) {
            dbTotalSum = '11/2';
            nSum = 2;
            ptHDNum.innerHTML = '<b>11/2</b>';
        } else if (nSum === 22) {
            dbTotalSum = 22;
            nSum = 4;
            ptHDNum.innerHTML = '<b>22/4</b>';
        } else if (nSum === 33) {
            dbTotalSum = 33;
            nSum = 6;
            ptHDNum.innerHTML = '<b>33/6</b>';
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
            ptHDNum.innerHTML = '<b>' + nSum + '</b>';

            if (nSum < 10) {
                dbTotalSum;
                nSum;
                ptHDNum.innerHTML = '<b>' + nSum + '</b>';
            } else if (nSum === 10) {
                dbTotalSum = 10;
                nSum = 1;
                ptHDNum.innerHTML = '<b>' + nSum + '</b>';
            } else if (nSum === 11) {
                dbTotalSum = 11;
                nSum = 2;
                ptHDNum.innerHTML = '<b>11/2</b>';
            } else if (nSum === 22) {
                dbTotalSum = 22;
                nSum = 4;
                ptHDNum.innerHTML = '<b>22/4</b>';
            } else if (nSum === 33) {
                dbTotalSum = 33;
                nSum = 6;
                ptHDNum.innerHTML = '<b>33/6</b>';
            } else if (nSum > 10) {
                dbTotalSum = nSum;
                dbSplit = String(dbTotalSum).split('');
                nSum = eval(dbSplit.join('+'));
                ptHDNum.innerHTML = '<b>' + nSum + ' </b>';
            }
        }
    };

    // Partner personality number 
    pnfName = pfName.value.split(' ');
    count = 0;
    countList = [], countHold = 0;
    pnfName = Array.from(pnfName);
    
    for (let iterate  = 0; iterate < pnfName.length; iterate++) {
        var L = pnfName[iterate].length
        if (pnfName[iterate][L - 1] === 'y' || pnfName[iterate][L - 1] === 'Y') {
            pnfName[iterate]=(pnfName[iterate]).slice(0, -1);
        }
        for ( let i = 0; i <= pnfName[iterate].length; i++) {
            if (String(pnfName[iterate][i]).toLowerCase() === 'j' ||  String(pnfName[iterate][i]).toLowerCase() === 's'  ) {
                count += 1;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'b' || String(pnfName[iterate][i]).toLowerCase() === 'k' || String(pnfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'c' || String(pnfName[iterate][i]).toLowerCase() === 'l' ) {
                count += 3;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'd' || String(pnfName[iterate][i]).toLowerCase() === 'm' || String(pnfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'n' || String(pnfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'f' || String(pnfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'g' || String(pnfName[iterate][i]).toLowerCase() === 'p' || String(pnfName[iterate][i]).toLowerCase() === 'y'  ) {
                count += 7;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'h' || String(pnfName[iterate][i]).toLowerCase() === 'q' || String(pnfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if ( String(pnfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            } else {
                count += 0;
            }
            
        };
        // console.log(count);


        if (count < 10) {
            count;
        } else if (count === 10) {
            count = 1; 
        } else if (count === 11 || count === 22 || count === 33) {
            count;
        } else if (count > 10) {
            pnSplit = String(count).split('');
            count = eval(pnSplit.join('+'));

        }
        countHold += count;
        count = 0;
    };
    // console.log(countHold)

    if (countHold < 10) {
        countHold;
    } else if (countHold === 10) {
        countHold = 1;
    } else if (countHold === 11 || countHold === 22 || countHold === 33 || countHold === 13 || countHold === 14 || countHold === 16 || countHold === 19) {
        countHold;
    } else if (countHold > 10) {
        countHold;
        
        
    }

    // console.log(countHold)
    count = countHold;
    if (count < 10) {
        count;
        ptPNum.innerHTML = '<b>' + count + '</b>' ;
    } else if (count == 10) {
        count = 1;
        ptPNum.innerHTML = '<b>1</b>' ;
    } else if (count == 11) {
        count = 11;
        ptPNum.innerHTML = '<b>11/2</b>' ;
    } else if (count == 22) {
        count = 11;
        ptPNum.innerHTML = '<b>22/4</b>' ;
    }  else if ( count === 33) {
        count;
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        ptPNum.innerHTML = '<b>33/6</b>' ;
    } else if ( count === 13) {
        count = 13;
        sum = 4;
        ptPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 14) {
        count = 14;
        sum = 5;
        ptPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 16) {
        count = 16;
        sum = 7;
        ptPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 19) {
        count = 19;
        sum = 1;
        ptPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if (count > 10) {
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        ptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        count = sum

        if (count < 10) {
            count;
            ptPNum.innerHTML = '<b>' + count + '</b>' ;
        } else if (count == 10) {
            count = 1;
            ptPNum.innerHTML = '<b>1</b>' ;
        } else if (count == 11) {
            count = 1;
            ptPNum.innerHTML = '<b>11/2</b>' ;
        } else if (count == 22) {
            count = 1;
            ptPNum.innerHTML = '<b>22/4</b>' ;
        } else if (count === 33) {
            count;
            pnSplit = String(count).split('');
            sum = eval(pnSplit.join('+'));
            ptPNum.innerHTML = '<b>33/6</b>' ;
        } else if ( count === 13) {
            count = 13;
            sum = 4;
            ptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 14) {
            count = 14;
            sum = 5;
            ptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 16) {
            count = 16;
            sum = 7;
            ptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 19) {
            count = 19;
            sum = 1;
            ptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if (count > 10) {
            pnSplit = String(count).split('');
            sum = eval(pnSplit.join('+'));
            ptPNum.innerHTML = '<b>' +sum+ '</b>' ;
            count = sum
        }
    };

    var yLpNum = ((ytLPNum.textContent).trim()).split('/');
    yLpNum = Number(yLpNum[yLpNum.length - 1]);

    var pLpNum = ((ptLPNum.textContent).trim()).split('/');
    pLpNum = Number(pLpNum[pLpNum.length - 1]);

    var yBNum = ((ytBDNum.textContent).trim()).split('/');
    yBNum = Number(yBNum[yBNum.length - 1]);

    var pBNum = ((ptBDNum.textContent).trim()).split('/');
    pBNum = Number(pBNum[pBNum.length - 1]);

    var yENum = ((ytEPNum.textContent).trim()).split('/');
    yENum = Number(yENum[yENum.length - 1]);

    var pENum = ((ptEPNum.textContent).trim()).split('/');
    pENum = Number(pENum[pENum.length - 1]);

    var yHDNum = ((ytHDNum.textContent).trim()).split('/');
    yHDNum = Number(yHDNum[yHDNum.length - 1]);

    var pHDNum = ((ptHDNum.textContent).trim()).split('/');
    pHDNum = Number(pHDNum[pHDNum.length - 1]);

    var ypNum = ((ytPNum.textContent).trim()).split('/');
    ypNum = Number(ypNum[ypNum.length - 1]);

    var ppNum = ((ptPNum.textContent).trim()).split('/');
    ppNum = Number(ppNum[ppNum.length - 1]);

    console.log(yENum, pENum);


    if (yLpNum === pLpNum & yHDNum === pHDNum & yBNum !== pBNum & yENum !== pENum & ypNum !== ppNum) {
        percent.textContent = '70%'

    } else if (yLpNum === pLpNum & yHDNum === pHDNum & yBNum === pBNum & yENum !== pENum & ypNum !== ppNum) {
        percent.textContent = '90%'

    } else if (yLpNum === pLpNum & yHDNum === pHDNum & yBNum === pBNum & yENum !== pENum & ypNum === ppNum) {
        percent.textContent = '95%'

    } else if (yLpNum === pLpNum & yHDNum === pHDNum & yBNum === pBNum & yENum === pENum & ypNum !== ppNum) {
        percent.textContent = '95%'

    } else if (yLpNum === pLpNum & yHDNum !== pHDNum & yBNum === pBNum & yENum === pENum & ypNum === ppNum) {
        percent.textContent = '90%'

    } else if (yLpNum === pLpNum & yHDNum === pHDNum & yBNum === pBNum & yENum === pENum & ypNum === ppNum) {
        percent.textContent = '100%'

    } else if (yLpNum !== pLpNum & yHDNum === pHDNum & yBNum === pBNum & yENum === pENum & ypNum === ppNum) {
        percent.textContent = '99%';

    } else if (yLpNum !== pLpNum & yHDNum === pHDNum & yBNum === pBNum & yENum === pENum & ypNum !== ppNum) {
        percent.textContent = '70%'

    } else if (yLpNum !== pLpNum & yHDNum === pHDNum & yBNum === pBNum & yENum !== pENum & ypNum === ppNum) {
        percent.textContent = '65%'

    } else {
        percent.textContent = '0%'
    }

    var initialText = `
    <br> <br>
    <b>DEFINITION:</b> <br> <br>
    &nbsp;A twin flame, also called a mirror soul or twin soul is somebody who has the same energy frequency as us. Twin flames are one soul divided into two bodies; therefore, your twin flame is you, or half of your soul in the other person's body. The twin flame connection is designed to bring up difficulties that you need to confront and learn about during this lifetime; your twin flame may challenge you to see the real you by pointing out your strength and flaws so that you can become your best self. Twin flames have comparable interests, strengths, talents, personality characteristics, and weaknesses. They have a strong sense of completeness, accomplishment, and oneness as a group. Twin flames may have comparable life experiences and histories, allowing individuals to bond over the same tragedies or joys.
    <br> <br>
    &nbsp;Know that you can meet your twin soul anywhere in this life time. Twin souls may have unique and often challenging journeys to reunite and fulfill their spiritual purposes. They have a special connection and that their paths may involve personal growth and development. Twin flame might be born in different countries, travel to meet in other countries, and learn each other's language. In the belief system of twin souls, their union is often seen as part of a larger cosmic plan and that the idea is that their souls are destined to meet, and this meeting might involve traveling to facilitate their connection. They might meet through work, travel, social circles, or online connections.
    <br> <br>
    &nbsp;Within twin flame connections, for example, recurring numerals and synchronistic patterns like angle numbers 1111, 2222, 3333, 1212, 111, or 1010 are prevalent. These twin flame numbers give much-needed guidance and confidence, as well as guiding the two divided souls back together in the physical world.
    <br> <br>
    &nbsp;In numerology, The main analysis of who you are and what you are made of, are the five core numbers in your chart such as: the Life Path, Birthday number, Expression/Destiny, Heart's Desire/Soul Urge, and the Personality numbers. The life path numbers of twin flames might be identical or different since the life path number represents the path you’ll take in this life. If the twin flame's life path numbers are different, find the total of both twins' life path numbers by adding each twin life path number together to get a single digit. This combined life path number discloses important details about your twin flame journey.
    <br> <br>
    `

    if (yLpNum !== pLpNum) {
        var sum = Number(yLpNum) + Number(pLpNum);
        if (sum < 10) {
            sum;
        } else if (sum === 10) {
            sum = 1
        } else if (sum === 11) {
            sum = 2
        } else if (sum === 12) {
            sum = 3
        } else if (sum === 13) {
            sum = 4
        } else if (sum === 14) {
            sum = 5
        } else if (sum === 15) {
            sum = 6
        } else if (sum === 16) {
            sum = 7
        } else if (sum === 17) {
            sum = 8
        } else if (sum === 18) {
            sum = 9
        } else {
            if (sum < 10) {
                sum;
            } else if (sum === 10) {
                sum = 1
            } else if (sum === 11) {
                sum = 2
            } else if (sum === 12) {
                sum = 3
            } else if (sum === 13) {
                sum = 4
            } else if (sum === 14) {
                sum = 5
            } else if (sum === 15) {
                sum = 6
            } else if (sum === 16) {
                sum = 7
            } else if (sum === 17) {
                sum = 8
            } else if (sum === 18) {
                sum = 9
            }
        }

        if (sum === 1) {
            initialText += `
            <b>Twin Flame Life Path Number 1</b> <br<br>

            You are here to lead and set the way for others if your twin life path is a 1. Furthermore, number
            one energy must be fostered. So, determine who will be the household's leader. Be wary of
            imposing your views on others. Allow your companion to be himself or herself by remaining
            transparent and open. Be attentive to each other's needs, feelings, and goals, and work together
            toward the mutual vision of compassion, happiness, and inspiration for a healthy twin flame
            connection. Number one is associated with masculine power, beginnings, leadership,
            individualism, and self-assurance.
            <br>
            `
        } else if (sum === 2) {
            initialText += `
            <b>Twin Flame Life Path Number 2</b> <br> <br>
            Your mission as a twin flame life path 2 is to enter into your purpose of deepening connection,
            cooperation, and harmony for yourself and the planet. To attain this goal, you must keep your
            twin flame connection in a healthy and peaceful state. Know how to channel your emotions
            toward your heavenly companion for a positive purpose. Furthermore, keep in mind that your
            satisfaction is far more essential than the joy of others. The energy of number 2 is associated
            with feminine power, partnerships, relationships, teamwork, harmony, diplomacy,
            compassion, and balance. <br>
            `
        } else if (sum === 3) {
            initialText += `
            <b>Twin Flame Life Path Number 3</b> <br> <br>
            Learn to be cheerful, self-expressive, and creative if your twin life path is 3. Enjoy yourself and
            remember to pause to take a breath. You've come to accept this incredible gift of self-expression.
            Your soul's purpose is to elevate and inspire others by being cheerful, self-expressive, and
            innovative. It is critical that you devote time and effort to artistic channels for self-expression.
            Number three is mostly about youthfulness, inspiration, communication, creativity, and
            expression. <br>
            `
        } else if (sum === 4) {
            initialText += `
            <b>Twin Flame Life Path Number 4</b> <br> <br>
            You must first strengthen your personal foundation before you can walk into your spiritual life
            mission. Maintain your relationship's stability and order by remaining consistent and faithful to
            one another. Reliability, safety, hard effort, tolerance, loyalty, and realism are all represented by
            the number 4. <br>
            `
        } else if (sum === 5) {
            initialText += `
            <b>Twin Flame Life Path Number 5</b> <br> <br>
            You should have an adventurous as well as freedom-loving spirit as a twin flame life path 5.
            Keep faith in your spiritual partner and remember that you are always united. Keep personal
            space a priority in your relationship as well. Change, freedom, and diversity are all represented
            by the number 5. <br>
            `
        } else if (sum === 6) {
            initialText += `
            <b>Twin Flame Life Path Number 6</b> <br> <br>
            As a twin flame life path 6, you should learn to prioritize yourself and take very good care of
            yourself first. Concentrate on you and learn to love yourself unconditionally. Follow the paths
            that make you feel happy, fulfilled, and healed. Romance, home, family, duty, nurturing,
            stability, and balance are all represented by the number 6. <br>
            `
        } else if (sum === 7) {
            initialText += `
            <b>Twin Flame Life Path Number 7 </b> <br> <br>
            You must educate on how to be alone without feeling lonely as a 7-life path twin flame. Bring
            elements of yourself into focus, examine, cherish, and totally accept oneself. Work through and
            let go of any behaviors or routines that aren't serving your best interests. A phase of experiencing
            development is approaching, and you should take advantage of it by utilizing your connection
            with your twin flame. The number 7 denotes spiritual awakening,
            enlightenment, intelligence, intuition, spirituality, clairvoyance, analysis, investigation, and
            knowledge. <br>
            `
        } else if (sum === 8) {
            initialText += `
            <b>Twin Flame Life Path Number 8</b> <br> <br>
            Regain your power and influence by learning how to do so. Avoid giving energy leeches your
            strength. To feel empowered and joyful, you don't need anything beyond yourself. Try to
            appreciate and accept yourself as you are. The number 8 is associated with power, leadership,
            control, and prosperity. <br>

            `
        } else if (sum === 9) {
            initialText += `
            <b>Twin Flame Life Path Number 9 </b> <br> <br>
            As a twin flame life path 9, you must completely love yourself. Consider the wider view of life
            and change. Develop forgiveness, acceptance, and charity, as well as a greater knowledge of one
            another and life in general. The number 9 represents fulfillment, completion, fullness,
            humanitarian, and generosity. <br>
            `
        }
    };
    lpText.innerHTML = initialText;


    


    


})