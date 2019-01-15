
define(["jquery"],function($){
	function index(){
		
			
			var count = 0;
			var timer = null;
			var oSpan = $(".ShufflingFigureBox .ShufflingFigure .ShufflingFigureBtn span");
			var aLis = $(".ShufflingFigureBox .ShufflingFigure li");
			oSpan.click(function(){
				count = $(this).index();
				tab();
			})
				function tab(){
					oSpan.attr("class","");
					oSpan.eq(count).attr("class","FigureBtn");
					if(count == oSpan.size()){
							count = 0;
							oSpan.eq(count).attr("class","FigureBtn");
							
						}
					aLis.stop().animate({"opacity":0},2000);
					aLis.eq(count).stop().animate({"opacity":1},2000,function(){
						
					});
				}
				function tm(){
					count++;
					tab();
					
				}
				timer = setInterval(tm,2000)
			
				
					
					
			
				
//		商品列表1
		$.ajax({
			type:"get",
			url:"../json/CommodityType.json",
			async:true,
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					for(var j = 0; j < arr[i].lenght; i++){
						$(`<a href="#">${arr[0][j].brand}</a>`)
					.appendTo(".title1 a")
					}
					
					
				}
			},
			error: function(msg){
				alert(msg)
			}
		});
			
		/*商品1*/
		$.ajax({
			type:"get",
			url:"../json/content1.json",
			async:true,
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`
					<li>
						<img src="${arr[i].img}" alt=""/>
					</li>`).appendTo($(".content1 ul"))
				}
			},
			error: function(msg){
				alert(msg)
			}
		});
		
	}


		
	return{
		index: index
	}
})
