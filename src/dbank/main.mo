import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
import Text "mo:base/Text";

actor dbank{
  stable var balance=200.00;
  stable var startTime=Time.now();
  balance:=200.00;
  startTime:=Time.now();

  public func deposit(amount: Float): async Text{
    balance += amount;
    return "Deposit successful. \nCompounding complete\n Thanks for using our service."
  };

  public func withdraw(amount: Float): async Text{
    let temp =balance-amount;
    if(temp < 0.00){
      return "Insufficient balance"
    }
    else{
      balance -= amount;
      return "Withdraw successful. \nCompounding complete\n Thanks for using our service."
    };
  };

  public query func checkBalance(): async Float{
    return balance;
  };

  public func compound(){
    let currentTime=Time.now();
    let timeElapsed=(Float.fromInt((currentTime-startTime))/1000000000.00); //time elapsed in seconds
    balance *= 1.01**timeElapsed; //compound the balance at a rate = 1% per second
    startTime := currentTime;
  }
}
