#!/bin/bash
 
# Define multiple network ranges
NETWORKS=("192.168.1.0/24" "192.168.10.0/24" "192.168.20.0/24" "192.168.168.100.0/24" "192.168.200.0/24" "192.168.1.190")
 
# Create/clear output files
: > active_ips.txt
: > scan_results.txt
 
echo "Scanning multiple networks for active hosts..."
 
# Loop through each network range
for NETWORK in "${NETWORKS[@]}"; do
    echo "Scanning $NETWORK..."
    nmap -sn "$NETWORK" -oG - >> scan_results.txt
done
 
# Extract active IP addresses
grep "Up" scan_results.txt | awk '{print $2}' > active_ips.txt
 
# Display active hosts
echo "Active IPs found:"
cat active_ips.txt
 
# Identify OS for each active IP
echo "Identifying system types..."
while read -r ip; do
    echo "Scanning $ip for OS detection..."
    os_info=$(nmap -O "$ip" | grep -i "OS details" | cut -d ':' -f2- | sed 's/^ *//') # Improved OS detection parsing
    if [ -z "$os_info" ]; then
        echo "$ip - OS not detected"
    else
        echo "$ip - $os_info"
    fi
done < active_ips.txt