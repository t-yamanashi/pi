using System.IO;
using System;

public class Led
{
	public static readonly string LED_DEV  = "/sys/class/gpio/";
	public static readonly int[] LED =  {18, 23, 24, 25, 8, 7, 11, 9};
	public static readonly int LED_LEN = 8;

	public void InitLed(int no)
	{
		OutFile(LED_DEV + "export", no.ToString());
		OutFile(LED_DEV + "gpio" + no.ToString() + "/direction", "out");
	}
	
	public void OutLed(int no, bool flg)
	{
		string f = flg ? "1" : "0";
		OutFile(LED_DEV + "gpio" + no.ToString() + "/value", f);
	} 

	public void InitAllLed()
	{
		for (int i = 0; i < LED_LEN; i++)
		{
			InitLed(LED[i]);
		}
	}

	public void OutAllLed(int no)
	{
		for (int i = 0; i < LED_LEN; i++)
		{
			OutLed(LED[i], 1 == ((no >> i) & 1));
		}
	}

	private void OutFile(string filename, string msg)
	{
		try{
			using(StreamWriter file = new StreamWriter(filename))
			{
				file.Write(msg);
			}
		}
		catch
		{
			Console.WriteLine("Error: File Not Open" + filename);
		}
	}

}


