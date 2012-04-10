/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Media and the Filesystem",
		"%l_lessontitle": "Media and the Filesystem",
		"%l_subtitle": "Building Native Mobile Apps With Appcelerator Titanium",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 teaching, 30 lab)",

		"%l_agenda1": "Explore Titanium Media APIs",
		"%l_agenda2": "Leveraging media in your application",
		"%l_agenda3": "Explore Titanium Filesystem APIs",
		"%l_agenda4": "Understand how and where to store data on the filesystem",
		"%l_slidenote_agenda": "Media &mdash; will be exploring KitchenSink examples",

		"%l_audio_api": "Audio APIs",
		"%l_play_sounds": "Play sounds from local or remote files (Sound)",
		"%l_streaming_audio": "Streaming audio support (AudioPlayer)",
		"%l_audio_recording": "Audio recording support",
		"%l_demos_audio": "Demos and Code Walkthrough",

		"%l_slidenote_audio_api": "Demos in the Kitchen Sink<br><ul><li>Phone tab / Sounds / Local  (demo each button)</li><li>Sounds / Record (record with lo/hi fidelity & playback)</li></ul>Show code: examples/sound_local.js<ul><li>Show: createSound()</li><li>play(), pause(), stop() in button event handlers</li><li> looping</li></ul>",
		"%l_video_api": "Video APIs",
		"%l_play_video": "Play video from local files",
		"%l_streaming_video": "Streaming video support - HTTP Live Streaming (iOS), RTSP (Android), pseudo-streaming",
		"%l_video_capture": "Video capture support",
		"%l_demos_video": "Demos and Code Walkthrough for Local Video",
		"%l_slidenote_video_api": "Demos in the Kitchen Sink<br><ul><li>Phone tab / Play Movie / Local -- point out overlays</li><li>Phone tab / Play Movie / Remote streaming</li></ul>Show code: examples/movie_local.js<ul><li>Show: contentURL property, label overlay</li></ul>",

		"%l_still_api": "Still Image APIs",
		"%l_display_using": "Display using ImageView or backgroundImage",
		"%l_can_either": "Can either be local or remote",
		"%l_can_be": "Can be density specific in either case",
		"%l_demo_local": "Demo: Image from Local URL",
		"%l_demo_remote": "Demo: Image from Remote URL",
		"%l_demo_blob": "Demo: Image from file blob",
		"%l_slidenote_still_api": "Demos in the Kitchen Sink<br><ul><li>Base UI tab / Views / Image Views / Basic &mdash; responds to events</li><li>Remote image</li><li>Animated &mdash; array of images / flipbook effect</li></ul>Show code:<ul><li>examples/imageview_basic.js -- Show: createImageView</li><li>Examples/imageview_file.js &mdash; show image property pointing to local file</li><li>explain the flexible nature of property (accepts file path, url, file system object)</li></ul>",

		"%l_capturing_images": "Capturing Images",
		"%l_can_get": "Can get images from the device via camera or gallery",
		"%l_function_names": "Function names are different, signature the same",
		"%l_success": "<b>success:</b>called on photo retrieval",
		"%l_error": "<b>error:</b>called on a device error",
		"%l_cancel": "<b>cancel:</b>called when a user cancels photo retrieval",
		"%l_slidenote_capturing_images": "Same signature means you can use nearly identical code whether working with the camera or gallery<br>Demo notes on next slide",

		"%l_demo_photo_gallery": "Demo: Photo Gallery",
		"%l_photodemo": "From KitchenSink:<br/>Phone > Photo Gallery<br/>examples/photo_gallery.js and examples/camera_basic.js",
		"%l_slidenote_demo_photo_gallery": "** Make sure to have images pre-installed in your simulator/emulator<br>Demos in the Kitchen Sink<ul><li>Phone tab / Photo Gallery</li></ul>Show code: examples/photo_gallery.js<ul><li>createImageView (holds image), openPhotoGallery and its 3 callbacks</li><li>allowEditing and mediaTypes</li><li>imageView.image</li></ul>Show code: examples/camera_basic.js<ul><li>showCamera</li><li>image = event.media</li><li>saveToPhotoGallery and mediaTypes properties</li></ul>",

		"%l_files": "Files and the Filesystem",
		"%l_many_titanium": "Many Titanium APIs return Blob objects which point to binary data",
		"%l_these_blobs": "These blobs and other data (strings, commonly) can be written to Files",
		"%l_the_filesystem": "The filesystem is the appropriate place to store binary data",
		"%l_slidenote_files": "",

		"%l_filesystem": "Filesystem Persistence and Security",
		"%l_your_app": "Your application has limited Read/Write access to the filesystem",
		"%l_filesystem_data": "Filesystem data persists until uninstall, except temp directory",
		"%l_filesystem_locations": "Locations:",
		"%l_filesystem_resourcesDir":"<b>Ti.Filesystem.resourcesDirectory  - read-only</b>",
		"%l_filesystem_appsDir":"<b>Ti.Filesystem.applicationDataDirectory - read/write</b>",
		"%l_filesystem_tempDir": "<b>Ti.Filesystem.tempDirectory - read/write</b>",
		"%l_filesystem_extDir":"<b>Ti.Filesystem.externalStorageDirectory - read/write</b>",
		"%l_plus": "plus Ti.Filesystem.isExternalStoragePresent()",
		"%l_slidenote_filesystem": "Temp directory is wiped on reboot<br>externalStorageDirectory is Android only<br>SDK 1.8 adds iOS �do not backup� flag support for files that don't need to be synced to iCloud<br>That's a concern for iOS 5.x+ devices only (older iOS versions don't support iCloud)",

		"%l_demo_file_io": "Demo: File I/O",
		"%l_filedemo": "From KitchenSink:<br/>Persistence app",
		"%l_slidenote_demo_file_io": "Using the Persistence demo app<br>Run app in simulator, Filesystem tab<br>Reading in JSON file, parsing it to populate text fields<br>Changes to fields are saved to a file on the file system<br>Code walkthrough:	<ol><li>Open Persistence project</li><li>Open Resources/test.json and explain contents</li><li>Open Resources/filesystem.js, show:</li></ol><ol><li>Simulator special &mdash; writing to Resources directory</li><li>getFile()</li><li>JSON.parse()</li><li>Setting values of fields</li><li>Event listeners on the fields</li><li>Save button and event handler that saves the values</li></ol>",
		
		"%l_qa": "Q&A",
		"%l_slidenote_qa": "",

		"%l_images_in": "Images in Simulator Galleries",
		"%l_no_images": "No images included by default",
		"%l_open_gallery": "Open gallery in simulator, then close it",
		"%l_find_images": "Find images using simulator's web browser (e.g. Google Images search)",
		"%l_press": "Press and hold on image",
		"%l_choose": "Choose Save image",
		"%l_slidenote_images_in": "Need images in the gallery for this lab.<br>Gotcha: You might need to open the gallery first before you can save to it.",

		"%l_lab_goals": "Lab Goals",
		"%l_make": "Make TiBountyHunter capture an image (camera or gallery), and store the photo on the filesystem",
		"%l_requirements": "Requirements:",
		"%l_capture_image": "Capture an image (camera or gallery)",
		"%l_store_image": "Store image on the filesystem",
		"%l_associate_image": "Associate the image with a row in the database",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/260+Working+With+Media+and+the+File+System'>wiki.appcelerator.org/display/td/260+Working+With+Media+and+the+File+System</a>",
		"%l_slidenote_lab_goals": "Will need to uninstall app from simulator because of database changes<br>Store the path to the image in the database, not a blob<br>Get the placeholder image from the Wiki<br>Demo - <b>TiBH260</b><ul><li>Make sure to have an image in your sim's gallery</li><li>Show app in both simulator/emulator</li><li>Select a photo for a bounty and show it sticks</li></ul>",

		"%l_solution": "Solution Walkthrough",
		"%l_slidenote_solution": "Walk through &mdash; TiBH260<br><ul><li><strong>lib/db.js</strong> &mdash; new DB creation statement and new addPhoto() function</li><li><strong>ui/common/DetailWindow.js</strong> &mdash; imgView, photoButton, and its event listener</li></ul>"
	}
});
