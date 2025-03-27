searchState.loadedDescShard("arrow_json", 0, "Transfer data between the Arrow memory format and JSON …\nTrait declaring any type that is serializable to JSON. …\nEncode/decode structs as lists (e.g., [1, “c”])\nEncode/decode structs as objects (e.g., {“a”: 1, “b…\nSpecifies what is considered valid JSON when reading or …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConverts self into json value if its possible\nJSON reader\nJSON Writer\nA low-level interface for reading JSON data from a byte …\nReads JSON data with a known schema directly into arrow …\nA builder for <code>Reader</code> and <code>Decoder</code>\nJSON file reader that produces a serde_json::Value …\nCreate a <code>Reader</code> with the provided <code>BufRead</code>\nCreate a <code>Decoder</code>\nDecode elements from <code>tape</code> starting at the indexes …\nRead JSON objects from <code>buf</code>, returning the number of bytes …\nFlushes the currently buffered data to a <code>RecordBatch</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nTrue if the decoder is currently part way through decoding …\nInfer the fields of a JSON file by reading the first n …\nInfer the fields of a JSON file by reading all items from …\nInfer the fields of a JSON file by reading the first n …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTrue if there are no records to flush, i.e. <code>Self::len</code> is …\nThe number of unflushed records, including the partially …\nCreate a new <code>ReaderBuilder</code> with the provided <code>SchemaRef</code>\nCreate a new <code>ReaderBuilder</code> that will parse JSON values of …\nReads the next <code>RecordBatch</code> returning <code>Ok(None)</code> if EOF\nSerialize <code>rows</code> to this <code>Decoder</code>\nSets the batch size in rows to read\nSets if the decoder should coerce primitive values (bool …\nSets if the decoder should return an error if it …\nSet the <code>StructMode</code> for the reader, which determines …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA trait for JSON-specific primitive parsing logic\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nJSON file reader that produces a serde_json::Value …\nCoerce data type during inference\nReturns the argument unchanged.\nGenerate schema from JSON field names and inferred data …\nInfer the fields of a JSON file by reading the first n …\nInfer the fields of a JSON file by reading all items from …\nInfer the fields of a JSON file by reading the first n …\nCalls <code>U::from(self)</code>.\nShorthand for building list data type of <code>ty</code>\nCreates a new <code>ValueIter</code>\n<code>Serializer</code> for <code>TapeElement</code>\nA buffer of parsed string data\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOffsets into <code>data</code>\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA wrapper around a slice iterator that provides some …\nStates based on https://www.json.org/json-en.html\nThe end of a list , i.e. <code>]</code>\nThe end of an object, i.e. <code>}</code>\nA 32-bit float or the low-bits of a 64-bit float if …\nThe high bits of a 64-bit float\nA false literal\nA 32-bit signed integer\nThe high bits of a i64\nDecoding a list\nA boolean or null literal\nA null literal\nA numeric value\nDecoding an object\nThe start of a list , i.e. <code>[</code>\nThe start of an object, i.e. <code>{</code>\nA string value\nA decoded JSON tape\nImplements a state machine for decoding JSON to a tape\nWe decode JSON to a flattened tape representation, …\nA true literal\nA unicode escape sequence,\nNumber of rows to read per batch\nA buffer of parsed string data\nCreates a character from an UTF-16 surrogate pair\nClears this <code>TapeDecoder</code> in preparation to read the next …\nThe number of rows decoded, including any in progress if …\nReturns an error for a given byte <code>b</code> and context <code>ctx</code>\nReturns an error reading index <code>idx</code>\nFinishes the current <code>Tape</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the tape element at <code>idx</code>\nReturns the string for the given string index\nTrue if the decoder is part way through decoding a row. If …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nEvaluates to true if <code>b</code> is a valid JSON whitespace character\nCreate a new <code>TapeDecoder</code> with the provided batch size and …\nReturns the index of the next field at the same level as …\nEvaluates to the next element in the iterator or breaks …\nThe number of buffered rows, including the partially …\nReturns the number of rows\nOffsets into <code>data</code>\nParse a hex character to <code>u8</code>\nWrites any type that implements <code>Serialize</code> into this …\nSerialize the tape element at index <code>idx</code> to <code>out</code> returning …\nA stack of <code>DecoderState</code>\nWrites <code>c</code> as UTF-8 to <code>out</code>\nA specialized <code>ArrayDecoder</code> for timestamps\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA JSON writer which serializes <code>RecordBatch</code>es to JSON …\nA trait to format array values as JSON values\nA trait to create custom encoders for specific data types.\nConfiguration options for the JSON encoder.\nProduces JSON output as a single JSON array.\nThis trait defines how to format a sequence of JSON …\nProduces JSON output with one record per line.\nA JSON writer which serializes <code>RecordBatch</code>es to newline …\nAn encoder + a null buffer. This is packaged together into …\nA JSON writer which serializes <code>RecordBatch</code>es to a stream of\nJSON writer builder.\nCreate a new <code>Writer</code> with specified <code>JsonFormat</code> and builder …\nEncode the non-null value at index <code>idx</code> to <code>out</code>.\nAn optional hook for customizing encoding behavior.\nwrite any bytes needed for the end of each row\nwrite any bytes needed for the start of each row\nReturns <code>true</code> if this writer is configured to keep keys …\nWhether to include nulls in the output or elide them.\nFinishes the output stream. This function must be called …\nIs the writer finished?\nIs the writer finished?\nIs the writer finished?\nDetermines how the byte stream is formatted\nDetermines how the byte stream is formatted\nDetermines how the byte stream is formatted\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwraps this <code>Writer&lt;W&gt;</code>, returning the underlying writer\nMake an encoder that overrides the default encoder for a …\nCreates an encoder for the given array and field.\nCreate a new builder for configuring JSON writing options.\nConstruct a new writer\nControls how JSON should be encoded, e.g. whether to write …\nControls how JSON should be encoded, e.g. whether to write …\nControls how JSON should be encoded, e.g. whether to write …\nwrite any bytes needed for the start of each row\nwrite any bytes needed at the start of the file to the …\nHas the writer output any records yet?\nHas the writer output any records yet?\nHas the writer output any records yet?\nReturns if this writer is configured to write structs as …\nWhether to encode structs as JSON objects or JSON arrays …\nSet an encoder factory to use when creating encoders for …\nSet whether to keep keys with null values, or to omit …\nSet the <code>StructMode</code> for the writer, which determines …\nSerialize <code>batch</code> to JSON output\nSerialize <code>batches</code> to JSON output\nUnderlying writer to use to write bytes\nUnderlying writer to use to write bytes\nUnderlying writer to use to write bytes\nNew-type wrapper for encoding the binary types in arrow: …\nA trait to format array values as JSON values\nA trait to create custom encoders for specific data types.\nConfiguration options for the JSON encoder.\nA newtype wrapper around <code>ArrayFormatter</code> to keep our usage …\nAn encoder + a null buffer. This is packaged together into …\nA newtype wrapper around <code>JsonArrayFormatter</code> that skips …\nEncode the non-null value at index <code>idx</code> to <code>out</code>.\nEncode the primitive value as bytes, returning a reference …\nEncode the value at index <code>idx</code> to <code>out</code>.\nGet the optional hook for customizing encoding behavior.\nAn optional hook for customizing encoding behavior.\nGet whether to include nulls in the output or elide them.\nWhether to include nulls in the output or elide them.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns whether the encoder has any nulls.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether the value at index <code>idx</code> is null.\nThis API is only stable since 1.70 so can’t use it when …\nMake an encoder that overrides the default encoder for a …\nCreates an encoder for the given array and field.\nCreate a new encoder with a null buffer.\nGet whether to encode structs as JSON objects or JSON …\nWhether to encode structs as JSON objects or JSON arrays …\nSet an optional hook for customizing encoding behavior.\nSet whether to include nulls in the output or elide them.\nSet whether to encode structs as JSON objects or JSON …")