
/////Moorthi Demo flickr api///////
//////http://rmoorthi.wordpress.com///////
function jsonFlickrFeed(data)
{
	console.log(data)
	var output='';
	for(var i=0;i<data.items.length;i++)
	{
		var title=data.items[i].title;
		//var link=data.items[i].media.m.substring(0,56);
		var link=data.items[i].media.m;
		output +='<li>';
		output +='<a href="#imgPreview" onclick="showdata(\''+link+'\',\''+title+'\')">';
		//output +='<img src="' + link + '_m.jpg" width="200" height="200" alt="' + title + '"/>';
		output +='<img src="' + link + '" width="200" height="200" alt="' + title + '"/>';
		output +='</a></li>';
	}
	$("#myImg").html(output);
}
function showdata(link, title)
{
	var output='<a href="#">';
	//output +='<img src="' + link + '_m.jpg" width="500" height="500" alt="' + title + '"/>';
	output +='<img src="' + link + '" width="500" height="500" alt="' + title + '"/>';
	output +='<a/>';
	$('#imgPreview').html(output);
}
