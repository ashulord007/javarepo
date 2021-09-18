var start=new Date().getTime();
var best=500;
var sum=0;
var j=0;
var avg=0;
var arr=[];

		
		
			//function to generate a random color
			function getRandomColor() 
				{
					var letters = '0123456789ABCDEF';
					var color = '#';
					for (var i = 0; i < 6; i++) 
						{
							color += letters[Math.floor(Math.random() * 16)];
						}
				return color;
			}
			
			function makeShapeAppear()
			{
				
				var randomColor; 
				var heightAndWidth=(Math.random()*70)+20;
				document.getElementById("shape").style.display="block";
				document.getElementById("shape").style.top= Math.random()*400;
				document.getElementById("shape").style.left= Math.random()*400;
				document.getElementById("shape").style.backgroundColor=getRandomColor();
				document.getElementById("shape").style.height=heightAndWidth;
				document.getElementById("shape").style.width=heightAndWidth;
				if(0.5 < Math.random() )
					{
						document.getElementById("shape").style.borderRadius= "50%";
					}
				else
					{
						document.getElementById("shape").style.borderRadius= "0";
					}
				start=new Date().getTime();
			}
			
			function appearAfterDelay()
			{
				setTimeout(makeShapeAppear, Math.random()*2000);
			}
			appearAfterDelay();
			document.getElementById("shape").onclick= function()
			{
				document.getElementById("shape").style.display="none";
				var end=new Date().getTime();
				var timeTaken= (end-start)/1000;
				best=Math.min(timeTaken,best);
				arr[j]=timeTaken;
				j=j+1;
				for(var k=0;k <(arr.length);k++)
				{
					sum=sum+arr[k];
					avg=sum/arr.length;
				}
				avg=(Math.round(avg * 100) / 100).toFixed(2);
				document.getElementById("timeTaken").innerHTML=timeTaken+"sec";
				document.getElementById("besttime").innerHTML=best+"sec";
				document.getElementById("avgtime").innerHTML=avg+"sec";
				appearAfterDelay();
				
			}
