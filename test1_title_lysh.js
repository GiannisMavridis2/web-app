var erotiseis=6; // �� ��������� ��������� ��� ����
var apan_sostes=[null,"l","n","m","k","l","k"];  // o ������� �� ��� ������ ���������� ��� ����
var sostes_apanthseis=0; // �� ������ ��� ������ ����������
var count=0; //���� ����� ��� ���������� �������� �� dom ������ ��� ������� ��� ��������� ��������...���������� ��� ������� ����� ������� ��� �������� �� html elements
var score=0;
$("#ypoboli_ap").click(lysh_test);

function lysh_test()
 {
   ap.unbind(); //remove event listener ��� ���� ���� �� ������ ��������...� ������ ���� ������ ���� ���� ������� ������� ������� �������
   
   for (var i=1;i<=erotiseis;i++)
   {
     var first_ap=$(ap[count]); 
	 // �� ap[count] ����� ��� js DOM obj linked ��� ����� �������� ��� ��������..�������� �� ���� ��� $() �� ���� Jquery js obj 
    if (apan_sostes[i]==apan_student[i])
	 {
	  sostes_apanthseis=sostes_apanthseis+1;
      first_ap.siblings(".diorthosi_sosto").show();
      first_ap.siblings(".aitiologhsh").show();	  
	  first_ap.siblings(".eik_aitiol").show(); 
	 }
	else if (apan_student[i]==null)
	 {
	   if (first_ap.hasClass('ap_true'))
	   {
	    first_ap.css({
	    'border-width':'3px',
	    'border-color':'green'
	    });
	   }
	   else
	   {
	     first_ap.siblings(".ap_true").css({
	      'border-width':'3px',
	      'border-color':'green'
	     });
	   }
	  
	  first_ap.siblings(".diorthosi_null").show();
      first_ap.siblings(".aitiologhsh").show();	  
	  first_ap.siblings(".eik_aitiol").show(); 
	 }
	else //� ������� ���� ��������� �����
	 {
	 //������� ������� �� �����
	  if (first_ap.hasClass('ap_true'))
	   {
	    first_ap.css({
		  'border-width':'3px',
	      'border-color':'green'
		});
	   }
	  else
	   {
	    first_ap.siblings(".ap_true").css({
		  'border-width':'3px',
	      'border-color':'green'
		});
	   } 
	   
	  //������� ������� �� ����� ...���� ������ ��� �������� � ������� 
	   if (first_ap.hasClass('ap_answered'))
	   {
	    first_ap.css({
		  'border-width':'3px',
	      'border-color':'red'
		});
	   }
	  else
	   {
	    first_ap.siblings(".ap_answered").css({
		  'border-width':'3px',
	      'border-color':'red'
		});
	   } 
	 
	  first_ap.siblings(".diorthosi_la8os").show();
      first_ap.siblings(".aitiologhsh").show();	  
	  first_ap.siblings(".eik_aitiol").show(); 
	 }
	 
	 //���� ��� ���� ������� �����/������� ������ ��������� �� count
	 //���� �� ������� ���� ����� �������� ��� �������� ��������
	 //������� �� �� ����� ������� ���������� ���� � ������� �� count ��������� ��������� 
	 if (first_ap.hasClass('pith_ap_2'))
	  {
	    count=count+2;
	  }
	 else
	  {
	   count=count+4;
	  }
	  
   }
   
  $("#ypoboli_ap").hide(); 
  $("#back_in_the_end").show(); 
  
  
  score=100*(sostes_apanthseis/erotiseis);
  var grade=score.toFixed(2);
  alert("Your score: " + grade + "/100");
 
 
  //�� ajax ������ score,test_id ��� ������...���� ��� php script �� � ����� ��� ����...�� user_id �� �� ����� ��� � server ��� ���� ����� login
  $.post( '/tests/b/bathmoi/bathmoi_2_db.php' , { bathmos : grade , testid: 1 }    );
   
  
  
 }
 
 