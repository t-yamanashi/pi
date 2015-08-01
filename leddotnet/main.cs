using System.IO;
using System;
using System.Threading;

public class Program
{
	private static Led led;
	private static readonly int TIMER_S = 1000;
	public static void Main()
	{	
		Init();
		for (int i = 0; i < 100000; i++)
		{
			Loop();
		}
	}

	private static void Init()
	{	
		led = new Led();
		led.InitAllLed();
	}

	private static void Loop()
	{
		led.OutAllLed(0x1);
		Thread.Sleep(TIMER_S);
		led.OutAllLed(0x2);
		Thread.Sleep(TIMER_S);
	}
}


