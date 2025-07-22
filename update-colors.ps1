$files = Get-ChildItem -Path "src\app" -Recurse -Filter "*.tsx" | Where-Object { $_.Name -eq "page.tsx" }

foreach ($file in $files) {
    Write-Host "Updating: $($file.FullName)"
    
    $content = Get-Content $file.FullName -Raw
    
    # Replace purple text colors with gray
    $content = $content -replace 'text-purple-200', 'text-gray-300'
    $content = $content -replace 'text-purple-300', 'text-gray-400'
    $content = $content -replace 'text-purple-100', 'text-gray-200'
    
    # Replace purple backgrounds with darker variants
    $content = $content -replace 'bg-purple-900', 'bg-gray-900'
    $content = $content -replace 'bg-purple-800', 'bg-gray-800'
    $content = $content -replace 'bg-purple-700', 'bg-gray-700'
    $content = $content -replace 'bg-purple-600', 'bg-gray-600'
    
    # Replace purple gradients with darker variants
    $content = $content -replace 'from-purple-950 via-indigo-900 to-purple-900', 'from-black via-gray-900 to-black'
    $content = $content -replace 'from-purple-900 via-blue-900 to-indigo-900', 'from-gray-900 via-black to-gray-800'
    $content = $content -replace 'from-purple-900/50 to-indigo-900/50', 'from-black/50 to-gray-900/50'
    $content = $content -replace 'bg-purple-900/30', 'bg-gray-900/30'
    $content = $content -replace 'bg-purple-700/50', 'bg-gray-700/50'
    $content = $content -replace 'border-purple-500/30', 'border-gray-700/30'
    
    # Replace specific purple button gradients with gray variants
    $content = $content -replace 'from-purple-600 to-indigo-600', 'from-gray-700 to-gray-800'
    $content = $content -replace 'hover:from-purple-700 hover:to-indigo-700', 'hover:from-gray-800 hover:to-gray-900'
    $content = $content -replace 'from-purple-500 to-purple-600', 'from-gray-600 to-gray-700'
    
    Set-Content -Path $file.FullName -Value $content
}

Write-Host "Color update completed for all pages!"
