ls
temp=$(cat approval)
echo "temp: $temp"
if [ "$temp" = "true" ]
then
	echo approved
else
	echo $temp
	echo timedout
	exit 1
fi
