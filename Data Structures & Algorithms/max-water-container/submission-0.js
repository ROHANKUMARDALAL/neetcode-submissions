class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let maxVolume=0;
      let  currentVolume=0
       let startPointer=0;
       let endPointer=heights.length-1;
       while(startPointer<endPointer)
       {
        if(heights[startPointer]>heights[endPointer])
        {
       currentVolume= heights[endPointer]*(endPointer-startPointer)
         if(currentVolume>maxVolume){
            maxVolume=currentVolume
            }
            endPointer--;
        }
         else{
     
       currentVolume= heights[startPointer]*(endPointer-startPointer)
         if(currentVolume>maxVolume){
            maxVolume=currentVolume
            }
            startPointer++;
        }  
       }
return maxVolume

    }
}
