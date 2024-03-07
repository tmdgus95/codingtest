function solution(n, k) {
    var answer = 0;
    var service = Math.floor(n/10)
    if(n/10 >= 1) answer =  (12000*n + 2000*k) - 2000*service
    else answer = (12000*n + 2000*k)
    return answer;
}